import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/Pages/LoginPage';
import Project from './components/Pages/Project';
import ProjectDetails from './components/Pages/ProjectDetails';
import PrivateRoute from './components/PrivateRoutes/PrivateRoute';
import HandleLoginRoute from './components/PrivateRoutes/HandleLoginRoute';
import AddTasks from './components/Tasks/AddTasks';
import HomePage from './components/Pages/HomePage';
import Product from './components/Pages/Product';
import Sideer from './components/sider/Sideer';


function App() {
  // const isLoggedIn = localStorage.getItem('isLoggedIn')
  // if(!isLoggedIn ){
  //   return <LoginPage />
  // }
  return (

      <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<HandleLoginRoute Component={LoginPage} />} />
          <Route path='/projects' element={<PrivateRoute Component={Project} />} />
          {/* <Route path='/projects' element={isLoggedIn === true ? <Project/> : navigate('/login)}/> */}
          <Route path='/project-details' element={<PrivateRoute Component={ProjectDetails} />} />
          {/* <Route path='/project-detail' element={isLoggedIn === true ? <ProjectDetails/> : <LoginPage/>} /> */}
          <Route path='/add-tasks' element={<PrivateRoute Component={AddTasks} />} />
          <Route path='/products' element={<PrivateRoute Component={Product} />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
