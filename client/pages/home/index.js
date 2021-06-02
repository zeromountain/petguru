import Head from 'next/head'
import { useCallback, useEffect } from 'react';
import '../../styles/Home.module.css'
import LandingNavigationBar from '../../components/LandingNavbar';


export default function Home() {
  useEffect(() => {
  }, [])

  return (
    <>
      <Head>
        <title>펫그루 | 홈</title>
      </Head>
      <LandingNavigationBar />
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <section>
          <h4>주간 인기 Q&A</h4>
          <div
            className="list"
            style={{
              display: "flex",
              flexWrap: "wrap",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                backgroundColor: "#eee",
                width: "300px",
                height: "300px",
                margin: "30px",
              }}
            >
              1번글
            </div>
            <div
              style={{
                backgroundColor: "#eee",
                width: "300px",
                height: "300px",
                margin: "30px",
              }}
            >
              2번글
            </div>
            <div
              style={{
                backgroundColor: "#eee",
                width: "300px",
                height: "300px",
                margin: "30px",
              }}
            >
              3번글
            </div>
            <div
              style={{
                backgroundColor: "#eee",
                width: "300px",
                height: "300px",
                margin: "30px",
              }}
            >
              4번글
            </div>
            <div
              style={{
                backgroundColor: "#eee",
                width: "300px",
                height: "300px",
                margin: "30px",
              }}
            >
              5번글
            </div>
            <div
              style={{
                backgroundColor: "#eee",
                width: "300px",
                height: "300px",
                margin: "30px",
              }}
            >
              6번글
            </div>
          </div>
        </section>
        <section>
          <h4>최근 실종 신고</h4>
          <div
            className="list"
            style={{
              display: "flex",
              flexWrap: "wrap",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                backgroundColor: "#eee",
                width: "300px",
                height: "300px",
                margin: "30px",
              }}
            >
              1번글
            </div>
            <div
              style={{
                backgroundColor: "#eee",
                width: "300px",
                height: "300px",
                margin: "30px",
              }}
            >
              2번글
            </div>
            <div
              style={{
                backgroundColor: "#eee",
                width: "300px",
                height: "300px",
                margin: "30px",
              }}
            >
              3번글
            </div>
            <div
              style={{
                backgroundColor: "#eee",
                width: "300px",
                height: "300px",
                margin: "30px",
              }}
            >
              4번글
            </div>
            <div
              style={{
                backgroundColor: "#eee",
                width: "300px",
                height: "300px",
                margin: "30px",
              }}
            >
              5번글
            </div>
            <div
              style={{
                backgroundColor: "#eee",
                width: "300px",
                height: "300px",
                margin: "30px",
              }}
            >
              6번글
            </div>
          </div>
        </section>
      </div>
    </>
  );
}