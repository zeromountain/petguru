import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 400px;
  background: white;
  border-radius:
`;

const AuthTemplate = ({ children } ) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link href="/">
            PetGuru
          </Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  )
}

export default AuthTemplate;
