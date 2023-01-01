<script>
  import Navbar from "../../components/navbar.svelte";
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
		<a
			href="/diary/{curDate.getFullYear()}-{curDate.getMonth() + 1}-{curDate.getDate()}"
			class="drop-shadow-2xl block sm:w-fit mx-6 my-2"
		>
			<div class="bg-nord2 p-1 text-nord5 px-5 sm:text-xl sm:p-3 sm:px-8 sm:text-center md:px-5">
				{curDate.getFullYear()}-{curDate.getMonth() + 1}-{curDate.getDate()}
			</div>
			<div
				class="bg-nord3 p-1 text-nord4 text-xs italic px-6 sm:text-base sm:p-2 sm:px-8 md:px-5 md:text-base"
			>
				Today was a great day...
			</div>
		</a>
		<a
			href="/diary/{curDate.getFullYear()}-{curDate.getMonth() + 1}-{curDate.getDate()}"
			class="drop-shadow-2xl block sm:w-fit mx-6 my-2"
		>
			<div class="bg-nord2 p-1 text-nord5 px-5 sm:text-xl sm:p-3 sm:px-8 sm:text-center md:px-5">
				{curDate.getFullYear()}-{curDate.getMonth() + 1}-{curDate.getDate()}
			</div>
			<div
				class="bg-nord3 p-1 text-nord4 text-xs italic px-6 sm:text-base sm:p-2 sm:px-8 md:px-5 md:text-base"
			>
				Today was a great day...
			</div>
		</a>
		<a
			href="/diary/{curDate.getFullYear()}-{curDate.getMonth() + 1}-{curDate.getDate()}"
			class="drop-shadow-2xl block sm:w-fit mx-6 my-2"
		>
			<div class="bg-nord2 p-1 text-nord5 px-5 sm:text-xl sm:p-3 sm:px-8 sm:text-center md:px-5">
				{curDate.getFullYear()}-{curDate.getMonth() + 1}-{curDate.getDate()}
			</div>
			<div
				class="bg-nord3 p-1 text-nord4 text-xs italic px-6 sm:text-base sm:p-2 sm:px-8 md:px-5 md:text-base"
			>
				Today was a great day...
			</div>
		</a>
		<a
			href="/diary/{curDate.getFullYear()}-{curDate.getMonth() + 1}-{curDate.getDate()}"
			class="drop-shadow-2xl block sm:w-fit mx-6 my-2"
		>
			<div class="bg-nord2 p-1 text-nord5 px-5 sm:text-xl sm:p-3 sm:px-8 sm:text-center md:px-5">
				{curDate.getFullYear()}-{curDate.getMonth() + 1}-{curDate.getDate()}
			</div>
			<div
				class="bg-nord3 p-1 text-nord4 text-xs italic px-6 sm:text-base sm:p-2 sm:px-8 md:px-5 md:text-base"
			>
				Today was a great day...
			</div>
		</a>
	</div>
</div>
