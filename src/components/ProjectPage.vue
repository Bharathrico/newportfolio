<template>
    <div class="hello">
      <span style="font-size: 3vh; color: #aaaaaa;"> Bharath Ganesh</span>
    </div>
    <div class="card">
      <div class="textspace"><div class="topic">Elden Ring</div><div class="info">Elden ring is a game developed by bandai namco and from software released in 2022. It is one of the most acclaimed game</div><a href="#" class="moreinfo"><div class="growing-dot"></div> more</a></div>
      <div class="imagespace"><img style="width: 100%;" src="../assets/eldenringposter.png"/></div>
    </div>
    <div class="card">
      <div class="textspace"><div class="topic">Elden Ring</div><div class="info">Elden ring is a game developed by bandai namco and from software released in 2022. It is one of the most acclaimed game</div><a href="#" class="moreinfo"><div class="growing-dot"></div> more</a></div>
      <div class="imagespace"><img style="width: 100%;" src="../assets/eldenringposter.png"/></div>
    </div>
    <div class="card">
      <div class="textspace"><div class="topic">Elden Ring</div><div class="info">Elden ring is a game developed by bandai namco and from software released in 2022. It is one of the most acclaimed game</div><a href="#" class="moreinfo"><div class="growing-dot"></div> more</a></div>
      <div class="imagespace"><img style="width: 100%;" src="../assets/eldenringposter.png"/></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectPage',
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  .growing-dot
  {
    border-radius: 100%;
    margin-right: 1vmin;
    width: 1vmin;
    height: 1vmin;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: aliceblue; */
    
   animation: 1000ms 1.5s  infinite growinganim;
  
  }
  
  @keyframes growinganim
  {
    0%
    {
      scale: 0;
      opacity: 1;
      box-shadow:0 0 0px 2px white;
    }
  
    100%
    {
      scale: 1.5;
      opacity: 0;
       box-shadow:0 0 0px 5px white;
    }
  }
  .hello
  {
    width: 60vw;
    padding-top: 5vh;
    padding-bottom: 5vh;
    height: auto;
    color: white;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card
  {
    width: 60vw;
    padding-top: 2vh;
    padding-bottom: 5vh;
    color: white;
    display: flex;
    align-items:flex-start;
    justify-content: space-between;
    height: 35vh;
  }
  
  .textspace
  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 40%;
    height: 50%;
    /* background-color: aliceblue; */
  }
  
  .topic
  {
    font-size: 1.5vmax;
  }
  
  .info
  {
    padding-top: 0.5vh;
    font-size: 2vmin;
    text-align: left;
    font-weight: 200;
  }
  
  .moreinfo
  {
    display:flex;
    flex-direction: row;
    align-items: center;
    font-size: 2vmin;
    text-decoration: none;
    color: white;
  }
  
  .moreinfo:hover
  {
    color: rgb(138, 138, 138);
    transition: all 0.5s ease;
  }
  
  .imagespace
  {
    border-radius: 0.5vmin;
    overflow: hidden;
    width: 40%;
    height: 100%;
    /* background-color: blue; */
  }
  
  @media screen and (orientation: portrait) and (max-width:700px) {
    .hello
  {
     width: 80vw;
  }
  .card
  {
    width: 80vw;
    padding-top: 2vh;
    padding-bottom: 6vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
    height: 40vh;
  }
  .imagespace
  {
    width: 100%;
    height: 60%;
    /* background-color: blue; */
  }
  
  .topic
  {
    font-size: 2vmax;
  }
  .info
  {
    padding-top: 0.5vh;
    font-size: 4vmin;
    text-align: left;
  }
  .moreinfo
  {
    font-size: 1.5vmax;
  }
  .textspace
  {
    width: 100%;
    height: 30%;
    /* background-color: aliceblue; */
  }
  .growing-dot
  {
     margin-right: 1vmax;
    width: 1vmax;
    height: 1vmax;
  }
  }
  </style>
  