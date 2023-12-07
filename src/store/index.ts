import menuReducer from '@/components/layout-menu/store'
import loginReducer from '@/pages/login/store'
import mianReducer from '@/store/main'
import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import systemReducer from './main/system'

const store = configureStore({
  reducer: {
    login: loginReducer,
    main: mianReducer,
    menu: menuReducer,
    system: systemReducer
  }
})

type StoreStateFnType = typeof store.getState
export type IRootState = ReturnType<StoreStateFnType>

type DispatchType = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export interface AsyncThunkState {
  state: IRootState
}
export default store
