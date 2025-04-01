<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Ico from '$lib/components/Ico.svelte';
	import IcoLnk from '$lib/components/IcoLnk.svelte';
	import ImgLnk from '$lib/components/ImgLnk.svelte';
</script>

<Header text="ПОРТФОЛИО" />

<svelte:head>
	<meta name="description" content="Fullstack разработчик. Rust, Typescript, JavaScript, Svelte" />
</svelte:head>

<div class="mx-8 my-2 flex flex-col items-center gap-8 max-sm:mx-2">
	<div class="flex w-full max-w-lg items-center justify-center">
		<img src="/logo.svg" alt="logo" class="main-ico animate-float glow w-full" />
		<div class="flex flex-col items-start justify-center gap-2">
			<div class="big-text">ARTEGOSER</div>
			<div class="text-lg font-semibold text-zinc-400">
				Гений, миллиардер, плейбой, филантроп и просто Fullstack разработчик.
			</div>
			<div class="flex gap-2">
				<IcoLnk href="https://github.com/artegoser" icon="bxl:github" />
				<IcoLnk href="https://t.me/artegosr" icon="bxl:telegram" />
			</div>
		</div>
	</div>
	<div class="flex max-w-lg flex-col items-center gap-4">
		<div class="big-text">Проекты</div>
		<div class="flex flex-wrap items-center justify-center gap-4">
			<ImgLnk href="https://arifmera.ru" src="/static/arifmera.png" />
			<ImgLnk href="https://github.com/TempoWorks/txtdot" src="/static/txtdot.png" />
		</div>
	</div>
	<div class="flex max-w-lg flex-col items-center gap-4">
		<div class="big-text">Стек</div>
		<div class="flex flex-wrap items-center justify-center gap-2">
			<Ico ico="skill-icons:rust" />
			<Ico ico="skill-icons:typescript" />
			<Ico ico="skill-icons:javascript" />
			<Ico ico="skill-icons:python-dark" />
			<Ico ico="skill-icons:svelte" />
			<Ico ico="skill-icons:html" />
			<Ico ico="skill-icons:css" />
			<Ico ico="skill-icons:tailwindcss-dark" />
			<Ico ico="skill-icons:vite-dark" />
			<Ico ico="skill-icons:rollupjs-dark" />
			<Ico ico="skill-icons:electron" />
			<Ico ico="skill-icons:tauri-dark" />
			<Ico ico="skill-icons:nodejs-dark" />
			<Ico ico="skill-icons:prisma" />
			<Ico ico="skill-icons:cloudflare-dark" />
			<Ico ico="skill-icons:git" />
			<Ico ico="skill-icons:github-dark" />
			<Ico ico="skill-icons:nginx" />
			<Ico ico="skill-icons:mongodb" />
			<Ico ico="skill-icons:postgresql-dark" />
			<Ico ico="skill-icons:docker" />
			<Ico ico="skill-icons:vscode-dark" />
			<Ico ico="simple-icons:fastify" />
			<Ico ico="simple-icons:socketdotio" />
		</div>
	</div>
</div>
