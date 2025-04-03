import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
// Import pages
import ADHDResources from './pages/ADHDResources.jsx';
import Home from './pages/Home.jsx';
import ParentingResources from './pages/ParentingResources.jsx';
import ComingSoon from './pages/ComingSoon.jsx';
import AngerAndShame from './pages/AngerAndShame.jsx'
import AttachmentsAndEmotions from './pages/AttachmentsAndEmotions.jsx';
import CouplesResources from './pages/CouplesResources.jsx';
import FAQ from './pages/FAQ.jsx';
import Error from './pages/Error.jsx';
import Therapy from './pages/Therapy.jsx';
import PhysicianResources from './pages/PhysicianPatient.jsx'
import AdditionalResources from './pages/AdditionalResources.jsx';
import TagManager from 'react-gtm-module';


// Initialize Google Tag Manager Before Rendering App
TagManager.initialize({ 
  gtmId: import.meta.env.VITE_GTM_ID || '', /* Google Tag Manager ID */
  
});


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'coming-soon',
        element: <ComingSoon />,
      },
      {
        path: 'adhd-resources',
        element: <ADHDResources />,
      },
      {
        path: 'parenting-resources',
        element: <ParentingResources />,
      },
      {
        path: 'anger-and-shame',
        element: <AngerAndShame />,
      },
      {
        path: 'attachments-and-emotions',
        element: <AttachmentsAndEmotions />,
      },
      {
        path: 'couples-resources',
        element: <CouplesResources />,
      },
      {
        path: 'faq',
        element: <FAQ />,
      },
      {
        path: 'therapy',
        element: <Therapy />,
      },
      {
        path: 'physician-patient-resources',
        element: <PhysicianResources />,
      },
      {
        path: 'additional-resources',
        element: <AdditionalResources />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
