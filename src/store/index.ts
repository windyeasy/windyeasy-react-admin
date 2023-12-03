import loginReducer from '@/pages/login/store'
import mianReducer from '@/pages/main/store'
import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
  reducer: {
    login: loginReducer,
    main: mianReducer
  }
})

type StoreStateFnType = typeof store.getState
export type IRootState = ReturnType<StoreStateFnType>

type DispatchType = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch

export default store
