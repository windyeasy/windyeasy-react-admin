import { createSlice } from '@reduxjs/toolkit'
interface IMainState {
  isCollapsed: boolean
}
const initialState: IMainState = {
  isCollapsed: false
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeIsCollapsedAction(state, { payload }) {
      state.isCollapsed = payload
    }
  }
})
const mainReducer = mainSlice.reducer
export const { changeIsCollapsedAction } = mainSlice.actions
export default mainReducer
