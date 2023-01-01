import { redirect } from "@sveltejs/kit";
import { signInEmail } from "../../lib/firebase";

export const actions = {
    default: async ({ request }) => {
        // Log the user in and redirect to /diary
        const data = await request.formData();
        const email = data.get("email");
        const pw = data.get("password");
        await signInEmail(email, pw);
        throw redirect(307, "/diary");
    }
}