import { auth, getEntry } from '../../lib/firebase';
import { DateTime } from 'luxon';

export async function load() {
	// Add a specific field for today's post
	// If there was no post today, this field will be null (accordingly show a create-post button)
	const slug = DateTime.now().toISODate();
	let todayPost = await getEntry(slug);
	return {
		todayEntry: todayPost
	};
}
