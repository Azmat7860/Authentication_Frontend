import React from "react";
import { LockOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, notification } from "antd";
import { useNavigate } from "react-router";
import "./verificationCode.css";
import { Link } from "react-router-dom";
import axios from "axios";
// import axios from "axios";

const VerificationCode = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Recieved Values: " + JSON.stringify(values));
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:2022/auth/verify-email",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        notification["success"]({
            message: "Email Verified Successfully!",
            duration: 3,
          });
        navigate("/reset-password");
      })
      .catch((error) => {
        console.log(error);
        notification["error"]({
            message: "Email not verified!",
            duration: 3,
          });
      });
  };

  return (
    <div className="verification">
      <Card
        bordered={true}
        className="verification-card"
        style={{
          width: "60%",
        }}
      >
        <div className="container verification-code">
          <h5 className="text-center my-3">Verify Your Email</h5>
          <Form
            name="normal_signup"
            className="verification-form"
            form={form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="code"
              rules={[
                {
                  required: true,
                  message: "Please input your Verification Code!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Verification Code"
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className="verification-form-button">
                Verify Code
              </Button>
            </Form.Item>
            Already have an account? <Link to="/login">Login</Link>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default VerificationCode;
