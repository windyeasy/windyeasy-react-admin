import React, { forwardRef, useRef, useImperativeHandle, memo } from 'react'

interface CanShowAlert {
  showAlert(): void
}
interface IProps {
  test?: string
}
const Child = forwardRef<CanShowAlert, IProps>(function Test(props, ref) {
  useImperativeHandle(ref, () => ({
    showAlert() {
      console.log('进入了')
    }
  }))
  return <>测试</>
})

const Demo = () => {
  const childRef = useRef<CanShowAlert>(null)
  return (
    <div className="container">
      <Child test="name" ref={childRef} />
      <button
        onClick={() => {
          childRef.current?.showAlert()
        }}
      >
        Call Function
      </button>
    </div>
  )
}

export default memo(Demo)
