# 播放器 SDK 文档

Web 播放器 SDK（DmsPlayer），支持视频 / 文档 / 图片播放，内置知识点、知识导图（MindMap）、水印等能力。

### 项目运行步骤

1. 克隆项目到本地

```
git clone http://39.107.59.118:54369/product/dmsPlayer.git
cd dmsPlayer
```

2. 安装依赖

```
pnpm install
```

3. 启动项目

```
pnpm dev
```

4. 打开浏览器访问 http://localhost:5173/ 即可查看播放器 demo

5. 构建 SDK 产物（输出到 `lib/DmsPlayer`）

```
pnpm lib
```

产物文件：

| 文件 | 说明 |
| --- | --- |
| `lib/DmsPlayer/index.js` | ESM 模块 |
| `lib/DmsPlayer/index.umd.cjs` | UMD（CDN / 非模块环境） |
| `lib/DmsPlayer/index.css` | 样式 |

> 说明：`mind-elixir` 已内联进 SDK 产物；`vue` 为 external，需由宿主项目提供。

### 在 Vue 项目中接入 Web 播放器 SDK

下载或拷贝 `lib/DmsPlayer` 目录到项目中，在需要使用的地方引入即可。完整 demo 可参考 `src/views/index/index.vue`。

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
import { reactive, ref } from "vue";
import VideoPlayer from "./DmsPlayer/index.js";
import "./DmsPlayer/index.css";

const videoRef = ref();
const option = reactive({
  appId: 1,
  vid: 1223,
  playType: 1, // 1 地址播放；2 加密鉴权播放；3 防盗链播放
  url: "https://vjs.zencdn.net/v/oceans.mp4", // playType=1 时必传
  enterExitPoint: [170.72, 382.76],
});
const options = {
  autoPlay: true,
  h5pMindMap: {
    show: true,
    open: false,
  },
};

const handleLogin = () => {};
const handleTimeUpdate = (data) => {
  // console.log(data)
};
</script>
```

### 使用 UMD 方式引入

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link type="text/css" rel="stylesheet" href="./lib/DmsPlayer/index.css" />
    <title>播放器 demo umd 模式</title>
    <style>
      body { margin: 0; padding: 0; }
      #app { width: 100%; height: 100vh; }
      .player { width: 960px; height: 520px; }
    </style>
  </head>
  <body>
    <div id="app">
      <div class="player">
        <dms-player
          ref="videoRef"
          :player-id="'main'"
          :theme-color="'#F44336'"
          :play-type="1"
          :allow-duration="-1"
          :url="'https://vjs.zencdn.net/v/oceans.mp4'"
          :options="options"
        />
      </div>
    </div>
  </body>
</html>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="./lib/DmsPlayer/index.umd.cjs"></script>
<script>
  const { createApp } = Vue;
  const app = createApp({
    data() {
      return {
        options: {
          cover: "",
          autoPlay: true,
          speed: 1,
          controlBarVisibility: "always",
        },
      };
    },
    mounted() {
      console.log(this.$refs.videoRef);
    },
  });
  app.component("DmsPlayer", DmsPlayer.default || DmsPlayer);
  app.mount("#app");
</script>
```

### 在微信小程序中使用播放器

可以使用 web-view 嵌入 H5 网页的形式使用播放器：

```
<web-view src="https://xxx.xxx.cn/xxx.html"></web-view>
```

### 播放器 SDK API

#### 播放器配置 options（公共）

| 参数 | 说明 | 类型 | 默认值 |
| --- | ------ | --- | --- |
| watermark | 播放器水印 | object | 自定义水印。示例如下<br/>    watermark: {<br/>      show: true, // 是否显示水印 <br/>     text: '国家开放大学', // 水印文字<br/>     image:'', // 水印图片填写图片链接地址，图片和文字水印优先显示图片<br/>     color: '#ccc', // 水印文字颜色<br/>     opacity: 0.5, // 水印透明度<br/>     rotate: 30, // 水印旋转角度 <br/>     spacingX: 200, // 水印横向间隔 <br/>     spacingY: 100, // 水印纵向间隔 <br/>     imageWidth:'100px', // 图片水印宽度 <br/>     imageHeight: '50px' // 图片水印高度<br/>    } |

#### 播放器组件属性（视频类型）

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| platform | 所用视频所属平台 | string | 播放媒资视频传 'dms' 媒资测试 'dms-dev' 爱知汇测试传 'learn-beta' 爱知汇正式传 'learn' 默认 'dms' |
| appId | 应用id | number | - |
| resId | 资源id | number | 爱知汇里的资源池对应的资源id，非必传， 调用爱知汇资源池获取视频播放必传 |
| vid | 视频id | number | - |
| playerId | 播放器id | string | - |
| themeColor | 主题色 | string | #F44336 |
| options | 播放器配置 | object | - |
| enterExitPoint | 进入退出点 | array | - |
| playType | 播放方式 | number | 默认 1。<br/>1：传入 `url` 直接播放（开放不加密）<br/>2：通过 `appId` + `vid` 鉴权加密获取播放地址<br/>3：防盗链播放（通过 `appId` + `vid` 获取播放地址） |
| allowDuration | 允许试看时长 | number | `-1` 表示可观看全部；`>0` 表示试看分钟数，需登录后才可观看全部。可通过 `changeLoginState` 更改登录状态 |
| audit | 是否开启审核 | boolean | false。开启后只有审核通过的视频才能播放 |
| url | 视频地址 | string | playType=1 时必传 |

#### 播放器配置 options（视频类型）

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| license | License 授权 | Object | domain 为申请 License 时所填域名，key 为密钥。<br/>```{ domain: "example.com", key: "example-key" }``` |
| autoPlay | 是否自动播放 | boolean | false |
| allowClickProgressRange | 是否允许点击观看记录进度条跳转 | boolean | false |
| disableSeek | 是否禁用进度条 | boolean | false |
| disablePip | 是否禁用浏览器原生画中画 | boolean | false |
| controlBarVisibility | 控制栏显示方式 | string | `always`：一直显示；`click`：单击播放器区域；`hover`：移入播放器区域；`never`：隐藏控制栏 |
| controlBar | 控制栏配置 | object | - |
| cover | 封面图 | string | - |
| clickPause | 点击暂停 | boolean | false |
| showKnowledge | 显示知识点 | boolean | false |
| showKnowledgeSwitchBtn | 是否显示知识点切换开关 | boolean | true |
| knowledgeType | 获取知识点的方式 | number | 1：通过视频 id 接口获取；2：自定义数据源（配合 `knowledge`） |
| knowledge | 知识点数据 | array | `[{ name: "知识点名称", fromTo: [24.3, 162.94]}]` |
| knowledgeOpen | 知识点开关默认开启 | boolean | false |
| showKG | 是否在控制栏显示知识导图按钮 | boolean | true |
| h5pMindMap | 知识导图（MindMap）配置 | object | 见下方「知识导图 MindMap」。示例：<br/>```{ show: true, open: false, toolbar: true, draggable: false, seekOnNodeClick: true, rootTopic: "知识导图", data: [] }```（theme 可选，默认跟随 themeColor） |
| enableMockFullscreen | Aliplayer CSS 最大化（不进系统全屏）；H5 建议开启 | boolean | false |
| viewPoints | 观看记录时间点 | array | [] |
| showViewPointsBar | 显示观看记录 | boolean | false |
| marks | 视频标记点 | array | `[{ text: "文本描述", offset: 24.3, time: 24.3}]` |
| mute | 是否静音 | boolean | false。浏览器禁止自动播放时可配合静音自动播放 |
| logo | 播放器 logo | array | 自定义 Logo。示例：<br/>`logo: [{width: 30, position: 'bottom-right', origin: 'content', src: 'a.png'}]` <br/>src：图片地址；origin：`box`（播放器）/ `content`（视频内容）；width/height：百分比；position：`top-left` / `top-right` / `bottom-left` / `bottom-right`；offsetX/offsetY：偏移百分比 |
| speed | 播放速度 | number | 1 |
| showSpeed | 是否显示倍速按钮 | boolean | true |
| speedLevels | 倍速档位 | array | `[{ value: 0.5, label: "0.5x" }, { value: 1, label: "倍速" }, ...]` |
| showTracks | 是否显示字幕按钮 | boolean | true |
| textTracks | 字幕 | array | - |
| showBarTime | 控制栏自动隐藏时间（毫秒） | number | 3000 |
| volume | 音量 | number | 1 |
| loop | 是否循环播放 | boolean | false |
| start | 开始时间点 | number | 与 end 配合，截取视频片段作为一个独立视频。如原时长 60 秒，`start:10`、`end:30` 后显示时长为 20 秒 |
| end | 结束时间点 | number | 与 start 配合使用 |
| watchStartTime | 开始播放的时间 | number | 单独使用表示起播时间；与 watchEndTime 配合开启区间播放，只能在范围内播放和拖拽。单位：秒 |
| watchEndTime | 结束播放的时间 | number | 与 watchStartTime 配合。若小于 watchStartTime，则 watchStartTime 失效。单位：秒 |

#### 播放器回调（视频类型）

| 回调名称 | 说明 | 参数 |
| --- | --- | --- |
| login | 登录回调 | - |
| timeupdate | 播放进度回调 | `{ currentTime, duration, viewPoints }` |
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

#### 播放器内置方法（视频类型）

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
| PictureInPicture | 进入画中画模式 | boolean：true 进入，false 退出 |
| showToast | 显示吐司提示 | message, option |
| setWatermark | 设置/开关水印 | watermark 配置对象（含 `show`） |
| changeMindMapOpen | 打开/关闭知识导图 | value?: boolean，不传则切换 |
| toggleMindMap | 切换知识导图开关 | - |
| setMindMapData | 设置知识导图数据 | data |
| getMindMapData | 获取知识导图数据 | - |
| setMindMapTheme | 设置知识导图主题 | theme |
| mindMapScaleIn | 知识导图放大 | - |
| mindMapScaleOut | 知识导图缩小 | - |
| mindMapFit | 知识导图适合窗口 | - |
| mindMapCenter | 知识导图居中 | - |
| mindMapCenterActiveNode | 知识导图回到当前播放节点 | - |

### 知识导图 MindMap

视频播放器内置知识导图组件（基于 mind-elixir）。开启后可在控制栏点击导图按钮展开/收起，节点会随播放进度高亮，点击节点可跳转到对应时间点。未单独传入导图数据时，会自动使用知识点数据（`knowledge` / 接口返回）生成导图。

知识导图模式下不展示视频窗口，底层视频继续播放；点击节点仍可跳转进度。关闭导图后回到正常播放画面。

#### 播放器配置 options.h5pMindMap

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否启用知识导图（控制栏导图按钮，也可配合 `showKG`） | boolean | true |
| open | 默认是否打开导图面板 | boolean | false |
| data | 导图数据，支持知识点数组或 MindElixir 数据格式 | array / object | []（为空时自动使用知识点数据） |
| theme | 导图主题，会与内置暗色主题合并；强调色默认跟随播放器 `themeColor`，可不传 | object | {}（强调色默认 = themeColor） |
| editable | 是否可编辑节点 | boolean | false |
| draggable | 是否可拖拽节点 | boolean | false |
| toolbar | 是否显示右上角工具栏（收起/放大/缩小/适合窗口/回到当前节点） | boolean | true |
| rootTopic | 根节点标题 | string | 知识导图 |
| seekOnNodeClick | 点击节点是否跳转到节点 fromTo 起始时间并播放 | boolean | true |

配置示例：

```
h5pMindMap: {
  show: true,
  open: false,
  toolbar: true,
  draggable: false,
  seekOnNodeClick: true,
  rootTopic: '知识导图',
  // theme 可省略；省略时导图强调色跟随播放器 themeColor
  // theme: { cssVar: { '--bgcolor': '#14161A' } },
  // data 可省略；省略时会使用 knowledge / 接口知识点生成导图
  data: [
    {
      name: '课程引言',
      summary: '明确课程定位与教学目标',
      fromTo: [13.52, 52.64]
    },
    {
      name: '公文基础理论',
      summary: '解析公文本质属性与核心特征',
      fromTo: [52.64, 120],
      children: [
        {
          name: '公文的概念',
          fromTo: [60, 90]
        }
      ]
    }
  ]
}
```

#### 导图节点数据结构

| 字段 | 说明 | 类型 | 必填 |
| --- | --- | --- | --- |
| name / topic | 节点标题（优先 topic，其次 name） | string | 是 |
| summary | 节点摘要（最多展示约 2 行） | string | 否 |
| fromTo | 时间区间 `[开始秒, 结束秒]`，用于进度高亮与点击跳转 | number[] | 否 |
| id | 节点 id，不传则自动生成 | string | 否 |
| expanded | 是否默认展开 | boolean | 否，默认 true |
| children | 子节点列表 | array | 否 |

也可直接传入 MindElixir 标准数据：`{ nodeData: { id, topic, children, ... } }`。

#### MindMap 组件属性（独立使用）

组件路径：`src/components/MindMap/index.vue`

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| nodeData | 导图数据（知识点数组 / 单节点 / MindElixir 数据） | object / array | - |
| theme | 主题配置（会与内置暗色主题合并） | object | 内置暗色主题 |
| themeColor | 主题色；未在 theme.cssVar 中覆盖强调色时使用 | string | '' |
| editable | 是否可编辑 | boolean | false |
| draggable | 是否可拖拽 | boolean | false |
| showToolbar | 是否显示工具栏 | boolean | true |
| currentTime | 当前播放时间（秒），用于节点进度高亮 | number | 0 |
| duration | 视频总时长（秒）；root 节点进度 = currentTime / duration | number | 0 |
| rootTopic | 根节点标题（传入数组数据时使用） | string | 知识导图 |
| left / top | 绝对定位偏移，传值后组件变为 absolute 定位 | string / number | null |

#### MindMap 回调

| 回调名称 | 说明 | 参数 |
| --- | --- | --- |
| nodeClick | 点击节点回调 | node（含 fromTo、topic 等） |
| collapse | 点击工具栏「收起导图」回调 | - |

#### MindMap 内置方法

| 方法名称 | 说明 | 参数 |
| --- | --- | --- |
| setData | 设置导图数据 | data |
| getData | 获取导图数据 | - |
| setTheme | 设置主题 | theme |
| activeNodeByTime | 按时间高亮对应节点并更新进度 | time（秒） |
| handleScale | 按增量缩放 | scaleValue（如 0.1 / -0.1） |
| scaleIn | 放大 | - |
| scaleOut | 缩小 | - |
| fit | 适合窗口并居中 | - |
| center | 居中 | - |
| centerActiveNode | 定位到当前播放对应节点 | - |

使用示例（通过播放器实例）：

```
// 打开 / 关闭导图
videoRef.value.changeMindMapOpen(true)
videoRef.value.changeMindMapOpen(false)

// 设置导图数据
videoRef.value.setMindMapData([
  { name: '知识点A', summary: '说明', fromTo: [10, 60] }
])

// 缩放与布局
videoRef.value.mindMapScaleIn()
videoRef.value.mindMapScaleOut()
videoRef.value.mindMapFit()
videoRef.value.mindMapCenterActiveNode()
```

### 播放器组件属性（文档类型）

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| appId | 应用 id | number | - |
| vid | 文件 id | number | - |
| darkMode | 是否为暗黑主题 | boolean | false |
| url | 文档地址 | string | - |

#### 播放器回调（文档类型）

| 回调名称 | 说明 | 参数 |
| --- | --- | --- |
| pageChanged | 页码变化回调 | data |

#### 播放器内置方法（文档类型）

| 方法名称 | 说明 | 参数 |
| --- | --- | --- |
| zoom | 放大缩小 | 参数1：string `in` / `out`；参数2：number 倍数 |
| goToPage | 跳转到指定页码 | 参数1：number 页码 |
| getPagesInfo | 获取当前文档的页码信息 | - |
| setWatermark | 设置/开关水印 | watermark 配置对象 |
| destroy | 销毁 | - |

#### 播放器组件属性（图片类型）

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| appId | 应用 id | number | - |
| vid | 文件 id | number | - |
| url | 图片地址 | string | - |

#### 播放器内置方法（图片类型）

| 方法名称 | 说明 | 参数 |
| --- | --- | --- |
| zoom | 放大缩小 | 参数1：string `in` / `out`；参数2：number 倍数 |
| zoomTo | 缩放到指定比例 | number |
| rotate | 旋转 | 参数1：number 旋转角度 |
| rotateTo | 旋转到指定角度 | number |
| reset | 重置缩放与旋转 | - |
| setWatermark | 设置/开关水印 | watermark 配置对象 |
| destroy | 销毁 | - |

#### 常见问题

1. 更改播放器参数后怎么重新渲染视频?

```
// 1. 首先调用播放器销毁方法：
videoRef.value.destroy();
// 2. 然后重新初始化播放器：
videoRef.value.init();
```

2. 播放器提示播放出错 LICENSE ERROR，联系管理员生成播放器 License

```
// 修改播放器 options 参数增加 license 配置
"license": {
  domain: "crtvup.com.cn", // 替换成当前浏览器访问域名
  key: "6PdiKZSqULDBDP1VMe7a07ddcd50847418d8794bd756eb577"
}
```

3. 如何打包更新 SDK？

```
pnpm lib
# 产物输出到 lib/DmsPlayer/（index.js / index.umd.cjs / index.css）
```
