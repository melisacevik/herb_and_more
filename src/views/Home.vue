<template>
  <div class="home">

    <!-- HOME BANNER -->
    <div id="home-banner" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#home-banner"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#home-banner"
          data-bs-slide-to="1"
          aria-current="true"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#home-banner"
          data-bs-slide-to="2"
          aria-current="true"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#home-banner"
          data-bs-slide-to="3"
          aria-current="true"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/slider_1.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/slider_2.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/slider_3.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/slider_4.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>

    <!-- ABOUT OUR STORY -->
    <div class="container spices">
      <!-- <h2 class="fw-600 mb-5">SPICES</h2> -->
      <Splide class="mt-4" :options="options_spices" aria-label="spices">
        <SplideSlide>
          <div class="spice bg-black text-white px-3 pb-4">
            <img class="img-fluid" src="../assets/allspice.png" alt="">
            <p>You can immediately recognize the powerful scent of Allspice. Why not try in your roasted veal? 
            Almost any recipe can be taken to the next level with allspice. Give it a try in meatballs, salads, courgette pie or green beans, and more. 
            </p>
            <div class="fw-700 weight">Weight 60g</div>
            <span class="note">Storage Information: Store in a cool and dry place</span>
          </div>
        </SplideSlide>
        <SplideSlide class="position-relative">
          <h2 class="fw-600 mb-5">SPICES</h2>
          <div class="spice bg-black text-white px-3 pb-4">
            <img class="img-fluid" src="../assets/Aniseed.png" alt="">
            <p>Aniseeds are used especially with vegetables and can bring out the colour in many recipes. 
            </p>
            <div class="fw-700 weight">Weight 75g </div>
            <span class="note">Storage Information: Store in a cool and dry place</span>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="spice bg-black text-white px-3 pb-4">
            <img class="img-fluid" src="../assets/curry.png" alt="">
            <p>Curry powder can be the perfect touch on soups, sauces, rice and anything else you can think of! 
            </p>
            <div class="fw-700 weight">Weight 70g  </div>
            <span class="note">Storage Information: Store in a cool and dry place</span>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div class="spice bg-black text-white px-3 pb-4">
            <img class="img-fluid" src="../assets/herbal_teas/Rose_Plant.png" alt="">
            <p>An intense aroma and unique flavor of Middle East cuisine.

Rose petal jam is brilliant in every breakfast. Serve with tea, present with cottage cheese. Have fun!
            </p>
            <div class="fw-700 weight">Weight 65g  </div>
            <span class="note">Storage Information: Store in a cool and dry place</span>
          </div>
        </SplideSlide>
        <SplideSlide class="position-relative">
          <h2 class="fw-600 mb-5">HERBAL TEAS</h2>
          <div class="spice bg-black text-white px-3 pb-4">
            <img class="img-fluid" src="../assets/herbal_teas/Cinnamon.png" alt="">
            <p>Cinnamon Stick adds sweet warmth and spicy aroma to torrijas, capirotada and spiced pumpkin porridge.

It has been used throughout history, especially in Ancient Egypt. 
            </p>
            <div class="fw-700 weight">Weight 65g </div>
            <span class="note">Storage Information: Store in a cool and dry place</span>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="spice bg-black text-white px-3 pb-4">
            <img class="img-fluid" src="../assets/herbal_teas/Lavender.png" alt="">
            <p>Get creative in the kitchen while experimenting with lavender. Scones, bread and biscuits can become tastier with lavender.
            </p>
            <div class="fw-700 weight">Weight 40g  </div>
            <span class="note">Storage Information: Store in a cool and dry place</span>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div class="spice bg-black text-white px-3 pb-4">
            <img class="img-fluid" src="../assets/herbs/basil_dried.png" alt="">
            <p>The smell of basil is impressively bitter. Thus basil is definitely an authentic final touch to peeled tomatoes, roasted pepper and olive oil.

When you add a pinch of dried basil, it will be difficult to forget the taste of your meal.
            </p>
            <div class="fw-700 weight">Weight 40g</div>
            <span class="note">Storage Information: Store in a cool and dry place</span>
          </div>
        </SplideSlide>
        <SplideSlide class="position-relative">
          <h2 class="fw-600 mb-5">HERBS</h2>
          <div class="spice bg-black text-white px-3 pb-4">
            <img class="img-fluid" src="../assets/herbs/celery.png" alt="">
            <p>Have you ever tried bread and butter pickles? Celery seeds are perfect for this unbelievable recipe.
            </p>
            <div class="fw-700 weight">Weight 70g </div>
            <span class="note">Storage Information: Store in a cool and dry place</span>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="spice bg-black text-white px-3 pb-4">
            <img class="img-fluid" src="../assets/herbs/FENNELSEEDS.png" alt="">
            <p>Fennel is perfect for fantastic recipes!

Get creative with Mediterranean or Italian cuisine. Fennel gives your dishes subtly, smoky flavor.
            </p>
            <div class="fw-700 weight">Weight 75g  </div>
            <span class="note">Storage Information: Store in a cool and dry place</span>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div class="spice bg-black text-white px-3 pb-4">
            <img class="img-fluid" src="../assets/large_pack/oregano.png" alt="">
            <p>Here is another fresh and aromatic spice for soups, salads and sauces. Fresh oregano is your easy yet incredible go to spice in kitchen. 
            </p>
            <div class="fw-700 weight">Weight 500g | 100g</div>
            <span class="note">Storage Information: Store in a cool and dry place</span>
          </div>
        </SplideSlide>
        <SplideSlide class="position-relative">
          <h2 class="fw-600 mb-5">LARGE PACK</h2>
          <div class="spice bg-black text-white px-3 pb-4">
            <img class="img-fluid" src="../assets/large_pack/chilli_hot.png" alt="">
            <p>Use Chilli Powder for a bit of a hot surprise. Chilli Powder is the perfect choice for steaks, burgers and fries.
            </p>
            <div class="fw-700 weight">Weight 1000g | 2000g </div>
            <span class="note">Storage Information: Store in a cool and dry place</span>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="spice bg-black text-white px-3 pb-4">
            <img class="img-fluid" src="../assets/large_pack/cinnamon.png" alt="">
            <p>A must have ingredient for the perfect feast. Use in apple crumble, cinnamon rolls and pudding.

The secret to a great dessert is in the detail. Cinnamon ground is the simplest touch with unimaginable taste.
            </p>
            <div class="fw-700 weight">Weight 1000g  </div>
            <span class="note">Storage Information: Store in a cool and dry place</span>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div class="spice bg-black text-white px-3 pb-4">
            <img class="img-fluid" src="../assets/seasonings/steak_seasoning.png" alt="">
            <p>Delicious steaks, burgers and chips are always flavored with Steak Seasoning. Taste-test to see if the steak needs a bit of steak seasoning. Cook your steak until brown on all sides.
            </p>
            <div class="fw-700 weight">Weight 55g</div>
            <span class="note">Storage Information: Store in a cool and dry place</span>
          </div>
        </SplideSlide>
        <SplideSlide class="position-relative">
          <h2 class="fw-600 mb-5">SEASONINGS</h2>
          <div class="spice bg-black text-white px-3 pb-4">
            <img class="img-fluid" src="../assets/seasonings/chicken_seasoning.png" alt="">
            <!-- <p>Authentically delicious fajitas are perfect for more recipe ideas. A hot blend of Fajita Spice can elevate any recipe; especially Mexican cuisine features fajitas, enchiladas or picadillo. 
            </p> -->
            <div class="fw-700 weight">Weight 55g </div>
            <span class="note">Storage Information: Store in a cool and dry place</span>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="spice bg-black text-white px-3 pb-4">
            <img class="img-fluid" src="../assets/seasonings/pizza_seasoning.png" alt="">
            <p>Use Garam Masala spice mix for a tastier dish. Aromatic and spicy blend perfect for making roast chicken; also, pairs great with egg bhurji, and more.
            </p>
            <div class="fw-700 weight">Weight 55g  </div>
            <span class="note">Storage Information: Store in a cool and dry place</span>
          </div>
        </SplideSlide>
      </Splide>
    </div>

    <!-- OUR PRODUCTS CATEGORIES -->
    <div class="container-fluid product-categories pb-5 bg-light-blue">
      <div class="container">
        <h2 class="fw-600 py-5">OUR PRODUCTS CATEGORIES</h2>
        <div class="row">
          <div class="col-12 col-lg-8">
            <div class="row">
              <div class="col-12">
                <div
                  @click="goPage('/product/spices')"
                  class="category-card cursor-pointer position-relative"
                >
                  <img
                    class="img-fluid w-100"
                    src="../assets/spices.png"
                    alt=""
                  />
                  <span class="fw-600 text-start">SPICES</span>
                </div>
              </div>
              <div class="col-12 col-md-6 mt-4">
                <div
                  @click="goPage('/product/herbal-oils')"
                  class="category-card cursor-pointer position-relative"
                >
                  <img
                    class="img-fluid w-100"
                    src="../assets/herbal_oil.png"
                    alt=""
                  />
                  <span class="fw-600 text-start">HERBAL OIL</span>
                </div>
              </div>
              <div class="col-12 col-md-6 mt-4">
                <div
                  @click="goPage('/product/herbs')"
                  class="category-card cursor-pointer position-relative"
                >
                  <img
                    class="img-fluid w-100"
                    src="../assets/herbs.png"
                    alt=""
                  />
                  <span class="fw-600 text-start">HERBS</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="row h-100">
              <div class="col-12 col-md-6 col-lg-12 mt-4 mt-lg-0">
                <div
                  @click="goPage('/product/herbal-teas')"
                  class="category-card cursor-pointer position-relative"
                >
                  <img
                    class="img-fluid w-100"
                    src="../assets/herbal_teas.png"
                    alt=""
                  />
                  <span class="fw-600 text-start">HERBAL TEAS</span>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-12 mt-4 mt-lg-0">
                <div
                  @click="goPage('/product/seasonings')"
                  class="category-card h-100 cursor-pointer position-relative"
                >
                  <img
                    class="img-fluid w-100 h-100"
                    src="../assets/seasonings.png"
                    alt=""
                  />
                  <span class="fw-600 text-start">SEASONINGS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- RECIPES -->
    <div class="container recipes">
      <h2 class="fw-600 py-5">RECIPES</h2>
      <div class="row">
        <div class="col-12">
          <img
            class="img-fluid w-100"
            src="../assets/recipes_banner.png"
            alt=""
          />
        </div>
      </div>

      <Splide class="mt-4" :options="options_recipes" aria-label="recipes">
        <SplideSlide>
          <div class="recipe-card">
            <img
              src="../assets/indian_rice.png"
              class="d-block img-fluid w-100"
              alt="..."
            />
            <div class="bg-black card-details text-white">
              <p class="card-title fw-600 m-0 text-start mb-3">INDIAN RICE</p>
              <p class="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing nunc arcu nibh viverra suspendisse.
              </p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="recipe-card">
            <img
              src="../assets/falafel.png"
              class="d-block img-fluid w-100"
              alt="..."
            />
            <div class="bg-black card-details text-white">
              <p class="card-title fw-600 m-0 text-start mb-3">FALAFEL</p>
              <p class="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing nunc arcu nibh viverra suspendisse.
              </p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="recipe-card">
            <img
              src="../assets/cajun_chicken.png"
              class="d-block img-fluid w-100"
              alt="..."
            />
            <div class="bg-black card-details text-white">
              <p class="card-title fw-600 m-0 text-start mb-3">CAJUN CHICKEN</p>
              <p class="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing nunc arcu nibh viverra suspendisse.
              </p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="recipe-card">
            <img
              src="../assets/cajun_chicken.png"
              class="d-block img-fluid w-100"
              alt="..."
            />
            <div class="bg-black card-details text-white">
              <p class="card-title fw-600 m-0 text-start mb-3">CAJUN CHICKEN</p>
              <p class="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing nunc arcu nibh viverra suspendisse.
              </p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>

    
    <!-- NEWSLETTER -->
    <div class="container-fluid newsletter">
      <div class="container">
        <h2 class="fw-600 py-5 text-white fw-bold">Sign up for our newspaper</h2>
        <div class="row flex-column align-items-center justify-content-center gap-3 fields">
          <input class="px-3 col-4 py-2 col-12 col-md-6" type="text" name="name" placeholder="Name" id="">
          <input class="px-3 col-4 py-2 col-12 col-md-6" type="text" name="email" placeholder="Enter your e-mail address" id="">
        </div>
        <button class="text-white py-2 mb-4">Subscribe</button>
      </div>
    </div>

    <!-- FOLLOW INSTAGRAM -->
    <div class="container instagram">
      <h2 class="fw-600 py-5">FOLLOW US ON INSTAGRAM</h2>

      <Splide class="mt-4" :options="options_instagram" aria-label="recipes">
        <SplideSlide>
          <div class="mb-3 h-100">
            <img class="img-fluid h-100" src="../assets/instagram_1.png" alt="">
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="mb-3 h-100">
            <img class="img-fluid h-100" src="../assets/instagram_2.png" alt="">
          </div>  
        </SplideSlide>
        <SplideSlide>
          <div class="mb-3 h-100">
            <img class="img-fluid h-100" src="../assets/instagram_3.png" alt="">
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="mb-3 h-100">
            <img class="img-fluid h-100" src="../assets/instagram_4.png" alt="">
          </div>
        </SplideSlide>
      </Splide>
    </div>

  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
  name: "HomeView",
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options_spices: {
        rewind: true,
        perPage: 3,
        gap    : '1rem',
        // height : '15rem',
        // pagination: false,
        breakpoints: {
          1400: {
            perPage: 3,
          },
          1200: {
            perPage: 3,
          },
          768: {
            perPage: 2,
          },
          576: {
            perPage: 1,
          },
        },
      },
      options_recipes: {
        rewind: true,
        perPage: 3,
        gap    : '1rem',
        // height : '15rem',
        // pagination: false,
        breakpoints: {
          1400: {
            perPage: 3,
          },
          1200: {
            perPage: 3,
          },
          768: {
            perPage: 2,
          },
          576: {
            perPage: 1,
          },
        },
      },
      options_instagram: {
        rewind: true,
        perPage: 4,
        gap    : '1rem',
        // height : '15rem',
        // pagination: false,
        breakpoints: {
          1400: {
            perPage: 3,
          },
          1200: {
            perPage: 3,
          },
          768: {
            perPage: 2,
          },
          576: {
            perPage: 1,
          },
        },
      }
    };
  },
};
</script>
<style lang="scss" scoped>
.spices {
  margin-top: 100px;
  h2 {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,0);
    width: 100%;
  }
  
  .spice {
    margin-top: 280px;
    overflow: unset;
    position: relative;
    height: 500px;  
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    // padding-top: 200px;
    img {
      margin-top: -50%;
      z-index: 3;
    }
  .weight {
    font-size: 18px;
    margin-top: 45px;
    margin-bottom: 25px;
  }
  .note {
    font-size: 12px;
  }
  }
}

.product-categories {
  margin-top: 80px;
  .category-card {
    span {
      font-size: 30px;
      position: absolute;
      bottom: 30px;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      color: #ffff;
      width: 100%;
      padding: 20px 0 20px 20px;
    }
  }
}

.recipes {
  margin-top: 80px;
  margin-bottom: 80px;
  .card-details {
    padding: 25px 25px 25px 25px;
  }
}

.instagram {
  margin-top: 80px;
  img {
    object-fit: cover;
  }
}

.newsletter {
  position: relative;
  margin-top: 80px;
  background-image: url('../assets/newspaper.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 7, 7, 0.3);
  }
  .fields {
    // padding-top: 52px;
    padding-bottom: 42px;
  }
  button {
    background-color: #000;
    width: 270px;
  }
}
</style>
