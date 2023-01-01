<script>
	import Navbar from '../components/navbar.svelte';
</script>

<div class="flex flex-col justify-between h-screen">
	<Navbar />

	<div class="flex flex-row justify-around p-10">
		<div>
			<img alt="GIF" />
			<div class="drop-shadow p-4 italic text-xs">Have you ever</div>
		</div>
		<div>
			<img alt="GIF" />
			<div class="drop-shadow p-4  italic text-xs">Have you ever</div>
		</div>
	</div>

	<footer class="text-center text-white" style="background-color: #0a4275;">
		<div class="container p-6">
			<div class="">
				<div class="space-y-2">
					<div class="text-xl">What are you waiting for? <br /> Register for free</div>
					<button
						type="button"
						class="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
					>
						Sign up!
					</button>
				</div>
			</div>
		</div>

		<div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.2);">
			Made with love by
			<a class="text-white underline" href="https://github.com/cs-gang">CS-Gang</a>
		</div>
	</footer>
</div>
