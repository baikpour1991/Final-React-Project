import classes from './Sorter.module.css'
import { SORTER_DETAILS } from '../constants/sorterDetails'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { pageActions } from '../store/page-slice'
import { RootState } from '../store'
import Select, { StylesConfig, SingleValue } from 'react-select'
import { ISorterDetail } from '../interfaces'

type CustomStyles = StylesConfig<ISorterDetail, false>

const customStyles: CustomStyles = {
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#0e0e0e',
    margin: '0px',
    padding: '0px',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  control: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    color: 'var(--grey-white-dark-grey, #0e0e0e)',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '20px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    boxShadow: 'none',
    background: 'transparent',
  }),
  option: (provided, state) => ({
    ...provided,
    display: 'inline-flex',
    padding: '8px',
    alignItems: 'flex-start',
    gap: '8px',
    cursor: 'pointer',
    background: state.isSelected
      ? 'var(--grey-white-bg-grey, #F6F6F6)'
      : state.isFocused
      ? 'var(--grey-white-bg-grey, #F6F6F6)'
      : 'var(--grey-white-white, #FFF)',
    color:
      state.isSelected || state.isFocused
        ? 'var(--grey-white-dark-grey, #0E0E0E)'
        : 'var(--grey-white-supporting-grey, #5A5A5A)',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '20px',
  }),
}

export const Sorter = () => {
  const page: string = useSelector((state: RootState) => state.page.currentPage)
  const [selectedOption, setSelectedOption] = useState<ISorterDetail | null>()
  const dispatch = useDispatch()

  const handleChange = (option: SingleValue<ISorterDetail>) => {
    setSelectedOption(option)
    dispatch(pageActions.setSelectedSorting(option?.value))
  }

  const options: ISorterDetail[] = SORTER_DETAILS[page]
  useEffect(() => {
    const defaultOption: ISorterDetail | undefined = options?.[0] ? options?.[0] : undefined
    setSelectedOption(defaultOption)
  }, [options])

  if (!Object.keys(SORTER_DETAILS).includes(page)) {
    return null
  }

  return (
    <div className={classes.sort}>
      <span className={classes.sortTitle}>Sort by:</span>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        isSearchable={false}
      />
    </div>
  )
}
