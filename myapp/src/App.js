import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import CustomLayout from "./containers/Layout";
import Article from "./components/Article";

// es6 arrow function
const App = () => {
  return (
    <div className="App">
      <CustomLayout />
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
