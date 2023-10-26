import classes from './RegularDetail.module.css'
import { HTML_ELEMENTS } from '../constants/htmlElements'
import { FC } from 'react'
import { IRegularDetail } from '../interfaces'

export const RegularDetail: FC<IRegularDetail> = ({ page, text, detail, element }) => {
  return (
    <>
      {page && element === HTML_ELEMENTS.span && (
        <li className={classes.infoDetail}>
          <strong>{text}:</strong>
          <span>{detail || 'No Data'}</span>
        </li>
      )}

      {page && element === HTML_ELEMENTS.time && (
        <li className={classes.infoDetail}>
          <strong>{text}:</strong>
          <time>{detail || 'No Data'}</time>
        </li>
      )}

      {page && element === HTML_ELEMENTS.p && (
        <li className={classes.infoDetail}>
          <strong>{text}:</strong>
          <p>{detail || 'No Data'}</p>
        </li>
      )}
    </>
  )
}
