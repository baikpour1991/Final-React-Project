import { useParams } from 'react-router'
import { BreadCrumb, ExpandableDetail, RegularDetail } from '../components'
import classes from './DetailsPage.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailPageActions, fetchPageData } from '../store/detail-slice'
import notFound from '../assets/what.png'
import { ROUTES } from '../constants/routes'
import { AppDispatch, RootState } from '../store'

export const DetailsPage = () => {
  const { page, detailsPage } = useParams()
  const dispatch: AppDispatch = useDispatch()
  const details = useSelector((state: RootState) => state.detail.pageData)
  const isError = useSelector((state: RootState) => state.detail.isError)
  const isNetworkError = useSelector((state: RootState) => state.detail.isNetworkError)
  const error = useSelector((state: RootState) => state.detail.error)
  const isLoading = useSelector((state: RootState) => state.detail.isLoading)

  useEffect(() => {
    dispatch(detailPageActions.clearError())
    const url = `http://localhost:3004/${page}/${detailsPage}`
    dispatch(fetchPageData(url))
  }, [dispatch, page, detailsPage])

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
      <BreadCrumb />
      {isLoading && <p className={classes.loading}>Page is loading ...</p>}
      {!isLoading && (
        <article className={classes.card}>
          <div className={classes.cardMedia}>
            <img
              className={classes.cardImage}
              src={details?.src || details?.image}
              alt={details?.name || details?.['vehicle_name']}
            />
          </div>

          <section className={classes.info}>
            {page === ROUTES.films && (
              <h1 className={classes.infoHeader}>{`Star Wars: Episode ${details?.id} - ${details?.name}`}</h1>
            )}

            {!(page === ROUTES.films) && (
              <h1 className={classes.infoHeader}>{details?.name || details?.['vehicle_name']}</h1>
            )}

            <ul className={classes.infoDetails}>
              {/* details for episode page */}

              <RegularDetail
                page={page === ROUTES.films}
                text="Episode"
                detail={`Episode ${details?.id}`}
                element="span"
              />
              <RegularDetail page={page === ROUTES.films} text="Director" detail={details?.director} element="span" />
              <RegularDetail page={page === ROUTES.films} text="Producer" detail={details?.producer} element="span" />
              <RegularDetail
                page={page === ROUTES.films}
                text="Release date"
                detail={details?.['release_date']}
                element="time"
              />
              <ExpandableDetail page={page === ROUTES.films} text="Characters" data={details?.characters} />
              <ExpandableDetail page={page === ROUTES.films} text="Planets" data={details?.planets} />
              <ExpandableDetail page={page === ROUTES.films} text="Starships" data={details?.starships} />
              <ExpandableDetail page={page === ROUTES.films} text="Vehicles" data={details?.vehicles} />
              <ExpandableDetail page={page === ROUTES.films} text="Species" data={details?.species} />
              <RegularDetail page={page === ROUTES.films} text="Created" detail={details?.created} element="time" />
              <RegularDetail page={page === ROUTES.films} text="Edited" detail={details?.edited} element="time" />
              <RegularDetail page={page === ROUTES.films} text="" detail={details?.['opening_crawl']} element="p" />

              {/* details for characters page */}

              <RegularDetail page={page === ROUTES.characters} text="Height" detail={details?.height} element="span" />
              <RegularDetail page={page === ROUTES.characters} text="Mass" detail={details?.mass} element="span" />
              <RegularDetail
                page={page === ROUTES.characters}
                text="Hair color"
                detail={details?.['hair_color']}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.characters}
                text="Eye color"
                detail={details?.['eye_color']}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.characters}
                text="Birth"
                detail={details?.['birth_year']}
                element="span"
              />
              <RegularDetail page={page === ROUTES.characters} text="Gender" detail={details?.gender} element="span" />
              <ExpandableDetail page={page === ROUTES.characters} text="Homeworld" data={details?.homeworld} />
              <ExpandableDetail page={page === ROUTES.characters} text="Films" data={details?.films} />
              <ExpandableDetail page={page === ROUTES.characters} text="Species" data={details?.species} />
              <ExpandableDetail page={page === ROUTES.characters} text="Vehicles" data={details?.vehicles} />
              <ExpandableDetail page={page === ROUTES.characters} text="Starships" data={details?.starships} />

              {/* details for planets page  */}

              <RegularDetail
                page={page === ROUTES.planets}
                text="Rotation period"
                detail={details?.['rotation_period']}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.planets}
                text="Orbital period"
                detail={details?.['orbital_period']}
                element="span"
              />
              <RegularDetail page={page === ROUTES.planets} text="Diameter" detail={details?.diameter} element="span" />
              <RegularDetail page={page === ROUTES.planets} text="Climate" detail={details?.climate} element="span" />
              <RegularDetail page={page === ROUTES.planets} text="Gravity" detail={details?.gravity} element="span" />
              <RegularDetail page={page === ROUTES.planets} text="Terrain" detail={details?.terrain} element="span" />
              <RegularDetail
                page={page === ROUTES.planets}
                text="Surface water"
                detail={details?.['surface_water']}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.planets}
                text="Population"
                detail={details?.population}
                element="span"
              />
              <ExpandableDetail page={page === ROUTES.planets} text="Residents" data={details?.residents} />
              <ExpandableDetail page={page === ROUTES.planets} text="Films" data={details?.films} />

              {/* details for species page */}

              <RegularDetail
                page={page === ROUTES.species}
                text="Classification"
                detail={details?.classification}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.species}
                text="Designation"
                detail={details?.designation}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.species}
                text="Average height"
                detail={details?.['average_height']}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.species}
                text="Skin colors"
                detail={details?.['skin_colors']}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.species}
                text="Hair colors"
                detail={details?.['hair_colors']}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.species}
                text="Eye colors"
                detail={details?.['eye_colors']}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.species}
                text="Average lifespan"
                detail={details?.['average_lifespan']}
                element="span"
              />
              <ExpandableDetail page={page === ROUTES.species} text="Homeworld" data={details?.homeworld} />
              <RegularDetail page={page === ROUTES.species} text="Language" detail={details?.language} element="span" />
              <ExpandableDetail page={page === ROUTES.species} text="People" data={details?.people} />
              <ExpandableDetail page={page === ROUTES.species} text="Films" data={details?.films} />

              {/* details for vehicles and starships page */}

              <RegularDetail
                page={page === ROUTES.vehicles || page === ROUTES.starships}
                text="Model"
                detail={details?.model}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.vehicles || page === ROUTES.starships}
                text="Manufacturer"
                detail={details?.manufacturer}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.vehicles || page === ROUTES.starships}
                text="Cost in credits"
                detail={details?.['cost_in_credits']}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.vehicles || page === ROUTES.starships}
                text="Length"
                detail={details?.length}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.vehicles || page === ROUTES.starships}
                text="Max atm. speed"
                detail={details?.['max_atmosphere_speed'] || details?.['max_atmosphering_speed']}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.vehicles || page === ROUTES.starships}
                text="Crew"
                detail={details?.crew}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.vehicles || page === ROUTES.starships}
                text="Passengers"
                detail={details?.passengers}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.vehicles || page === ROUTES.starships}
                text="Cargo capacity"
                detail={details?.['cargo_capacity']}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.vehicles || page === ROUTES.starships}
                text="Consumables"
                detail={details?.consumables}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.vehicles}
                text="Vehicle class"
                detail={details?.['vehicle_class']}
                element="span"
              />
              <RegularDetail
                page={page === ROUTES.starships}
                text="Hyperdrive rating"
                detail={details?.['hyperdrive_rating']}
                element="span"
              />
              <RegularDetail page={page === ROUTES.starships} text="MGLT" detail={details?.['MGLT']} element="span" />
              <RegularDetail
                page={page === ROUTES.starships}
                text="Starship class"
                detail={details?.['starship_class']}
                element="span"
              />
              <ExpandableDetail
                page={page === ROUTES.vehicles || page === ROUTES.starships}
                text="Pilots"
                data={details?.pilots}
              />
            </ul>
          </section>
        </article>
      )}
    </main>
  )
}
