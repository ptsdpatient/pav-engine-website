<script>
	const showcases = [
		{
			title: 'ClankerBanger',
			img: '/clankerbanger.png',
			link: 'https://tanishqdhote.itch.io/clanker-banger'
		},
		{
			title: 'wadw',
			img: '/clankerbanger.png',
			link: 'https://tanishqdhote.itch.io/clanker-banger'
		},
		{
			title: 'xxcxz',
			img: '/clankerbanger.png',
			link: 'https://tanishqdhote.itch.io/clanker-banger'
		}
	];

    

	let current = 0;

	function prev() {
		current = (current - 1 + showcases.length) % showcases.length;
	}

	function next() {
		current = (current + 1) % showcases.length;
	}

	function goTo(index) {
		current = index;
	}
</script>

<div class="flex h-full w-full flex-col py-4">
	<div class=" py-2 text-center text-gray-300 mb-2 text-4xl font-bold">Games made with PavEngine</div>

	<div class="relative flex w-full flex-grow flex-col items-center mt-2">
		<div class="relative flex h-full w-full flex-col">
			<div class="relative  flex h-full w-full flex-row gap-3 overflow-hidden">
				{#each showcases as _, i}
					<div
						class="absolute top-0 flex min-w-[100vw] h-full  flex-row justify-center"
						style="left: {(i - current) * 100}vw; transition: left 0.7s ease-in-out;"
					>
						<div
							class="relative flex aspect-[5/3]  h-full flex-col items-center gap-2 "
						>
                        
							<img class="rounded-xl h-full w-full border-2 border-gray-600" src={_.img} alt="" />
							<div
								class="absolute top-0 left-0 flex h-full w-full flex-col justify-between  py-3"
							>
								<div
									class="mx-auto w-1/3 rounded-xl  px-3 py-2 text-center text-3xl text-shadow-xl  font-semibold text-white"
								>
									{_.title}
								</div>

								<button
                                    on:click={()=>{window.open(_.link)}}
									class="w-1/4 text-center mx-auto text-xl font-semibold cursor-pointer rounded-full border-2 border-lime-400 bg-lime-500 px-8 py-3 text-white transition-all duration-200 ease-in-out hover:bg-lime-500"
								>
									Try Now
								</button>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Left Arrow -->
			<button
				class="absolute top-1/2 left-4 z-20 -translate-y-1/2 transform cursor-pointer md:left-8"
				on:click={prev}
			>
				<div
					class="bg-opacity-80 text-white text-2xl font-bold hover:bg-opacity-100 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gray-600 bg-gray-700 hover:scale-105 shadow-md transition"
				>
					&#8592;
				</div>
			</button>

			<!-- Right Arrow -->
			<button
				class="absolute top-1/2 right-4 z-20 -translate-y-1/2 transform cursor-pointer md:right-8"
				on:click={next}
			>
				<div
					class="bg-opacity-80 text-white text-2xl font-bold hover:bg-opacity-100 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gray-600 bg-gray-700  hover:scale-105 shadow-md transition"
				>
					&#8594;
				</div>
			</button>
		</div>



        



		<div class="flex w-full flex-row py-2 mt-2">
			<div class="m-auto flex h-3 flex-row gap-3">
				{#each showcases as _, idx}
					<div
						class="h-3 w-3 cursor-pointer rounded-full border-gray-600 border-2"
						class:bg-lime-400={idx === current}                        
						class:bg-gray-700={idx !== current}
						on:click={() => goTo(idx)}
					></div>
				{/each}
			</div>
		</div>
	</div>
</div>
