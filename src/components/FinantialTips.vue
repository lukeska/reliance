<script setup>
import MockCreditCard from "./MockCreditCard.vue";
</script>

<template>
	<div
		class="lg:flex px-4 md:px-14 xl:px-[120px] bg-neutral-100 pt-10 lg:pt-28 pb-80"
	>
		<div class="relative md:w-[500px]">
			<div
				class="absolute w-64 h-64 bg-gray-200 left-10 md:left-40 top-12 rounded-3xl"
			></div>
			<div class="relative top-0 left-0 mx-auto lg:absolute">
				<MockCreditCard />
			</div>
			<div
				class="absolute shadow flex flex-col items-center py-5 bg-white left-20 md:left-[350px] top-48 rounded-xl px-7"
			>
				<div class="flex items-center mb-1 space-x-1">
					<Icon name="strong-box" />
					<span class="text-neutral-700 text-[10px]">Savings</span>
				</div>
				<div class="font-semibold text-purplemedium">$43,797</div>
			</div>
		</div>
		<div
			class="mt-20 lg:mt-0 lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[700px]"
		>
			<div
				class="mb-4 text-sm font-semibold tracking-widest uppercase text-zinc-400"
			>
				Finantial tips
			</div>
			<h2
				class="text-4xl 2xl:text-5xl font-bold leading-snug 2xl:leading-[65px]"
			>
				The Best Money Saving Tips You Can Start Right Now
			</h2>
			<p class="my-5 leading-relaxed text-gray-600 lg:pt-6 lg:pb-10">
				Being wise with your money and using money saving tips allows
				you to create a solid plan for alleviating financial stress.
			</p>
			<SecondaryCTA>Read More</SecondaryCTA>
		</div>
	</div>
	<div class="px-4 md:px-14 xl:px-[120px] -mt-72 lg:-mt-52">
		<div
			class="md:flex space-y-8 md:space-y-0 md:space-x-10 lg:space-x-20 bg-stone-900 rounded-[42px] px-6 md:px-14 xl:px-[120px] py-6 md:py-20 text-white"
		>
			<div class="flex-1">
				<Icon name="wallet-money" class="mb-3 md:mb-7" />
				<h3 class="mb-3 text-2xl font-semibold">Transparent</h3>
				<p class="text-zinc-300">
					Our goal is to help you reach yours. No hidden fees and no
					surprises.
				</p>
			</div>
			<div class="flex-1">
				<Icon name="card-tick" class="mb-3 md:mb-7" />
				<h3 class="mb-3 text-2xl font-semibold">Flexible</h3>
				<p class="text-zinc-300">
					Never get penalized when deciding it’s not for you. We let
					you change your mind at any time.
				</p>
			</div>
			<div class="flex-1">
				<Icon name="key-square" class="mb-3 md:mb-7" />
				<h3 class="mb-3 text-2xl font-semibold">Secure</h3>
				<p class="text-zinc-300">
					Our priority is keeping your money safe, from multi-factor
					authentication to FDIC-insured accounts.
				</p>
			</div>
		</div>
	</div>
</template>
