import { ISorterDetails } from '../interfaces'

export const SORTER_DETAILS: ISorterDetails = {
  films: [
    { value: 'release_date', label: 'Date' },
    { value: 'name', label: 'Name' },
    { value: 'id', label: 'Episode' },
  ],
  vehicles: [
    { value: 'vehicle_name', label: 'Name' },
    { value: 'cost_in_credits', label: 'Cost in Credits' },
  ],
  starships: [
    { value: 'name', label: 'Name' },
    { value: 'cost_in_credits', label: 'Cost in Credits' },
  ],
}
