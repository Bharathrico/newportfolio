<template>
    <div class="backbutton"><router-link to="/" class="moreinfo">← Back</router-link></div>
    <div class="work"><div class="topic">3D animations</div><div class="caption">Created multiple motion graphic animations in blender</div><div class="imageslab"> <iframe class="youtube" src="https://www.youtube.com/embed/w6fMHILG-EU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>
    <div class="work"><div class="topic">Abstract Arts</div><div class="caption">Experimented and created abstract art in blender tool</div><div class="imageslab"> <img src="../assets/abstract.gif" alt="imageslab"/></div></div>
    <div class="backbutton"><router-link to="/" class="moreinfo">← Back</router-link></div>
    <div class="base"></div>
  </template>
  
  <script>
  export default {
    name: 'OtherWorks',
    created() {
    window.scrollTo(0,0)
  }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .work
  {
    width: 60vw;
    height: auto;
    margin-bottom: 4vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 4vh;
  }
  .caption
  {
    width: 100%;
    display: flex;
    /* background-color: aliceblue; */
    margin-bottom: 2vh;
    align-items: left;
    text-align: left;
    color: rgb(201, 201, 201);
  }
  .base
  {
    height: 20vh;
    width: 60vw;
  }
  .moreinfo
{
  padding-top: 3vh;
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

img
{
  width: 100%;
}
.backbutton
{
  width: 60vw;
  padding-top: 2vh;
  padding-bottom: 2vh;
  height: auto;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.topic
{
  width: 100%;
  height: 2vw;
  /* background-color: aliceblue; */
  color: white;
  text-align: left;
  font-size: 2.5vmin;
  margin-bottom: 2vh;
}
img
{
  border-radius: 2%;
}
.youtube
{
  border-radius: 2%;
  height: 40vmax;
  width: 100%;
}
.imageslab
{
  width: 100%;
}
 
  @media screen and (orientation: portrait) and (max-width:1200px) {
 
    .moreinfo
    {
      font-size: 1.5vmax;
    }
    .topic
    {
      font-size: 1.6vmax;
    }
    .caption
    {
      margin-bottom: 1vh;
      font-size: 1vmax;
    }
    .youtube
  {
    border-radius: 2%;
    height: 30vmin;
    width: 100%;
  }
  }
  </style>
  