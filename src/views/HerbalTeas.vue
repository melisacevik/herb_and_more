<template>
    <div class="home">
  
      <!-- HOME BANNER -->
      <div class="spices-banner">
        <div class="container-fluid p-0 overflow-hidden">
          <div class="row p-0 position-relative">
            <img class="img-fluid" src="../assets/herbal_teas/herbal_tea.png" alt="" />
            <h2
              class="fw-600 position-absolute bottom-0 start-0 text-white pb-md-5"
            >
              HERBAL TEAS
            </h2>
          </div>
        </div>
      </div>
  
      <!-- SPICES -->
      <div class="container spices">
        <div class="row">
          <div class="col-12 col-md-6 mb-5 spice color-dark d-flex flex-column flex-lg-row  align-items-center">
            <img class="img-fluid" src="../assets/herbal_teas/Cinnamon.png" alt="" />
            <div class="d-flex flex-column align-items-start p-5">
              <p class="title text-start">Cinnamon Stick </p>
              <p class="desc text-start">
                Cinnamon Stick adds sweet warmth and spicy aroma to torrijas, capirotada and spiced pumpkin porridge.  
              </p>
              <p class="desc text-start">
                It has been used throughout history, especially in Ancient Egypt. 
              </p>
              <span class="fw-700">Weight: 65g </span>
              <p class="fw-600 note my-3 text-start">
                Storage Information: Store in a cool and dry place 
              </p>
            <button class="bg-black px-5 text-white">soon available</button>

            </div>
          </div>
          <div class="col-12 col-md-6 mb-5 spice color-dark d-flex flex-column flex-lg-row  align-items-center">
            <img class="img-fluid" src="../assets/herbal_teas/Lavender.png" alt="" />
            <div class="d-flex flex-column align-items-start p-5">
              <p class="title text-start">Lavender </p>
              <p class="desc text-start">
                Get creative in the kitchen while experimenting with lavender. Scones, bread and biscuits can become tastier with lavender. 
              </p>
              <span class="fw-700">Weight: 40g  </span>
              <p class="fw-600 note my-3 text-start">
                Storage Information: Store in a cool and dry place 
              </p>
            <button class="bg-black px-5 text-white">soon available</button>

            </div>
          </div>
          <div class="col-12 col-md-6 mb-5 spice color-dark d-flex flex-column flex-lg-row  align-items-center">
            <img class="img-fluid" src="../assets/herbal_teas/Rose_Plant.png" alt="" />
            <div class="d-flex flex-column align-items-start p-5">
              <p class="title text-start">Rose Petals  </p>
              <p class="desc text-start">
                An intense aroma and unique flavor of Middle East cuisine. 
              </p>
              <p class="desc text-start">
                Rose petal jam is brilliant in every breakfast. Serve with tea, present with cottage cheese. Have fun! 
              </p>
              <span class="fw-700">Weight: 40g  </span>
              <p class="fw-600 note my-3 text-start">
                Storage Information: Store in a cool and dry place 
              </p>
            <button class="bg-black px-5 text-white">soon available</button>

            </div>
          </div>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
    name: "HerbalTeas",
    components: {
    },
    data() {
      return {};
    },
  };
  </script>
  <style lang="scss" scoped>
  .spices {
    margin-top: 80px;
    margin-bottom: 80px;
  }
  .spice {
    border: 1px solid #ffff;
    &:hover {
      border: 1px solid #000000;
    }
    img {
      width: 248px;
      height: 248px;
    }
    .title {
      font-size: 22px;
      font-weight: 700;
    }
    .desc,
    .note {
      font-size: 14px;
      margin-top: 7px;
      margin-bottom: 7px;
    }
    .weight {
      font-size: 10px;
      background: #62b31f;
      padding: 7px 15px;
      border-radius: 10px;
      color: #ffff;
    }
  }
  </style>
  