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

const mianSlice = createSlice({
  name: 'mian',
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
const mianReducer = mianSlice.reducer
export const { changeIsCollapsedAction, changeEntireRolesAction } = mianSlice.actions
export default mianReducer
