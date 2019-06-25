import React from "react";

import "antd/dist/antd.css";

import CustomLayout from "./containers/Layout";
import ArticleListView from "./containers/ArticleListView";

// es6 arrow function
const App = () => {
  return (
    <div className="App">
      <CustomLayout>
        <ArticleListView />
      </CustomLayout>
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
