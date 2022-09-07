<template>
    <div class="container">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <div class="card text-white bg-dark border-dark">
            <img class="card-img-top" :src="volumeInfo.imageLinks.thumbnail" alt="Card image cap">
            <div class="card-body">
                <h2 class="card-title">{{ volumeInfo.title }}</h2>
                <span class="card-subtitle">{{ volumeInfo.subtitle }}</span>
                <div class="card-text">
                    {{ volumeInfo.description }}
                </div>
            </div>
        </div>
    </div>
   
</template>

<script>


export default {
    name: 'book-details',
    props: {
        book: { type: Object, default: null }
    },
    computed: {
        volumeInfo() {
            return this.book.volumeInfo
        },
        
    }
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
