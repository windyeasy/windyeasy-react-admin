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
  .set-theme {
    position: fixed;
    right: 6px;
    font-size: 20px;
    color: #fff;
    width: 48px;
    height: 48px;
    border-radius: 5px 0 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1890ff;
    top: 36%;
  }
`
