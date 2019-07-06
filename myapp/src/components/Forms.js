import React from "react";
import { Form, Input, Button } from "antd";

import axios from "axios";

// eslint-disable-next-line
const FormItem = Form.Item;

class CustomForms extends React.Component {
  handFormSubmit = (event, requestType, articleID) => {
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;

    // eslint-disable-next-line
    switch (requestType) {
      case "post":
        return axios
          .post("http://localhost:8000/api/v1/", {
            title: title,
            content: content
          })
          .then(res => console.log(res))
          .catch(error => console.error(error));
      case "put":
        return axios
          .put(`http://localhost:8000/api/v1/${articleID}/`, {
            title: title,
            content: content
          })
          .then(res => console.log(res))
          .catch(error => console.error(error));
    }
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handFormSubmit(
              event,
              this.props.requestType,
              this.props.articleID
            )
          }
        >
          <Form.Item label="Title">
            <Input name="title" placeholder="Put title here" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" placeholder="Enter some content" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForms;
