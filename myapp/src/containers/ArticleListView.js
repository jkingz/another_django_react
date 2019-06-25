import React from "react";
import axios from "axios";

import Articles from "../components/Article";

class ArticleListView extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios.get("http://localhost:8000/api/v1/").then(res => {
      this.setState({
        articles: res.data
      });
      console.log(res.data);
    });
  }

  render() {
    return <Articles data={this.state.articles} />;
  }
}

export default ArticleListView;
