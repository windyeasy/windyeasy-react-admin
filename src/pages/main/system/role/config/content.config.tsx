import { ContentConfig } from '@/base-ui/page-content/type'
import { getEntireMenuList } from '@/services/main/system'
import { checkArrayNotEmpty } from '@/utils/checkValue'

export const contentConfig: ContentConfig = {
  pageName: 'role',
  searchConfig: [
    {
      type: 'input',
      label: '角色名称',
      prop: 'depName',
      placeholder: '请输入角色名称'
    }
  ],
  headerInfo: {
    title: '角色列表',
    btnText: '角色添加'
  },

  tableConfig: {
    api: '/role',
    wcolumns: [
      {
        title: '角色名称',
        dataIndex: 'roleName'
      },
      {
        title: '角色索引',
        dataIndex: 'roleIndex'
      },
      {
        title: '排序',
        dataIndex: 'sort'
      },
      {
        title: '状态',
        dataIndex: 'state'
      },
      {
        title: '描述',
        dataIndex: 'intro'
      },

      {
        type: 'utcTimer',
        title: '创建时间',
        dataIndex: 'createAt'
      }
    ]
  },
  modalWidth: '40%',
  modalConfig: {
    header: {
      newTitle: '角色添加',
      editTitle: '角色编辑'
    },

    uiConfig: {
      colConfig: { span: 24 },
      formConfig: {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 }
      }
    },
    formItems: [
      {
        type: 'input',
        label: '角色名称',
        prop: 'roleName',
        placeholder: '请输入角色名称',
        rules: [{ required: true, message: '请输入角色名称' }]
      },
      {
        type: 'input',
        label: '角色索引',
        prop: 'roleIndex',
        placeholder: '请输入角色索引',
        rules: [{ required: true, message: '请输入角色索引' }]
      },
      {
        type: 'input-number',
        label: '排序',
        prop: 'sort',
        initValue: 0
      },
      {
        type: 'switch',
        label: '状态',
        prop: 'state',
        initValue: true
      },
      {
        type: 'textarea',
        label: '角色备注',
        prop: 'intro',
        placeholder: '请输入角色备注',
        colConfig: {
          span: 24
        },
        autoSize: {
          minRows: 3,
          maxRows: 5
        }
      },
      {
        type: 'tree',
        label: '菜单列表',
        prop: 'menuList',
        checkable: true,
        handleParams(values: any) {
          console.log('进入了，s')
          if (!Array.isArray(values['menuList']) && values['menuList']) {
            const info = values['menuList']
            console.log('进入了')
            values['menuList'] = [...info.checked, ...info.halfChecked]
          }
          return values
        },

        asyncOptions: () => {
          return new Promise<any>((reslove) => {
            function _mapTreeOptions(list: any[]) {
              const options: any[] = []
              for (const item of list) {
                if (item.children && checkArrayNotEmpty(item.children)) {
                  options.push({
                    key: item.id,
                    title: item.menuName,
                    children: _mapTreeOptions(item.children)
                  })
                } else {
                  options.push({
                    key: item.id,
                    title: item.menuName
                  })
                }
              }
              return options
            }
            getEntireMenuList().then((res) => {
              const data = _mapTreeOptions(res.data)

              reslove(data)
            })
          })
        }
      }
    ]
  }
}
