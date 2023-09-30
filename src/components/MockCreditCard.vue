<template>
	<div
		class="flex flex-col w-[327px] h-[251px] bg-[#514C91] rounded-3xl overflow-hidden mx-auto"
	>
		<div
			class="relative flex flex-col justify-between flex-1 px-6 bg-contain py-9 bg-creditcard"
		>
			<div class="flex items-center justify-between">
				<img src="/visa-logo.svg" alt="Visa" class="w-14" />
				<Icon name="nfc" />
			</div>
			<div>
				<div class="mb-2 text-sm text-slate-200">Total Balance</div>
				<div class="flex items-center space-x-4">
					<div class="flex space-x-2">
						<div
							class="w-[10px] h-[10px] rounded-full bg-white"
						></div>
						<div
							class="w-[10px] h-[10px] rounded-full bg-white"
						></div>
						<div
							class="w-[10px] h-[10px] rounded-full bg-white"
						></div>
						<div
							class="w-[10px] h-[10px] rounded-full bg-white"
						></div>
						<div
							class="w-[10px] h-[10px] rounded-full bg-white"
						></div>
						<div
							class="w-[10px] h-[10px] rounded-full bg-white"
						></div>
						<div
							class="w-[10px] h-[10px] rounded-full bg-white"
						></div>
						<div
							class="w-[10px] h-[10px] rounded-full bg-white"
						></div>
					</div>
					<Icon name="eye-slash" />
				</div>
			</div>
			<div
				class="absolute w-[86px] h-[86px] rounded-full bg-[#EFE058] left-[270px] top-[130px]"
			></div>
		</div>
		<div
			class="relative flex items-center justify-between h-16 px-6 text-white bg-black"
		>
			<div class="text-sm">2348 9183 0293 8471</div>
			<Icon name="note" />
		</div>
	</div>
</template>
