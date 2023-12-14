// 添加组件内容导出入口
import WForm from './src/core/index'
import WBaseForm from './src/index'
import type { WFromProps } from './src/core/index'
import type { WBaseFormItem, WBaseFormProps } from './src/index'
import { formPrxoySerive } from './src/service/proxy-serive'
export * from './src/type'
export { WForm, WBaseForm, WFromProps, WBaseFormItem, WBaseFormProps, formPrxoySerive }
