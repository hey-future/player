# 播放器嵌入页面使用说明

**1. 在页面里面引入 dmsplayer.min.js**&#x20;

引入播放器样式文件 dmsplayer.css&#x20;

html代码完整示例如下：

```html
<!DOCTYPE html> 
<html> 
 
<head> 
  <meta charset="UTF-8"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="width=device-width, initial-scale=1, maximum
scale=1, minimum-scale=1" name="viewport" /> 
  <title>播放器</title> 
  <link type="text/css" rel="stylesheet" href="./css/index.css" /> 
  <link type="text/css" rel="stylesheet" href="./css/dmsplayer.css" 
/> 
</head> 
<style> 
</style> 
<body> 
  <div class="player-main"> 
    <div class="player-box"> 
      <div id="video_player"></div> 
    </div> 
  </div> 
</body> 
</html> 
<script src="./js/jquery.js"></script> 
<script src="./js/dmsplayer.min.js"></script> 
<script src="./js/index.js"></script> 
```

**2.播放器初始化 代码示例**

```javascript
var player = new DmsPlayer({ 
  containerId: 'video_player', 
  url: './video.mp4', 
  // cover: './images/cover.jpg', // 封面图 
currentTime: 10, // 指定视频开始播放时间 
  autoplay: false, // 是否自动播放 
  loop: false, // 是否循环播放 
  loginTipType: 0, // 试看结束提示方式 0 播放器弹窗提示 1 直接跳转登录地址 
  loginUrl: 'http://dms.multimediapress.cn/#/login', // 登录地址 
  getUserInfo: '', // 获取用户信息接口地址 
  token: '', // 获取用户登录信息接口需要传的token参数 
  showBar: true, //是否显示控制条 
  autoHideBar: true, // 是否自动隐藏控制条 
  autoHideBarTime: 5000, // 自动隐藏控制条时间 
  allowDuration: 1, // 允许试看时长 
  playType: 1, // 播放方式 1地址播放（开放不加密）3防盗链播放（通过视频编号
获取视频播放地址，防盗） 
  appId: 17, // 获取防盗链项目id参数 
  vid: 60623, // 视频编号 
  logo: { 
    url: './images/logo.png', 
    postion: 1, // 0 不显示 1左上角 2 右上角 3 左下角 4右下角 
    w: '20%', // logo图片宽度 单位100% 或者px 
    h: 'auto'  // logo图片高度 单位100% 或者px 
  }, 
  loginEvent: function() { // 自定义登录事件 
    alert('登录'); 
  }, 
  playCallBackTime: 1000, // 播放多长时间回调一次 单位毫秒 
  playCallBack: function(data) { // 播放回调函数，在这里自定义调用播放过程
中请求接口逻辑 data返回当前视频播放的时间,以及总时长 
    console.log(data) 
  }, 
onPlay: function(data) { // 当点击播放时的回调 
console.log('播放') 
}, 
onPause: function(data) { // 当播放暂停时的回调 
    console.log('暂停') 
  }, 
onEnd: function(data) { // 当播放完成时的回调 
     console.log('结束') 
}, 
  onError: function(data) { // 当播放失败时的回调 
     console.log('播放失败') 
  }, 
 
  fullscreenCallBack: function(value) { 
     // 全屏回调 value = true 全屏 false 退出全屏 
       console.log(value) 
  } 
 
}) 
 
 
 // 视频跳转到指定时间调用的方法 
player.changeCurrentTime(10) 
  
 // 播放器销毁方法 
player.destroy() 
```

**3. 播放器参数说明**

| 参数名                | 类型       | 是否必填 | 描述                                                                                                                                                                 |
| ------------------ | -------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| containerId        | String   | 必选   | 播放器容器的id,例如 ‘player’                                                                                                                                               |
| url                | String   | 可选   | 视频地址，当playType=1的时候url要传                                                                                                                                           |
| cover              | String   | 可选   | 视频封面图                                                                                                                                                              |
| muted              | Boolean  | 可选   | 默认 false,  false:不静音 true静音                                                                                                                                        |
| autoplay           | Boolean  | 可选   | 默认 false,  false:不自动播放 true自动播放 设置默认自动播放需要开启静音播放                                                                                                                   |
| drag               | Boolean  | 可选   | 默认 false,  false:视频进度条可以拖拽 true：视频进度条不可以拖拽                                                                                                                         |
| hideRate           | Boolean  | 可选   | 默认 false,false:不隐藏倍速，true: 隐藏倍速按钮                                                                                                                                  |
| hideTrack          | Boolean  | 可选   | 默认 false,false不隐藏字幕， true:隐藏字幕按钮                                                                                                                                   |
| loop               | Boolean  | 可选   | 默认 false,  false 不循环播放 true循环播放                                                                                                                                    |
| showTextTrack      | Boolean  | 可选   | 默认 false,  false 不显示字幕 true显示字幕                                                                                                                                    |
| trackSrc           | String   | 可选   | 字幕文件地址，vtt格式                                                                                                                                                       |
| showBar            | Boolean  | 可选   | 默认 false, 是否显示控制条                                                                                                                                                  |
| autoHideBar        | Boolean  | 可选   | 是否自动隐藏控制条                                                                                                                                                          |
| autoHideBarTime    | Number   | 可选   | 自动隐藏控制条时间                                                                                                                                                          |
| allowDuration      | Number   | 可选   | 允许试看时长 单位分钟 等于-1是可以完整观看视频                                                                                                                                          |
| playType           | Number   | 必选   | 默认 1播放方式1地址播放（开放不加密）3防盗链播放（通过视频编号获取视频播放地址，防盗）                                                                                                                      |
| appId              | Number   | 可选   | 防盗链视频所属项目id参数 playType=3的时候 该参数必传                                                                                                                                  |
| vid                | Number   | 可选   | 视频编号  playType=3的时候 该参数必传                                                                                                                                          |
| loginTipType       | Number   | 可选   | 试看结束提示方式 0 播放器弹窗提示 1 直接跳转登录地址                                                                                                                                      |
| loginUrl           | String   | 可选   | 登录跳转地址                                                                                                                                                             |
| getUserInfo        | String   | 可选   | 获取用户信息接口地址                                                                                                                                                         |
| token              | String   | 可选   | 获取用户登录信息接口需要传的token参数                                                                                                                                              |
| logo               | Object   | 可选   | {url: './images/logo.png', // 播放器上的logo图片路径地址 postion: 1, // 0 不显示 1左上角 2 右上角 3 左下角 4右下角 w: '20%', // logo图片宽度 单位100% 或者px h: 'auto'  // logo图片高度 单位100% 或者px   }, |
| loginEvent         | Function | 可选   | 自定义登录事件。 这个方法里面可以自定义点击登录按钮的事件，不配置此项方法，则默认使用跳转链接的方式登录                                                                                                               |
| playCallBackTime   | Number   | 可选   | 播放多长时间回调一次 单位毫秒                                                                                                                                                    |
| playCallBack       | Function | 可选   | 放回调函数，在这里自定义调用播放过程中请求接口逻辑data返回当前视频播放的时间,以及总时长{currentTime: 当前播放时间, duration: 总时长}                                                                                 |
| fullscreenCallBack | Function | 可选   | 全屏回调函数，自定义调用监听播放器的全屏变化 data返回一个Boolean类型的值，= true 为全屏 =false 为退出全屏                                                                                                 |
| currentTime        | Number   | 可选   | 默认0，指定视频开始播放的时间，单位为秒、可以根据设置的开始时间（秒），直接从指定的时间点开始播放                                                                                                                  |
| onPlay             | Function | 可选   | 当视频开始播放时触发的自定义回调方法data返回当前视频播放的时间,以及总时长 {currentTime: 当前播放时间, duration: 总时长}                                                                                       |
| onPause            | Function | 可选   | 当视频播放暂停时触发的自定义回调方法，data 返回当前视频播放的时间,以及总时长 {currentTime: 当前播放时间, duration: 总时长}                                                                                     |
| onEnd              | Function | 可选   | 当视频播放完的触发的自定义回调方法data返回当前视频播放的时间,以及总时长{currentTime: 当前播放时间, duration: 总时长}                                                                                         |
| onError            | Function | 可选   | 当视频播放失败时的触发的自定义回调方法                                                                                                                                                |
| onDestroy          | Function | 可选   | 当播放器销毁时的触发的自定义回调方法                                                                                                                                                 |

 
 
 **4. 播放器方法**

| 方法名                      | 描述                                                                          |
| ------------------------ | --------------------------------------------------------------------------- |
| destroy()                | 播放器销毁方法, 调用方法示例 player.destroy()                                            |
| changeCurrentTime (time) | 视频跳转到指定播放事件调用方法，参数（time）为要跳转到的播放时间（单位秒）,调用示例 player. changeCurrentTime (10) |

