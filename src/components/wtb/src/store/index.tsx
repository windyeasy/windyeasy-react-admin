import { createSlice } from '@reduxjs/toolkit'
interface IWtbState {
  list: any[]
  total: number
}
const initialState: IWtbState = {
  list: [],
  total: 0
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
    }
  }
})
const wtbReducer = wtbSlice.reducer
export const { changeListAction, changeTotalAction } = wtbSlice.actions
export default wtbReducer
