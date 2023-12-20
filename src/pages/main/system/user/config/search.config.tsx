import { WBaseFormItem } from '@/base-ui/w-form'

export const searchConfig: WBaseFormItem[] = [
  {
    type: 'input',
    label: '用户名',
    prop: 'name',
    placeholder: '请输入用户名'
  },
  {
    type: 'input',
    label: '真实姓名',
    prop: 'realname',
    placeholder: '请输入真实姓名'
  },
  {
    type: 'input',
    label: '手机号码',
    prop: 'cellphone',
    placeholder: '请输入手机号码'
  },
  {
    type: 'select',
    label: '状态',
    prop: 'enable',
    placeholder: '请选择状态',
    defaultValueUn: true,
    options: [
      { value: 1, label: '启用' },
      { value: 0, label: '禁用' }
    ]
  },
  {
    type: 'rangePicker',
    label: '创建时间',
    prop: 'createAt',
    // 在最后时机执行
    handleParams(values: any) {
      values['createAt'] = values['createAt']
        ? values['createAt'].map((item: any) => item!.toDate())
        : ''
      return values
    }
  }
]
