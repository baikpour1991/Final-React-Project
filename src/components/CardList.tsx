import { useSelector } from 'react-redux'
import { Card } from './Card'
import classes from './CardList.module.css'
import { RootState } from '../store'

export const CardList = () => {
  const data = useSelector((state: RootState) => state.page.items)
  return (
    <div className={classes.cardList}>
      {data?.map((item) => (
        <Card key={item.id} details={item} />
      ))}
    </div>
  )
}
