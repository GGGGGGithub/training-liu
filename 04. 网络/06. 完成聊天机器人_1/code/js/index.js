(() => {
  /* 创建入口函数 */
  const init = () => {
    getUserInfo();
    intiChatList();
    initEvent();
  }

  /* 创建一个事件入口函数 */

  const initEvent = () => {
    sendBtn.addEventListener('click', onSendBtnClick)
  }

  /* 定义事件绑定函数 */
  const onSendBtnClick = async () => {
    /* 判断发送值是否为空 */
    const content = inputContainer.value.trim();
    if (!content) {
      window.alert('发送消息不能为空')
      return
    }
    /* 调用渲染函数将自己的内容渲染到界面上 */
    renderChatForm([{ from: 'user', content }])
    inputContainer.value = ''
    /* 发送数据到后端 */
    const res = await fethcFn({
      url: '/chat',
      method: 'POST',
      params: { content }
    })
    renderChatForm([{ from: 'd', content: res.content }])
  }

  /* 定义获取用户信息的方法 */
  const getUserInfo = async () => {
    const res = await fethcFn({
      url: '/user/profile'
    })
    nickName.innerHTML = res.nickname
    accountName.innerHTML = res.loginId
    loginTime.innerHTML = formaDate(res.lastLoginTime)
  }

  /* 定义获取聊天历史信息的请求函数 */
  const intiChatList = async () => {
    const res = await fethcFn({
      url: '/chat/history',
      params: {
        page: 0,
        size: 10
      }
    })
    /* 调用渲染聊天界面函数 */
    renderChatForm(res)
  }

  /* 定义渲染聊天界面函数  */

  const renderChatForm = (list) => {
    /* 没有历史记录的时候，不需要进行一个渲染 */
    if (!list.length) {
      contentBody.innerHTML = `
                          <div class="chat-container robot-container">
                            <img src="./img/robot.jpg" alt="">
                            <div class="chat-txt">
                              您好！我是腾讯机器人，非常欢迎您的到来，有什么想和我聊聊的吗？
                            </div>
                          </div>
                                `
      return
    }
    const chatData = list.map(item => {
      /* 左右分别的进行渲染 */
      return item.from === 'user'
        ? `<div class="chat-container avatar-container">
                        <img src="./img/avtar.png" alt="">
                        <div class="chat-txt">${item.content}</div>
          </div>`
        : ` <div class="chat-container robot-container">
                    <img src="./img/robot.jpg" alt="">
                    <div class="chat-txt">
                      ${item.content}
                    </div>
            </div>`
    })
    contentBody.innerHTML += chatData.join(' ')
    const bottomDistance = document.querySelectorAll('.chat-container')[document.querySelectorAll('.chat-container').length - 1].offsetTop
    contentBody.scrollTo(0, bottomDistance)
  }





  init();
})()