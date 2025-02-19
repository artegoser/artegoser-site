<script lang="ts">
	import Icon from '@iconify/svelte';

	export let ico: string;
</script>

<div class="transition ease-in-out hover:scale-110">
	<Icon icon={ico} width="64" height="64" />
</div>
