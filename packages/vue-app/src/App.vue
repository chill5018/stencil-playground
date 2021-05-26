<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MyComponent first="firstProperty" middle="Middle Name" last="Doe" />
  <MyCard
    img="https://miro.medium.com/max/3200/1*-zkpV1IfOv-1dux6ZqWBCQ.png"
    top="Hello World"
    subtitle="TypeScript"
  />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
