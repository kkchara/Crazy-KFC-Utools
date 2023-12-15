utools.onPluginEnter(({ code, type, payload }) => {
    console.log('用户进入插件应用', code, type, payload)
})

utools.onPluginEnter(({ code, type, payload }) => {
    console.log('用户进入插件应用', code, type, payload)
})
utools.onPluginOut((processExit) => {
    if (processExit) {
      console.log('插件应用完全退出')
    } else {
      console.log('插件应用隐藏后台')
    }
  })

  utools.onPluginDetach(() => {
    console.log('插件应用已作为系统窗口使用')
  })
