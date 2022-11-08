// import dayjs from 'dayjs';

export default {
  methods: {
    goPage(pagename) {
        this.$router.push({path: `${pagename}`}) 
        // window.location = `/${localStorage.getItem('country')}/${pagename}`;
    },
  },
};