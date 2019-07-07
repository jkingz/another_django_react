import React from "react";
import axios from "axios";

import { Card, Button } from "antd";

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

  handleDelete = event => {
    const articleID = this.props.match.params.articleID;
    axios.delete(`http://localhost:8000/api/v1/${articleID}/`);
    this.props.history.push("/");
  };

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
        <form onSubmit={this.handleDelete}>
          <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </form>
      </div>
    );
  }
}

export default ArticleDetailView;
