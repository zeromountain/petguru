import React, {useState} from 'react'
import Head from 'next/head'
import LandingNavigationBar from '../components/LandingNavbar'

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>펫구루 | Welcome</title>
      </Head>
      <LandingNavigationBar />
        <h1>펫그루 랜딩페이지입니다.</h1>
    </>
  );
}
