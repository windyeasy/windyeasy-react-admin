import styled from 'styled-components'
interface IProps {
  $borderColor: string
}
export const MainWrapper = styled.div<IProps>`
  width: 100%;

  .ant-layout {
    height: 100vh;
    overflow: hidden;
  }

  .ant-layout-header {
    padding: 0;
    box-sizing: border-box;
    height: auto;
    line-height: 1.2;
    border-bottom: 1px solid ${(props) => props.$borderColor};
  }
  .ant-layout-sider {
    .ant-layout-sider-children {
      display: flex;
      flex-direction: column;
    }
  }
  .ant-layout-content {
    padding: 15px;
    flex: 1;
    overflow: auto;
  }
`
