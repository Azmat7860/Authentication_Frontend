import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, notification } from "antd";
import { useNavigate } from "react-router";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  // const generateId = (users) => {
  //   if (!users || users.length === 0) {
  //     return "1";
  //   }
  //   return `${+users[users.length - 1].id + 1}`;
  // };

  const onFinish = (values) => {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:2022/auth/signup',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : values
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      localStorage.setItem("users", response.data.data.name);
      notification["success"]({
        message: "Registered Successfully",
        duration: 3,
      });
      navigate("/login");
    })
    .catch((error) => {
      console.log(error);
      notification["error"]({
        message: "User already exists with this email",
        duration: 3,
      });
    });

    // const users = JSON.parse(localStorage.getItem("users"));
		// console.log(users);
    // const user = users?.find((i) => i.email === values.email);
    // if (!user) {
    //   values.id = generateId(users);
    //   users.push(values);
    //   localStorage.setItem("users", JSON.stringify(users));
    //   notification["success"]({
    //     message: "Registered Successfully",
    //     duration: 2,
    //   });
    //   navigate("/login");
    // } else {
    //   notification["error"]({
    //     message: "User already exists with this email",
    //     duration: 2,
    //   });
    // }
  };

  useEffect(() => {
    form.setFieldsValue({
      name: " ",
      email: " ",
      password: " ",
    });
  }, [form]);

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
            form={form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
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
              <Button htmlType="submit" className="signup-form-button">
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
