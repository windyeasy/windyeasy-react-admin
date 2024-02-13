import Mock from 'mockjs'
// 数据统计
const data = Mock.mock({
  list: [
    {
      id: 1,
      title: '总访问数',
      number1: 88888,
      number2: 88888,
      subtitle: '总访问数',
      tips: '总访问数'
    },
    {
      id: 2,
      title: '总成交数',
      number1: 44444,
      number2: 44444,
      subtitle: '总成交数',
      tips: '总成交数'
    },
    {
      id: 3,
      title: '总下载数',
      number1: 66666,
      number2: 66666,
      subtitle: '总下载数',
      tips: '总下载数'
    },
    {
      id: 4,
      title: '总收藏数',
      number1: 25982,
      number2: 25982,
      subtitle: '总收藏数',
      tips: '总收藏数'
    }
  ],
  // 访问量
  pageView: [
    { date: '一月', count: 6000 },
    { date: '二月', count: 5334 },
    { date: '三月', count: 11000 },
    { date: '四月', count: 9888 },
    { date: '五月', count: 8000 },
    { date: '六月', count: 6444 },
    { date: '七月', count: 7000 },
    { date: '八月', count: 6222 },
    { date: '九月', count: 12000 },
    { date: '十月', count: 6000 },
    { date: '十一月', count: 3000 },
    { date: '十二月', count: 8000 }
  ]
})

Mock.mock('/data-count/list', 'get', () => {
  return {
    code: 0,
    message: '统计查询成功',
    data: data.list
  }
})
Mock.mock('/data-count/pageView', 'get', () => ({
  code: 0,
  message: '数据查询成功',
  data: data.pageView
}))
