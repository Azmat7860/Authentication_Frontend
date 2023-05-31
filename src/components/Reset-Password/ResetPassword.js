import React from "react";
import { LockOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import { Link } from "react-router-dom";
import './resetPassword.css'

const ResetPassword = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
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
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
              hasFeedback
            >
               <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="New Password"
              />
            </Form.Item>
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Confirm Password does not match")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Confirm Password"
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
            Don't have an account? <Link to="/">Signup</Link>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default ResetPassword;
