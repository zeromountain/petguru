import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from './common/Button';

const LandingNavigationBar = ({ children, type }) => {
  const router = useRouter();
  
  const onLogout = () => {
    router.push('/');
  }
  return (
    <>
      {
        type === "welcome" ?  
        <>
          <div className="nav" style={{ marginTop: "30px", display: "flex" }}>
            <div style={{ backgroundColor: "red", marginLeft: "3%" }}>
              <Link href="/">
                <a>PetGuru</a>
              </Link>
            </div>
            <div style={{ marginLeft: "80%" }}>
              <Link href="/login">
                <a>로그인</a>
              </Link>
            </div>
            <div style={{ marginLeft: "10px" }}>Ko/En</div>
          </div>
          {children && children}
        </>
        :
        <>
        <div className="nav" style={{ marginTop: "30px", display: "flex" }}>
          <div style={{ backgroundColor: "red", marginLeft: "3%", lineHeight:"50px" }}>
            <Link href="/home">
              <a>PetGuru</a>
            </Link>
          </div>
          <div style={{ marginLeft: "5%", lineHeight:"50px" }}>
            <Link href="/q&a">
              <a>Q&A</a>
            </Link>
          </div>
          <div style={{ marginLeft: "1%", lineHeight:"50px" }}>
            <Link href="/missing">
              <a>실종신고</a>
            </Link>
          </div>
          <div style={{ marginLeft: "75%" }}>
            <Button onClick={onLogout} style={{
              border: "none"  
              }}>Logout</Button>
          </div>
          <div style={{ marginLeft: "1%", lineHeight:"50px" }}>
            <Link href="/mypage">
              <a>마이페이지</a>
            </Link>
          </div>
        </div>
        {children && children}
      </>
      }
    </>
  );
}

export default LandingNavigationBar;