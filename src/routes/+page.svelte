<script>
	import {
		Cpu,
		Layers,
		Image,
		Wrench,
		Globe,
		Code,
		Rocket,
		Gauge,
		Shield,
		ChevronDown
	} from 'lucide-svelte';

	import pavLogo from '$lib/images/pav.png';
	// import showcaseImg from '$lib/images/showcase.png';
	import gdxgltfImg from '$lib/images/gdx-gltf.png';
	import libgdxImg from '$lib/images/libgdx.png';
	import hybridImg from '$lib/images/hybrid.png';
	import deployImg from '$lib/images/deploy.png';
	import Showcase from '$lib/Showcase.svelte';

	const pavInfo = [
		{
			title: 'Engine Overview',
			desc: 'A lightweight yet powerful framework built on LibGDX and gdx-gltf, forming a complete modular engine.',
			icon: Cpu
		},
		{
			title: 'Architecture',
			desc: 'Uses an ECS-based design for clean data separation and easy scalability across gameplay systems.',
			icon: Layers
		},
		{
			title: 'Rendering & Assets',
			desc: 'Modern PBR rendering with seamless Blender-to-game workflows powered by gdx-gltf integration.',
			icon: Image
		},
		{
			title: 'Built-in Tools',
			desc: 'Includes PavMapEditor, PavUI, and PavPhysics for faster iteration and efficient game creation.',
			icon: Wrench
		},
		{
			title: 'Cross-Platform Deploy',
			desc: 'Export to HTML5, Windows, and Linux effortlessly — same project, zero compromises.',
			icon: Globe
		},
		{
			title: 'Low + High Level Combo',
			desc: 'Merges low-level LibGDX control with high-level tools for speed, flexibility, and optimization.',
			icon: Code
		},
		{
			title: 'Game Jam Ready',
			desc: 'Quick setup, fast build times, and easy deployment make it ideal for game jam prototypes.',
			icon: Rocket
		},
		{
			title: 'Performance',
			desc: 'Optimized rendering, minimal overhead, and resource control keep games smooth and efficient.',
			icon: Gauge
		},
		{
			title: 'Proprietary & Supported',
			desc: 'Privately developed with consistent updates and long-term support for creators and studios.',
			icon: Shield
		}
	];

	const faqs = [
		{
			question: 'Will it be open source soon?',
			answer: 'Yes — when it’s ready, after developing 2–3 full games using Pav Engine to ensure stability and polish.'
		},
		{
			question: 'Can Pav Engine export to HTML5?',
			answer: 'Absolutely. Pav Engine supports HTML5, Windows, and Linux deployment — making it perfect for web-based showcases and game jams.'
		},
		{
			question: 'Does it include built-in tools?',
			answer: 'Yes, it comes with PavMapEditor, PavUI, and PavPhysics — everything you need for smooth development right out of the box.'
		},
		{
			question: 'Who maintains Pav Engine?',
			answer: 'It’s a proprietary project maintained by Tanishq Dhote, with ongoing improvements and feature expansions planned.'
		}
	];

	let openIndex = null;

	function toggleFAQ(index) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<!-- Wrapper -->
<div class="flex w-full flex-col bg-gray-800 font-sans text-gray-300">
	<!-- HERO -->
	<div class="flex h-[100vh] flex-col">
		<div class="flex h-full w-full flex-col justify-center gap-7">
			<div
				class="mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-8 md:flex-row"
			>
				<!-- LEFT: Pav Engine Logo (50% width on desktop) -->
				<div class="flex h-1/2 w-full items-center justify-center md:h-full md:w-1/2">
					<img
						src={pavLogo}
						alt="Pav Engine Logo"
						class="w-3/4 max-w-lg object-contain md:w-full"
					/>
				</div>

				<!-- RIGHT: Title, Subtitle, Tagline, Buttons -->
				<div
					class="flex w-full flex-col items-center justify-center text-center md:w-1/2 md:items-start md:text-left"
				>
					<div class="text-6xl font-bold text-gray-50">Pav Engine</div>
					<div class="mt-3 text-2xl font-medium text-lime-500">
						Game development made effortless
					</div>
					<div class="mt-4 text-lg text-gray-300">
						Made in India 🇮🇳 • Built on gdx-gltf • Powered by LibGDX
					</div>
					<div class="mt-3 text-lg font-semibold text-gray-200">
						Pav Engine, built on LibGDX and enhanced with gdx-gltf, blends low-level
						control with high-level simplicity for lightweight game creation with
						seamless HTML, Windows, and Linux deployment — perfect for rapid prototyping
						and game jams.
					</div>
				</div>
			</div>
			<div class="flex justify-center gap-6 text-xl font-bold">
				<div
					class="cursor-pointer rounded-full border-2 border-lime-400 bg-lime-500 px-8 py-3 text-white shadow-md transition hover:scale-105"
				>
					Get Pav Engine
				</div>
				<div
					class="cursor-pointer rounded-full border-2 border-gray-600 bg-gray-700 px-8 py-3 text-gray-100 shadow-md transition hover:scale-105"
				>
					Explore Showcase
				</div>
			</div>
		</div>
	</div>

	<div class="relative flex w-full flex-col">
		<div class="flex w-full flex-col justify-between gap-4 p-5">
			<div class="text-center text-3xl font-bold">What is Pav Engine?</div>
			<!-- Grid -->
			<div class="grid grid-cols-1 justify-around gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each pavInfo as info}
					<div
						class="cursor-pointer rounded-xl border-2 border-gray-600 bg-gray-700 p-5 shadow-sm transition-all duration-200 ease-in-out hover:border-gray-500 hover:bg-gray-600 hover:shadow-md"
					>
						<div class="flex w-full flex-row items-center gap-2">
							<div
								class="flex h-8 w-8 items-center justify-center rounded-xl border border-gray-500 bg-gray-600 text-lime-400"
							>
								<svelte:component this={info.icon} size="20" />
							</div>
							<div class="text-lg font-semibold tracking-wide text-gray-100">
								{info.title}
							</div>
						</div>

						<div class="text-md mt-2 leading-relaxed text-gray-300">
							{info.desc}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- SHOWCASE -->
	<div class="relative h-[100vh] w-full">
		<Showcase></Showcase>
	</div>

	<!-- GDX-GLTF -->
	<!-- <div class="flex h-screen flex-col items-center justify-center bg-white">
		<img src={gdxgltfImg} alt="gdx-gltf" class="mb-8 w-2/3 max-w-4xl rounded-2xl shadow-md" />
		<div class="mb-4 text-4xl font-semibold">Powered by gdx-gltf</div>
		<div class="w-3/4 max-w-3xl text-center text-gray-600">
			Pav Engine uses gdx-gltf for PBR rendering, smooth animations, and modern asset pipelines
			directly from Blender.
		</div>
	</div> -->

	<!-- LIBGDX -->
	<!-- <div class="flex h-screen flex-col items-center justify-center bg-gray-50">
		<img src={libgdxImg} alt="LibGDX" class="mb-8 w-2/3 max-w-4xl rounded-2xl shadow-md" />
		<div class="mb-4 text-4xl font-semibold">Built on LibGDX</div>
		<div class="w-3/4 max-w-3xl text-center text-gray-600">
			The trusted cross-platform Java framework providing Pav Engine a solid foundation with
			multiplatform support and open-source power.
		</div>
	</div> -->

	<!-- HYBRID LAYER -->
	<!-- <div class="flex h-screen flex-col items-center justify-center bg-white">
		<img src={hybridImg} alt="Hybrid Layers" class="mb-8 w-2/3 max-w-4xl rounded-2xl shadow-md" />
		<div class="mb-4 text-4xl font-semibold">The Power of High + Low Level</div>
		<div class="w-3/4 max-w-3xl text-center text-gray-600">
			Pav Engine combines LibGDX’s low-level control with its own high-level ECS, providing both
			flexibility and performance for perfectly optimized games.
		</div>
	</div> -->

	<!-- DEPLOYMENT BENEFITS -->
	<!-- <div class="flex h-screen flex-col items-center justify-center bg-gray-50">
		<img src={deployImg} alt="Deploy" class="mb-8 w-2/3 max-w-4xl rounded-2xl shadow-md" />
		<div class="mb-4 text-4xl font-semibold">Deploy Anywhere</div>
		<div class="w-3/4 max-w-3xl text-center text-gray-600">
			Pav Engine projects run directly on HTML, Windows, and Linux — without complex setup — letting
			you share your games instantly with players everywhere.
		</div>
	</div> -->

	<div class="w-full  py-16">
		<div class="mx-auto max-w-5xl px-6">
			<div class="mb-10 text-center">
				<div class="text-3xl font-bold text-gray-200">Frequently Asked Questions</div>
				<div class="mt-2 text-md text-gray-300">Everything you need to know about Pav Engine</div>
			</div>

			<!-- FAQ Cards -->
			<div class="flex flex-col gap-4 w-2/3 mx-auto">
				{#each faqs as faq, i}
					<button
						class="cursor-pointer rounded-md border-2 border-gray-600 bg-gray-700 p-4 shadow-sm transition-all duration-200 hover:shadow-md"
						on:click={() => toggleFAQ(i)}
					>
						<div class="flex items-center justify-between">
							<div class="text-lg font-semibold text-gray-100">{faq.question}</div>
							<ChevronDown
								size="20"
								class="text-gray-200 transition-transform duration-300"
								style="transform: rotate({openIndex === i ? 180 : 0}deg);"
							/>
						</div>

						{#if openIndex === i}
							<div
								class="mt-3 text-lg text-left leading-relaxed text-gray-300 transition-all duration-300 ease-in-out"
								style="max-height: 200px; opacity: 1;"
							>
								{faq.answer}
							</div>
						{/if}
                        </button>
				{/each}
			</div>
		</div>
	</div>

	<!-- FOOTER -->
	<div class="flex h-40 flex-col items-center justify-center border-t border-gray-700">
		<div class="text-gray-200">
			© 2025 Pav Engine • Developed by Tanishq Dhote | Orbit Technologies Nagpur
		</div>
		<div class="mt-2 text-sm text-gray-300">Powered by LibGDX & gdx-gltf</div>
	</div>
</div>
