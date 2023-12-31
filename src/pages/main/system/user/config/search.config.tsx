import { WBaseFormItem } from '@/base-ui/w-form'

export const searchConfig: WBaseFormItem[] = [
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    placeholder: '请输入用户名'
  },
  {
    type: 'input',
    label: '用户昵称',
    prop: 'nickname',
    placeholder: '请输入用户昵称'
  },
  {
    type: 'input',
    label: '手机号码',
    prop: 'telephone',
    placeholder: '请输入手机号码'
  },
  {
    type: 'rangePicker',
    label: '创建时间',
    prop: 'createAt',
    // 在最后时机执行
    handleParams(values: any) {
      if (values['createAt'] && values['createAt'].length) {
        const [startTime, endTime] = values['createAt']
        values['startTime'] = startTime.toDate()
        values['endTime'] = endTime.toDate()
      }
      return values
    }
  }
]
