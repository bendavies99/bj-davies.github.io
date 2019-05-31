<template>
  <div>
    <div id="port-bg">
      <div id="social">
        <v-tooltip bottom>
          <v-btn
            icon
            flat
            slot="activator"
            href="https://github.com/bendavies99/bendavies99.github.io"
            target="_blank"
          >
            <v-icon class="white--text">fab fa-github</v-icon>
          </v-btn>
          <span>GitHub</span>
        </v-tooltip>
      </div>
      <v-container bg fill-height text-xs-center>
        <v-layout align-center>
          <v-flex xs12 class="white--text">
            <h1 class="name-header">Ben Davies</h1>
            <v-divider dark/>
            <br>
            <h1 class="font-weight-light">Full Stack Developer / Software Engineer</h1>
            <br>
          </v-flex>
        </v-layout>
      </v-container>
      <div id="scrollTo">
        <v-tooltip top>
          <v-btn icon flat slot="activator" :ripple="false" @click.prevent="scroll()">
            <v-icon class="white--text arrow">fas fa-chevron-down</v-icon>
          </v-btn>
          <span>Click for More!</span>
        </v-tooltip>
      </div>
      <!-- About -->
      <v-container class="main-page" fluid fullscreen grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <about-me/>
          </v-flex>
          <v-flex xs12>
            <projects/>
          </v-flex>
          <v-flex
            xs12
            style="background-color: #ccc; text-align: center;"
            class="font-weight-light"
          >
            Powered By
            <a href="https://vuejs.org/" target="_blank">Vue</a>,
            <a href="https://vuetifyjs.com/en/" target="_blank">Vuetify</a>,
            <a href="https://fontawesome.com" target="_blank">FontAwesome</a>, and
            <a href="https://github.com/michalsnik/aos" target="_blank">AOS</a>; &copy;
            <a href="mailto:ben@bj-davies.co.uk">Ben Davies</a> 2019; All Rights Reserved;
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AboutMe from '@/components/AboutMe.vue';
import Projects from '@/components/Projects.vue';

@Component({
  components: {
    AboutMe,
    Projects,
  },
})
export default class Home extends Vue {
  mounted() {
    console.log(
      'Hey, Everyone. I know you like my console an all but do you mind closing it thank you. <3',
    );
  }

  scroll() {
    (document.getElementById('about') as Element).scrollIntoView();
  }
}
</script>

<style lang="scss" scoped>
$name-font-size: 70px;
#port-bg {
  width: 100vw;
  height: 101vh;
  background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.85)),
    url('/images/bg.jpg'), center, center;
}
.name-header {
  font-size: $name-font-size;
}

.main-page {
  padding: 0 !important;
}

#social {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 10px;
}

#scrollTo {
  text-align: center;
  width: 100%;
  height: 40px;
  bottom: 45px;
  position: absolute;
  color: white;

  .arrow {
    font-size: 50px;
  }

  .arrow:hover {
    color: #e3e3e3;
    font-size: 65px;
    cursor: pointer;
  }
}
</style>

