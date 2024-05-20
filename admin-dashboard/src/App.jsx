import React, { useState } from "react";
import Layouts from "./Layouts/Layouts";
import Router from "./Routes/Router";
import PublicRoute from "./Routes/Routers/PublicRoute";


const App = () => {
     const [allRoutes , setAllRoutes] = useState([...PublicRoute])
     return <Router allRoutes={allRoutes} />
};

export default App;
