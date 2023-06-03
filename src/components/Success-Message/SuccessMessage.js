import { Button, Card, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./successMessage.css";

const SuccessMessage = () => {
  return (
    <div className="success-message">
      <Card
        bordered={true}
        className="success-message-card"
        style={{
          width: "60%",
        }}
      >
        <Result
          status="success"
          title="Password reset Successfully!"
          extra={[
            <Button key="console" className="success-message-button">
              <Link to={"/login"}>Back to Login</Link>
            </Button>,
          ]}
        />
      </Card>
    </div>
  );
};

export default SuccessMessage;
