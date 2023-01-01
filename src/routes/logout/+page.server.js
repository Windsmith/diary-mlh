import { redirect } from "@sveltejs/kit";
import { signOutUser } from "../../lib/firebase";

export const actions = {
    default: async ({ request }) => {
        // Log the user out and redirect to landing page
        await signOutUser();
        throw redirect(307, "/");
    }
}