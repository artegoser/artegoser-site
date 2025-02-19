<script lang="ts">
	import Icon from '@iconify/svelte';

	export let href: string;
	export let icon: string;
	export let size: number = 32;
</script>

<a {href} class="transition ease-in-out hover:scale-125">
	<Icon {icon} width={size} height={size} />
</a>
