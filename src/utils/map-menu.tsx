import React from 'react'
import { MenuItemRes } from '@/pages/login/service/type'
import { Navigate, type RouteObject } from 'react-router-dom'
import { checkArrayNotEmpty } from './checkValue'
import routes from '@/router'

// 加载子路由
export function loadChildrenRoutes() {
  const req = require.context('@/router', true, /.+(\.ts|\.tsx)$/)
  const childrenRoutes: RouteObject[] = []
  req.keys().forEach((element: string) => {
    if (element !== './index.tsx') {
      childrenRoutes.push(req(element).default)
    }
  })
  return childrenRoutes
}
// 菜单匹配路由
/**
 *
 * 映射菜单到路由
 * @param menus 菜单
 * @returns 路由
 */
export function mapMenusToRoutes(menus: MenuItemRes[]) {
  const localRoutes = loadChildrenRoutes()
  return fetchMenusToRoutes(menus, localRoutes)
}

// 得到菜单到路由数据
function fetchMenusToRoutes(
  menus: MenuItemRes[],
  localRoutes: RouteObject[],
  routes: RouteObject[] = []
) {
  for (const menu of menus) {
    // 找到匹配的路由就加入，路由列表
    const route = localRoutes.find((item) => menu.url === item.path)
    if (route) {
      routes.push(route)
    }
    if (checkArrayNotEmpty(menu.children) && menu.children) {
      // 判断子路由的重定向路由是否已经添加，是否有需要添加从定向的地址
      if (!routes.find((item) => item.path === menu.url) && menu.url) {
        const url = menu.url ?? ''
        // 得到第一条路由作重定向路由
        const redirectRoute = localRoutes.find((item) => item.path?.startsWith(url))
        if (redirectRoute) {
          const path = redirectRoute.path ?? ''
          routes.push({ path: menu.url, element: <Navigate to={path} /> })
        }
      }

      // 递归调用得到路由
      fetchMenusToRoutes(menu.children, localRoutes, routes)
    }
  }
  return routes
}

// 生成带动态路由的正确路由
export function genRoutes(menuList: MenuItemRes[], path: string) {
  const newRoutes = [...routes]
  const routeIndex = newRoutes.findIndex((item) => item.path === path)
  if (routeIndex != -1) {
    const childrenRoutes = mapMenusToRoutes(menuList)
    const newRoute = { ...routes[routeIndex] }
    const children = newRoute.children ? [...newRoute.children] : []
    children.push(...childrenRoutes)
    newRoutes[routeIndex].children = children
  }
  return newRoutes
}

/**
 * 匹配菜单激活信息
 */
/***
 * 用一个数组记录寻找的当前层，当最底层时清空数组
 */
export function matchActiveMenuInfo(menuList: MenuItemRes[], path: string) {
  /*
   * 1. 通过路由地址得到，复亲id，及当前id
   *
   * */
  // let matchArray: any[] = []
  const openKeys: string[] = []
  const selectedKeys: string[] = []
  function _matchMenuInfo(menuList: MenuItemRes[], path: string) {
    for (const menu of menuList) {
      if (menu.url === path) {
        selectedKeys.push(String(menu.id))
        if (menu.parentId) {
          openKeys.push(String(menu.parentId))
        }
        // console.log(matchArray)
        return selectedKeys
      }
      if (checkArrayNotEmpty(menu.children) && menu.children) {
        _matchMenuInfo(menu.children, path)
      }
    }
  }
  _matchMenuInfo(menuList, path)
  return {
    openKeys,
    selectedKeys
  }
}

// const munuList = [
//   {
//     parentId: null,
//     url: '123',
//     id: 1,
//     children: [
//       {
//         parentId: 1,
//         url: '123/123',
//         id: 11,
//         children: [
//           {
//             parentId: 11,
//             url: '123/123/123',
//             id: 111
//           },
//           {
//             parentId: 11,
//             url: '123/123/124',
//             id: 112
//           }
//         ]
//       }
//     ]
//   },
//   {
//     parentId: null,
//     url: '124',
//     id: 2,
//     children: [
//       {
//         parentId: 2,
//         url: '124/123',
//         id: 21,
//         children: [
//           {
//             parentId: 21,
//             url: '124/123/123',
//             id: 211
//           },
//           {
//             parentId: 21,
//             url: '124/123/124',
//             id: 212
//           }
//         ]
//       }
//     ]
//   },
//   {
//     parentId: null,
//     url: '125',
//     id: 3,
//     children: [
//       {
//         parentId: 3,
//         url: '125/123',
//         id: 31,
//         children: [
//           {
//             parentId: 31,
//             url: '125/123/123',
//             id: 311
//           },
//           {
//             parentId: 31,
//             url: '125/123/124',
//             id: 312
//           }
//         ]
//       }
//     ]
//   }
// ]
/**
 * 通过parentId匹配上层的父亲
 */
// export function matchMenuParentIdsById(menuList: MenuItemRes[], id: string) {
//   /**
//    * 倒过来匹配
//    */
// }
