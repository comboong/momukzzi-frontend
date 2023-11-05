'use client';

import Image from 'next/image';
import { useState } from 'react';
import Nav from '../../components/Nav';

const randomshop = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(prevState => !prevState);
  };

  const heartImage = isFavorite ? '/red_heart.png' : '/black_heart.png';

  const foodImages = [
    'https://plus.unsplash.com/premium_photo-1680740103993-21639956f3f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FtcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  ];

  return (
    <div className='flex flex-col items-center'>
      <header className='flex justify-between items-center w-full p-4'>
        <div className='flex items-center'>
          <span className='ml-2 font-bold text-lg '>momukzzi</span>
        </div>
        <Nav />
      </header>
      <div className='flex flex-wrap justify-center'>
        {foodImages.map((image, index) => (
          <img key={index} src={image} alt={`Food ${index + 1}`} className='w-full h-screen object-cover' />
        ))}
      </div>
      <div
        className='absolute'
        style={{
          position: 'absolute',
          width: '30px',
          height: '17px',
          left: '25px',
          top: '696px',
          boxSizing: 'border-box',
          border: '0.7px solid #FF8E26',
          borderRadius: '20px',
        }}
      ></div>
      <div
        className='absolute'
        style={{
          position: 'absolute',
          width: '30px',
          height: '16px',
          left: '31px',
          top: '697px',
          fontFamily: 'Noto Sans',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '10px',
          lineHeight: '14px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          letterSpacing: '-0.05em',
          color: '#FF8E26',
        }}
      >
        <span>한식</span>
      </div>

      <div
        className='absolute'
        style={{
          position: 'absolute',
          width: '232px',
          height: '44px',
          left: '20px',
          top: '712px',
          fontFamily: 'Noto Sans',
          fontStyle: 'normal',
          fontWeight: '900',
          fontSize: '32px',
          lineHeight: '44px',
          display: 'flex',
          alignItems: 'center',
          letterSpacing: '-0.05em',
          color: '#FFFFFF',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <span>오구당당 부평본점</span>
      </div>
      <div
        className='absolute'
        style={{
          position: 'absolute',
          width: '195px',
          height: '19px',
          left: '35px',
          top: '764px',
          fontFamily: 'Noto Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '19px',
          display: 'flex',
          alignItems: 'center',
          letterSpacing: '-0.05em',
          color: '#FFFFFF',
        }}
      >
        <span>현재위치에서 20m거리에 있습니다.</span>
      </div>
      <div
        className='absolute'
        style={{
          position: 'absolute',
          width: '195px',
          height: '12px',
          left: '36px',
          top: '787px',
          fontFamily: 'Noto Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '9px',
          lineHeight: '12px',
          display: 'flex',
          alignItems: 'center',
          letterSpacing: '-0.05em',
          color: '#DBDBDB',
        }}
      >
        <span>인천 부평구 경원대로1377번길 47</span>
      </div>
      <Image
        style={{
          position: 'absolute',
          left: '347px',
          top: '715px',
        }}
        onClick={handleFavoriteClick}
        src={heartImage}
        width={25}
        height={25}
        alt='heart'
      />
      <div
        className='absolute'
        style={{
          position: 'absolute',
          width: '24px',
          height: '14px',
          left: '349px',
          top: '742px',
          fontFamily: 'Noto Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '10px',
          lineHeight: '14px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          letterSpacing: '-0.05em',
          color: '#FFFFFF',
        }}
      >
        <span>1,049</span>
      </div>
    </div>
  );
};

export default randomshop;

// "use client";

// import Image from "next/image";
// import { useState } from "react";

// const randomshop = () => {
//   const [isFavorite, setIsFavorite] = useState(false);

//   const handleFavoriteClick = () => {
//     setIsFavorite((prevState) => !prevState);
//   };

//   const heartImage = isFavorite ? "/red_heart.png" : "/black_heart.png";

//   const foodImages = [
//     "https://plus.unsplash.com/premium_photo-1680740103993-21639956f3f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FtcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   ];

//   return (
//     <div className="flex flex-col items-center">
//       <header className="flex justify-between items-center w-full p-4">
//         <div className="flex items-center">
//           <span className="ml-2 font-bold text-lg">momukzzi</span>
//         </div>
//       </header>
//       <div className="flex flex-wrap justify-center">
//         {foodImages.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Food ${index + 1}`}
//             className="w-full h-screen object-cover"
//           />
//         ))}
//       </div>
//       <div
//         className="absolute border border-solid border-orange-500 rounded-full"
//         style={{ width: "30px", height: "17px", left: "25px", top: "696px" }}
//       ></div>
//       <div
//         className="absolute flex items-center justify-center font-bold text-xs text-orange-500"
//         style={{ width: "30px", height: "16px", left: "31px", top: "697px" }}
//       >
//         <span>한식</span>
//       </div>

//       <div
//         className="absolute"
//         style={{ width: "232px", height: "44px", left: "20px", top: "712px" }}
//       >
//         <span
//           className="font-semibold text-2xl leading-10 text-white"
//           style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
//         >
//           오구당당 부평본점
//         </span>
//       </div>
//       <div
//         className="absolute"
//         style={{ width: "195px", height: "19px", left: "35px", top: "764px" }}
//       >
//         <span className="font-normal text-base leading-5 text-white">
//           현재위치에서 20m거리에 있습니다.
//         </span>
//       </div>
//       <div
//         className="absolute"
//         style={{ width: "195px", height: "12px", left: "36px", top: "787px" }}
//       >
//         <span className="font-normal text-sm leading-3 text-gray-400">
//           인천 부평구 경원대로1377번길 47
//         </span>
//       </div>
//       <Image
//         className="absolute cursor-pointer"
//         style={{ left: "347px", top: "715px" }}
//         onClick={handleFavoriteClick}
//         src={heartImage}
//         width={25}
//         height={25}
//         alt="heart"
//       />
//       <div
//         className="absolute"
//         style={{ width: "24px", height: "14px", left: "349px", top: "742px" }}
//       >
//         <span className="font-bold text-sm leading-5 text-white">1,049</span>
//       </div>
//     </div>
//   );
// };

// export default randomshop;
