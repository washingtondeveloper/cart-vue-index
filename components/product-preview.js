/*Component product-preview*/
Vue.component('product-preview', {
	template: `

	<form class="review-form" @submit.prevent="onSubmit">

		<p v-if="erros.length">
			<b>Please correct the following error(s):</b>
			<ul>
				<li v-for="error in erros">{{ error }}</li>
			</ul>
		</p>

      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>
          
      <p>
        <input type="submit" value="Submit">  
      </p>    
    
    </form>
	`,
	data() {
		return {
			name: null,
			review: null,
			rating: null,
			erros: []
		}
	},

	methods: {
		onSubmit() {

			if(this.name && this.review && this.rating) {
				this.erros = []

				let productReview = {
					name: this.name,
					review: this.review,
					rating: this.rating
				}

				this.$emit('review-submited', productReview)
				this.name = null
				this.review = null
				this.rating = null
			} else {
				this.erros = []

				if(!this.name) this.erros.push('Name required')
				if(!this.review) this.erros.push('Review required')
				if(!this.rating) this.erros.push('Rating required')
			}


			
		}
	}
})