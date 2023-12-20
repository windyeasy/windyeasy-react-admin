import {
  changePageAction,
  changeParamsAction,
  changeSearchInfoAction,
  changeSizeAction,
  fetchPageListAction
} from '../store'
import { useAppDispatch } from '@/store'
export interface FetchPageListParamsType {
  api: string
  method: string
  dataIndex: string[]
  totalIndex: string[]
}
export function useWtbGetData() {
  const dispatch = useAppDispatch()
  // 改变分页参数
  function changeFetchPageListParmas(params: FetchPageListParamsType) {
    dispatch(changeParamsAction(params))
  }
  // 获取分页礼拜数据
  function fetchPageList() {
    dispatch(fetchPageListAction())
  }
  // 改变分页信息
  function changePageInfo(page: number, size: number) {
    dispatch(changePageAction(page))
    dispatch(changeSizeAction(size))
    fetchPageList()
  }
  // 改变搜索信息
  function changeSearchInfo(searchInfo: any = {}) {
    dispatch(changeSearchInfoAction(searchInfo))
    fetchPageList()
  }
  return {
    fetchPageList,
    changePageInfo,
    changeFetchPageListParmas,
    changeSearchInfo
  }
}
