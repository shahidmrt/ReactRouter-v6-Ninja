import { Route,  RouterProvider,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Layout from './layout/Layout';
import HelpLayout from './layout/HelpLayout';
import Contact, { contactAction } from './pages/help/Contact';
import Faq from './pages/help/Faq';
import NotFound from './pages/NotFound';
import CareerLayout from './layout/CareerLayout';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareerDetail, { careerDetailLoader } from './pages/careers/CareerDetail';
import CareerError from './pages/careers/CareerError';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}> 
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>

            <Route path='helplayout' element={<HelpLayout/>}>        
              <Route   path='faq' element={<Faq/>}/>
              <Route  path='contact' element={<Contact/>} action={contactAction}/>
            </Route>

            <Route path='careerlayout' element={<CareerLayout/>} errorElement={<CareerError/>}  >
                <Route index element={<Careers/>} loader={careersLoader}
                  // errorElement={<CareerError/>}
                  />
                <Route path=":id" element={<CareerDetail/>}  loader={careerDetailLoader}
                //  errorElement={<CareerError/>}
                 />
            </Route>

            <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
      
      
         
        

  );
}

export default App;
