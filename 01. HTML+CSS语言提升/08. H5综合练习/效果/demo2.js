var doms = {
  // 视频元素
  video: document.querySelector('video'),
  btnPlay: document.querySelector('#btnPlay'),
  // 进度条相关元素
  progress: {
    // 进度条
    range: document.querySelector('#progress'),
    // 当前播放时间
    current: document.querySelector('#current'),
    // 总时间
    total: document.querySelector('#total'),
  },
  // 播放倍率的容器
  rate: document.querySelector('#rate'),
  // 音量相关元素
  volume: {
    // 滑动块
    range: document.querySelector('#volume input'),
    // 文本
    text: document.querySelector('#volume span'),
  },
  // 保存和设置按钮
  buttons: {
    save: document.querySelector('#save'),
    load: document.querySelector('#load'),
  },
  controls: document.querySelectorAll('.controls'),
};

// 注册播放点击事件 是播放就暂停是暂停就播放
doms.btnPlay.addEventListener('click', function () {
  if (doms.video.paused) {
    doms.video.play();
  } else {
    doms.video.pause();
  }
});


doms.video.addEventListener('loadeddata', init)

function init() {
  setProgress()
  setRate()
  setVolume()
  for (var i = 0; i < doms.controls.length; i++) {
    doms.controls[i].style.display = 'block';
  }


}


//让每一个状态都正确
// 展示 正确的进度
function setProgress() {
  // 设置文本  
  doms.progress.current.innerText = formatTime(doms.video.currentTime);
  doms.progress.total.innerText = formatTime(doms.video.duration);
  // 设置进度条
  doms.progress.range.value = (doms.video.currentTime / doms.video.duration) * 100
}

// 格式化描述
function formatTime(sec) {
  var hour = Math.floor(sec / 3600)

  sec -= hour * 3600
  var minute = Math.floor(sec / 60)  //fenzhong

  sec -= minute * 60
  sec = Math.floor(sec)
  function _format(n) {
    if (n < 10) {
      return '0' + n;
    }
    return n
  }

  return _format(hour) + ':' + _format(minute) + ':' + _format(sec)



}

// 设置播放速率
function setRate() {
  var btns = doms.rate.querySelectorAll('button')
  for (var i = 0; i < btns.length; i++) {
    var rate = btns[i].dataset.rate
    if (+rate === doms.video.playbackRate) {
      btns[i].classList.add('active')
    } else {
      btns[i].classList.remove('active')
    }
  }
}


// 设置音量
function setVolume() {
  // 设置文本
  var percent = Math.floor(doms.video.volume * 100)
  if (doms.video.muted) {
    percent = 0;
  }
  doms.volume.text.innerText = percent + '%';
  // 设置进度条
  doms.volume.range.value = percent

}

doms.progress.range.addEventListener('input', function () {
  doms.video.currentTime = (this.value / 100) * doms.video.duration
  setProgress()
})


doms.video.addEventListener('timeupdate', function () {
  setProgress()
})

var btnsRate = doms.rate.querySelectorAll('button')
for (var i = 0; i < btnsRate.length; i++) {
  btnsRate[i].addEventListener('click', function () {
    doms.video.playbackRate = +this.dataset.rate
    setRate()
  })
}
doms.volume.range.addEventListener('input', function () {
  doms.video.volume = this.value / 100;
  setVolume();
});

doms.buttons.save.addEventListener('click', function () {
  var obj = {
    currentTime: doms.video.currentTime,
    rate: doms.video.playbackRate,
    volume: doms.video.volume,
  };
  var json = JSON.stringify(obj);
  localStorage.setItem('vdo', json);
  alert('保存设置成功');
});

doms.buttons.load.addEventListener('click', function () {
  var json = localStorage.getItem('vdo');
  var obj = JSON.parse(json);
  doms.video.currentTime = obj.currentTime;
  doms.video.playbackRate = obj.rate;
  doms.video.volume = obj.volume;

  setProgress();
  setRate();
  setVolume();

  doms.video.play();
});
