import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ACOUNT_TOKEN, MENU_LIST, USER_INFO } from '../service/constants'
import { getMenuByRoleID, getUserInfoByID } from '../service'
import { localCache } from '@/utils/cache'

// 存储登录信息
export const handleLoginAction = createAsyncThunk('handleLogin', (result: any, { dispatch }) => {
  // 存储token
  localCache.setCache(ACOUNT_TOKEN, result.token)
  // 获取用户信息，并存入store
  const id = result.id
  getUserInfoByID(id).then(async (res) => {
    localCache.setCache(USER_INFO, res.data)
    dispatch(changeUserInfoAction(res.data))
    // 据角色id获取菜单
    const roleId = res.data.role.id
    const result = await getMenuByRoleID(roleId)
    localCache.setCache(MENU_LIST, result.data)
    dispatch(changeMenuListAction(result.data))
    // 更改为登录状态
    dispatch(changeIsLoginAction(true))
  })
})

// 状态数据
interface ILoginState {
  userInfo: any
  isLogin: boolean
  menuList: any[]
}
const initialState: ILoginState = {
  userInfo: {},
  isLogin: false,
  menuList: []
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeUserInfoAction(state, { payload }) {
      state.userInfo = payload
    },
    changeIsLoginAction(state, { payload }) {
      state.isLogin = payload
    },
    changeMenuListAction(state, { payload }) {
      state.menuList = payload
    }
  }
})

const loginReducer = loginSlice.reducer
export const { changeUserInfoAction, changeIsLoginAction, changeMenuListAction } =
  loginSlice.actions
export default loginReducer
