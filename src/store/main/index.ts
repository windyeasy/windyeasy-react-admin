import { createSlice } from '@reduxjs/toolkit'
interface IMainState {
  isCollapsed: boolean
}
const initialState: IMainState = {
  isCollapsed: false
}

const mianSlice = createSlice({
  name: 'mian',
  initialState,
  reducers: {
    changeIsCollapsedAction(state, { payload }) {
      state.isCollapsed = payload
    }
  }
})
const mianReducer = mianSlice.reducer
export const { changeIsCollapsedAction } = mianSlice.actions
export default mianReducer
