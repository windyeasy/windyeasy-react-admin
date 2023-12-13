import styled from 'styled-components'

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .ant-layout {
    height: 100%;
  }

  .ant-layout-header {
    background-color: #fff;
    padding: 0;
    height: auto;
    line-height: 1.2;
    border-bottom: 1px solid #f1f2f3;
  }
  .ant-layout-sider {
    background-color: #fff;
    overflow-x: hidden;
  }
  .ant-layout-content {
    padding: 15px;
    height: 100vh;
    overflow-y: auto;
  }
`
