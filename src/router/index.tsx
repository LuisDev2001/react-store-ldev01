import { createBrowserRouter } from 'react-router-dom'
import HomeView from '@/views/HomeView'
import CartView from '@/views/CartView'
import ProductDetailView from '@/views/ProductDetailView';
import FavoriteView from '@/views/FavoriteView';
import DefaultLayout from '@/layouts/DefaultLayout';

const routes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <HomeView /> },
      { path: 'cart', element: <CartView /> },
      { path: 'product-detail/:id', element: <ProductDetailView /> },
      { path: 'favorite', element: <FavoriteView /> },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
