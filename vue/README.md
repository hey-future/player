# 播放器SDK文档
### 项目运行步骤
1. 克隆项目到本地
```
git clone https://github.com/hey-future/player.git
cd player/vue
```
2. 安装依赖
```
npm install
```
3. 启动项目
```
npm run dev
```
4. 打开浏览器访问 http://localhost:5173/ 即可查看播放器demo
5. http://localhost:5173/demo.html  是使用cdn方式引入播放器demo
### 在Vue项目中接入Web播放器SDK
可以下载播放器SDK，然后在需要使用的地方引入即可 [播放器sdk下载](https://github.com/hey-future/player/tree/master/vue/src/DmsPlayer)
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

### 使用UMD方式引入
代码示例  完整示例请查看demo.html文件
```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link type="text/css" rel="stylesheet" href="./src/DmsPlayer/index.css" />
    <title>播放器demo umd模式</title>
    <style>
      body {
        margin: 0;
        padding: 0;
      }
      #app {
        width: 100%;
        height: 100vh;
      }
      .player {
        width: 960px;
        height: 520px;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <div class="player">
        <dms-player
        ref="videoRef"
        :player-id="'main'"
        :theme-color="'#F44336'"
        :play-type="2"
        :allow-duration="2"
        :app-id="18"
        :vid="211370"
        :options="options">
      </dms-player>
    </div>
  </div>
</body>
</html>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="./src/DmsPlayer/index.umd.cjs"></script>
<script >
    const { createApp, defineCustomElement } = Vue
    const app = createApp({
      // 应用根组件选项
      data() {
        return {
          options: {
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
            speed: 1, // 播放速度
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
          }
        };
      },
      mounted() {
        console.log(this.$refs.videoRef);// 获取到播放器组件实例
      },
      method: {

      }
    });
    // 注册播放器组件
    app.component('DmsPlayer', DmsPlayer.default || DmsPlayer);
    // 挂载应用
    app.mount('#app');
</script>
```

### 播放器SDK API
#### 播放器组件属性
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| appId | 应用id | number | - |
| vid | 视频id | number | - |
| playerId | 播放器id | string | - |
| themeColor | 主题色 | string | #F44336 |
| options | 播放器配置 | object | - |
| enterExitPoint | 进入退出点 | array | - |
| playType | 播放方式 | number | 默认1 1传入url视频地址播放  1地址播放（开放不加密）2 传appId和vid获取视频播放|
| allowDuration | 允许试看时长 | number | -1 标识可以观看全部 >0需要登录后才可以观看全部 单位秒  如果设置参数大于0可以通过调用播放器changeLoginState来更改登录状态|
| url | 视频地址 | string | - |
#### 播放器配置optins
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoPlay | 是否自动播放 | boolean | false |
| disableSeek | 是否禁用进度条 | boolean | false |
| controlBarVisibility | 控制栏显示方式 | string | always |
| controlBar | 控制栏配置 | object | - |
| cover | 封面图 | string | - |
| clickPause | 点击暂停 | boolean | false |
| showKnowledge | 显示知识点 | boolean | false |
| knowledge | 知识点数据 | array | [{ name: "知识点名称", fromTo: [24.3, 162.94]}] |
| knowledgeOpen| 知识点开关开启 | boolean | false |
| viewPoints | 观看记录时间点 | array | [] |
| showViewPointsBar | 显示观看记录 | boolean | false |
| marks | 视频标记点 | array | [{ text: "文本描述", offset: 24.3, time: 24.3}] |
| mute | 是否静音 | boolean | false 设置是否静音播放。在浏览器禁止自动播放时可以通过配置此参数进行静音自动播放 |
| logo | 播放器logo | array | 自定义Logo图片。示例如下：logo: [{width: 30,position: 'bottom-right',origin: 'content',src: 'a.png'}] 字段解释如下： src：Logo图片地址。 origin：定位参照物。取值如下： box：播放器 content：视频内容 width/height：Logo的宽高，单位是百分比（根据origin计算），如果只指定一边，则另一边按图片比例缩放。 position：Logo的相对位置，相对origin定位。取值如下： top-left：左上 top-right：右上 bottom-left：左下 bottom-right：右下 offsetX/offsetY：相对于position的偏移，单位：百分比%（根据origin计算）。 |
| speed | 播放速度 | number | 1 |
| textTracks | 字幕 | array | - |
| showBarTime | 控制栏自动隐藏时间，单位：毫秒。 | number | 3000 |
| volume | 音量 | number | 1 |
| loop | 是否循环播放 | boolean | false |
| start | 开始时间点 | number | 和 end 配合使用，截取视频的一部分作为一个独立的视频。如：原视频时长 60 秒，设置 start:10、end:30 后，视频显示时长为 20 秒，并从原视频的第 10 秒开始播放。 |
| end | 结束时间点 | number | 和 start 配合使用，截取视频的一部分作为一个独立的视频。如：原视频时长 60 秒，设置 start:10、end:30 后，视频显示时长为 20 秒，并从原视频的第 10 秒开始播放。 |
| watchStartTime | 开始播放的时间 | number | 单独使用，代表开始播放的时间； 和 watchEndTime 配合使用，开启区间播放功能，只能在开始和结束时间范围内播放和拖拽进度条。单位：秒 |
| watchEndTime | 结束播发的时间 | number | 和 watchStartTime 配合使用，开启区间播放功能，只能在开始和结束时间范围内播放和拖拽进度条。如果参数值小于watchStartTime，则watchStartTime失效。单位：秒 |


#### 播放器回调
| 回调名称 | 说明 | 参数 |
| --- | --- | --- |
| login | 登录回调 | - |
| timeupdate | 播放进度回调 | data |
| ready | 播放器准备就绪回调 | - |
| play | 播放回调 | - |
| pause | 暂停回调 | - |
| ended | 播放结束回调 | - |
| playing | 播放中回调 | - |
| canplay | 可以播放回调 | - |
| liveStreamStop | 直播流停止回调 | - |
| hideBar | 控制栏隐藏回调 | - |
| showBar | 控制栏显示回调 | - |
| waiting | 等待回调 | - |
| requestFullScreen | 全屏回调 | - |
| cancelFullScreen | 取消全屏回调 | - |
| error | 播放错误回调 | - |
| startSeek | 跳转开始回调 | - |
| completeSeek | 跳转完成回调 | - |

#### 播放器内置方法
| 方法名称 | 说明 | 参数 |
| --- | --- | --- |
| getCurrentTime | 获取当前播放时间 | - |
| getDuration | 获取视频总时长 | - |
| getVolume | 获取音量 | - |
| changeVid | 切换视频 | vid |
| pause | 暂停 | - |
| play | 播放 | - |
| seek | 跳转 | time |
| init | 初始化 | - |
| initPlayer | 初始化播放器 | - |
| destroy | 销毁 | - |
| changeLoginState | 切换登录状态 | state |
| isPlay | 判断是否正在播放 | - |
| setVolume | 设置音量 | volume |
| mute | 静音 | - |
| unmute | 取消静音 | - |
| setTextTrack | 设置字幕 | srclang |
| setSpeed | 设置播放速度 | speed |
| getViewPoints | 获取观看记录 | - |
| setViewPoints | 设置观看记录 | viewPoints |
| changeKnowledgeOpen | 切换知识点开关 | state |
| changeKnowledgeShow | 切换知识点显示 | state |
| initKnowledge | 初始化知识点 | - |
| initEnterExitPoint | 初始化进入退出点 | - |
| changeViewPointsShow | 切换观看记录显示 | state |
| setProgressMarkers | 设置进度条标记点 | markers |
| PictureInPicture | 进入画中画模式 | 参数值boolean true 进入画中画 false 退出画中画 |
| showToast | 显示吐司提示 | message,option |



