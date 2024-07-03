/**
 * 目标: 完成注册功能
 *  1.1 收集注册数据并校验
 *  1.2 发送请求
 *  1.3 显示结果
 *  1.4 跳转至登录页
 */
document.querySelector('#btn-register').addEventListener('click', async e => {
  // 1.1 收集注册数据并校验 serialize(表单, {})
  const data = serialize(document.querySelector('.register-form'), { hash: true, empty: true })
  // 并校验
  if (!data.username) {
    return showToast('用户名不能为空')
  }
  if (data.username.length < 8 || data.username.length > 30) {
    return showToast('用户名不符合要求')
  }
  if (!data.password) {
    return showToast('密码不能为空')
  }
  if (data.password.length < 6 || data.password.length > 30) {
    return showToast('密码不符合要求')
  }
  // 1.2 发送请求
  const res = await axios.post('/register', data)
  console.log(res)
  // 1.3 显示结果
  showToast(res.data.message) // 这里不要解构
  // 1.4 跳转至登录页注意:我们使用这个js是在 register.html 里面.所以要从register.html 出发寻找 login.html
  // 所以是当前路径
  setTimeout(() => {
    location.href = './login.html'
  }, 800)
})
JSON.stringify
