export function mapOptions(list: any[], labelIndex: string, valueIndex: string) {
  return list.map((item) => {
    return {
      label: item[labelIndex],
      value: item[valueIndex]
    }
  })
}

export function fetchAsyncOptions(
  fn: () => Promise<any>,
  { dataIndex = 'data.list', labelIndex = 'name', valueIndex = 'id' } = {}
) {
  return new Promise<any>((reslove) => {
    fn().then((res) => {
      let data = res
      const newDataIndex = dataIndex.split('.')
      for (const index of newDataIndex) {
        data = data[index]
      }
      reslove(mapOptions(data, labelIndex, valueIndex))
    })
  })
}
