import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="login">
      <Card
        bordered={true}
        className="signup-card"
        style={{
          width: "60%",
        }}
      >
        <div className="container signin">
          <h5 className="text-center my-3">Login</h5>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
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
              <Link
                className="login-form-forgot d-flex justify-content-end"
                to="/forget-password"
              >
                Forgot password?
              </Link>
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                className="login-form-button"
              >
                Login
              </Button>
            </Form.Item>
            Don't have an account? <Link to="/">Signup</Link>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default Login;
