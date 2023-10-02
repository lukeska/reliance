<script setup>
import Testimonial from "./Testimonial.vue";
</script>

<template>
	<div class="px-4 md:px-14 lg:px-[120px] py-10 md:py-32">
		<div class="items-center mb-10 md:mb-20 md:flex">
			<h2 class="text-4xl font-bold lg:text-6xl">
				What they say about us?
			</h2>
			<div class="items-center hidden ml-auto space-x-8 md:flex">
				<button
					class="flex items-center justify-center w-12 h-12 bg-white border rounded-full text-zinc-400 hover:bg-purplemedium hover:border-purplemedium hover:text-white"
				>
					<Icon name="arrow-left" class="w-6 h-6" />
				</button>
				<button
					class="flex items-center justify-center w-12 h-12 bg-white border rounded-full text-zinc-400 hover:bg-purplemedium hover:border-purplemedium hover:text-white"
				>
					<Icon name="arrow-right" class="w-6 h-6" />
				</button>
			</div>
		</div>
		<div
			class="flex pt-4 space-x-10 overflow-x-scroll md:space-y-0 md:space-x-20 lg:space-x-32"
		>
			<Testimonial class="flex-shrink-0 w-64 md:flex-1">
				I am so glad I started using Reliance a few months ago. It’s
				amazing how much I’ve been able to save wuthout really even
				noticing it coming out of my account.
			</Testimonial>
			<Testimonial class="flex-shrink-0 w-64 md:flex-1">
				This is hands down th easiest way to save money that I have ever
				come across in my life! I have never been great at saving, but
				this app does all the heavy lifting!
			</Testimonial>
		</div>
	</div>
</template>
