import { redirect } from "@sveltejs/kit";
import { auth } from "../../../lib/firebase";

export async function load({ params, parent }) {
	if (!auth.currentUser) {
		throw redirect(307, '/');
	}
	let { entries } = await parent();
	let specificEntry = entries[params.slug];
	return {
		specificDate: specificEntry
	};
}
