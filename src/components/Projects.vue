<template>
  <div id="projects">
    <v-container fluid grid-list-md text-xs-center>
      <v-flex md12>
        <h1>Projects</h1>
        <v-divider/>
      </v-flex>
    </v-container>
    <div v-for="(project, index) in projects" :key="'Project-' + index">
      <div
        data-aos="fade-up"
        class="white--text project"
        v-bind:style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.85)), url('${project.url}')` }"
        xs12
        sm12
        md12
      >
        <h2 class="title font-weight-light">{{ project.title }}</h2>
        <p class="description font-weight-thin">{{ project.description }}</p>
        <!-- <v-btn color="success" flat>See More Info</v-btn> -->
      </div>
      <br>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Projects extends Vue {
  private projects = [
    {
      title: 'Accuratus Accounting Intranet',
      description: 'Intranet for the staff at Accuratus',
      url: '/images/intranet ss.png',
    },
    {
      title: 'Babblebot 3.0 Core',
      description: `Discord Modular Bot. It uses the Discord API to allow a command system where a user enters a
      command such as !hi and the bot responds with Hello Ben.`,
      url: '/images/bg.jpg',
    },
    {
      title: 'SLAD Soduku Game',
      description: `In University I build a simple sudoku game with a team of us.`,
      url: '/images/bg.jpg',
    },
  ];
}
</script>

<style lang="scss" scoped>
#projects {
  min-height: 350px;
}
#avatar {
  width: 100% !important;
}
.project {
  width: 100%;
  min-height: 200px;
  padding: 20px;

  text-align: center;

  .title {
    padding-top: 20px;
    font-size: 50px !important;
  }
  .description {
    padding-top: 20px;
    font-size: 20px !important;
  }
}
</style>

