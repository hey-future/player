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
      :allowDuration="2"
      :url="option.url"
      @login="handleLogin"
      @timeupdate="handleTimeUpdate"
    />
  </div>
  <h3> 播放器配置 </h3>
  <h4> 使用应用文件编号加载视频 </h4>
  <label>应用编号</label>
  <input type="text" v-model="option.appId" />
  <label>视频编号</label>
  <input type="text" v-model="option.vid" />
  <button @click="handleInit(2)">初始化</button>
  <h4> 使用视频地址加载 </h4>
  <input type="text" v-model="option.url" />
  <button @click="handleInit(1)">初始化</button>
  <h3> 播放器方法 </h3>
  <button @click="handleDestory">销毁</button>
  <button @click="showProgressMarkers">显示视频打点标记</button>
  <button @click="hideProgressMarkers">隐藏视频打点标记</button>
  <button @click="hanldeShowKnowledge(true)">显示知识点开关</button>
  <button @click="hanldeShowKnowledge(false)">隐藏知识点开关</button>
  <button @click="changeKnowledgeOpen(true)">打开知识点显示</button>
  <button @click="changeKnowledgeOpen(false)">关闭知识点显示</button>
  <button @click="handleSetViewPoints()">设置观看记录进度条</button>
  <button @click="handleChangeViewPointsShow(true)">显示观看记录进度条</button>
  <button @click="handleChangeViewPointsShow(false)">隐藏观看记录进度条</button>  
  <button @click="initEnterExitPoint([0,300])">开启打点标记功能</button>
  <button @click="initEnterExitPoint()">关闭打点标记功能</button> 
</template>
<script lang="ts" setup>
import { nextTick, reactive, ref } from "vue";
import VideoPlayer from './DmsPlayer/index.js'
import './DmsPlayer/index.css'
const videoRef = ref(null);
// 销毁
const handleDestory = () => {
  videoRef.value.destroy();
}
// 初始化
const handleInit = (type) => {
  option.playType = type;
  nextTick(() => {
    videoRef.value.init();
  })
}
// 学习进度条显示隐藏控制
const handleChangeViewPointsShow = (val) => {
  videoRef.value.changeViewPointsShow(val);
}
// 设置学习进度
const handleSetViewPoints = () => {
  let arrPoint = []
  for (let i = 0; i < 600; i++) {
    arrPoint.push(i);
  }
  videoRef.value.setViewPoints(arrPoint);
}
const hanldeShowKnowledge = (val) => {
  const knowledge = [
    {
      name: "资本积累的本质与形式",
      summary: "资本家通过剩余价值资本化实现规模扩张，本质是剥削关系的再生产。",
      fromTo: [24.3, 162.94],
    },
    {
      name: "资本构成与积累影响因素",
      summary:
        "技术构成决定价值构成，剩余价值量、剥削程度等四因素影响积累规模。",
      fromTo: [170.72, 381.85],
    },
    {
      name: "资本有机构成与相对过剩人口",
      summary: "技术构成提高导致可变资本需求减少，形成相对过剩劳动力。",
      fromTo: [382.76, 578.92],
    },
    {
      name: "资本运动与社会再生产",
      summary:
        "资本循环三阶段与周转效率影响剩余价值产出，社会再生产需实现价值与实物补偿。",
      fromTo: [670.77, 1248.05],
    },
    {
      name: "剩余价值理论与经济危机",
      summary:
        "剩余价值转化为利润掩盖剥削，资本主义基本矛盾导致周期性经济危机。",
      fromTo: [1272.14, 1873.29],
    },
  ]
  videoRef.value.changeKnowledgeShow(val,knowledge);
}
const changeKnowledgeOpen = (val) => {
  videoRef.value.changeKnowledgeOpen(val);
}

const initEnterExitPoint = (data?) => {
  videoRef.value.initEnterExitPoint(data);
}

const hideProgressMarkers = () => {
  videoRef.value.setProgressMarkers([]);
}
const showProgressMarkers = () => {
  const marks = [
    {
      text: "资本积累的本质与形式",
      offset: 24.3,
      time: 24.3,
    },
    {
      text: "资本构成与积累影响因素",
      offset: 170.72,
      time: 170.72,
    },
    {
      text: "资本有机构成与相对过剩人口",
      offset: 382.76,
      time: 382.76,
    },
    {
      text: "资本运动与社会再生产",
      offset: 670.77,
      time: 670.77,
    },
    {
      text: "剩余价值理论与经济危机",
      offset: 1272.14,
      time: 1272.14,
    }
  ]
  videoRef.value.setProgressMarkers(marks);
}
const option = reactive({
  appId: 18,
  vid: 211370,
  playType: 2,
  url: 'https://vjs.zencdn.net/v/oceans.mp4'
});
const progressInfo = ref([]);
for (let i = 0; i < 100; i++) {
  progressInfo.value.push(i);
}
for (let i = 200; i < 500; i++) {
  progressInfo.value.push(i);
}
const options = {
  cover: "https://oucp.multimediapress.cn//images/1/2022/07/28/cdc35935-a46d-42db-b664-6b8eb4db9d85_1.jpg",
  logo: [
    {
      width: 20,
      position: "top-left",
      origin: "box",
      src: "./static/images/player_logo.png",
      offsetY: 1,
      offsetX: 2,
    }
  ],
  // disableSeek:true, //禁用进度条
  autoPlay: true,
  // mute: true,
  volume: 1,
  knowledgeOpen: true,
  // viewPoints: progressInfo,

  speed: 1, // 播放速度
  speedLevels: [
    { value: 0.25, label: "0.25x" },
    { value: 0.5, label: "0.5x" },
    { value: 1, label: "1.0x" },
    { value: 1.25, label: "1.25x" },
    { value: 1.5, label: "1.5x" },
    { value: 2, label: "2.0x" },
  ],
  textTracks: [
    {
      kind: "subtitles",
      label: "中文",
      src: "https://player.alicdn.com/file/official-video/subtitle-cn.vtt",
      srclang: "zh-CN",
    },
    {
      kind: "subtitles",
      label: "英文",
      src: "https://player.alicdn.com/file/official-video/subtitle-en-us.vtt",
      srclang: "en-US",
      default: true,
    },
  ],
  controlBarVisibility: "always",
  // watchStartTime: 12,
  // watchEndTime: 100,
  // start: 12,
  // end: 100,
  disablePip: true
};


const handleLogin = () => {};
const handleTimeUpdate = (data) => {
  // console.log(data)
};
</script>

<style>
.player {
  width: 640px;
  margin: 20px auto;
  height: 320px;
}
label {
  margin: 8px 16px;
}
input {
  margin:8px;
  height: 30px;
}
button {
  height: 32px;
  margin: 8px;
}

</style>
