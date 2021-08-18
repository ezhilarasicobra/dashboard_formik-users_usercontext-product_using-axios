import "./App.css";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import Dashboard from "./Components/Dashboard";
import Users from "./Components/Users";
import Product from "./Components/Product";
import Createuser from "./Components/Createuser";
import Edituser from "./Components/Edituser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserProvider } from "./Components/userContext";
function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Switch>
                <UserProvider>
                <Route path="/" component={Dashboard} exact={true}></Route>
                <Route path="/product" component={Product} exact={true}></Route>

                <Route path="/user" component={Users} exact={true}></Route>
<Route path="/createuser"component={Createuser}exact={true}></Route>
<Route path="/edituser/:id"component={Edituser}exact={true}></Route>
                </UserProvider>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
