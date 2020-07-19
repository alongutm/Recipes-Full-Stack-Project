<template>
  <div style="height:492px;">
      <h1 id="about">
          About Us
      </h1>
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4500"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="font-size:300%; text-shadow: 2px 2px 3px black; background-color:white;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://res.cloudinary.com/dvc9uejg6/image/upload/v1595156223/WhatsApp_Image_2020-07-19_at_13.56.40_jgkm2j.jpg"
        text="We are Amit & Alon and this is our recipes site :)"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
     <a href="https://sise-web-development-environments.github.io/203169693/" target="_blank">
      <b-carousel-slide
        img-src="https://res.cloudinary.com/dvc9uejg6/image/upload/v1594582885/site2_kwonf6.jpg">
        <p style="color:black;" >Click To Check Out Alon's Personal Site</p>
      </b-carousel-slide>
    </a>

     <a href="https://amitshakarchy.github.io/313278889/" target="_blank">
      <b-carousel-slide
        img-src="https://res.cloudinary.com/dvc9uejg6/image/upload/v1594574852/htmlIMG_j51j0o.jpg">
        <p style="color:black;" >Click To Check Out Amit's Personal Site</p>
      </b-carousel-slide>
    </a>

    <a href="https://sise-web-development-environments.github.io/assignment2-amit_alon/" target="_blank">
      <b-carousel-slide
      
        img-src="https://res.cloudinary.com/dvc9uejg6/image/upload/v1594580911/pacman1_fpvcbh.jpg">
        <p style="color:yellow;" >Pacman Project</p>
      </b-carousel-slide>
    </a>
    
     
    </b-carousel>
  </div>
</template>

<script>
export default {

}

</script>

<style>
#about { color: #4188f3; 
font-family: 'Rouge Script', cursive; 
font-size: 110px; 
font-weight: normal; 
line-height: 108px; 
margin: 0 0 0px; 
text-align: center; 
text-shadow: 3px 3px 5px #000000;
background-color: rgb(205, 233, 226);
}
html,body{
   height:100%;
}
.carousel,.item,.active{
   height:100%;
 }
.carousel-inner{
    height:100%;
}
.item img {
  width:100%
}
p {
    white-space: pre;
}
</style>