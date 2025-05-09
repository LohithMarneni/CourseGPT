import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Courses from './components/Courses/Courses.jsx';
import './index.css';
import App from './App.jsx';
import Home from './components/Home/Home.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import { AuthProvider } from './context/authContext.jsx';
import CreateCourse from './components/CreateCourse/CreateCourse.jsx';
import GetQuiz from './components/Quiz/GetQuiz.jsx';
import SubmitQuiz from './components/Quiz/SubmitQuiz.jsx';
export const server = "https://coursegpt-f845.onrender.com/api/";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <AboutMe /> },
      { path: 'contactus', element: <ContactUs /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'courses', element: <Courses /> },
      { path: 'addCourse', element: <CreateCourse /> },
      { path: 'getQuiz', element: <GetQuiz /> },
      { path: 'submitQuiz', element: <SubmitQuiz /> },
      { path: '*', element: <h1>Not Found</h1> }
      
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
