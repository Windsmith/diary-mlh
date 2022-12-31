<script>
	let curDate = new Date();
</script>

<div class="bg-nord0 h-screen p-4">
	<div class="flex flex-row justify-between">
		<input placeholder="Enter date to filter" class="rounded bg-nord-4 text-sm text-center" />
		<a
			href="/diary/{curDate.getFullYear()}-{curDate.getMonth() + 1}-{curDate.getDate()}"
			class="bg-nord4 p-2 rounded text-sm active:bg-nord3"
		>
			Today's Entry
		</a>
	</div>
</div>
