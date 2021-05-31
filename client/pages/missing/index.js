import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import NavigationBar from '../../components/Navbar';
import CardList from '../../components/common/CardList';


export default function MissingMain() {

  const router = useRouter();

  const postContents = () => {
    router.push('/missing/postMissing');
  }

  return (
    <>
      <Head>
        <title>펫구루 | 실종신고</title>
      </Head>
      <NavigationBar>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <button style={{margin:"10px"}} onClick={postContents}>실종신고</button>
          <input type="text" placeholder="검색어를 입력하세요." style={{margin:"10px"}}/>
          <CardList />
        </div>
      </NavigationBar>
    </>
  );
}