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
		ChevronDown,
		Github,
		Users ,
		Twitter,
		Linkedin,
		Youtube,
        Gamepad

	} from 'lucide-svelte';

	import pavLogo from '$lib/images/pav.png';
	// import showcaseImg from '$lib/images/showcase.png';
	// import gdxgltfImg from '$lib/images/gdx-gltf.png';
	// import libgdxImg from '$lib/images/libgdx.png';
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

	const socials = [
		{
			name: 'GitHub',
			icon: Github,
			link: 'https://github.com/ptsdpatient'
		},{
			name: 'Itch io',
			icon: Gamepad,
			link: 'https://discord.gg/SYqjPeWk'
		},
		{
			name: 'Discord',
			icon: Users,
			link: 'https://discord.gg/SYqjPeWk'
		},
		{
			name: 'YouTube',
			icon: Youtube,
			link: 'https://www.youtube.com/@ptsdpatient'
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

	const deps = [
		{
			name: 'LibGDX',
			desc: 'Cross-platform Java game development framework (OpenGL-based) used as the core runtime and low-level API.',
			github: 'https://github.com/libgdx/libgdx',
			icon: '/libgdx.png'
		},
		{
			name: 'gdx-gltf (mgsx-dev)',
			desc: 'gdx-gltf adds GLTF 2.0 support and PBR rendering for LibGDX, enabling modern Blender→game workflows.',
			github: 'https://github.com/mgsx-dev/gdx-gltf',
			icon: '/gdx-gltf.png'
		},
		{
			name: 'Maven / Gradle',
			desc: 'Dependency & build tooling commonly used to fetch and manage LibGDX and gdx-gltf artifacts in Java projects.',
			github: 'https://search.maven.org/',
			icon: '/maven.png'
		}
	];

	let openIndex = null;

	function scrollToTop(id) {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	function toggleFAQ(index) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<!-- Wrapper -->
<div class="flex w-full flex-col bg-gray-800 font-sans text-gray-300">
	<!-- HERO -->
	<div class="flex md:h-[100vh] w-full flex-col">
		<div class="flex h-full w-full flex-col justify-center gap-7">
			<div
				class="mx-auto flex w-full max-w-7xl flex-col items-center justify-between md:px-8 md:flex-row"
			>
				<!-- LEFT: Pav Engine Logo (50% width on desktop) -->
				<div class="flex h-1/2 w-full items-center justify-center md:h-full md:w-1/2">
					<img
						src={pavLogo}
						alt="Pav Engine Logo"
						class="w-4/5 max-w-lg object-contain md:w-full"
					/>
				</div>

				<!-- RIGHT: Title, Subtitle, Tagline, Buttons -->
				<div
					class="flex w-full flex-col items-center justify-center text-center md:w-1/2 md:items-start md:text-left"
				>
					<div class="text-6xl font-bold text-gray-50">Pav Engine</div>
					<div class="md:mt-3 mt-6 text-2xl font-medium text-lime-500">
						Game development made effortless
					</div>
					<div class="mt-4 text-lg text-gray-300 md:px-0 px-6">
						Made in India 🇮🇳 • Built on gdx-gltf • Powered by LibGDX
					</div>
					<div class="mt-3 text-lg font-semibold text-gray-200 md:px-0 px-6">
						Pav Engine, built on LibGDX and enhanced with gdx-gltf, blends low-level
						control with high-level simplicity for lightweight game creation with
						seamless HTML, Windows, and Linux deployment — perfect for rapid prototyping
						and game jams.
					</div>
				</div>
			</div>
			<div class="flex md:flex-row flex-col justify-center gap-6 text-xl font-bold md:px-0 px-8">
				<button
					on:click={() => {
						window.location="/docs"
					}}
					class="cursor-pointer rounded-full border-2 border-lime-400 bg-lime-500 px-8 py-3 text-white shadow-md transition hover:scale-105"
				>
					Documentation
				</button>
				<button
					on:click={() => {
						scrollToTop('showcase');
					}}
					class="cursor-pointer rounded-full border-2 border-gray-600 bg-gray-700 px-8 py-3 text-gray-100 shadow-md transition hover:scale-105"
				>
					Explore Showcase
				</button>
			</div>
		</div>
	</div>

	<div id="info" class="relative flex w-full flex-col md:mt-0 mt-5">
		<div class="flex w-full flex-col justify-between gap-4 p-5">
			<div class="text-center md:text-3xl text-4xl font-bold">What is Pav Engine?</div>
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
	<div id="showcase" class="relative h-[100vh] w-full">
		<Showcase></Showcase>
	</div>

	<!-- Dependencies Widget -->
	<div class="w-full py-12">
		<div class="mx-auto max-w-6xl px-6">
			<!-- header -->
			<div class="mx-auto mb-8 flex items-center">
				<div class="flex items-center gap-4">
					<img
						src="/pav.png"
						alt="Pav Logo"
						class="h-14 w-16 rounded-lg drop-shadow-sm"
					/>
					<div class="flex flex-col">
						<div class="text-3xl font-bold text-gray-100">Key Dependencies</div>
						<div class="mt-1 text-xl text-gray-300">
							Core libraries used by Pav Engine and where to find their source.
						</div>
					</div>
				</div>
			</div>

			<!-- grid -->
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each deps as d}
					<div
						class="rounded-2xl border-2 border-gray-600 bg-gray-700 p-5 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md"
					>
						<div class="flex items-start gap-4">
							<!-- icon (replace with your hosted icon files) -->

							<div class="flex-1">
								<div class="flex flex-row items-center gap-3">
									<img
										src={d.icon}
										alt="{d.name} icon"
										class="h-12 w-12 rounded-lg object-contain"
									/>
									<div class="text-lg font-semibold text-gray-100">{d.name}</div>
								</div>

								<div class="text-md mt-2 leading-relaxed text-gray-300">
									{d.desc}
								</div>

								<!-- Github url shown as copyable text (no <a> tag) -->
								<div class="mt-3">
									<div class="text-sm text-gray-300">Source</div>
									<div
										class="mt-1 rounded-md border border-gray-500 bg-gray-600 px-3 py-2 text-sm break-words text-blue-300 select-all"
									>
										{d.github}
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>



	<div class="w-full py-16">
		<div class="mx-auto max-w-5xl px-6">
			<div class="mb-10 text-center">
				<div class="text-3xl font-bold text-gray-200">Frequently Asked Questions</div>
				<div class="text-md mt-2 text-gray-300">
					Everything you need to know about Pav Engine
				</div>
			</div>

			<!-- FAQ Cards -->
			<div class="mx-auto flex md:w-2/3 flex-col gap-4">
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
								class="mt-3 text-left text-lg leading-relaxed text-gray-300 transition-all duration-300 ease-in-out"
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

	<div id="socials" class="w-full  py-12">
		<div class="mx-auto max-w-5xl px-6">
			<div class="mb-8 text-center">
				<div class="text-4xl font-bold text-gray-200">Connect with us</div>
				<div class="mt-1 text-md text-gray-300">Follow Pav Engine on these platforms</div>
			</div>

			<div class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
				{#each socials as social}
					<button
						class="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-gray-600 bg-gray-700 p-4 shadow-sm transition-all duration-200 hover:shadow-md"
						on:click={() => window.open(social.link, '_blank')}
					>
						<div class="mb-3 rounded-full border-2 border-gray-600 bg-gray-700 p-4 text-lime-500">
							<svelte:component this={social.icon} size="32" />
						</div>
						<div class="text-xl font-semibold text-gray-200">{social.name}</div>
					</button>
				{/each}
			</div>
		</div>
	</div>

	<!-- FOOTER -->
	<div class="flex h-40 flex-col items-center justify-center border-t border-gray-700">
		<div class="text-gray-200 text-center">
			© 2025 Pav Engine • Developed by Tanishq Dhote | Orbit Technologies Nagpur
		</div>
		<div class="mt-5 text-sm text-gray-300">Powered by LibGDX & gdx-gltf</div>
	</div>
</div>
