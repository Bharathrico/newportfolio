<template>
    <div class="backbutton"><router-link to="/" class="moreinfo">← Back</router-link></div>
    <div class="work"><div class="topic">Program</div><div class="imageslab"> <img src="../assets/eldenringposter.png" alt="imageslab"/></div></div>
    <div class="backbutton"><router-link to="/" class="moreinfo">← Back</router-link></div>
    <div class="base"></div>
  </template>
  
  <script>
  export default {
    name: 'OtherWorks',
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
.imageslab
{
  width: 100%;
}
 
  @media screen and (orientation: portrait) and (max-width:1200px) {
 
    .moreinfo
    {
      font-size: 1.5vmax;
    }
  }
  </style>
  