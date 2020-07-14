<template>
  <div>
      <h1>
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
        img-src="https://picsum.photos/1024/480/?image=59"
        text="We are Amit & Alon and this is our recipes site :)"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
     <a href="https://sise-web-development-environments.github.io/203169693/" target="_blank">
      <b-carousel-slide
        img-src="https://res.cloudinary.com/dvc9uejg6/image/upload/v1594582885/site2_kwonf6.jpg">
        <p style="color:black;" >Alon's Personal Site</p>
      </b-carousel-slide>
    </a>

     <a href="https://amitshakarchy.github.io/313278889/" target="_blank">
      <b-carousel-slide
        img-src="https://res.cloudinary.com/dvc9uejg6/image/upload/v1594574852/htmlIMG_j51j0o.jpg">
        <p style="color:black;" >Amit's Personal Site</p>
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
h1 { color: #4188f3; 
font-family: 'Rouge Script', cursive; 
font-size: 110px; 
font-weight: normal; 
line-height: 108px; 
margin: 0 0 0px; 
text-align: center; 
text-shadow: 3px 3px 5px #000000;
background-color: rgb(205, 233, 226);
}

</style>