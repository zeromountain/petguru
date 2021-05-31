import React from 'react';
import styled from 'styled-components';
import { Button } from "antd";
import "antd/dist/antd.css";

const FormContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 500px;
  background-color: red;
  .post {
    margin-right: 5px;
    margin-bottom: 10px;
  }
  .cancel {
    margin-left: 5px;
    margin-bottom: 10px;
  }
`;

const PostForm = () => {
  return (
    <FormContainer>
      <Button type="primary" className="post">등록하기</Button>
      <Button type="primary" className="cancel">취소하기</Button>
    </FormContainer>
  );
}

export default PostForm;
