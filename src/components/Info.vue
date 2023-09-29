<template>
	<div class="py-10 lg:py-32">
		<div class="md:flex items-center px-4 md:px-14 xl:px-[120px] md:pb-32">
			<div class="md:w-1/2">
				<div class="max-w-md">
					<h2 class="text-4xl font-bold lg:text-7xl">
						Spend less, save more.
					</h2>
					<p
						class="my-5 leading-relaxed text-gray-600 lg:mr-20 2xl:mr-0 md:mt-8 md:mb-10"
					>
						Put money away automatically while you live your life.
						Just set a goal and watch your savings grow.
					</p>
					<SecondaryCTA>Learn More</SecondaryCTA>
				</div>
			</div>
			<div class="relative mt-10 md:w-1/2 md:mt-0">
				<img
					src="../assets/spend-less.png"
					alt=""
					class="rounded-[32px] ml-auto"
				/>
				<div
					class="absolute w-32 h-40 bg-gray-100 rounded-2xl top-48 left-5"
				></div>
				<div
					class="absolute flex flex-col items-center px-2 pt-6 pb-4 text-white shadow-lg -top-5 left-5 md:top-56 md:-left-20 bg-purplemedium w-36 rounded-2xl"
				>
					<Icon name="airplane" class="mb-4" />
					<span
						class="bg-gray-200 mb-2 tracking-widest uppercase font-semibold text-[8px] text-gray-600 py-[3px] px-3 rounded-full"
						>Travel</span
					>
					<div class="font-semibold">Trip to Malibu</div>
					<div class="mt-1 text-sm opacity-75">$2,437</div>
				</div>
				<div
					class="absolute flex flex-col items-center px-2 pt-6 pb-4 text-white shadow-lg top-52 left-16 md:top-64 lg:top-80 md:left-24 bg-fuzzywuzzy w-36 rounded-2xl"
				>
					<Icon name="gift" class="mb-4" />
					<span
						class="bg-gray-200 mb-2 tracking-widest uppercase font-semibold text-[8px] text-gray-600 py-[3px] px-3 rounded-full"
						>Self reward</span
					>
					<div class="font-semibold">Anything I want</div>
				</div>
			</div>
		</div>
		<div class="relative px-4 md:px-14 xl:px-[120px]">
			<img
				src="../assets/safe-to-spend.png"
				alt=""
				class="hidden lg:block rounded-[32px]"
			/>
			<div class="max-w-lg mt-32 sm:mt-10 md:mt-20">
				<h2 class="text-4xl font-bold lg:text-7xl">
					See what's safe to spend
				</h2>
				<p class="my-5 leading-relaxed text-gray-600 md:mt-8 md:mb-10">
					The first thing you see when you open the app is how much is
					cool to spend. Reliance knows about your expenses and goals,
					and smartly splits up your deposits for bills, savings, and
					long-term investments.
				</p>
				<SecondaryCTA>Learn More</SecondaryCTA>
			</div>
			<div
				class="lg:w-[320px] xl:w-[506px] lg:absolute lg:right-[120px] lg:top-[550px] xl:top-40"
			>
				<img
					src="../assets/mockup.png"
					alt=""
					class="lg:mb-10 xl:mb-24 rounded-t-[32px] rounded-bl-[32px] shadow-md my-10 lg:mt-0 mx-auto"
				/>
				<div
					class="flex items-start justify-between md:px-4 md:items-center lg:items-start xl:items-center"
				>
					<div class="flex-1 text-center">
						<div
							class="text-2xl font-bold md:text-4xl lg:text-2xl xl:text-4xl"
						>
							2M+
						</div>
						<div class="mt-2 text-sm text-gray-400">Users</div>
					</div>
					<div class="w-px h-12 bg-gray-200"></div>
					<div class="flex-1 text-center">
						<div
							class="text-2xl font-bold md:text-4xl lg:text-2xl xl:text-4xl"
						>
							50+
						</div>
						<div class="mt-2 text-sm text-gray-400">
							Supported Account
						</div>
					</div>
					<div class="w-px h-12 bg-gray-200"></div>
					<div class="flex-1 text-center">
						<div
							class="text-2xl font-bold md:text-4xl lg:text-2xl xl:text-4xl"
						>
							10K+
						</div>
						<div class="mt-2 text-sm text-gray-400">5 Ratings</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
