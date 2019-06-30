import React from "react";
import { Form, Input, Button } from "antd";

class CustomForms extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Item label="Title">
            <Input placeholder="Put title here" />
          </Form.Item>
          <Form.Item label="Content">
            <Input placeholder="Enter some content" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForms;
