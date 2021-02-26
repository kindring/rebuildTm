<template>
  <header class="search-box w-full flex justify-around items-center">
      <div class="icon h-full p-0">
          <img class=" h-full" src="svg/qd.svg" alt="">
      </div>
      <div class="search h-full flex justify-around">
          <div class="icon QRsacn">
              <img class=" h-full" src="svg/QRscan.svg" alt="">
          </div>
          <span class="pl-1 pr-4">七彩虹gtx2060显卡</span>
          <div class="icon px-1">
              <img class=" h-full" src="svg/camera.svg" alt="">
          </div>
          <button class="btn text-white">
              搜索
          </button>
      </div>
      <div class="icon">
          <img class=" h-full" src="svg/vipcode.svg" alt="" srcset="">
      </div>
  </header>
</template>

<script>
export default {
    name: 'homeSearch'
}
</script>

<style>
.search-box{
}
.search-box .icon{
    height: 100%;
    box-sizing: border-box;
    padding: 0.2rem;
}
.search-box .search{
    width: auto;
    height: 85%;
    box-sizing: border-box;
    padding-left: 0.5rem;
    border-radius: 1rem;
    border: 1px solid orangered;
    font-size: 0.6rem;
    display: flex;
    color: #8e8989;
    align-items: center;
}
.search-box .search .QRsacn{
    height: 90%;
    padding: 0 0.5rem 0 0.1rem;
    border: 0 solid rgb(182, 182, 182);
    border-right-width: 1px;
}
.btn{
    width: auto;
    height: 100%;
    border: 2rem;
    padding: 0 1rem;
    background-color: orangered;
    border-radius: 2rem;
    outline: none;
}
.btn:focus{
    outline: none;
    outline:0;
} 
</style>