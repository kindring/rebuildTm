<template>
  <div class="container bg-red-700">
    <div class="content w-screen">

    </div>
    <div class="floor">
      <floor></floor>
    </div>
  </div>
</template>

<script>
import floor from '../components/floor.vue'
export default {
  components: { floor },}
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
  height: calc(100vh - 3.7rem);
}
.floor{
  width: 100%;
  height: 3.7rem;
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
