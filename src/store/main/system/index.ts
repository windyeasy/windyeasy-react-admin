import { postUserList } from '@/services/main/system/system'
import { AsyncThunkState } from '@/store'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PAGE_SIZE } from './constants'
interface ISystemState {
  userList: any[]
  pageTotal: number
  currentPage: number
  pageSize: number
  searInfo: any
}
const initialState: ISystemState = {
  userList: [],
  pageTotal: 0,
  currentPage: 1,
  pageSize: PAGE_SIZE,
  searInfo: {}
}

// 默认查询用户列表
export const fetchUserListAction = createAsyncThunk<void, void, AsyncThunkState>(
  'fetchUserList',
  (_, { getState, dispatch }) => {
    // 获取分页查询信息
    const system = getState().system
    const offset = (system.currentPage - 1) * system.pageSize
    const info = { offset, size: system.pageSize }
    const queryInfo = { ...info, ...system.searInfo }
    postUserList(queryInfo).then((res) => {
      if (res.data && res.data.list) {
        dispatch(changeUserListAction(res.data.list))
        dispatch(changePageTotalAction(res.data.totalCount))
      }
    })
  }
)

const systemSlice = createSlice({
  name: 'system',
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
    }
  }
})

const systemReducer = systemSlice.reducer
export const {
  changeUserListAction,
  changePageTotalAction,
  changePageSizeAction,
  changeCurrentPageAction,
  changeSearInfoAction
} = systemSlice.actions
export default systemReducer
