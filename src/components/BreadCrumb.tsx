import { useLocation, Link } from 'react-router-dom'
import classes from './BreadCrumb.module.css'

export const BreadCrumb = () => {
  const location = useLocation()
  const paths = location.pathname.split('/').filter(Boolean)
  const modifiedPaths = paths.slice(0, -1)

  if (!paths.length) {
    return null
  }

  return (
    <ul className={classes.breadcrumb}>
      <li>
        <Link className={classes.home} to="/">
          Home
        </Link>
      </li>

      {modifiedPaths.map((pathContent, index) => {
        return (
          <li key={pathContent}>
            <span>/</span>
            <Link className={classes.links} to={`/${modifiedPaths.slice(0, index + 1).join('/')}`}>
              {pathContent}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
