import { PageModalConfig } from '@/base-ui/page-modal/type'

export const modalConfig: PageModalConfig = {
  header: {
    newTitle: '用户添加',
    editTitle: '用户编辑'
  },
  editHidden: ['password'],

  formItems: [
    {
      type: 'input',
      label: '用户名',
      prop: 'name',
      placeholder: '请输入用户名',
      rules: [{ required: true, message: '请输入用户名' }]
    },
    {
      type: 'input',
      label: '真实姓名',
      prop: 'realname',
      placeholder: '请输入真实姓名'
    },
    {
      type: 'password',
      label: '登录密码',
      prop: 'password',
      placeholder: '请输入登录密码'
    },
    {
      type: 'input',
      label: '手机号码',
      prop: 'cellphone',
      placeholder: '请输入手机号码'
    },
    {
      type: 'select',
      label: '选择角色',
      prop: 'roleId',
      placeholder: '请选择角色',
      defaultValueUn: true
      // asyncOptions: fetchAsyncOptions(getEntireRoles)
    },
    {
      type: 'select',
      label: '选择部门',
      prop: 'departmentId',
      placeholder: '请选择部门',
      defaultValueUn: true
      // asyncOptions: fetchAsyncOptions(getEntireDepartments)
    }
  ]
}
