<template>
  <img class="logo" alt="Vue logo" src="./assets/logo.png">
  <MyComponent first="firstProperty" middle="Middle Name" last="Doe" />
  <div class="container">
    <div v-for="index in 1000" :key="index">
      <MyCard
        img="https://miro.medium.com/max/3200/1*-zkpV1IfOv-1dux6ZqWBCQ.png"
        top="Hello World"
        subtitle="TypeScript"
        :meta="{master: index%2 === 0, explicit: index%3 === 0, label: '1995'}"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { MyCard, MyComponent } from 'stencil-demo-vue';
// import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    // HelloWorld,
    MyCard,
    MyComponent,
  },
})
export default class App extends Vue {}
</script>

<style>
.logo {
  text-align: center;
  height: 120px;
  display: block;
  margin: 0 auto;
}
.container {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin-top: 60px;
  width: 100%;
}
</style>
