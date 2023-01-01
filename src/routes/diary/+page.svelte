<script>
	import Navbar from '../../components/navbar.svelte';
	import Entry from '../../components/entry.svelte';
	export let data;
	let curDate = new Date();
</script>

<Navbar />
<div class="bg-nord0 h-screen p-4 sm:p-6">
	<input
		placeholder="Enter date to filter"
		class="rounded bg-nord-4 text-base p-1 m-auto flex sm:text-lg text-center drop-shadow-md"
	/>
	<a
		href="/diary/{curDate.getFullYear()}-{curDate.getMonth() + 1}-{curDate.getDate()}"
		class="bg-nord4 p-4 m-4 rounded text-xl sm:text-3xl sm:p-8 md:py-12 active:bg-nord3 drop-shadow-md block text-center"
	>
		Today's Entry
	</a>
	<div class="flex-col flex mt-4 sm:flex-row sm:flex-wrap sm:space-x-15">
		<Entry />
	</div>
</div>
