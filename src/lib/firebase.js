import { initializeApp } from 'firebase/app';
import {
	getAuth,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithPopup,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';
import {
	doc,
	setDoc,
	getDoc,
	getFirestore,
	Timestamp,
	updateDoc,
	serverTimestamp,
	deleteDoc
} from 'firebase/firestore';
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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();


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
	await signInWithEmailAndPassword(auth, email, pw);
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

export async function getUsername() {
	if (!auth.currentUser) {
		throw new Error('User not signed in');
	}
	let ref = doc(db, "users", auth.currentUser.uid);
	let data = await getDoc(ref);
	return data.get("name");
}