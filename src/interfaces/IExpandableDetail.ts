interface data {
  id: number
  name: string
}

export interface IExpandableDetail {
  page: boolean
  text: string
  data: data[] | undefined
}
