import { redirect } from "@sveltejs/kit";
import { auth, userStore } from "../../../lib/firebase";

export async function load({ params, parent }) {
	let user = null;
	userStore.subscribe((value) => {
		user = value;
	})
	console.log(`in slug page js, user is ${auth.currentUser}`);
	if (!user) {
		throw redirect(307, '/');
	}
	let { entries } = await parent();
	let specificEntry = entries[params.slug];
	return {
		specificDate: specificEntry
	};
}
