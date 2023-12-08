import styled from 'styled-components'

export const UserContentWrapper = styled.div`
  .header {
    margin-bottom: 20px;
  }
  .content {
    .ant-btn.ant-btn-sm {
      padding: 0;
      padding-right: 8px;
      font-size: 12px;
    }
    .ant-btn:not(.ant-btn-icon-only) > .ant-btn-icon:not(:last-child) {
      margin-inline-end: 4px;
    }
  }
  .pagination {
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }
`
