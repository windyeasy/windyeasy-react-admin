import { AsyncThunkState } from '@/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { FetchPageListParamsType } from '../hooks/useWtbGetData'
import { getPageList } from '../service'
import { fetchListAndTotal } from '../utils/utils'
interface IWtbState {
  list: any[]
  total: number
  // 分页处理
  page: number
  size: number
  fetchPageListParams: FetchPageListParamsType | Record<string, never>
}
const initialState: IWtbState = {
  list: [],
  total: 0,
  page: 1,
  size: 10,
  fetchPageListParams: {}
}

const wtbSlice = createSlice({
  name: 'wtb',
  initialState,
  reducers: {
    changeListAction(state, { payload }) {
      state.list = payload
    },
    changeTotalAction(state, { payload }) {
      state.total = payload
    },
    changePageAction(state, { payload }) {
      state.page = payload
    },
    changeSizeAction(state, { payload }) {
      state.size = payload
    },
    changeParamsAction(state, { payload }) {
      state.fetchPageListParams = payload
    }
  }
})

// 获取列表户籍action
export const fetchPageListAction = createAsyncThunk<void, void, AsyncThunkState>(
  'fetchPageList',
  (_, { getState, dispatch }) => {
    // 获取分页查询信息
    const wtb = getState().wtb
    const { api, method, dataIndexs, totalIndexs } = wtb.fetchPageListParams
    const offset = (wtb.page - 1) * wtb.size
    const info = { offset, size: wtb.size }
    const queryInfo = { ...info }
    // 请求数据，通过分页
    getPageList(api, method, queryInfo).then((res) => {
      const { total, list } = fetchListAndTotal(res, dataIndexs, totalIndexs)
      dispatch(changeTotalAction(total))
      dispatch(changeListAction(list))
    })
  }
)
const wtbReducer = wtbSlice.reducer
export const {
  changeListAction,
  changeTotalAction,
  changePageAction,
  changeSizeAction,
  changeParamsAction
} = wtbSlice.actions
export default wtbReducer
