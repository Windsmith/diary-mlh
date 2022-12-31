import { auth, getAllEntries } from '../../lib/firebase';
import { redirect } from '@sveltejs/kit';

export async function load() {
	// load all entries the user has written
	// this will then be passed on to all child pages, allowing us to just
	// load everything once
	if (!auth.currentUser) {
		return redirect(307, '/');
	}
	let docs = await getAllEntries();
	return {
		entries: docs
	};
}
