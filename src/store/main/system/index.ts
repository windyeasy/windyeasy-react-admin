import { postUserList } from '@/services/main/system/system'
import { AsyncThunkState } from '@/store'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PAGE_SIZE } from './constants'
interface ISystemState {
  userList: any[]
  pageTotal: number
  currentPage: number
  pageSize: number
}
const initialState: ISystemState = {
  userList: [],
  pageTotal: 0,
  currentPage: 1,
  pageSize: PAGE_SIZE
}

// 默认查询用户列表
export const fetchUserListAction = createAsyncThunk<void, any, AsyncThunkState>(
  'fetchUserList',
  (queryInfo, { getState, dispatch }) => {
    // 获取分页查询信息
    const system = getState().system
    const offset = (system.currentPage - 1) * system.pageSize
    const info = { offset, size: system.pageSize }
    queryInfo = { ...info, ...queryInfo }
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
    }
  }
})

const systemReducer = systemSlice.reducer
export const { changeUserListAction, changePageTotalAction } = systemSlice.actions
export default systemReducer
