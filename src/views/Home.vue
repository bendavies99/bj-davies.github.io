<template>
  <div>
    <div id="port-bg">
      <v-container bg fill-height grid-list-md text-xs-center>
        <v-layout row wrap align-center>
          <v-flex class="white--text">
            <h1 class="name-header">Ben Davies</h1>
            <v-divider dark/>
            <br>
            <h1 class="font-weight-light">Full Stack Developer</h1>
            <br>
            <h3 class="red--text">Site under construction!</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
$name-font-size: 70px;
#port-bg {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 95), rgba(0, 0, 0, 0.35)),
    url('/images/bg.jpg'), center, center;
}
.name-header {
  font-size: $name-font-size;
}
</style>

