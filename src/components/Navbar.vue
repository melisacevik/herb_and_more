<template>
  <nav class="bg-black">
    <div class="container">
    <ul
      class="m-0 px-0 px-md-auto list-unstyled text-white d-flex align-items-center justify-content-between"
    >
    
    <li class="nav-logo">
        <router-link class="text-decoration-none text-white fw-bold" to="/">
          <img src="../assets/logo.png" alt="" />
        </router-link>
      </li>
      <li class="nav-item dropdown d-none d-md-block">
        <a
          class="nav-link fw-bold dropdown-toggle"
          href="#"
          id="navbarDarkDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Products
        </a>
        <ul
          class="dropdown-menu dropdown-menu-white rounded-0"
          aria-labelledby="navbarDarkDropdownMenuLink"
        >
          <li><router-link class="dropdown-item fw-bold" to="/product/spices">Spice</router-link></li>
          <li><router-link class="dropdown-item fw-bold" to="/product/seasonings">Seasonings</router-link></li>
          <li><router-link class="dropdown-item fw-bold" to="/product/herbs">Herbs</router-link></li>
          <li><router-link class="dropdown-item fw-bold" to="/product/herbal-teas">Herbal Teas</router-link></li>
          <li><router-link class="dropdown-item fw-bold" to="/product/large-packages">Big Pack Herb & Spice</router-link></li>
          <li><router-link class="dropdown-item fw-bold" to="/product/herbal-oils">Herbal Oils</router-link></li>
        </ul>
      </li>
      <li class="d-none d-md-block">
        <router-link
          class="text-decoration-none text-white fw-bold"
          to="/recipes"
        >
          Recipes
        </router-link>
      </li>
      <li class="d-none d-md-block">
        <router-link
          class="text-decoration-none text-white fw-bold"
          to="/story"
        >
          Our Story
        </router-link>
      </li>
      
      <li class="d-none d-md-block">
        <a
          class="text-decoration-none text-white fw-bold"
          href="/catalogue.html"
        >
          E-Catalog
        </a>
        <!-- <g-link class="cv-button float-right" href="../assets/Catalogue_2022.pdf" target="_blank">E-Catalog</g-link> -->

      </li>

      <li class="d-none d-md-flex gap-4">
        <router-link to="/cart">
          <svg width="20" height="19" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.71414 15.9996C6.34531 15.9996 6.85698 15.4879 6.85698 14.8567C6.85698 14.2255 6.34531 13.7139 5.71414 13.7139C5.08296 13.7139 4.57129 14.2255 4.57129 14.8567C4.57129 15.4879 5.08296 15.9996 5.71414 15.9996Z" fill="white"/>
          <path d="M13.7141 15.9996C14.3453 15.9996 14.857 15.4879 14.857 14.8567C14.857 14.2255 14.3453 13.7139 13.7141 13.7139C13.083 13.7139 12.5713 14.2255 12.5713 14.8567C12.5713 15.4879 13.083 15.9996 13.7141 15.9996Z" fill="white"/>
          <path d="M15.9999 2.85723H3.32569L2.85712 0.457255C2.8304 0.326241 2.75859 0.208744 2.65418 0.125217C2.54977 0.0416891 2.41938 -0.00257969 2.28569 0.00011625H0V1.14296H1.81713L3.99997 12.1143C4.02668 12.2453 4.09849 12.3628 4.2029 12.4463C4.30731 12.5299 4.43771 12.5741 4.57139 12.5714H14.857V11.4286H5.03996L4.57139 9.14289H14.857C14.9891 9.14612 15.1182 9.10347 15.2224 9.02221C15.3266 8.94094 15.3994 8.82608 15.4284 8.69718L16.5713 3.55437C16.5904 3.46959 16.59 3.38155 16.57 3.29696C16.55 3.21238 16.5109 3.13347 16.4558 3.06624C16.4007 2.99902 16.331 2.94525 16.252 2.90903C16.173 2.87281 16.0868 2.8551 15.9999 2.85723ZM14.3999 8.00005H4.35425L3.55425 4.00008H15.2856L14.3999 8.00005Z" fill="white"/>
          </svg>
        </router-link>
        <router-link to="/profile">
          <svg width="22" height="21" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.58545 8.5C10.2777 8.5 10.9544 8.29473 11.5299 7.91015C12.1055 7.52556 12.5541 6.97894 12.819 6.33939C13.0839 5.69985 13.1532 4.99612 13.0182 4.31719C12.8831 3.63825 12.5498 3.01461 12.0603 2.52513C11.5708 2.03564 10.9472 1.7023 10.2683 1.56725C9.58933 1.4322 8.8856 1.50152 8.24606 1.76642C7.60652 2.03133 7.05989 2.47993 6.67531 3.05551C6.29072 3.63108 6.08545 4.30777 6.08545 5C6.08545 5.92826 6.4542 6.8185 7.11058 7.47488C7.76695 8.13125 8.65719 8.5 9.58545 8.5ZM9.58545 2.5C10.0799 2.5 10.5633 2.64662 10.9744 2.92133C11.3855 3.19603 11.7059 3.58648 11.8951 4.04329C12.0844 4.50011 12.1339 5.00278 12.0374 5.48773C11.9409 5.97268 11.7028 6.41814 11.3532 6.76777C11.0036 7.1174 10.5581 7.3555 10.0732 7.45197C9.58822 7.54843 9.08556 7.49892 8.62874 7.3097C8.17193 7.12048 7.78148 6.80005 7.50678 6.38893C7.23207 5.9778 7.08545 5.49446 7.08545 5C7.08545 4.33696 7.34884 3.70108 7.81768 3.23223C8.28652 2.76339 8.92241 2.5 9.58545 2.5Z" fill="white"/>
          <path d="M15.8204 12.1851C15.0186 11.3377 14.0523 10.6626 12.9807 10.2012C11.9091 9.7399 10.7547 9.50195 9.58795 9.50195C8.42124 9.50195 7.2668 9.7399 6.19518 10.2012C5.12356 10.6626 4.1573 11.3377 3.35545 12.1851C3.18161 12.3708 3.08506 12.6158 3.08545 12.8701V15.5001C3.08545 15.7654 3.19081 16.0197 3.37834 16.2073C3.56588 16.3948 3.82023 16.5001 4.08545 16.5001H15.0855C15.3507 16.5001 15.605 16.3948 15.7926 16.2073C15.9801 16.0197 16.0855 15.7654 16.0855 15.5001V12.8701C16.0872 12.6165 15.9925 12.3716 15.8204 12.1851ZM15.0855 15.5001H4.08545V12.8651C4.79406 12.119 5.64709 11.5248 6.59263 11.1188C7.53816 10.7128 8.55643 10.5034 9.58545 10.5034C10.6145 10.5034 11.6327 10.7128 12.5783 11.1188C13.5238 11.5248 14.3768 12.119 15.0855 12.8651V15.5001Z" fill="white"/>
          </svg>
        </router-link>
        <router-link to="/profile">
          <svg width="18" height="17" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5854 13.2678L10.6748 9.35711C11.6145 8.22892 12.0832 6.78185 11.9832 5.31693C11.8832 3.85202 11.2223 2.48205 10.1379 1.49202C9.05356 0.501988 7.62927 -0.0318806 6.16132 0.00147384C4.69338 0.0348283 3.29481 0.632837 2.25655 1.6711C1.21829 2.70936 0.620277 4.10793 0.586923 5.57588C0.553569 7.04382 1.08744 8.46811 2.07747 9.55246C3.0675 10.6368 4.43747 11.2977 5.90238 11.3977C7.36729 11.4977 8.81437 11.0291 9.94256 10.0893L13.8532 14L14.5854 13.2678ZM1.63963 5.71468C1.63963 4.79292 1.91297 3.89186 2.42507 3.12545C2.93717 2.35903 3.66504 1.76168 4.51663 1.40894C5.36823 1.0562 6.3053 0.963907 7.20934 1.14373C8.11339 1.32356 8.94381 1.76743 9.59559 2.41921C10.2474 3.07099 10.6912 3.90141 10.8711 4.80546C11.0509 5.70951 10.9586 6.64658 10.6059 7.49817C10.2531 8.34976 9.65577 9.07763 8.88936 9.58974C8.12294 10.1018 7.22188 10.3752 6.30013 10.3752C5.06451 10.3738 3.87989 9.88235 3.00617 9.00863C2.13246 8.13492 1.641 6.9503 1.63963 5.71468Z" fill="white"/>
          </svg>
        </router-link>
      </li>
      <div @click="toggleSideBarMenu" class="burger d-block d-md-none" :class="{active: toggleSideBar}">
        <div class="strip burger-strip">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </ul>

    <div v-if="toggleSideBar" :class="{active: toggleSideBar}" class="sidebar bg-black position-fixed top-0 start-0 h-100 w-100">
      <div class="content d-flex flex-column align-items-start">
        <!-- <router-link class="text-decoration-none text-white fw-bold" to="/">
          <img src="../assets/logo.png" alt="" />
        </router-link> -->
        <li class="nav-item dropdown list-unstyled mb-4">
        <a
          class="nav-link dropdown-toggle text-white"
          href="#"
          id="navbarDarkDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Products
        </a>
        <ul
          class="dropdown-menu dropdown-menu-white rounded-0"
          aria-labelledby="navbarDarkDropdownMenuLink"
        >
          <li><a class="dropdown-item" href="/product/spices">Spice</a></li>
          <li><a class="dropdown-item" href="/product/seasonings">Seasonings</a></li>
          <li><a class="dropdown-item" href="/product/herbs">Herbs</a></li>
          <li><a class="dropdown-item" href="/product/herbal-teas">Herbal Teas</a></li>
          <li><a class="dropdown-item" href="/product/herbal-oils">Herbal Oils</a></li>
        </ul>
      </li>
      <li class=" list-unstyled mb-4">
        <router-link
          class="text-decoration-none text-white fw-bold"
          to="/recipes"
        >
          Recipes
        </router-link>
      </li>
      <li class=" list-unstyled mb-4">
        <router-link
          class="text-decoration-none text-white fw-bold"
          to="/your-recipes"
        >
          Your Recipes
        </router-link>
      </li>
      <li class=" list-unstyled mb-4">
        <router-link
          class="text-decoration-none text-white fw-bold"
          to="/story"
        >
          Our Story
        </router-link>
      </li>

      <div class="d-flex gap-3">
            <a href="#">
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
            <a href="#">
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
            <a href="#">
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
            </a>
          </div>
      </div>
    </div>
  </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarItem",
  data() {
    return {
      search: false,
      toggleSideBar: false
    };
  },
  methods: {
    toggleSearch() {
      this.search = !this.search;
    },
    toggleSideBarMenu() {
      this.toggleSideBar = !this.toggleSideBar;
      if(this.toggleSideBar == true) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sidebar {
  z-index: 3;
  margin-left: -100%;
  .content {
    padding: 30px;
    margin-top: 90px;
  }
}
.sidebar.active {
  margin-left: 0;
}
nav {
  height: 90px;
  padding: 0 !important;
  display: flex;
  align-items: center;
}
.search {
  input {
    outline: none;
  }
}
.nav-logo {
  z-index: 4;
}
.burger {
  z-index: 4;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s ease;
}
// .burger.active {
//     background: rgb(56 56 56);
// }
.burger-strip {
    transition: all .5s ease;
}
.strip div {
    height: 3px;
    border-radius: 2px;
    background: #ffff;
    margin: 10px;
    transition: all .55s cubic-bezier(0.075, 0.82, 0.165, 1);
    width: 40px;
}
.burger.active .strip div {
    background: #ffff;
}
/* BURGER 1 */
.burger-strip div:first-child {
    width: 16px;
}
.burger-strip div:last-child {
    width: 28px;
}
.burger.active .burger-strip div:first-child {
    transform: rotate(45deg) translateY(1px) translateX(5px);
}
.burger.active .burger-strip div:nth-child(2) {
    transform: rotate(-45deg);
}
.burger.active .burger-strip div:last-child {
    transform: rotate(45deg) translateY(-13px) translateX(2px);
}
</style>
