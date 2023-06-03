import { Button, Result } from "antd";
import { useNavigate } from "react-router";
import React from "react";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Back to Dashboard
          </Button>
        }
      />
    </div>
  );
};

export default PageNotFound;
