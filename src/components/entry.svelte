<script>
	let curDate;
	let info;
</script>

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
		{info}
	</div>
</a>
