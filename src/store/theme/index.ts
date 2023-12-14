import { createSlice } from '@reduxjs/toolkit'

export interface WThemeConfig {
  headerBg: string
  sidlerBg: string
}

interface IThemeState {
  isDark: boolean
  themeConfig: WThemeConfig
}

const initialState: IThemeState = {
  isDark: true,
  themeConfig: {
    headerBg: '#fff',
    sidlerBg: '#fff'
  }
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeIsDarkAction(state, { payload }) {
      state.isDark = payload
    },
    changeThemeConfigAction(state, { payload }) {
      state.themeConfig = payload
    }
  }
})
const themeReducer = themeSlice.reducer
export const { changeIsDarkAction, changeThemeConfigAction } = themeSlice.actions
export default themeReducer
