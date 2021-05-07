import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Nominations } from "./pages";
import { Sidebar, Notification, Nav } from "./components";
import { useSelector } from "react-redux";
import "./App.css";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: Home,
  },
  {
    path: "/nominations",
    sidebar: () => <div>bubblegum!</div>,
    main: Nominations,
  },
];

const App = () => {
  const { nominations } = useSelector((state: any) => state.nominations);

  return (
    <Router>
      {nominations.length > 5 && <Notification />}
      <div className="container">
        <Sidebar />

        <div className="main">
          <Nav />
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
