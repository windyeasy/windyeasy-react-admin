import type {
  CreateAxiosDefaults,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

export interface InterceptorsType<T = AxiosResponse, RT = InternalAxiosRequestConfig> {
  requestSuccessFn?: (config: RT) => RT
  requestErrFn?: (err: any) => any
  responseSuccessFn?: (config: T) => T
  responseErrFn?: (err: any) => any
}

export interface RequestConstructorConfig extends CreateAxiosDefaults {
  interceptors?: InterceptorsType
}
export type RequestConfigInterceptors<T> = Omit<
  InterceptorsType<T, AxiosRequestConfig>,
  'requestErrFn' | 'responseErrFn'
>

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestConfigInterceptors<T>
}
