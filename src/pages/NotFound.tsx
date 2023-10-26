import notFound from '../assets/why.png'
import classes from './NotFound.module.css'

export const NotFound = () => {
  return (
    <main className={classes.notFound}>
      This url is not correct
      <img src={notFound} alt="not-found" />
    </main>
  )
}
