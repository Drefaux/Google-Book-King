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

import axios from "axios";

export default {
  components: { BookDetails },
  name: "book-view",
  data() {
    return {
      books: [],
    };
  },
  beforeCreate: function() {
    document.body.className = "book";
  },
  created() {
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=inauthor:"Stephen+King"&key=AIzaSyBELf7aWJmgECK8XccZA6i8CnIT_rOxWVo'+'&maxResults=40'
      )
      .then((response) => {
        console.log(response.data.items)
        this.books = response.data.items;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  
};
</script>

<style>
.box {
  padding-top: 50px;
  
}
</style>
