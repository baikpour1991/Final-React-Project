import { render, screen, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './App'

const FILMS_URL = 'http://localhost:3004/films?_sort=&_limit=10&_page=1'
const CHARACTERS_URL = 'http://localhost:3004/characters?_sort=&_limit=10&_page=1'

const mockCharacters = [
  {
    id: 1,
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    src: 'https://www.indyturk.com/sites/default/files/styles/800x600/public/article/main_image/2021/04/21/642721-1341902460.png?itok=HigdQPaH',
    homeworld: [
      {
        id: 1,
        name: 'Tatooine',
      },
    ],
    films: [
      {
        id: 4,
        name: 'A New Hope',
      },
      {
        id: 5,
        name: 'The Empire Strikes Back',
      },
      {
        id: 6,
        name: 'Return of the Jedi',
      },
      {
        id: 3,
        name: 'Revenge of the Sith',
      },
    ],
    species: [],
    vehicles: [
      {
        id: 14,
        name: 'Snowspeeder',
      },
      {
        id: 12,
        name: 'Imperial Speeder Bike',
      },
    ],
    starships: [
      {
        id: 12,
        name: "X-wing'",
      },
      {
        id: 6,
        name: "Imperial shuttle'",
      },
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
  },
]

vi.mock('axios')

axios.get.mockImplementation((url) => {
  if (url === FILMS_URL) {
    return Promise.resolve({
      status: 200,
      data: [],
      headers: {
        'x-total-count': 0,
      },
    })
  } else if (url === CHARACTERS_URL) {
    return Promise.resolve({
      status: 200,
      data: mockCharacters,
      headers: {
        'x-total-count': 1,
      },
    })
  } else {
    return Promise.resolve({
      status: 404,
      json: () => Promise.resolve(),
    })
  }
})

global.fetch = vi.fn((url) => {
  if (url === FILMS_URL) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]),
      headers: new Headers({
        'x-total-count': '0',
      }),
    })
  } else if (url === CHARACTERS_URL) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockCharacters),
      headers: new Headers({
        'x-total-count': '1',
      }),
    })
  } else {
    return Promise.resolve({
      ok: false,
      status: 404,
      json: () => Promise.resolve(),
    })
  }
})

describe('App', () => {
  it('navigates between pages and displays data', async () => {
    const user = userEvent.setup()
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )

    // Simulate navigation to Characters page
    await user.click(screen.getAllByText('Characters')[0])
    // expect(screen.url()).toBe('/about')

    // Wait for characters data to be loaded
    await waitFor(() => {
      const charactersNavLink = screen.getAllByText('Characters')[0]
      const charactersTitle = screen.getAllByText('Characters')[0]
      expect(charactersNavLink).toBeInTheDocument()
      expect(charactersTitle).toBeInTheDocument()
    })

    // Simulate navigation to a detailed character page
    await waitFor(() => {
      const cardTitle = screen.getByText('Luke Skywalker')
      expect(cardTitle).toBeInTheDocument()
    })
  })
})
