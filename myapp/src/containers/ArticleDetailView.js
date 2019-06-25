import React from "react";
import axios from "axios";

import { Card } from "antd";

class ArticleDetailView extends React.Component {
  state = {
    article: {}
  };

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://localhost:8000/api/v1/detail/${articleID}/`).then(res => {
      this.setState({
        article: res.data
      });
      console.log(res.data);
    });
  }

  render() {
    return (
      <Card title={this.state.article.title}>
        <p>{this.state.article.content}</p>
      </Card>
    );
  }
}

export default ArticleDetailView;
