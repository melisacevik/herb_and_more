<template>
  <footer class="bg-black py-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3 d-flex align-items-start d-md-block">
          <img
            class="img-fluid d-flex me-auto"
            src="../assets/logo_footer.png"
            alt=""
          />
          <!-- <p class="text-start w-50 mt-md-5 text-white small-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p> -->
          <!-- <p class="text-start w-75 mt-md-5 d-flex d-lg-none text-white small-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> -->
        </div>
        <div class="col-6 col-md-3 mt-5 mt-md-0">
          <p class="footer-title text-white text-start">Products</p>
          <ul class="p-0 text-white">
            <router-link
              class="text-white text-decoration-none"
              to="/product/spices"
            >
              <li class="list-unstyled small-text mb-2 text-start">Spice</li>
            </router-link>
            <router-link
              class="text-white text-decoration-none"
              to="/product/seasonings"
            >
              <li class="list-unstyled small-text mb-2 text-start">
                Seasonings
              </li>
            </router-link>
            <router-link
              class="text-white text-decoration-none"
              to="/product/herbs"
            >
              <li class="list-unstyled small-text mb-2 text-start">Herbs</li>
            </router-link>
            <router-link
              class="text-white text-decoration-none"
              to="/product/herbal-teas"
            >
              <li class="list-unstyled small-text mb-2 text-start">
                Herbal Teas
              </li>
            </router-link>
            <router-link
              class="text-white text-decoration-none"
              to="/product/herbal-oils"
            >
              <li class="list-unstyled small-text mb-2 text-start">
                Herbal Oils
              </li>
            </router-link>
          </ul>
        </div>
        <div class="col-6 col-md-3 mt-5 mt-md-0">
          <ul class="p-0 text-white">
            <router-link class="text-white text-decoration-none" to="/recipes">
              <li class="footer-title list-unstyled mb-2 text-white text-start">
                Recipes
              </li>
            </router-link>
            <router-link
              class="text-white text-decoration-none"
              to="/your-recipes"
            >
              <li class="footer-title list-unstyled mb-2 text-white text-start">
                Your Recipes
              </li>
            </router-link>
            <router-link
              class="text-white text-decoration-none"
              to="/story"
            >
              <li class="footer-title list-unstyled mb-2 text-white text-start">
                Our Story
              </li>
            </router-link>
          </ul>
        </div>
        <div class="col-12 col-md-3 d-flex align-items-end d-md-block align-items-md-start">
          <div>
            <p class="footer-title text-white text-start">Company Location</p>
            <p class="text-start d-none d-lg-flex text-white small-text">
              Cheadle Royal Business Park, Cheadle, England, United Kingdom
            </p>
            <p class="text-start w-75 d-flex d-lg-none text-white small-text">
              Cheadle Royal Business Park, Cheadle, England, United Kingdom
            </p>
            <p class="footer-title text-white text-start">Factory Location</p>
            <p class="text-start d-none d-lg-flex text-white small-text">
              Herb and More TR Spices and Herbal Products Import Export Industry Trade Limited Company Gebze/T??rkiye
            </p>
            <p class="text-start w-75 d-flex d-lg-none text-white small-text">
              Herb and More TR Spices and Herbal Products Import Export Industry Trade Limited Company Gebze/T??rkiye
            </p>
            <p class="text-start w-50 text-white small-text mb-0 mb-md-3">
              CONTACT US: info@herbandmore.co</p>
            
          </div>
          <div class="d-flex gap-3">
            <a href="https://www.instagram.com/herbandmore.co/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffff"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <a href="https://www.facebook.com/herbandmore.co">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffff"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                />
              </svg>
            </a>
            <!-- <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffff"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"
                />
              </svg>
            </a> -->
          </div>

          
        </div>
        <p class="text-start w-50 text-white small-text mt-5 opacity-50">
             Registration Number: TR-41-K-032162</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterItem",
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
footer {
  margin-top: 80px;
}
.footer-title {
  font-size: 18px;
}
.small-text {
  font-size: 14px;
}
</style>
