const app = new Vue({
	el: '#app',
	data: {
		premium: true,
		cart: 0
	},

	methods: {
		addCart() {
			this.cart++
		},

		removeCart() {
			if(this.cart == 0) return
			this.cart--
		}
	}
})