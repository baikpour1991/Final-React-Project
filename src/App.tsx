import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components'
import { Contact, DetailsPage, Help, MainPage, NotFound } from './pages'
import classes from './App.module.css'

function App() {
  return (
    <div className={classes.page}>
      <Header />

      <Routes>
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:page" element={<MainPage />} />
        <Route path="/:page/:detailsPage" element={<DetailsPage />} />
        <Route path="/" element={<Navigate replace to="/films" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
