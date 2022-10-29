<template>
     <div class="base"></div>
    <div class="backbutton"><router-link to="/" class="moreinfo">← Back</router-link></div>
    <div class="title">
      <span style="font-size: 3vh;"> Grocer Street </span>
    </div>
    <div class="info">
      <div class="location">Winter 2022<br/>
Associated With Deepak Praveen<br/>
User Interface and User Experience researcher<br/>
Personal Project in 2 Months</div>
      <div class="newinfo">
        Grocer Street is an application that serves both vendors and consumers in improving the grocery purchasing experience by delivering features that are blended with the real-world shopping experience. Any fruit or vegetable that a customer purchases using this application will have their involvement, enhancing their shopping experience. In this project, I worked as a UI/UX researcher and designer, with my partner assisting me with brainstorming and user flow.
      </div>
    </div>
      <img class="image-slab" width="100%" src="../assets/grocer/grocerstreetpage1.png" alt="imageslab">
    <div class="info">
      <div class="topic">Problem statement</div>
      <div class="newinfo">
        There are online shopping applications for purchasing groceries with price tags, but there are also offline vendors who sell at your door or on the street. Given that the application would manage their distribution and management features, an application to sell their items online at the price they specify will help them grow and expand their business.<br/><br/>
        In order to identify the issues with the current apps and what they needed, we conducted interviews with people who have had a variety of work experiences. We realised that in-person supermarket shopping is preferable to pre-packaged delivery. We addressed this issue by offering hand-selected groceries at the door. Meanwhile, we discovered that most vendors lack the resources necessary to launch an online store. Without any issues, we were able to implement facilities that will help them.
      </div>
    </div>
      <img class="image-slab" width="100%" src="../assets/grocer/grocerillus.png" alt="imageslab">
    <div class="info">
      <div class="topic">Research</div>
      <div class="newinfo">
        This improved our project toward pleasing the customer, even if he still considers internet shopping. We conducted secondary research on blogs and forums to learn more about the viewpoint of vendors. The results showed that vendors want to have some flexibility when it comes to third-party applications, such as when it comes to payment and delivery options.<br/><br/>
        According to the data, people favour an easy-to-use buying process over one that requires more effort. Customers also displayed some issues with product price and returns. More than the problems they have with the checkout procedure, they have trouble confirming the product they want to buy With all of this in mind, we created the application to ensure that the client purchases the goods satisfactorily and that the vendor has access to a market.
      </div>
    </div>
    <img class="image-slab" width="100%" src="../assets/grocer/grocerillus.png" alt="imageslab">
    <div class="info">
      <div class="topic">Solution</div>
      <div class="newinfo">
        
      </div>
    </div>
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
  