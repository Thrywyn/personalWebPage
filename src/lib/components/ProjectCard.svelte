<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { stringify } from 'postcss';

	const imagesLocation = '/images/';

	export let title: string;
	export let appStack: string;
	export let desciptionShort: string;
	export let imageShowCaseUrl: string | undefined = undefined;
	export let siteUrl: string | undefined = undefined;
	export let githubUrl: string | undefined = undefined;
	export let deployedUrl: string | undefined = undefined;
	export let footerText: string | undefined = '';

	if (siteUrl == undefined) {
		if (deployedUrl != undefined) {
			siteUrl = deployedUrl;
		} else if (githubUrl != undefined) {
			siteUrl = githubUrl;
		}
	}
</script>

<div class="card card-hover overflow-hidden flex flex-col">
	<a href={siteUrl} class="grow">
		<header>
			<img
				src={imageShowCaseUrl}
				class="bg-black/50 w-full aspect-[21/9] object-cover object-left"
				alt="Post"
			/>
		</header>
		<div class="p-4">
			<div class="mb-2">
				<h3 class="h3" data-toc-ignore>{title}</h3>
				<code class="code">{appStack}</code>
			</div>
			<article>
				<p>
					{desciptionShort}
				</p>
			</article>
		</div>
	</a>
	<hr class="opacity-50" />
	<footer class="p-4 flex justify-start items-center space-x-4">
		{#if githubUrl != undefined || githubUrl != null}
			<a href={githubUrl}><i class="fa-brands fa-github fa-xl" /></a>
		{/if}
		<div class="flex-auto flex justify-between items-center">
			<h6 class="font-bold">{footerText}</h6>
		</div>
	</footer>
</div>
