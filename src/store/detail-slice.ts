import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from '.'
import { IDetailsSlice } from '../interfaces'

const initialState: IDetailsSlice = {
  pageData: {},
  isLoading: false,
  isError: false,
  isNetworkError: false,
  error: '',
}

const detailSlice = createSlice({
  name: 'detail',
  initialState: initialState,
  reducers: {
    setPageData(state, action) {
      state.pageData = action.payload
    },
    setError(state, action) {
      state.isError = true
      if (action.payload === 'Failed to fetch') {
        state.error = 'Failed to get data from the server please check your internet connection'
        state.isNetworkError = true
      } else {
        state.error = action.payload
        state.isNetworkError = false
      }
    },
    clearError(state) {
      state.error = ''
      state.isError = false
      state.isNetworkError = false
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
  },
})

export const fetchPageData = (url: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(detailPageActions.setIsLoading(true))

    const sendRequest = async (url: string) => {
      const response = await fetch(url)

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Page does not exist')
        }
        throw new Error('Something happened please try again later')
      }

      const data = await response?.json()
      return data
    }

    try {
      const data = await sendRequest(url)
      dispatch(detailPageActions.setPageData(data))
    } catch (error) {
      if (error instanceof Error) {
        dispatch(detailPageActions.setError(error.message))
      }
    } finally {
      dispatch(detailPageActions.setIsLoading(false))
    }
  }
}

export const detailPageActions = detailSlice.actions

export default detailSlice
