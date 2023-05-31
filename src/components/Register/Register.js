import React from "react";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import './register.css'
import { Link } from "react-router-dom";

const Register = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="register">
      <Card
        bordered={true}
        className="signup-card"
        style={{
          width: "60%",
        }}
        
      >
        <div className="container signup">
          <h5 className="text-center my-3">Regsiter</h5>
          <Form
            name="normal_signup"
            className="signup-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                className="signup-form-button"
              >
                Signup
              </Button>
            </Form.Item>
              Already have an account? <Link to="/login">Login</Link>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default Register;
