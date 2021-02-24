<template>
  <div class="floor-bar w-full h-full bg-gray-100 shadow-2xl">
    <ul class="ul w-full h-full flex justify-around">
      <li
        v-for="(item,i) in pageItem.list"
        :key="item.page+'_'+i"
        :class="{
          'page-item':true,
          'cursor-pointer':true,
          'page-item-now':pageItem.now==item.page,
          [item.selected.class||item.class]:true
        }"
        
      >
        <img 
          :src="item.page == pageItem.now?`svg/${item.icon}-selected.svg`:`svg/${item.icon}.svg`" 
          :alt="item.text"
          class='mt-2 mb-1 cursor-pointer'
          @click="pageItemClickHandel(item)"
        >
        <span
          class="cursor-pointer"
        @click="pageItemClickHandel(item)">
          {{pageItem.now==item.page?item.selected.text||item.text:item.text}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'floor',
    data(){
      return {
        pageItem:{
          now:null,
          list:[
            {
              page:'home',
              icon:'home',
              text:'首页',
              first: true,
              selected:{
                text: ' ',
                class: 'bigIcon'
              }
            },
            {
              page:'wt',
              icon:'wt',
              text:'微淘',
              selected:{}
            },
            {
              page:'msg',
              icon:'message',
              text:'消息',
              selected:{}
            },
            {
              page:'car',
              icon:'shopingcar',
              text:'购物车',
              selected:{}
            },
            {
              page:'me',
              icon:'me',
              text:'我的淘宝',
              selected:{}
            }
          ]
        }
      }
    },
    created(){
      for(let page in this.pageItem.list){
        if(page.firest){
          this.pageItem.now = page.page;
          break;
        }
      };
      if(!this.pageItem.now){
        this.pageItem.now = this.pageItem.list[0].page;
      };
    },
    methods:{
      pageItemClickHandel(item){
        this.pageItem.now = item.page;
      }
      
    }
}
</script>

<style>
.page-item{
  height: 100%;
  color: gray;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

}
.page-item img{
  display: block;
  height:40%;
  width: 100%;
  overflow: hidden;
}
.page-item-now{
  color: orangered;
}
.bigIcon img{
  height: 75%;
}
</style>