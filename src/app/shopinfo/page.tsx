'use client';

import './styles.css';
import Image from 'next/image';
import { useState } from 'react';

const shopinfo = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('주소');

  const handleFavoriteClick = () => {
    setIsFavorite(prevState => !prevState);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const heartImage = isFavorite ? '/red_heart.png' : '/black_heart.png';

  const foodImages = [
    'https://plus.unsplash.com/premium_photo-1680740103993-21639956f3f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FtcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  ];

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-wrap justify-center'>
        {foodImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Food ${index + 1}`}
            style={{
              position: 'absolute',
              width: '393px',
              height: '313px',
              left: '0px',
              top: '0px',
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
      <div>
        <p className='text-design'>오구당당 부평본점</p>
        <Image
          style={{
            position: 'absolute',
            left: '344px',
            top: '344px',
          }}
          onClick={handleFavoriteClick}
          src={heartImage}
          width={25}
          height={25}
          alt='heart'
        />
      </div>
      <div>
        <p
          className='box-design'
          style={{
            boxSizing: 'border-box',
            position: 'absolute',
            width: '30px',
            height: '17px',
            left: '145px',
            top: '383px',
            border: '0.7px solid #FF8E26',
            borderRadius: '20px',
          }}
        />
        <p
          className='korean-text-design'
          style={{
            position: 'absolute',
            width: '30px',
            height: '16px',
            left: '151px',
            top: '384px',
            fontFamily: 'Noto Sans',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '10px',
            lineHeight: '14px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-0.05em',
            color: '#FF8E26',
          }}
        >
          한식
        </p>

        <p
          style={{
            position: 'absolute',
            width: '55px',
            height: '14px',
            left: '193px',
            top: '384px',
            fontFamily: 'Noto Sans',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '10px',
            lineHeight: '14px',
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '-0.05em',
            color: '#000000',
          }}
        >
          좋아요
        </p>
        <p
          style={{
            position: 'absolute',
            width: '25px',
            height: '14px',
            left: '223px',
            top: '384px',
            fontFamily: 'Noto Sans',
            fontStyle: 'normal',
            fontWeight: 800,
            fontSize: '10px',
            lineHeight: '14px',
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '-0.05em',
            color: '#000000',
          }}
        >
          1,049
        </p>

        <div
          style={{
            position: 'absolute',
            width: '117px',
            height: '26px',
            left: '20px',
            top: '433px',
            fontFamily: 'Noto Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '14px',
            lineHeight: '26px',
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '-0.05em',
            color: '#000000',
          }}
        >
          <p
            style={{
              position: 'absolute',
              width: '30px',
              height: '16px',
              left: '44px',
              top: '6px',
              fontFamily: 'Noto Sans',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '19px',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '-0.05em',
              color: '#FF8E26',
            }}
            onClick={() => handleTabClick('주소')}
          >
            주소
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            width: '117px',
            height: '26px',
            left: '138px',
            top: '433px',
            fontFamily: 'Noto Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '14px',
            lineHeight: '26px',
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '-0.05em',
            color: '#000000',
          }}
        >
          <p
            style={{
              position: 'absolute',
              width: '30px',
              height: '16px',
              left: '44px',
              top: '6px',
              fontFamily: 'Noto Sans',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '19px',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '-0.05em',
              color: '#969696',
            }}
            onClick={() => handleTabClick('정보')}
          >
            정보
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            width: '117px',
            height: '26px',
            left: '256px',
            top: '433px',
            fontFamily: 'Noto Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '14px',
            lineHeight: '26px',
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '-0.05em',
            color: '#000000',
          }}
        >
          <p
            style={{
              position: 'absolute',
              width: '30px',
              height: '16px',
              left: '43px',
              top: '6px',
              fontFamily: 'Noto Sans',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '19px',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '-0.05em',
              color: '#969696',
            }}
            onClick={() => handleTabClick('메뉴')}
          >
            메뉴
          </p>
        </div>
      </div>
      <div>
        <p
          style={{
            position: 'absolute',
            width: '213px',
            height: '19px',
            left: '110px',
            top: '480px',
            fontFamily: 'Noto Sans',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '19px',
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '-0.05em',
            color: '#FF8E26',
          }}
        >
          {activeTab === '주소' && <span className='text-orange-500'>현재위치에서 20m거리에 있습니다.</span>}
          {activeTab === '정보' && <span className='text-orange-500'>정보</span>}
          {activeTab === '메뉴' && <span className='text-orange-500'>메뉴</span>}
        </p>
      </div>
    </div>
  );
};

export default shopinfo;
