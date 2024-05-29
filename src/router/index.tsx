import { createBrowserRouter } from 'react-router-dom'

import App from '@/App.tsx'
import CartView from '@/views/CartView'
import ProductDetailView from '@/views/ProductDetailView';
import FavoriteView from '@/views/FavoriteView';

const routes = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/cart',
    element: <CartView />
  },
  {
    path: '/product-detail/:id',
    element: <ProductDetailView />
  },
  {
    path: '/favorite-products',
    element: <FavoriteView />
  },
]

const router = createBrowserRouter(routes)

export default router
