<template>
  <b-container class="container">
    <div>
      <h1>About Us</h1>

      <div>
        <b-card class="center" no-body style="width: 50rem; height: 10rem;">
          <b-tabs card>
            <b-tab no-body title="About Us">
              <b-card-img
                bottom
                src="https://res.cloudinary.com/dvc9uejg6/image/upload/v1595156223/WhatsApp_Image_2020-07-19_at_13.56.40_jgkm2j.jpg"
                alt="Image 21"
              ></b-card-img>
              <b-card-footer>
                Hey there:) We are Amit and Alon, partners since the first year of our studies.
                We are absolutely the best team you'll ever see! Welcome our recipes site :)
              </b-card-footer>
            </b-tab>

            <b-tab no-body title="Amit's personal site">
              <router-link to="amit">
                <b-card-img
                  bottom
                  src="https://res.cloudinary.com/dtc8lczrf/image/upload/v1595203334/Amit_sSite_yhofga.jpg"
                  alt="Image 25"
                ></b-card-img>
              </router-link>
              <b-card-footer>Click To Check Out Amit's Personal Site!</b-card-footer>
            </b-tab>

            <b-tab no-body title="Alon's personal site">
              <router-link to="alon">
                <b-card-img
                  bottom
                  src="https://res.cloudinary.com/dvc9uejg6/image/upload/v1594582885/site2_kwonf6.jpg"
                  alt="Image 25"
                ></b-card-img>
              </router-link>
              <b-card-footer>Click To Check Out Alon's Personal Site!</b-card-footer>
            </b-tab>

            <b-tab no-body title="Packman project">
              <router-link to="packman">
                <b-card-img
                  bottom
                  src="https://res.cloudinary.com/dtc8lczrf/image/upload/v1595206256/packman_kvrg3g.jpg"
                  alt="Image 26"
                ></b-card-img>
              </router-link>
              <b-card-footer>Our Packman amazing project</b-card-footer>
            </b-tab>
          </b-tabs>
          <br />
        </b-card>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {};
</script>

<style>
html,
body {
  height: 100%;
}
.carousel,
.item,
.active {
  height: 100%;
}
.carousel-inner {
  height: 100%;
}
.item img {
  width: 100%;
}
p {
  white-space: pre;
}
.center {
  margin-top: 1rem;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
</style>