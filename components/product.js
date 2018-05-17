/*Component product*/
Vue.component('product', {
	props: {
		premium: {
			type: Boolean,
			required: true
		},
		lengthcart: {
			type: Number
		}
	},

	template: `
		<div class="product">
			<div class="product-image">
				<img :src="image">
			</div>

			<div class="product-info">
				<h1>{{ title }}</h1>
				<p v-if="inStock">In Stock</p>
				<p :class="{ outSock: !inStock }" v-else>Out of Stock</p>
				<p>Shipping: {{ shipping }}</b></p>

				<product-details :details="details"></product-details>

				<div v-for="(variant, index) in variants" 
					:key="index" 
					class="color-box" 
					:style="{ backgroundColor: variant.variantColor}"
					@mouseover="updateProduct(index)">
				</div>
				
				<button @click="addCart" 
					:disabled="!inStock"
					:class="{ disabledButton: !inStock }">Add to Cart</button>

				<button @click="removeCart" 
					:class="{ disabledButton: lengthcart == 0 }">Remove of Cart</button>	

			</div>

			<product-tabs :reviews="reviews" @review-sub="addReview" ></product-tabs>

			
			
		</div>
	`,
	data() {
		return 	{
			brand: 'Vue Mastery',
			product: 'Socks',
			selected: 0,
			details: ['80% cotton', '20% polyester', 'Gender-neutral'],
			variants: [
				{ 
					variantId: 2234, 
					variantColor: "green", 
					variantImage: "./assets/vmSocks-green.jpg", 
					variantQuantity: 10 },
				{ 
					variantId: 2235, 
					variantColor: "blue", 
					variantImage: "./assets/vmSocks-blue.jpg",
					variantQuantity: 0  }
			],
			reviews: []
		}
	},

	methods: {
		addCart() {
			this.$emit('add-to-cart')
		},
		removeCart() {
			this.$emit('remove-of-cart')
		},
		updateProduct(index) {
			this.selected = index
		},

		addReview(productReview) {
			this.reviews.push(productReview)
		}
	},

	computed: {
		title() {
			return this.brand + ' ' + this.product
		},

		image() {
			return this.variants[this.selected].variantImage
		},

		inStock() {
			return this.variants[this.selected].variantQuantity
		},

		shipping() {
			if (this.premium) 
				return "Free"

			return 2.99
		}
	}
})