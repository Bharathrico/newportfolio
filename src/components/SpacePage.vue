<template>
  <div class="base"></div>
 <div class="backbutton"><router-link to="/" class="moreinfo">← Back</router-link></div>
 <div class="title">
   <span style="font-size: 3vh;"> Space Merch </span>
 </div>
 <div class="info">
   <div class="location">Fall 2022<br/>
Associated With Deepak Praveen<br/>
User Interface and User Experience researcher<br/>
3 Months</div>
   <div class="newinfo">
    Working as a team, we researched and created a User Interface and Experience for a merchandising application focusing on space-themed apparel. My concentration is mainly on competitor analysis, Primary research, User Interface, and design systems.
   </div>
 </div>
   <img class="image-slab" width="100%" src="../assets/space/spacebanner.png" alt="imageslab">
 <div class="backbutton"><router-link to="/" class="moreinfo">← Back</router-link></div>
 <div class="base"></div>
</template>

<script>
export default {
 name: 'ProjectPage',
 created() {
 window.scrollTo(0,0)
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.base
{
 height: 10vh;
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

.title
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

.info
{
 color: white;
 width: 60vw;
 height: auto;
 padding-top:2vmin ;
 padding-bottom: 4vmin;
 font-size: 1.5vmin;
 /* background-color: bisque; */
 display: flex;
 align-items: flex-start;
 justify-content: space-between;
 text-align: left;
}
.location
{
 display: flex;
 justify-content:space-between;
 align-items: flex-start;
 text-align: left;
 line-height: 3vmin;
 width:30%;
 height: 100%;
 color: rgb(156, 156, 156);
 /* background-color: black; */
}

.topic
{
 display: flex;
 justify-content:space-between;
 align-items: flex-start;
 text-align: left;
 font-size: 4vmin;
 width:20%;
 height: 100%;
 color: rgb(156, 156, 156);
 
 /* background-color: black; */
}


.newinfo
{
 width: 50%;
 height: 100%;
 font-size: 1.3vmin;
 line-height: 3vmin;
 /* background-color: rgb(173, 121, 52); */
}

.image-slab
{
 overflow: hidden;
 width: 60vw;
 height: auto;
 margin: 0;
 padding: 0;
 /* padding-bottom: 3vh; */
 border-radius: 2vmin;
}  

@media screen and (orientation: portrait) and (max-width:1200px) {
 .title
{
  width: 80vw;
}
.image-slab
{
 width: 80vw;
}
.info
{
 width: 80vw;
 flex-direction: column;
}
.location
{
 font-size: 3vmin;
 line-height: 4vmin;
 width: 60%;
 padding-bottom: 4vh;
}
.newinfo
{
 line-height: 5vmin;
 font-size: 2.6vmin;
 width: 100%;
}

.topic
{
 padding-bottom: 5vmin;
 margin-top: 5vh;
}

.moreinfo
 {
   font-size: 1.5vmax;
 }
}
</style>
