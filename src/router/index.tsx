import { createBrowserRouter } from 'react-router-dom'
import HomeView from '@/views/HomeView'
import CheckoutView from '@/views/CheckoutView'
import ProductDetailView from '@/views/ProductDetailView';
import FavoriteView from '@/views/FavoriteView';
import ThanksView from '@/views/ThanksView';
import DefaultLayout from '@/layouts/DefaultLayout';

const routes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <HomeView /> },
      { path: 'cart', element: <CheckoutView /> },
      { path: 'product-detail/:id', element: <ProductDetailView /> },
      { path: 'favorite', element: <FavoriteView /> },
      { path: '/thanks', element: <ThanksView /> }
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
