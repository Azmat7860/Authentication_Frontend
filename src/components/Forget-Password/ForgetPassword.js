import React from "react";
import { MailOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import './forgetPassword.css'
import axios from "axios";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:2022/auth/forget-password',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : values
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      navigate('/verification-code')
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="forget-password">
      <Card
        bordered={true}
        className="forget-password-card"
        style={{
          width: "60%",
        }}
      >
        <div className="container forgot-password">
          <h5 className="text-center my-3">Forget Password</h5>
          <p className="text-center mb-4">
            No worries we'll send your reset instruction on your email.
          </p>
          <Form
            name="normal_login"
            className="forget-password-form"
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
            <Form.Item className="d-flex justify-content-end">
              Already have an account?&nbsp;
              <Link className="login-form-forgot" to="/login">
                Login
              </Link>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className="forget-password-form-button">
                Submit
              </Button>
            </Form.Item>
            Don't have an account? <Link to="/register">Signup</Link>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default ForgetPassword;
