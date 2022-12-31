<script>
	import { onMount } from 'svelte';
	import { Editor, rootCtx, defaultValueCtx } from '@milkdown/core';
	import { commonmark } from '@milkdown/preset-commonmark';
	import { nord } from '@milkdown/theme-nord';

	function editor(dom) {
		Editor.make()
			.config((ctx) => {
				ctx.set(rootCtx, dom);
				ctx.set(defaultValueCtx, '# Start writing!');
			})
			.use(nord)
			.use(commonmark)
			.create();
	}
</script>

<div class="h-screen bg-nord0 p-4 sm:p-8 md:p-16">
	<div class="bg-nord4 max-w-fit rounded-lg p-2 sm:text-xl md:text-2xl">21 December 2022</div>
	<div use:editor class="border-x-2 border-x-nord2 rounded mt-6" />
</div>

<style></style>
