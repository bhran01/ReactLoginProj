import AdminDashboard from '../admin/AdminDashboard'
import EndUserDashboard from '../enduser/EndUserDashboard'
import ResellerDashboard from '../reseller/ResellerDashboard'
import AccountManagerDashboard from '../account_manager/AccountManagerDashboard'
import Home from '../Home'
import Register from '../Register'


export const routes=[
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'register',
        element:<Register/>
    },
    {
        path:'enduserdashboard',
        element:<EndUserDashboard/>
    },
    {
        path:'accountmanagerdashboard',
        element:<AccountManagerDashboard/>
    },
    {
        path:'resellerdashboard',
        element:<ResellerDashboard/>
    },
    {
        path:'admindashboard',
        element:<AdminDashboard/>
    }
];
