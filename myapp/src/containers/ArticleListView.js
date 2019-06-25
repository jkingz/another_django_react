import React from "react";
import axios from "axios";

import Articles from "../components/Article";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "http://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

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
