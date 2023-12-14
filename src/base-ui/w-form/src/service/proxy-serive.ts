import type { FormInstance } from 'antd'

type FnType = (data?: any) => void
export class WFormProxySerive {
  form: FormInstance<any> | undefined
  // 处理字段函数数组
  handleParamsFns: any[] = []
  // 表单用于编辑的时候设置值
  setFieldsValueByData?: FnType
  injectForm(form: FormInstance<any>) {
    this.form = form
    this.handleParamsFns = []
  }
  injectSetFieldsValueByData(fn: FnType) {
    this.setFieldsValueByData = fn
  }
  execFieldsValueByData(info: any) {
    if (this.setFieldsValueByData) this.setFieldsValueByData(info)
  }
  addFn(fn: any) {
    this.handleParamsFns.push(fn)
  }
  execFns(values: any) {
    if (this.handleParamsFns && this.handleParamsFns.length) {
      for (const fn of this.handleParamsFns) {
        values = fn(values)
      }
    }
    return values
  }
}

export const formPrxoySerive = new WFormProxySerive()
