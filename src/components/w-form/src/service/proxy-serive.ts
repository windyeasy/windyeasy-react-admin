import type { FormInstance } from 'antd'

export class WFormProxySerive {
  form: FormInstance<any> | undefined
  // 处理字段函数数组
  handleParamsFns: any[] = []
  injectForm(form: FormInstance<any>) {
    this.form = form
    this.handleParamsFns = []
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
