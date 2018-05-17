Vue.component('product-count', {
	props: {
		cart: {
			type: Number,
			required: true
		}
	},
	
	template: `
		<div class="cart">
			<p>Cart({{ cart }})</p>
		</div>
	`
})