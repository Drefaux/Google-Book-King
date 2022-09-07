<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      
    };
  },

};
</script>

<style>
body.home {
  background-image: url("https://kyluc.vn/Userfiles/Upload/images/l%E1%BB%9Bn%20Stephen%20King.jpg");
  background-color: grey;
}

body.book {
  background-color: grey;
}

body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
}

#app {
  margin-top: 60px;
  text-align: center;
  color: #303840;
}

.logo {
  max-width: 500px;
}
</style>
