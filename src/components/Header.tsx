import { Link, NavLink } from 'react-router-dom'
import LogoIcon from '../../public/LogoIcon.svg'
import CharacterIcon from '../../public/CharacterIcon.svg'
import EpisodeIcon from '../../public/EpisodeIcon.svg'
import PlanetIcon from '../../public/PlanetIcon.svg'
import SpeciesIcon from '../../public/SpeciesIcon.svg'
import StarshipIcon from '../../public/StarshipIcon.svg'
import VehiclesIcon from '../../public/VehiclesIcon.svg'
import classes from './Header.module.css'

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoLink}>
        <Link to="/">
          <img src={LogoIcon} alt="logo" />
        </Link>
      </div>
      <nav className={classes.nav}>
        <ul className={classes.menu}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? `${classes.navLink} ${classes.active}` : `${classes.navLink}`)}
              to="/films"
            >
              <img src={EpisodeIcon} alt="episodes-page-link" />
              <span>Episodes</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? `${classes.navLink} ${classes.active}` : `${classes.navLink}`)}
              to="/characters"
            >
              <img src={CharacterIcon} alt="characters-page-link" />
              <span>Characters</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? `${classes.navLink} ${classes.active}` : `${classes.navLink}`)}
              to="/planets"
            >
              <img src={PlanetIcon} alt="planets-page-link" />
              <span>Planets</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? `${classes.navLink} ${classes.active}` : `${classes.navLink}`)}
              to="/species"
            >
              <img src={SpeciesIcon} alt="species-page-link" />
              <span>Species</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? `${classes.navLink} ${classes.active}` : `${classes.navLink}`)}
              to="/vehicles"
            >
              <img src={VehiclesIcon} alt="vehicles-page-link" />
              <span>Vehicles</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? `${classes.navLink} ${classes.active}` : `${classes.navLink}`)}
              to="/starships"
            >
              <img src={StarshipIcon} alt="starships-page-link" />
              <span>Starships</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
