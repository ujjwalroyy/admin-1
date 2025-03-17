import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './components/LoginPage';
import Project from './components/Project';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/project' element={<Project />}/>
          <Route path='/project-detail' element={<ProjectDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
