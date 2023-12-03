import useMessage from 'antd/es/message/useMessage'

export function useSimpleMessage() {
  const [message] = useMessage()
  return message
}
