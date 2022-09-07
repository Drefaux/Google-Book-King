<template>
    <div class="container-fluid">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <div class="row fade-in-text">
        <div class="col-5">
            <h1>Why Stephen King</h1>
            <br>
            <h3>At his best, King is a masterful storyteller. 
            <div class="p-3" />He is able to create worlds infused with a sense of right and wrong, good and evil. 
            <div class="p-3" />He writes of familiar family crises, fears of the unknown and the yearning to belong.
            </h3>
            <br>
            <button v-on:click="handleExplore()" type="button" class="btn btn-secondary btn-lg">Explore</button>

        </div>
        
    </div>
    </div>
</template>

<script>

export default {
  name: "author-view",
  beforeCreate: function() {
    document.body.className = 'home';
  },
  methods: {
        handleExplore() {
            setTimeout(() => {
              
              this.$router.push('/books')
            }, "1000")
            
            
        }
  },
  
};
</script>

<style>
body {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right;
}

.row {
  font-family: "Open Sans", sans-serif;
}

h1::first-letter {
  font-size: 2em;
  font-weight: bold;
}

h3::first-letter {
  font-size: 2em;
  font-weight: bold;
}

.fade-in-text {
  animation: fadeIn 5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
