// 1. 配置axios基地址
axios.defaults.baseURL = 'https://hmajax.itheima.net'

// 2. 公共的 提示框函数
const showToast = (msg) => {
  // alert(msg)//
  // 2.1 先生成实例对象
  const mytoast = document.querySelector('.my-toast')
  const toastObj = new bootstrap.Toast(mytoast)
  toastObj.show()
  // 2.2 让提示框组件内容改变
  document.querySelector('.toast-body').innerHTML = msg
}
// showToast('成功')