import { FC, useState } from 'react'
import classes from './ExpandableDetail.module.css'
import { IExpandableDetail } from '../interfaces'

export const ExpandableDetail: FC<IExpandableDetail> = ({ page, text, data }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  if (!page) {
    return null
  }

  const handleButtonClick = () => {
    setIsExpanded((prevState) => !prevState)
  }

  if (!data?.length) {
    return (
      <li className={classes.infoDetail}>
        <strong>{text}:</strong>
        <span>No Data</span>
      </li>
    )
  }

  const buttonContent = isExpanded ? 'Show Less...' : 'Show More...'
  const dataToShow = data?.length > 3 && isExpanded ? data : data?.slice(0, 3)

  return (
    <li className={classes.infoDetail}>
      <strong>{text}:</strong>
      <ul className={classes.infoList}>
        {dataToShow?.map((item, index) => {
          return (
            <li key={item?.id}>
              <span>
                {item.name}
                {index !== data?.length - 1 && ','}
              </span>
            </li>
          )
        })}

        <li>
          {data?.length > 3 && (
            <button className={classes.infoButton} onClick={handleButtonClick}>
              {buttonContent}
            </button>
          )}
        </li>
      </ul>
    </li>
  )
}
