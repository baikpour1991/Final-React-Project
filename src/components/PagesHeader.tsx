import { Sorter } from './Sorter'
import classes from './PagesHeader.module.css'
import { useParams } from 'react-router'
import { ROUTES } from '../constants/routes'

export const PagesHeader = () => {
  const { page } = useParams()
  const pageTitle = page === ROUTES.films ? 'Episodes' : page

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>{pageTitle}</h1>
      <Sorter />
    </div>
  )
}
