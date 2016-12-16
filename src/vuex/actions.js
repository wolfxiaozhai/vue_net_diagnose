// action 会收到 store 作为它的第一个参数
// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
// 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
// export const decrementCounter = function ({ dispatch, state }) {
//  dispatch('DECREMENT', 1)
// }
// es6风格的函数
//export const decrementCounter = ({dispatch, state}) => dispatch('DECREMENT', 10)

import $ from 'jquery'

export const loadProfile = ({ dispatch }) => {
  // load login_info from numen
  $.ajax({
    url: 'http://127.0.0.1:7000/dns/api/get_login_info/',
    type: 'GET',
    dataType: 'json',
    success: (profile) => {
      dispatch('UPDATE_PROFILE', profile)
    }
  })
}