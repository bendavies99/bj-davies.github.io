<template>
  <div id="about">
    <v-container fluid grid-list-md text-xs-center>
      <v-flex md12>
        <h1>About Me</h1>
        <v-divider/>
      </v-flex>
    </v-container>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex data-aos="slide-left" xs12 sm12 md12 lg2>
          <v-avatar id="avatar" :size="`220px`">
            <img class="avatar-img" src="/images/pp.jpeg" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex data-aos="slide-left" class="about-text" xs12 sm12 md12 lg8>
          <span>
            <strong>Hi All!</strong>
            <p>
              I am a third year Computer Science student at Keele University. I have a great love for problem solving
              where I enjoy a challenge and solving it. Once I get an understanding of any framework I learn, I try to ensure that my
              code is as clean and efficient as possible. My passion for programming has led me to apply to be a software engineer
              where I particularly enjoy the process of designing something useful for people, understanding fully how it works,
              problem solving and debugging when the program fails to pass a test and having the feeling of accomplishing something
              when there is an end result which benefits people.
            </p>
          </span>
        </v-flex>
      </v-layout>
    </v-container>
    <br>
    <br>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AboutMe extends Vue {}
</script>

<style lang="scss" scoped>
#about {
  min-height: 350px;
}
#avatar {
  width: 100% !important;
}
.avatar-img {
  filter: grayscale(80%);
  box-shadow: 4px 4px 10px #000;
  width: 220px !important;
  margin: 0 auto !important;
}

.about-text {
  border-left: #aaa dashed 1px;
  span {
    padding-left: 10px !important;
    font-size: 20px;
    p {
      padding-left: 20px !important;
    }
  }
}
</style>

