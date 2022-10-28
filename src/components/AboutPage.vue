<template>
<div class="main-card">
    <div class="about-card">
        <div class="info"> Bharath Ganesh </div>
        <img class="image-slab" src="../assets/profile.jpg"/>
    </div>
</div>
</template>
  
  <script>

  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .image-slab
  {
    overflow: hidden;
    /* width: 60vw; */
    height: 30%;
    /* height: auto; */
    margin: 0;
    padding: 0;
    /* padding-bottom: 3vh; */
    border-radius: 0.3vmin;
    /* box-shadow: 0 0 0 0.2vmin rgb(151, 151, 151); */
  }  
    .main-card
    {
        width: 60vw;
        height: 100vh;
        margin: 0;
        /* background-color: aquamarine; */
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .about-card
    {
        height: 70vh;
        width: 100%;
        /* background-color: antiquewhite; */
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
  </style>
  