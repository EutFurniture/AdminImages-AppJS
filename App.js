import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import LoginScreen from "./components/LoginScreen";
import ForgotPasswordScreen from "./components/admin/pages/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/admin/pages/ResetPasswordScreen";
import ManageEmployee from "./components/admin/pages/ManageEmployee";
import ManageUser from "./components/admin/pages/ManageUser";
import ManagePayments from "./components/admin/pages/ManagePayments";
import ManageProducts from "./components/admin/pages/ManageProducts";
import AddEmployeeForm from "./components/admin/pages/AddEmployeeForm"
import UpdateEmployee from "./components/admin/pages/UpdateEmployee"
import Categories from "./components/admin/pages/Categories";
import AddProductForm from "./components/admin/pages/AddProductForm";
import EditProducts from "./components/admin/pages/EditProducts";
import CustomizedOrders from "./components/admin/pages/CustomizedOrders";
import ViewCustomizedOrder from "./components/admin/pages/ViewCustomizedOrder";
import EmpInfo from "./components/admin/pages/EmpInfo";
import ProductInfo from "./components/admin/pages/ProductInfo";
import ManageGifts from "./components/admin/pages/ManageGifts";
import AddGift from "./components/admin/pages/AddGift";
import AddCategory from "./components/admin/pages/AddCategory";
import EditCategory from "./components/admin/pages/EditCategory";
import EditGifts from "./components/admin/pages/EditGifts"
import GiftInfo from "./components/admin/pages/GiftInfo"
import DashboardNew from "./components/admin/pages/DashboardNew";
import Updateform from "./components/admin/pages/UpdateForm"
import AddProduct from "./components/admin/pages/Addproduct";
import Employee from "./components/admin/pages/Employee";

import Dashboard from './components/dManager/pages/Dashboard';
import ManageDelivery from './components/dManager/pages/ManageDelivery';
import ManageDelivers from './components/dManager/pages/ManageDelivers';
import ManageReturnItems from './components/dManager/pages/ManageReturnItems';
import AssignDelivers from './components/dManager/pages/AssignDelivers';
import AddDelivers from './components/dManager/pages/AddDelivers';
import ManageCashOnDelivery from './components/dManager/pages/ManageCashOnDelivery';
import ManageSchedule from './components/dManager/pages/ManageSchedule';
import ManagePrioritize from './components/dManager/pages/ManagePrioritize';


//import ManageReports from './components/dManager/pages/ManageReports';
//import Register from './components/Register';
//import Login from './components/Login';
//import { Signup } from './components/Signup';

/*import Navbar from './components/customer/Navbar';
import Home from './components/customer/pages/Home';

import SignUp from './components/customer/pages/SignUp';*/


const App = () => {
  return (
    <Router>
      <div className="app">
     
        <Switch>
         
           <Route path='/' exact component={LoginScreen} />
           <Route path='/admin/pages/DashboardNew' exact component={DashboardNew}/>
          
          <Route path='/admin/pages/ManageEmployee' component={ManageEmployee} />
          <Route path='/admin/pages/ManageUser' component={ManageUser} />
          <Route path='/admin/pages/ManagePayments' component={ManagePayments} />
          <Route path='/ManageProducts' component={ManageProducts} />
          <Route path='/ManageGifts' component={ManageGifts} />
          <Route path='/admin/pages/Categories' component={Categories} />
          <Route path='/admin/pages/AddEmployeeForm' component={AddEmployeeForm} />
          <Route path='/admin/pages/AddProductForm' component={AddProductForm} />
          <Route path='/admin/pages/EditProducts' component={EditProducts} />
          <Route path='/admin/pages/CustomizedOrders' component={CustomizedOrders} />
          <Route path='/admin/pages/ViewCustomizedOrder' component={ViewCustomizedOrder} />
          <Route path='/admin/pages/EmpInfo' component={EmpInfo} />
          <Route path='/admin/pages/GiftInfo' component={GiftInfo} />
          <Route path='/admin/pages/ProductInfo' component={ProductInfo} />
          <Route path='/admin/pages/AddGift' component={AddGift} />
          <Route path='/admin/pages/AddCategory' component={AddCategory} />
          <Route path='/admin/pages/EditCategory' component={EditCategory} />
          <Route path='/admin/pages/EditGifts' component={EditGifts} />
          <Route exact path="/forgotpassword" component={ForgotPasswordScreen} />
          <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen}/> 
          <Route exact path="/admin/pages/UpdateEmployee" component={UpdateEmployee}/> 
          <Route exact path="/admin/pages/AddProduct" component={AddProduct}/>  
          <Route path='/Employee' component={Employee} />
          

        {/* <Route path="/sign-up" component={SignUp}/> */}
          {/*<Route path='/' exact component={Dashboard}/>
          <Route path='/' exact component={Login}/>*/}
          {/* <Route path='/' exact component={Login}/> */}
          
          <Route path='/dManager/pages/Dashboard'  component={Dashboard}/>
          <Route path='/dManager/pages/ManageDelivery' component={ManageDelivery}/>
          <Route path='/dManager/pages/ManageDelivers' component={ManageDelivers}/>
          <Route path='/dManager/pages/AddDelivers' component={AddDelivers}/>
          <Route path='/dManager/pages/ManageReturnItems' component={ManageReturnItems}/>
          <Route path='/dManager/pages/AssignDelivers' component={AssignDelivers}/>
          <Route path='/dManager/pages/ManageCashOnDelivery' component={ManageCashOnDelivery}/>
          <Route path='/dManager/pages/ManageSchedule' component={ManageSchedule}/>
          <Route path='/dManager/pages/ManagePrioritize' component={ManagePrioritize}/>
          {/*<Route path='/dManager/pages/ManageReports' component={ManageReports}/>*/}
        </Switch>
      </div>
    </Router>
  );
};

export default App;