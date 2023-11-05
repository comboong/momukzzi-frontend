import Image from "next/image";

export default function Home() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor: "#2C2C2C" }}
    >
      <h1
        className="text-white text-4xl font-bold mb-5"
        style={{ color: "#FF8E26", height: "315px" }}
      >
        momukzzi
      </h1>

      <Image
        src="/kakao_login_medium_wide.png"
        width={300}
        height={46}
        alt="kakao login"
      />

      <p className="text-white text-xs mt-8" style={{ color: "#DBDBDB" }}>
        회원가입 ｜ 로그인
      </p>
    </div>
  );
}
