<template>
  <div class="container">
    <!-- Modal -->
    <div
      class="modal fade"
      :id="'exampleModal-' + bookChosen.id"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <img
              class="card-img-top"
              :src="bookChosen.thumbnail"
              alt="Card image cap"
            />
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            {{ bookChosen.description }}
          </div>
          <div class="modal-footer">
            <a
              :href="bookChosen.previewLink"
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
</template>

<script>
export default {
  name: "modal-comp",
  props: {
    bookChosen: { type: Object, default: null },
  },
  // watch: {
  //   displayed: function(newValue) {
  //     this.bookChosen = newValue
  //     console.log('new val', this.bookChosen)
  //   }
  // }
  
};
</script>

<style>
</style>
