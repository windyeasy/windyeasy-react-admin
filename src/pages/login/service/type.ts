export interface LoginAcount {
  name: string
  password: string
}
type IdType = number | string

export interface MenuItemRes {
  id: IdType
  name: string
  parentId?: IdType | null
  permission?: string
  sort: null | number
  type: number
  url: string | null
  children: MenuItemRes[] | null
}
