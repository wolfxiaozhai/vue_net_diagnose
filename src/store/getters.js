// 这个 getter 函数会返回 count 的值
export function getUser (state) {
	return state.user_name
}

// 在 ES6 里你可以写成：
//export const getUser = (state) => state.user_name