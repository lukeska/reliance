<script setup>
import RelianceLogo from "./RelianceLogo.vue";
</script>

<template>
	<div
		class="bg-stone-900 px-4 md:px-14 lg:px-[120px] py-10 md:py-24 text-white"
	>
		<div
			class="justify-between space-y-10 md:space-y-0 md:space-x-4 xl:space-x-40 md:flex"
		>
			<div class="md:w-1/3 xl:w-1/4">
				<RelianceLogo class="mb-10" />
				<div class="mb-4 text-xl">+62 (343) 2291-9283</div>
				<div>support@reliance.finance</div>
			</div>
			<div class="md:w-1/3 xl:w-2/4">
				<div class="mb-8 text-lg font-semibold">Quick Links</div>
				<div class="grid grid-cols-2 gap-y-5">
					<a href="#" class="text-white/70">Spend</a>
					<a href="#" class="text-white/70">Contact Us</a>
					<a href="#" class="text-white/70">Save</a>
					<a href="#" class="text-white/70">Reliance Media</a>
				</div>
			</div>
			<div class="md:w-1/3 xl:w-1/4">
				<div class="mb-8 text-lg font-semibold">Subscribe</div>
				<form action="#" class="flex">
					<input
						type="email"
						class="w-48 h-12 text-black border-none rounded-l-lg placeholder:text-sm focus:border-none focus:ring-0"
						placeholder="Get saving money tips!"
					/>
					<button
						class="flex items-center justify-center w-12 h-12 rounded-r-lg bg-purplemedium"
					>
						<Icon name="arrow-right" class="w-8 h-8" />
					</button>
				</form>
			</div>
		</div>

		<hr class="mt-12 opacity-20 mb-9" />

		<div
			class="items-center justify-between space-y-4 md:space-y-0 md:flex"
		>
			<div
				class="flex items-center justify-center space-x-3 md:justify-start"
			>
				<a
					href="#"
					class="flex items-center justify-center border rounded-full border-white/25 w-9 h-9"
				>
					<Icon name="linkedin" />
				</a>
				<a
					href="#"
					class="flex items-center justify-center border rounded-full border-white/25 w-9 h-9"
				>
					<Icon name="facebook" />
				</a>
				<a
					href="#"
					class="flex items-center justify-center border rounded-full border-white/25 w-9 h-9"
				>
					<Icon name="twitter" />
				</a>
			</div>
			<div class="text-center md:text-left">
				© 2023 reliance finance. All rights reserved
			</div>
		</div>
	</div>
</template>
