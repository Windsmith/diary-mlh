<script>
    import {signInEmail} from '../lib/firebase';
    async function onclick() {
        await signInEmail('abc@def.com', 'password');
        console.log('clicked');
    }
</script>

<h1 class="text-7xl">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/diary" on:click={onclick}>CLICK THIS TWICE TO SIGN IN WITH DUMMY AND GO TO /diary</a>