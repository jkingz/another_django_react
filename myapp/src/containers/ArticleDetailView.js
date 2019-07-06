import React from "react";
import axios from "axios";

import { Card } from "antd";

import CustomForms from "../components/Forms";

class ArticleDetailView extends React.Component {
  state = {
    article: {}
  };

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://localhost:8000/api/v1/${articleID}/`).then(res => {
      this.setState({
        article: res.data
      });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <Card title={this.state.article.title}>
          <p>{this.state.article.content}</p>
        </Card>
        <CustomForms
          requestType="put"
          articleID={this.props.match.params.articleID}
          btnText="Update"
        />
      </div>
    );
  }
}

export default ArticleDetailView;
