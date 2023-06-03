import React from "react";
import { LockOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, notification } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./resetPassword.css";
import axios from "axios";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:2022/auth/update-password",
      headers: {
        "Content-Type": "application/json",
        Authorization: `"Bearer ${localStorage.getItem("token")}`,
      },
      data: values,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        notification["success"]({
          message: "Password Reset Successfully",
          duration: 3,
        });
        navigate("/success-message");
      })
      .catch((error) => {
        console.log(error);
        notification["error"]({
          message: "Password is Incorrect",
          duration: 3,
        });
      });
  };
  return (
    <div className="reset-password">
      <Card
        bordered={true}
        className="reset-password-card"
        style={{
          width: "60%",
        }}
      >
        <div className="container">
          <h5 className="text-center my-3">Set New Password</h5>
          <p className="text-center mb-4">
            Your new password must be different to previously used password
          </p>
          <Form
            name="normal_login"
            className="reset-password-form"
            form={form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="old_password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Old Password"
              />
            </Form.Item>
            <Form.Item
              name="new_password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="New Password"
              />
            </Form.Item>
            <Form.Item className="d-flex justify-content-end">
              Already have an account?&nbsp;
              <Link className="login-form-forgot" to="/login">
                Login
              </Link>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className="reset-password-form-button">
                Reset
              </Button>
            </Form.Item>
            Don't have an account? <Link to="/register">Signup</Link>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default ResetPassword;
