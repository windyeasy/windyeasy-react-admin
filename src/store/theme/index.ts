import { createSlice } from '@reduxjs/toolkit'

export interface WThemeConfig {
  headerBg: string
  sidlerBg: string
  isDark: boolean
  colorPrimary: string
}

interface IThemeState {
  themeConfig: WThemeConfig
}

const initialState: IThemeState = {
  themeConfig: {
    colorPrimary: '#26a59a',
    isDark: true,
    headerBg: '#fff',
    sidlerBg: '#fff'
  }
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemeConfigAction(state, { payload }) {
      state.themeConfig = payload
    }
  }
})
const themeReducer = themeSlice.reducer
export const { changeThemeConfigAction } = themeSlice.actions
export default themeReducer
