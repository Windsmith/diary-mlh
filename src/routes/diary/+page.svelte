<script>
	import { onMount } from 'svelte';
	import { Editor, rootCtx, defaultValueCtx } from '@milkdown/core';
	import { commonmark } from '@milkdown/preset-commonmark';
	import { nord } from '@milkdown/theme-nord';

	function editor(dom) {
		Editor.make()
			.config((ctx) => {
				ctx.set(rootCtx, dom);
			})
			.use(nord)
			.use(commonmark)
			.create();
	}
</script>

<div class="h-screen" use:editor />

<style></style>
