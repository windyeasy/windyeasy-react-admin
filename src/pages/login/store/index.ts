import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ACOUNT_TOKEN, USER_INFO } from '../service/constants'
import { getUserInfoByID } from '../service'
import { localCache } from '@/utils/cache'

// 存储登录信息
export const handleLoginAction = createAsyncThunk('handleLogin', (result: any, { dispatch }) => {
  // 存储token
  localCache.setCache(ACOUNT_TOKEN, result.token)
  // 获取用户信息，并存入store
  const id = result.id
  getUserInfoByID(id).then((res) => {
    localCache.setCache(USER_INFO, res.data)
    dispatch(changeUserInfoAction(res.data))
    dispatch(changeIsLoginAction(true))
  })
})

// 状态数据
interface ILoginState {
  userInfo: any
  isLogin: boolean
}
const initialState: ILoginState = {
  userInfo: {},
  isLogin: false
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
    }
  }
})

const loginReducer = loginSlice.reducer
export const { changeUserInfoAction, changeIsLoginAction } = loginSlice.actions
export default loginReducer
