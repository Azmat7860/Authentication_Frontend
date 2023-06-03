import React, { useEffect } from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, notification } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./login.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values: ", values);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:2022/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: values.email.trim(),
        password: values.password,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log(response.data.data.token);
        localStorage.setItem("token", response.data.data.token);
        notification["success"]({
          message: "Logged in Successfully!",
          duration: 3,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        notification["error"]({
          message: "Invalid Credetials",
          duration: 3,
        });
      });
  };

  useEffect(() => {
    form.setFieldsValue({
      email: " ",
      password: " ",
    });
  }, [form]);

  return (
    <div className="login">
      <Card
        bordered={true}
        className="login-card"
        style={{
          width: "60%",
        }}
      >
        <div className="container signin">
          <h5 className="text-center my-3">Login</h5>
          <Form
            name="normal_login"
            className="login-form"
            form={form}
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
              <Button htmlType="submit" className="login-form-button">
                Login
              </Button>
            </Form.Item>
            Don't have an account? <Link to="/register">Signup</Link>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default Login;
