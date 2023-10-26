import { useNavigate, useParams } from 'react-router'
import classes from './Card.module.css'
import noImage from '../assets/noImage.svg'
import { ROUTES } from '../constants/routes'
import { FC } from 'react'
import { ICardProps } from '../interfaces'

export const Card: FC<ICardProps> = ({ details }) => {
  const { page } = useParams()
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/${page}/${details?.id}`)
  }

  return (
    <article className={classes.card}>
      <div className={classes.cardMedia}>
        <img
          className={classes.cardImage}
          src={details?.src || details?.image || noImage}
          alt={details?.name || details?.['vehicle_name']}
        />
      </div>

      <section className={classes.cardSection}>
        <div onClick={handleCardClick} className={classes.cardHeader}>
          {page === ROUTES.films && (
            <h2>
              Star Wars: Episode {details?.id} - {details?.name}
            </h2>
          )}

          {details?.name && page !== ROUTES.films && <h2>{details.name}</h2>}

          {details?.['vehicle_name'] && <h2>{details?.['vehicle_name']}</h2>}
        </div>

        <ul className={classes.cardInfo}>
          {page === ROUTES.films && (
            <li>
              <strong>Episode:</strong>
              <span>Episode {details?.id}</span>
            </li>
          )}

          {details?.director && (
            <li>
              <strong>Director:</strong>
              <span>{details?.director}</span>
            </li>
          )}

          {details?.producer && (
            <li>
              <strong>Producer:</strong>
              <span>{details?.producer}</span>
            </li>
          )}

          {details?.['release_date'] && (
            <li>
              <strong>Release date:</strong>
              <span>{details?.['release_date']}</span>
            </li>
          )}

          {details?.['birth_year'] && (
            <li>
              <strong>Birth:</strong>
              <span>{details?.['birth_year']}</span>
            </li>
          )}

          {details?.gender && (
            <li>
              <strong>Gender:</strong>
              <span>{details?.gender}</span>
            </li>
          )}

          {details?.climate && (
            <li>
              <strong>Climate:</strong>
              <span>{details?.climate}</span>
            </li>
          )}

          {details?.terrain && (
            <li>
              <strong>Terrain:</strong>
              <span>{details?.terrain}</span>
            </li>
          )}

          {details?.population && (
            <li>
              <strong>Population:</strong>
              <span>{details?.population}</span>
            </li>
          )}

          {details?.classification && (
            <li>
              <strong>Classification:</strong>
              <span>{details?.classification}</span>
            </li>
          )}

          {details?.designation && (
            <li>
              <strong>Designation:</strong>
              <span>{details?.designation}</span>
            </li>
          )}

          {details?.model && (
            <li>
              <strong>Model:</strong>
              <span>{details?.model}</span>
            </li>
          )}

          {details?.manufacturer && (
            <li>
              <strong>Manufacturer:</strong>
              <span>{details?.manufacturer}</span>
            </li>
          )}

          {(page === ROUTES.starships || page === ROUTES.vehicles) && (
            <li>
              <strong>Cost in credits:</strong>
              <span>{details?.['cost_in_credits'] || 'No Data'}</span>
            </li>
          )}
        </ul>
      </section>
    </article>
  )
}
