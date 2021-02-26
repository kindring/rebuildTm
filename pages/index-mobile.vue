<template>
  <div class="container bg-red-700">
    <div class="content w-screen">
      <search class="w-full h-8 bg-white"></search>
    </div>
    <div class="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-32  relative overflow-hidden floor">
      <floor></floor>
    </div>
  </div>
</template>

<script>
import floor from '../components/floor.vue'
import Search from '../components/home/search.vue'
export default {
  components: { floor, Search },
  data(){
    return {
      header:{
        show: true
      },
      loading:false
    }
  }  
}
</script>


<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: space-between;
  text-align: center;
  flex-direction: column;
}
.content{
  width: 100%;
  flex: auto;
}
.floor{
  width: 100%;
}
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
