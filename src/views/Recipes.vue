<template>
    <div class="home">
  
      <!-- HOME BANNER -->
      <div class="recipes-banner">
        <div class="container-fluid p-0 overflow-hidden">
          <div class="row p-0 position-relative">
            <img class="img-fluid" src="../assets/recipes.png" alt="" />
            <h2
              class="fw-600 position-absolute bottom-0 start-0 text-white pb-md-5"
            >
              RECIPES
            </h2>
          </div>
        </div>
      </div>
      

      <!-- RECIPES -->
      <div class="container recipes">
      <p class="w-75 color-dark banner-text d-flex mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nunc arcu nibh viverra suspendisse fusce suspendisse fames vulputate. </p>
        <div class="row">
          <div class="col-12 recipe mb-5 color-dark d-flex align-items-center">
            <div class="row align-items-center">
                <div class="col-12 col-md-6 p-0 d-flex">
                    <img class="img-fluid" src="../assets/fajita_recipe.png" alt="">
                </div>
                <div class="col-12 col-md-6 py-4">
                    <div class="d-flex flex-column align-items-start">
                        <p class="title">Fajita Recipe</p>
                        <p class="desc text-start w-75 d-none d-md-flex">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod consectetur diam lacus tortor elit in ut risus dui. Euismod risus, magna est nunc, praesent ut. Ultricies sit morbi sit sociis id turpis. Consectetur ultrices ac quam arcu. In pharetra quis urna vehicula lectus tincidunt urna, egestas magna.</p>
                        <p class="desc text-start w-100 d-flex d-md-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod consectetur diam lacus tortor elit in ut risus dui. Euismod risus, magna est nunc, praesent ut. Ultricies sit morbi sit sociis id turpis. Consectetur ultrices ac quam arcu. In pharetra quis urna vehicula lectus tincidunt urna, egestas magna.</p>
                        <span class="mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z"/></svg>
                            40:00
                        </span>
                    </div>
                </div>
            </div>
          </div>
          <div class="col-12 recipe mb-5 color-dark d-flex align-items-center">
            <div class="row align-items-center">
                <div class="col-12 col-md-6 p-0 d-flex">
                    <img class="img-fluid" src="../assets/fajita_recipe.png" alt="">
                </div>
                <div class="col-12 col-md-6 py-4">
                    <div class="d-flex flex-column align-items-start">
                        <p class="title">Fajita Recipe</p>
                        <p class="desc text-start w-75 d-none d-md-flex">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod consectetur diam lacus tortor elit in ut risus dui. Euismod risus, magna est nunc, praesent ut. Ultricies sit morbi sit sociis id turpis. Consectetur ultrices ac quam arcu. In pharetra quis urna vehicula lectus tincidunt urna, egestas magna.</p>
                        <p class="desc text-start w-100 d-flex d-md-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod consectetur diam lacus tortor elit in ut risus dui. Euismod risus, magna est nunc, praesent ut. Ultricies sit morbi sit sociis id turpis. Consectetur ultrices ac quam arcu. In pharetra quis urna vehicula lectus tincidunt urna, egestas magna.</p>
                        <span class="mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z"/></svg>
                            40:00
                        </span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RecipesView",
    components: {
    },
    data() {
      return {};
    },
  };
  </script>
  <style lang="scss" scoped>
  .banner-text {
    font-size: 24px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .recipe {
    border: 1px solid #000000;
    .title {
        font-size: 24px;
    }
    .desc {
        font-size: 18px;
        padding-top: 30px;
        padding-bottom: 30px;
        border-bottom: 1px solid #A39E9E;;
        // position: relative;
        // &::after {
        //     content: "";
        //     position: absolute;
        //     left: 0;
        //     bottom: -20px;
        //     width: 100%;
        //     height: 1px;
        //     background-color: #000;
        // }
    }
  }
  </style>
  