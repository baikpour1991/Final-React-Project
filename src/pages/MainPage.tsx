import { CardList, PagesHeader, Pagination } from '../components'
import classes from './MainPage.module.css'
import { pageActions } from '../store/page-slice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import notFound from '../assets/what.png'
import { RootState } from '../store'

export const MainPage = () => {
  const dispatch = useDispatch()
  const isError = useSelector((state: RootState) => state.page.isError)
  const error = useSelector((state: RootState) => state.page.error)
  const isLoading = useSelector((state: RootState) => state.page.isLoading)
  const isNetworkError = useSelector((state: RootState) => state.page.isNetworkError)
  const params = useParams()

  useEffect(() => {
    dispatch(pageActions.setCurrentPage(params.page))
  }, [dispatch, params.page])

  if (isError) {
    return (
      <main className={classes.error}>
        {error}
        {!isNetworkError && <img src={notFound} alt="not-found" />}
      </main>
    )
  }

  return (
    <main className={classes.main}>
      <PagesHeader />
      {isLoading && <p className={classes.loading}>Page is loading ...</p>}
      <CardList />
      <Pagination />
    </main>
  )
}
