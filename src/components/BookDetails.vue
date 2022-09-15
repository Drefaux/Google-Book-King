<template>
  <div class="container">
    <div class="card text-white bg-dark border-dark">
      <img
        class="card-img-top"
        :src="volumeInfo.imageLinks.thumbnail"
        alt="Card image cap"
      />
      <div class="card-body">
        <h2 class="card-title">{{ volumeInfo.title }}</h2>
        <span class="card-subtitle">{{ volumeInfo.subtitle }}</span>
        <div class="card-text">
          {{ volumeInfo.description }}
        </div>
      </div>
      <button
        @click="getBook(book)"
        type="button"
        class="btn btn-danger position-absolute"
        data-bs-toggle="modal"
        :data-bs-target="'#exampleModal-' + bookChosen.id"
      >
        Preview
      </button>
    </div>

  <modal-comp
  :bookChosen="bookChosen"
   />
   
  </div>
</template>

<script>
import ModalComp from './ModalComp.vue';
export default {
  components: { ModalComp },
  name: "book-details",
  data() {
    return {
      bookChosen: 
        {
          id: null,
          thumbnail: null,
          description: null,
          previewLink: null
        }
      
    }
  },
  props: {
    book: { type: Object, default: null },
  },
  computed: {
    volumeInfo() {
      // console.log(this.book.volumeInfo)
      return this.book.volumeInfo;
    },
    
  },
  methods: {
    getBook(bookdata) {
      console.log(bookdata)
      this.bookChosen.description = bookdata.volumeInfo.description
      this.bookChosen.thumbnail = bookdata.volumeInfo.imageLinks.thumbnail
      this.bookChosen.previewLink = bookdata.volumeInfo.previewLink
      this.bookChosen.id = bookdata.id
      console.log(this.bookChosen)
      console.log(this.bookChosen.description)
      console.log(this.bookChosen.previewLink)
    },
      
  },
};
</script>

<style>
.card {
  top: 0;
  transition: top ease 0.5s;
  text-align: left;
  overflow: hidden;
  max-height: 800px;
}
.card:hover {
  top: -50px;
}
</style>
