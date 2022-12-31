import { initializeApp } from 'firebase/app';
import {
	getAuth,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithPopup,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';
import {
	doc,
	setDoc,
	getFirestore,
	Timestamp,
	updateDoc,
	serverTimestamp,
	deleteDoc,
	getDoc,
	getDocs,
	collection,
	query,
	orderBy
} from 'firebase/firestore';
import { readable } from 'svelte/store';
import { DateTime } from 'luxon';

const firebaseConfig = {
	apiKey: 'AIzaSyDI8wJPHFb_5uwWhXfIbqnsZAB7IdJPXYo',
	authDomain: 'diary-586e3.firebaseapp.com',
	projectId: 'diary-586e3',
	storageBucket: 'diary-586e3.appspot.com',
	messagingSenderId: '178230792846',
	appId: '1:178230792846:web:80219379f44b09151defdf',
	measurementId: 'G-MXQC2V8ZZR'
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

// set user store on auth state changes
export const userStore = readable(null, (set) => {
	onAuthStateChanged(auth, (user) => {
		console.log(`user logged in ${user}`);
		if (user) {
			set(user);
		} else {
			set(null);
		}
	});
	return function stop() {
		set(null);
	};
});

export async function createUserEmailPw(name, email, pw) {
	// Create a user on Firebase Auth with email and password, then add
	// their details to our database.
	const credential = await createUserWithEmailAndPassword(auth, email, pw);
	const ref = doc(db, 'users', credential.user.uid);
	await setDoc(ref, {
		name: name,
		createdAt: Timestamp.fromDate(DateTime.now().setZone('utc').toJSDate())
	});
}

export async function createUserGoogleSignIn() {
	// Create a user on Firebase Auth with Gmail sign-up, and add their
	// details to our database.
	const provider = new GoogleAuthProvider();
	const credential = await signInWithPopup(auth, provider);
	const ref = doc(db, 'users', credential.user.uid);
	await setDoc(
		ref,
		{
			name: credential.user.displayName,
			createdAt: Timestamp.fromDate(DateTime.now().setZone('utc').toJSDate())
		},
		{ merge: true }
	);
}

export async function signInEmail(email, pw) {
	// Signs an existing user in with email and password.
	let cred = await signInWithEmailAndPassword(auth, email, pw);
	console.log(cred.user);
}

export async function signInGmail() {
	// Signs an existing user in with Gmail auth.
	const provider = new GoogleAuthProvider();
	await signInWithPopup(auth, provider);
}

export async function signOutUser() {
	// Signs out the current user.
	await signOut(auth);
}

export async function createEntryForToday(content) {
	// Create a new entry for the current time (in the USER's local time)
	if (!auth.currentUser) {
		throw new Error('Cannot create post without signing in first.');
	}
	const slug = DateTime.now().toISODate();
	const ref = doc(db, 'users', auth.currentUser.uid, 'entries', slug);
	await setDoc(ref, {
		date: Timestamp.fromDate(DateTime.now().startOf('day').toJSDate()), //  in case we need to query on it later.
		updatedAt: Timestamp.fromDate(DateTime.now().setZone('utc').toJSDate()),
		content: content
	});
}

export async function updateEntry(date, content) {
	// Update entry for a specified date
	if (!auth.currentUser) {
		throw new Error('Cannot update post without signing in first.');
	}
	const ref = doc(db, 'users', auth.currentUser.uid, 'entries', date);
	await updateDoc(ref, {
		content: content,
		updatedAt: serverTimestamp()
	});
}

export async function deleteEntry(date) {
	// Delete entry for a specified date.
	if (!auth.currentUser) {
		throw new Error('Cannot delete post without signing in first.');
	}
	const ref = doc(db, 'users', auth.currentUser.uid, 'entries', date);
	await deleteDoc(ref);
}

export async function getEntry(date) {
	if (!auth.currentUser) {
		throw new Error('Cannot get post witout signing in first.');
	}
	const ref = doc(db, 'users', auth.currentUser.uid, 'entries', date);
	const snap = await getDoc(ref);
	if (!snap.exists()) {
		return null;
	} else {
		return snap.data();
	}
}

export async function getAllEntries() {
	if (!auth.currentUser) {
		throw new Error('Cannot get posts without signing in first.');
	}
	const q = query(
		collection(db, 'users', auth.currentUser.uid, 'entries'),
		orderBy('date', 'desc')
	);
	const snap = await getDocs(q);
	let datemap = new Map();
	snap.forEach((doc) => {
		const date = doc.data.date;
		const slug = DateTime.fromJSDate(date, { zone: 'utc' }).toISODate();
		datemap[slug] = doc.data;
	});
	return datemap;
}
