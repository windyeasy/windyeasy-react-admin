import type { WBaseFormItem } from '../w-form'

export interface PageModalConfig {
  header: {
    newTitle: string
    editTitle: string
  }
  formItmes: WBaseFormItem[]
}
