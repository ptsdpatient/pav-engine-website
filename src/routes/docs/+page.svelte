<script>
	import {onMount} from 'svelte'
    import { panel_data } from '$lib/docs'


    let panel;
    onMount(()=>{
        panel = panel_data;
    })

</script>

<div class="flex h-[100vh] w-[100vw] flex-row gap-4 bg-gray-800 p-3">
	<div class="flex h-full w-1/4 min-w-[225px] flex-col gap-4 rounded-xl  p-2">
		<div class="sticky flex flex-col gap-3 text-lg ">
			<button
                on:click={window.location="/"}
				class="flex w-full bg-gray-700 cursor-pointer flex-row justify-center gap-3 rounded-xl border-2 border-gray-600 p-1 text-white transition-all duration-200 outline-none hover:border-gray-500"
			>
				<div>🏠︎</div>
				<div>Home</div>
			</button>

			<input
				placeholder="🔍︎ Search"
				class="flex w-full bg-gray-700 cursor-pointer flex-row justify-center gap-3 rounded-md border-2 border-gray-600 p-1 pl-4 text-white transition-all duration-200 outline-none hover:border-gray-500"
			/>
		</div>

		<div
			class="flex flex-grow overflow-y-auto pt-3 flex-col gap-2 rounded-md border-2 border-gray-600 bg-gray-700 p-2 font-semibold text-white"
		>
			{#each panel as p, i}
				<div class="text-md flex w-full flex-col gap-1">
					<button
						on:click={(p.active = !p.active)}
						class="flex text-left cursor-pointer flex-row justify-between p-1 transition-all duration-200 outline-none hover:text-lime-400"
					>
						<div>{i + 1}. {p.name}</div>
						<div>➤</div>
					</button>

					<div
						class="flex flex-col justify-end gap-2 overflow-hidden pl-5 text-md {p.active
							? 'h-auto'
							: 'h-0'} transition-all duration-200"
					>
						{#each p.child as j}
							<button
								class="w-full cursor-pointer text-start outline-none hover:text-lime-400"
								>● {j.name}</button
							>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="h-full w-3/4 rounded-xl "></div>
</div>

<style>
    ::-webkit-scrollbar-track {
    background: oklch(37.3% 0.034 259.733);
    border-radius: 10px;
}

    div {
    scrollbar-width: thin;
    scrollbar-color: oklch(84.1% 0.238 128.85) oklch(37.3% 0.034 259.733);
}
</style>