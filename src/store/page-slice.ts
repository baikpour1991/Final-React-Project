import { createSlice } from '@reduxjs/toolkit'
import { ITEMS_PER_PAGE } from '../constants/uiDetails'
import { AppDispatch } from '.'
import { IPageSlice } from '../interfaces'

const INITIAL_STATE: IPageSlice = {
  items: [],
  currentPage: '',
  paginationTotal: 1,
  paginationSelected: 1,
  selectedSorting: '',
  isLoading: false,
  isError: false,
  isNetworkError: false,
  error: '',
}

const pageSlice = createSlice({
  name: 'page',
  initialState: INITIAL_STATE,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setPaginationTotal(state, action) {
      state.paginationTotal = action.payload
    },
    setPaginationSelected(state, action) {
      state.paginationSelected = action.payload
    },
    setSelectedSorting(state, action) {
      state.selectedSorting = action.payload
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

export const fetchData = (url: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(pageActions.setIsLoading(true))
    dispatch(pageActions.setItems([]))

    const sendRequest = async (url: string) => {
      const response = await fetch(url)

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Page does not exist')
        }
        throw new Error('Something happened please try again later')
      }

      return response
    }

    try {
      const response = await sendRequest(url)
      dispatch(pageActions.clearError())

      const totalItems: number = Number(response?.headers.get('x-total-count')) || 1
      const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)
      dispatch(pageActions.setPaginationTotal(totalPages))

      dispatch(pageActions.setItems(await response.json()))
    } catch (error) {
      if (error instanceof Error) {
        dispatch(pageActions.setError(error.message))
      }
    } finally {
      dispatch(pageActions.setIsLoading(false))
    }
  }
}

export const pageActions = pageSlice.actions

export default pageSlice
