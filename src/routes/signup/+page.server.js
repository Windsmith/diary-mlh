import { redirect } from "@sveltejs/kit";
import { createUserEmailPw } from "../../lib/firebase";

export const actions = {
    default: async ({ request }) => {
        // Log the user in and redirect to /diary
        const data = await request.formData();
        const name = data.get("name");
        const email = data.get("email");
        const pw = data.get("password");
        await createUserEmailPw(name, email, pw);
        throw redirect(307, "/diary");
    }
}