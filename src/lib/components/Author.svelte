<script lang="ts">
  export let date: string, readingTime: string;
  import { Avatar } from "@skeletonlabs/skeleton";
</script>

<Avatar
  src="https://avatars.githubusercontent.com/u/59178854?v=4"
  width="w-8"
  rounded="rounded-full"
/>
<div class="name font-bold ml-2">Artegoser</div>
<span class="mx-3 font-bold text-slate-500 md:block">·</span>
<span class="font-bold text-slate-500">{readingTime}</span>
<span class="mx-3 font-bold text-slate-500 md:block">·</span>
<span class="font-bold text-slate-500"
  >{new Date(date).toLocaleDateString()}</span
>
