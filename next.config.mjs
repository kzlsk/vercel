/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/products/:id",
        destination: "/items/:id",
        permanent: true,
      },
    ];
  },
  //우리가 사용할 외부의 이미지 주소를 미리 넥스트 서버에 알려주는 것
  images: {
    remotePatterns: [
      {
        protocol: "https",
        //도메인을 포함한 앞쪽에 있는 주소 적기
        hostname: "learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com",
        port: "",
        // ** : 뒤쪽에 있는 모든 경로 포함
        pathname: "/codeitmall/**",
      },
    ],
  },
};

export default nextConfig;
