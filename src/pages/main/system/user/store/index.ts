import { postUserList } from '../service'
import { AsyncThunkState } from '@/store'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PAGE_SIZE } from './constants'
interface IUserState {
  userList: any[]
  pageTotal: number
  currentPage: number
  pageSize: number
  searInfo: any
  isModalOpen: boolean
}
const initialState: IUserState = {
  userList: [],
  pageTotal: 0,
  currentPage: 1,
  pageSize: PAGE_SIZE,
  searInfo: {},
  isModalOpen: false
}

// 默认查询用户列表
export const fetchUserListAction = createAsyncThunk<void, void, AsyncThunkState>(
  'fetchUserList',
  (_, { getState, dispatch }) => {
    // 获取分页查询信息
    const user = getState().user
    const offset = (user.currentPage - 1) * user.pageSize
    const info = { offset, size: user.pageSize }
    const queryInfo = { ...info, ...user.searInfo }
    postUserList(queryInfo).then((res) => {
      if (res.data && res.data.list) {
        dispatch(changeUserListAction(res.data.list))
        dispatch(changePageTotalAction(res.data.totalCount))
      }
    })
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserListAction(state, { payload }) {
      state.userList = payload
    },
    changePageTotalAction(state, { payload }) {
      state.pageTotal = payload
    },
    changePageSizeAction(state, { payload }) {
      state.pageSize = payload
    },
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload
    },
    changeSearInfoAction(state, { payload }) {
      state.searInfo = payload
    },
    changeIsModalOpenAction(state, { payload }) {
      state.isModalOpen = payload
    }
  }
})

const userReducer = userSlice.reducer
export const {
  changeUserListAction,
  changePageTotalAction,
  changePageSizeAction,
  changeCurrentPageAction,
  changeSearInfoAction,
  changeIsModalOpenAction
} = userSlice.actions
export default userReducer
