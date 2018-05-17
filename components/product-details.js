/*Component product-details*/
Vue.component('product-details', {
	props:{
		details: {
			type: Array,
			required: true
		}
	},
	template: `
		<ul>
			<li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
		</ul>
	`
})