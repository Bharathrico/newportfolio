<template>
<div class="main-card">
    <div class="about-card">
      <div class="backbutton"><router-link to="/" class="moreinfo">← Back</router-link></div>
      <img class="image-slab" src="../assets/profile.jpg"/>
      <div style="font-size: 1.5vmax; font-weight: 600; color: white;">Bharath Ganesh</div> 
      <div style="font-size: 1.3vmax; font-weight: 400; color: rgb(146, 146, 146);">UX designer</div> 
      <div class="info"> Hi I am Bharath Ganesh, 23 year old UX designer from India, I am a generalist in UX design field. I invest my time researching new techniques and methods to improve User Experience. I do artworks, typography and 3D design in my free time. I am very much interested in gaming and movies.  </div>
      <div class="logos"><a target="_blank" href="https://dribbble.com/Bharathrico" class="iconsclass"><font-awesome-icon  icon="fa-brands fa-dribbble" size="2x"/></a><a target="_blank" href="https://www.behance.net/bharathganesh" class="iconsclass"><font-awesome-icon  icon="fa-brands fa-behance" size="2x"/></a><a target="_blank" href="https://www.linkedin.com/in/bharath-ganesh-748252190/" class="iconsclass"><font-awesome-icon  icon="fa-brands fa-linkedin" size="2x"/></a></div>
    </div>
</div>
</template>
  
  <script>

  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .iconsclass
  {
    text-decoration: none;
    color: white;
    transition: all ease 0.5s;
    cursor: pointer;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .iconsclass::before
  {content: '';
    width: 60px;
    height: 60px;
    background-color: rgb(92, 92, 92);
    mix-blend-mode: lighten;
    position: absolute;
    z-index: 0;
    border-radius: 100%;
    transform: scale(0);
    transition: all ease 0.4s;
  }
  .iconsclass:hover
  {
    color: rgb(228, 228, 228);
    transition: all ease 0.5s;
  }

  .iconsclass:hover::before
  {
    transform: scale(1);
    transition: all ease 0.4s;
  }
   .moreinfo
{
  font-size: 1.2vmin;
  text-decoration: none;
  color: white;
  transition: all 0.5s ease;
}
.moreinfo:hover
{
  color: rgb(138, 138, 138);
  transition: all 0.5s ease;
}

  .backbutton
  {
    width: 60vw;
    height: auto;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logos
  {
    width: 10vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
    .image-slab
  {
    overflow: hidden;
    height: 50%;
    margin: 0;
    padding: 0;
    border-radius: 0.3vmin;
    transition: all ease 1s;
  }  
    .main-card
    {
        width: 60vw;
        height: 100vh;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .about-card
    {
        height: 60vh;
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
    }
    .info
    {
      font-size: 0.9vmax;
      color: white;
      text-align: justify;
      width: 70%;
    }
    @media screen and (orientation: portrait) and (max-width:1000px) {
      .image-slab
    {
      width: 100%;
      height: auto;
      transition: all ease 1s;
    }
    .about-card
    {
      height: 50vh;
    }
    .info
    {
      width: 100%;
      font-size: 1.2vmax;
    }
    .logos
    {
      width: 40vw;
    }
    .moreinfo
    {
      font-size: 1.5vmax;
    }
  }
  </style>
  