import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import "antd/dist/antd.css";

import CustomLayout from "./containers/Layout";

// es6 arrow function
const App = () => {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
};

// old way function base
// function App() {
//   return (
//     <div className="App">
//       <CustomLayout>
//       </CustomLayout>
//     </div>
//   );
// }

// export default App;

export default App;
