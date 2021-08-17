import TopBar from "./Components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import{Switch,Route,Link } from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {current} from './Redux/actions/authActions'
import { useEffect } from "react";
import Alert from "./Components/alert/Alert"
import PrivateRoute from "./routes/PivateRoute";
import Footer from "./Components/footer/Footer";


function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
 const alerts = useSelector((state) => state.alertReducer);
  useEffect(() => {
      dispatch(current());
      // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
    
    <TopBar/>
    {alerts !== null && alerts.length > 0 && (
      <div className='alertsContainer fixed-top'>
        <Alert className='alerts' alerts={alerts} />
      </div>
    )}
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/register" component= {Register}/>
    <Route path="/login" component= {Login}/>
    <Route path="/single" component= {Single}/>
    <PrivateRoute path="/write" component={Write}/>
    <PrivateRoute path="/settings" component= {Settings} />
    </Switch>
  <Footer/>
    </div>
  );
}

export default App;
