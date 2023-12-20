import { createSlice } from '@reduxjs/toolkit'
interface IMainState {
  isCollapsed: boolean
  entireRoles: any[]

  entireDepartments: any[]
}
const initialState: IMainState = {
  isCollapsed: false,
  entireRoles: [],
  entireDepartments: []
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeIsCollapsedAction(state, { payload }) {
      state.isCollapsed = payload
    },
    changeEntireRolesAction(state, { payload }) {
      state.entireRoles = payload
    },
    changeEntireDepartmentsAction(state, { payload }) {
      state.entireDepartments = payload
    }
  }
})
const mainReducer = mainSlice.reducer
export const { changeIsCollapsedAction, changeEntireRolesAction } = mainSlice.actions
export default mainReducer
