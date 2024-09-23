import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Components/Home';
import Categories from '../Components/Categories';
import Brands from '../Components/Brands';
import AboutUs from '../Components/AboutUs';
import ContactUs from '../Components/ContactUs/Index';
import News from '../Components/News';
import OrderStatus from '../Components/Footer/OrderStatus';
import ShippingDelivery from '../Components/Footer/Shipping&Delivery';
import ReturnRefund from '../Components/Footer/Return&Refund';
import PaymentMethod from '../Components/Footer/PaymentMethod';
import DeliveryInformation from '../Components/Footer/DeliveryInformation';
import Return from '../Components/Footer/Return';
import Careers from '../Components/Footer/Careers';
import PrivacyPolicy from '../Components/Footer/Privacy';
import Login from '../Components/Login/Login';
import SignUp from '../Components/Login/SignUp';
import AdminPanel from '../Components/AdminPanel/AdminPanel';
import AllUsers from '../Components/AdminPanel/allUser';
import AllProducts from '../Components/AllProducts/AllProducts';
import CategoryProduct from '../pages/CategoryProduct';
import Home1 from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import SearchProduct from '../pages/SearchProduct';
import Success from '../pages/Success';
import Cancel from '../pages/Cancel';
import Order from '../pages/Order';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // {
      //   path: '',
      //   element: <Home />,
      // },
      {
        path: '',
        element: <Home1/>
      },
      {
        path: 'Categories/*',
        element: <Categories />,
      },
      {
        path: 'Brands/*',
        element: <Brands />,
      },
      {
        path: 'AboutUs/*',
        element: <AboutUs />,
      },
      {
        path: 'News',
        element: <News />,
      },
      {
        path: 'Contact',
        element: <ContactUs />,
      },
      {
        path: 'OrderStatus',
        element: <OrderStatus />,
      },
      {
        path: 'Shipping&Delivery',
        element: <ShippingDelivery />,
      },
      {
        path: 'Return&Refund',
        element: <ReturnRefund />,
      },
      {
        path: 'PaymentMethod',
        element: <PaymentMethod />,
      },
      {
        path: 'DeliveryInformation',
        element: <DeliveryInformation />,
      },
      {
        path: 'Return',
        element: <Return />,
      },
      {
        path: 'Careers',
        element: <Careers />,
      },
      {
        path : "product-category",
        element : <CategoryProduct/>
    },
    {
        path : "product/:id",
        element : <ProductDetails/>
    },
    {
      path : 'cart',
      element : <Cart/>
  },
  {
path:'success',
element: <Success/>
  },
  {
    path: 'cancel',
    element: <Cancel/>
  },
  {
    path: 'order',
    element: <Order/>
  },
      {
        path: 'Privacy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path : "search",
        element : <SearchProduct/>
    },
      {
        path : "admin-panel",
        element : <AdminPanel/>,
        children : [
            {
                path : "all-Users",
                element : <AllUsers/>
            },
            {
                path : "all-products",
                element : <AllProducts/>
            }
        ]
    }
    ],
  },
]);

export default router;
