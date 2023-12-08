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
  /**
   * 用同一个modal实现删除与添加功能
   */
  isModalOpen: boolean
  modalTitle: string
  editUserInfo: any
  isModalNew: boolean // 通过这个状态控制删除与编辑
}
const initialState: IUserState = {
  userList: [],
  pageTotal: 0,
  currentPage: 1,
  pageSize: PAGE_SIZE,
  searInfo: {},
  isModalOpen: false,
  modalTitle: '',
  isModalNew: true,
  editUserInfo: {}
}

// 查询用户列表
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
interface HandleModalPayload {
  isModalNew?: boolean
  record?: any
}
// 用户管理modal管理
export const handleModalAction = createAsyncThunk<void, HandleModalPayload, AsyncThunkState>(
  'handleModal',
  (payload, { dispatch }) => {
    const { isModalNew = true } = payload
    dispatch(changeIsModalNewAction(isModalNew))
    // 不是新增
    if (!isModalNew) {
      // 就添加编辑用户信息
      dispatch(changeEditUserInfoAction(payload.record))
      dispatch(changeModalTitleAction('编辑用户'))
    } else {
      dispatch(changeModalTitleAction('新增用户'))
    }
    dispatch(changeIsModalOpenAction(true))
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
    },
    changeEditUserInfoAction(state, { payload }) {
      state.editUserInfo = payload
    },
    changeModalTitleAction(state, { payload }) {
      state.modalTitle = payload
    },
    changeIsModalNewAction(state, { payload }) {
      state.isModalNew = payload
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
  changeIsModalOpenAction,
  changeModalTitleAction,
  changeIsModalNewAction,
  changeEditUserInfoAction
} = userSlice.actions
export default userReducer
