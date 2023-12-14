import styled from 'styled-components'
interface IProps {
  $borderColor: string
}
export const MainWrapper = styled.div<IProps>`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .ant-layout {
    height: 100%;
  }

  .ant-layout-header {
    padding: 0;
    height: auto;
    line-height: 1.2;
    border-bottom: 1px solid ${(props) => props.$borderColor};
  }
  .ant-layout-sider {
    overflow-x: hidden;
  }
  .ant-layout-content {
    padding: 15px;
    height: 100vh;
    overflow-y: auto;
  }
`
