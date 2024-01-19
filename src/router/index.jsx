import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import PageWrapper from '../pages/PageWrapper';
import Movies from '../pages/Movies';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Mustahil gaada page nya</h1>,
    children: [
      {
        path: '',
        element: <PageWrapper Children={Home} />,
      },
      {
        path: 'movies',
        element: <PageWrapper Children={Movies} />,
      },
    ],
  },
]);

export default router;
