import { auth, getEntry, getAllEntries } from '../../lib/firebase';
import { DateTime } from 'luxon';
import { redirect } from '@sveltejs/kit';

export async function load() {
	// Add a specific field for today's post
	// If there was no post today, this field will be null (accordingly show a create-post button)
	if (!auth.currentUser) {
		throw redirect(307, '/');
	}
	const slug = DateTime.now().toISODate();
	let todayPost = await getEntry(slug);
	let docs = await getAllEntries();
	return {
		todayEntry: todayPost,
        entries: docs
	};
}
