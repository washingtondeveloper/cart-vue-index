/*Component product-tabs*/
Vue.component('product-tabs', {
	props: ['reviews'],
	template: `
		<div>
			<span class="tab"
				:class="{ activeTab: selectedTab == tab }"
				v-for="(tab, index) in tabs" 
				:key="index"
				@click="selectedTab = tab">
				{{ tab }}</span>

			<div v-show="selectedTab == 'Reviews' ">
				<h2>Reviews</h2>
				<p v-if="!reviews.length">There are no reviews yet.</p>
				<ul>
					<li v-for="review in reviews">
						<p>{{ review.name }}</p>
						<p>Rating: {{ review.rating }}</p>
						<p>{{ review.review }}</p>
					</li>
				</ul>
			</div>

			<product-preview v-show="selectedTab == 'Make a Review'" @review-submited="addReview" ></product-preview>

		</div>
	`,
	data() {
		return {
			tabs: ['Reviews', 'Make a Review'],
			selectedTab: 'Reviews'
		}
	},

	methods: {
		addReview(productReview) {
			this.$emit('review-sub', productReview)
		}
	}
})