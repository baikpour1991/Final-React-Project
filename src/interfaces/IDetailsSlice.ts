import { IDetailsPageDetails } from '.'

export interface IDetailsSlice {
  pageData: IDetailsPageDetails
  isLoading: boolean
  isError: boolean
  isNetworkError: boolean
  error: string
}
