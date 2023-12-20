// 添加组件内容导出入口
import WForm from './src/core/index'
import WBaseForm from './src/index'
import SearchForm from './src/components/SearchForm'
import type { WFromProps } from './src/core/index'
import type { WBaseFormItem, WBaseFormProps } from './src/index'
import { formProxyService } from './src/service/proxy-service'
export * from './src/type'
export { WForm, WBaseForm, WFromProps, WBaseFormItem, WBaseFormProps, formProxyService, SearchForm }
