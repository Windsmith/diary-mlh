<script>
	let curDate = new Date();
</script>

<div class="bg-nord0 h-screen p-4">
	<div class="flex flex-row justify-between">
		<input
			placeholder="Enter date to filter"
			class="rounded bg-nord-4 text-sm text-center drop-shadow-md"
		/>
		<a
			href="/diary/{curDate.getFullYear()}-{curDate.getMonth() + 1}-{curDate.getDate()}"
			class="bg-nord4 p-2 rounded text-sm active:bg-nord3 drop-shadow-md"
		>
			Today's Entry
		</a>
	</div>
	<div class="flex-col mt-8 space-y-4">
		<a
			href="/diary/{curDate.getFullYear()}-{curDate.getMonth() + 1}-{curDate.getDate()}"
			class="max-w-screen drop-shadow-2xl"
		>
			<div class="bg-nord2 p-1 text-nord5 px-5">
				{curDate.getFullYear()}-{curDate.getMonth() + 1}-{curDate.getDate()}
			</div>
			<div class="bg-nord3 p-1 text-nord4 text-xs italic px-5">Today was a great day...</div>
		</a>
	</div>
</div>
