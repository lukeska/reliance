<script setup>
import RelianceLogo from "./RelianceLogo.vue";
</script>

<template>
	<div class="px-4 md:px-14 xl:px-[120px]">
		<div class="flex items-center py-2 space-x-8 md:py-8">
			<RelianceLogo class="-mt-1.5 text-brand w-24 shrink-0" />
			<div class="flex items-center flex-1">
				<nav class="hidden lg:block">
					<ul class="flex space-x-6">
						<li>
							<a href="#" class="flex items-center text-black"
								>About Us
								<Icon
									name="chevron-down"
									class="w-[14px] h-[14px] ml-2"
							/></a>
						</li>
						<li>
							<a href="#" class="flex items-center text-black"
								>Features
								<Icon
									name="chevron-down"
									class="w-[14px] h-[14px] ml-2"
							/></a>
						</li>
						<li>
							<a href="#" class="flex items-center text-black"
								>FAQ</a
							>
						</li>
					</ul>
				</nav>
				<a
					href="#"
					class="flex items-center ml-auto text-xs sm:text-sm font-bold text-brand bg-white/[0.43] border border-brand rounded-xl px-2 lg:px-7 h-10 lg:h-14"
					>Download App</a
				>
				<button
					class="flex items-center justify-center w-10 h-10 ml-2 text-white lg:hidden bg-purplemedium rounded-xl"
				>
					<Icon name="menu" class="w-6 h-6" />
				</button>
			</div>
		</div>
	</div>
</template>
