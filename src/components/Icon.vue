<template>
	<component :is="dynamicComponent" />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
	props: {
		name: {
			type: String,
			required: true,
		},
	},

	computed: {
		dynamicComponent() {
			const camelize = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());
			const name =
				camelize(this.name).charAt(0).toUpperCase() +
				camelize(this.name).slice(1);
			return defineAsyncComponent(() => import(`./icons/${name}.vue`));
		},
	},
};
</script>
