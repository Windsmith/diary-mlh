<script>
	import Navbar from '../../components/navbar.svelte';
	import Entry from '../../components/entry.svelte';
	export let data;
	const temp_data = [
		{
			content: 'Good Day',
			date: new Date()
		},
		{
			content: 'Bad Day',
			date: new Date()
		},
		{
			content: 'Day',
			date: new Date()
		}
	];

	let filteredData = temp_data;

	let curDate = new Date();
</script>

<Navbar />
<div class="bg-nord4 h-screen p-4 sm:p-6">
	<input
		placeholder="Enter date to filter"
		class="rounded bg-nord-4 text-base p-1 m-auto flex sm:text-lg text-center drop-shadow-md"
	/>
	<a
		href="/diary/{curDate.getFullYear()}-{curDate.getMonth() + 1}-{curDate.getDate()}"
		class="bg-nord14 p-4 m-4 rounded text-xl text-nord1 sm:text-3xl sm:p-8 md:py-12 drop-shadow-md block text-center"
	>
		Today's Entry
	</a>
	<div class="flex-col flex mt-4 sm:flex-row sm:flex-wrap sm:space-x-15">
		<a href="/diary/2022-12-12" class="drop-shadow-2xl block sm:w-fit mx-6 my-2">
			<div class="bg-nord2 p-1 text-nord5 px-5 sm:text-xl sm:p-3 sm:px-8 sm:text-center md:px-5">
				2022-12-12
			</div>
			<div
				class="bg-nord3 p-1 text-nord4 text-xs italic px-6 sm:text-base sm:p-2 sm:px-8 md:px-5 md:text-base"
			>
				Top 10 anime battles ...
			</div>
		</a>

		<a href="/diary/2022-12-14" class="drop-shadow-2xl block sm:w-fit mx-6 my-2">
			<div class="bg-nord2 p-1 text-nord5 px-5 sm:text-xl sm:p-3 sm:px-8 sm:text-center md:px-5">
				2022-12-14
			</div>
			<div
				class="bg-nord3 p-1 text-nord4 text-xs italic px-6 sm:text-base sm:p-2 sm:px-8 md:px-5 md:text-base"
			>
				At university ...
			</div>
		</a>

		<a href="/diary/2022-12-20" class="drop-shadow-2xl block sm:w-fit mx-6 my-2">
			<div class="bg-nord2 p-1 text-nord5 px-5 sm:text-xl sm:p-3 sm:px-8 sm:text-center md:px-5">
				2022-12-20
			</div>
			<div
				class="bg-nord3 p-1 text-nord4 text-xs italic px-6 sm:text-base sm:p-2 sm:px-8 md:px-5 md:text-base"
			>
				Today was a good day ...
			</div>
		</a>
	</div>
</div>
