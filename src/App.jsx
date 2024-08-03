import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './ScrollToTop';

import { Header , Footer } from './assets/sections'
import { Home , UmrahPrograms , HajjPrograms , Hotel, Transport , RegisterProgramUmrah , RegisterProgramHajj , RegisterProgramSpecial , DashBoardEmployee , DashBoardManager , LogInDashBoardManager , LogInDashBoardEmployee } from './assets/pages'


const Layout = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

function App() {

  return (
    <>
      <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/UmrahPrograms/:id' element={<Layout><UmrahPrograms /></Layout>} />
        <Route path='/HajjPrograms/:id' element={<Layout><HajjPrograms /></Layout>} />
        <Route path='/Hotel/:id' element={<Layout><Hotel /></Layout>} />
        <Route path='/Transport/' element={<Layout><Transport /></Layout>} />
        <Route path='/RegisterProgramUmrah/:id' element={<Layout><RegisterProgramUmrah /></Layout>} />
        <Route path='/RegisterProgramHajj/' element={<Layout><RegisterProgramHajj /></Layout>} />
        <Route path='/RegisterProgramSpecial/' element={<Layout><RegisterProgramSpecial /></Layout>} />
        
        <Route path='/DashBoardEmployee/' element={<LogInDashBoardEmployee />} />
        <Route path='/DashBoardManager/' element={<LogInDashBoardManager />} />
        <Route path='/DashBoardManager/DashBoardManager' element={<DashBoardManager />} />
        <Route path='/DashBoardEmployee/DashBoardEmployee' element={<DashBoardEmployee />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
