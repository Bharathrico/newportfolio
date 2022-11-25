<template>
  <div class="projectname">
    <span style="font-size: 3vh; color: #aaaaaa;"> Bharath Ganesh</span>
  </div>
  <div class="card">
    <div class="textspace"><div class="topic">Spacemerch</div><div class="info">As a part of team space corp, we built a merchandise application to sell space-themed merchandise. However, it needed UX and market research to go further. I worked with Deepak Praveen on this project from Aug 2022 to Oct 2022.</div><router-link to="/work" class="moreinfo"><div class="static-dot"><div class="growing-dot"></div></div> More</router-link></div>
    <div class="imagespace"><img src="../assets/space/spaceillus.png" alt="elden ring"/></div>
  </div>
  <div class="card">
    <div class="textspace"><div class="topic">Grocer Street</div><div class="info">As a part of my practice in UX design, I did this project in the winter of 2022 to design a market for a consumer of groceries. In addition, I performed conducting research, created experiences, and made user interfaces.</div><router-link to="/project" class="moreinfo"><div class="static-dot"><div class="growing-dot"></div></div> More</router-link></div>
    <div class="imagespace"><img src="../assets/grocer/grocerimg.png" alt="elden ring"/></div>
  </div>
  <div class="card">
    <div class="textspace"><div class="topic">Other works</div><div class="info"> I have committed my initiatives towards creating and researching more graphic design disciplines. To get a sense of my previous projects, go here. </div><router-link to="/work" class="moreinfo"><div class="static-dot"><div class="growing-dot"></div></div> More</router-link></div>
    <div class="imagespace"><img src="../assets/otherworks.png" alt="elden ring"/></div>
  </div>
  <div class="about-card">
    <router-link to="/about" class="moreinfo" style="font-size:1.7vmax; font-weight: 700;"> About</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
    window.scrollTo(0,0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.about-card
{
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content:flex-start;
  color: white;
  font-weight: 500;
}

.static-dot
{
  width: 1vmin;
  height: 1vmin;
  border-radius: 100%;
  margin-right: 1vmin;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.growing-dot
{
  border-radius: 100%;
  
  width: 0.8vmin;
  height: 0.8vmin;
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
    scale: 2;
    opacity: 0;
     box-shadow:0 0 0px 2px white;
  }
}
.projectname
{
  margin-top: 10vh;
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
  height: 60%;
  /* background-color: aliceblue; */
}

.topic
{
  font-size: 1.5vmax;
}

.info
{
  padding-top: 0.5vh;
  font-size: 1.5vmin;
  text-align: left;
  font-weight: 200;
  line-height: 2.5vmin;
}

.moreinfo
{
  display:flex;
  flex-direction: row;
  align-items: center;
  font-size: 2vmin;
  text-decoration: none;
  color: white;
  transition: all 0.5s ease;
}

.moreinfo:hover
{
  color: rgb(138, 138, 138);
  transition: all 0.5s ease;
}

.imagespace
{
  
  width: 40%;
  overflow: hidden;
  height: 100%;
  border-radius: 2%;
}

img
{
  width: 100%;
  border-radius: 2%;
}

@media screen and (orientation: portrait) and (max-width:1200px) {
  .projectname
{
   width: 80vw;
   margin-top: 5vh;
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
  height: 50vh;
}
.imagespace
{
  padding-top: 5vh;
  width: 100%;
  height: 70%;
  overflow: hidden;
  border-radius: 2%;
  /* background-color: blue; */
}
img
{
  width: 100%;
  height: auto;
  border-radius: 2%;
}
.topic
{
  font-size: 2vmax;
}
.info
{
  padding-top: 0.2vh;
  font-size: 1.3vmax;
  line-height: 2vmax;
  text-align: left;
}
.moreinfo
{
  font-size: 1.5vmax;
}
.textspace
{
  width: 100%;
  height: 50%;
  /* background-color: aliceblue; */
}
.growing-dot
{
  width: 1vmax;
  height: 1vmax;
}
.static-dot
{
  margin-right: 1vmax;
  width: 1vmax;
  height: 1vmax;
}
.about-card
{
  height: 10vh;
  margin-bottom: 4vh;
}
}
</style>
