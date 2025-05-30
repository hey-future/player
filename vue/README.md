# 播放器文档
### 在Vue项目中接入Web播放器SDK
可以下载播放器SDK，然后引入到项目中，然后在需要使用的地方引入即可
播放器demo代码示例, 完整代码可以查看src文件夹下的index.vue文件
```
<template>
 <div class="player">
    <VideoPlayer
      ref="videoRef"
      playerId="main"
      themeColor="#F44336"
      :options="options"
      :enterExitPoint="option.enterExitPoint"
      :appId="option.appId"
      :vid="option.vid"
      :playType="option.playType"
      :allowDuration="-1"
      :url="option.url"
      @login="handleLogin"
      @timeupdate="handleTimeUpdate"
    />
  </div>
</template>
<script lang="ts" setup>
import { nextTick, reactive, ref } from "vue";
import VideoPlayer from './DmsPlayer/index.js'
import './DmsPlayer/index.css'
const option = reactive({
  appId: 1,
  vid: 1223,
  playType: 1, // 播放方式 1地址播放（开放不加密）3防盗链播放（通过视频编号获取视频播放地址，防盗） 
  url: 'https://vjs.zencdn.net/v/oceans.mp4', // 视频地址，当playType=1的时候url要传           
  enterExitPoint: [170.72, 382.76],
});
//登录回调
const handleLogin = () => {};
//播放进度回调
const handleTimeUpdate = (data) => {
  // console.log(data)
};
</script>
```
