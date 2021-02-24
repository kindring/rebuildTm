<template>
  <div :class="{'bg-music':true ,'hide':hide}">
      <audio 
        :src="playaudio"
        ref="audio"
        autoplay="true"
      >

      </audio>
  </div>
</template>

<script>
export default {
    data(){
        return {
            playaudio:'https://music-1259240448.cos.ap-guangzhou.myqcloud.com/music/Diverse%20System%20-%20%E5%85%89.mp3',
            hide: false
        }
    },
    mounted(){
        this.play();
    },
    methods:{
        play(url){
            this.playaudio = url || this.playaudio;
            let el = this.$refs.audio;
            this.hide = false;
            this.$nextTick(()=>{
                el.play();
                this.hide = true;
            })
        }
    }
}
</script>

<style scoped>
.bg-music{
    opacity: 0;
    z-index:99;
    position: absolute;
    left: 50%;
    top: 50%;
}
.hide{
    left:-500%;
    top:-500%;
}
</style>