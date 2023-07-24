export default {
    computed: {
      books() {
        return this.$store.state.books
      }
    },
    created() {
      this.$store.dispatch('fetchSingleBook', this.$route.params.id)
    },
    methods: {
      addToCart(books) {
          // this.cart.push(product);
          console.log(books);
          alert(('Added to Cart'));
        },
        removeItem(index) {
          this.cart.splice(index)
        },
        
        
  },
   
  }
 