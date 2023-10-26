import { Link } from 'react-router-dom'
import classes from './Footer.module.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={classes.footer}>
      <span className={classes.copyRight}>&copy; {currentYear} Lorem ipsum</span>
      <div className={classes.footerLinks}>
        <Link className={classes.link} to="/help">
          Help
        </Link>
        <Link className={classes.link} to="/contact">
          Contacts
        </Link>
      </div>
    </footer>
  )
}
