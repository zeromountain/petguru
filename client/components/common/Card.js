import Image from 'next/image';

const data = {
  contents: {
    a: {
      id: 1,
      img: <Image src="/images/dog.jpeg" width={300} height={300} />,
      text: "안녕하세요 우리 강아지들입니다. 인절미와 흑임자들 입니다.",
    },
  },
};

const Card = () => {
  return (
    <div
      style={{
        backgroundColor: "#eee",
        width: "100%",
        padding: "10px",
      }}
    >
      <h3>지도로 보기</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{ backgroundColor: "red", width: "300px", height: "300px" }}
        >
          {data.contents.a.img}
        </div>
        <div
          style={{
            backgroundColor: "yellowgreen",
            width: "500px",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center"
          }}
        >
          {data.contents.a.text}
        </div>
      </div>
    </div>
  );
};

export default Card;
