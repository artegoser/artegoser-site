<script lang="ts">
	import { addAPIProvider } from '@iconify/svelte';
	import '../app.css';
	let { children } = $props();

	addAPIProvider('', {
		resources: ['https://icons.artegoser.ru']
	});
</script>

<div class="mx-auto max-w-screen-xl">
	{@render children()}
</div>
