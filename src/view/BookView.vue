<template>
    <div class="container">
        <div class="row">
            <book-details
            v-for="book in books" :key="book.id" :book="book"
            class="col-4 box"
            />
            
        </div>
        
    </div>
</template>

<script>
import BookDetails from "../components/BookDetails.vue";


export default {
  components: { BookDetails },
  name: "book-view",
  beforeCreate: function() {
    document.body.className = "book";
  },
  computed: {
    books() {
      return this.$store.state.books.items
    }
  },
  mounted() {
    this.$store.dispatch('getBooks')
  }
  
};
</script>

<style>
.box {
  padding-top: 50px;
  
}
</style>
