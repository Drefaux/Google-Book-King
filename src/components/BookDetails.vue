<template>
  <div class="container">
    <div class="card text-white bg-dark border-dark">
      <img
        class="card-img-top"
        :src="[book.volumeInfo.imageLinks === undefined ? {} : `${book.volumeInfo.imageLinks.thumbnail}`]"
        alt="Card image cap"
      />
      <div class="card-body">
        <h2 class="card-title">{{ book.volumeInfo.title }}</h2>
        <span class="card-subtitle">{{ book.volumeInfo.subtitle }}</span>
        <div class="card-text">
          {{ book.description }}
        </div>
      </div>
      <button
        @click="getBook(book)"
        type="button"
        class="btn btn-danger position-absolute"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Preview
      </button>
    </div>

    <div class="container">
      <!-- Modal -->
     <div
        class="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <img
                class="card-img-top"
                :src="[bookChosen === undefined ? {} : `${bookChosen.imageLinks.thumbnail}`]"
                
                alt="Card image cap"
              />
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div v-if="bookChosen" class="modal-body">
              {{ bookChosen.description }}
            </div>
            <div class="modal-footer">
              <a
                
                :href="[bookChosen === undefined ? {} : bookChosen.previewLink]"
                type="button"
                class="btn btn-primary"
                >Details</a
              >
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>

export default {
  name: "book-details",
  data() {
    return {
      // bookSeleted: {
      //   volumeInfo: {}
      // }
    };
  },
  props: {
    book: { type: Object, default: null },
  },
  computed: {
    bookChosen() {
      return this.$store.state.bookChosen.book.volumeInfo
    }
  },
  methods: {
    getBook(book) {
      this.$store.dispatch('bookChosen/bookChosen', book)
      bookChosen() 
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
