import ReactPaginate from 'react-paginate'
import classes from './Pagination.module.css'
import PaginationPrevious from '../../public/PaginationPrevious.svg'
import PaginationNext from '../../public/PaginationNext.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchData, pageActions } from '../store/page-slice'
import { ITEMS_PER_PAGE } from '../constants/uiDetails'
import { useEffect } from 'react'
import { AppDispatch, RootState } from '../store'
import { IPaginationData } from '../interfaces'

export const Pagination = () => {
  const totalPages = useSelector((state: RootState) => state.page.paginationTotal)
  const selectedSorting = useSelector((state: RootState) => state.page.selectedSorting)
  const selectedPage = useSelector((state: RootState) => state.page.paginationSelected)
  const dispatch: AppDispatch = useDispatch()
  const { page } = useParams()

  useEffect(() => {
    dispatch(pageActions.setPaginationSelected(1))
  }, [dispatch, page])

  useEffect(() => {
    dispatch(
      fetchData(`http://localhost:3004/${page}?_sort=${selectedSorting}&_limit=${ITEMS_PER_PAGE}&_page=${selectedPage}`)
    )
  }, [dispatch, page, selectedSorting, selectedPage])

  const handlePageClick = (data: IPaginationData) => {
    dispatch(pageActions.setPaginationSelected(data.selected + 1))
  }

  return (
    <ReactPaginate
      key={page}
      previousLabel={<img src={PaginationPrevious} alt="previous page" />}
      nextLabel={<img src={PaginationNext} alt="next page" />}
      breakLabel={'...'}
      breakClassName={classes.breakMe}
      pageCount={totalPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={classes.pagination}
      activeClassName={classes.active}
      pageClassName={classes.pageItem}
      previousClassName={classes.previousBtn}
      nextClassName={classes.nextBtn}
    />
  )
}
