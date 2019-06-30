import React from "react";
import axios from "axios";

import Articles from "../components/Article";
import CustomForms from "../components/Forms";

class ArticleListView extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios.get("http://localhost:8000/api/v1/").then(res => {
      this.setState({
        articles: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <Articles data={this.state.articles} />
        <br />
        <h2>Create and Article here!</h2>
        <CustomForms />
      </div>
    );
  }
}

export default ArticleListView;
