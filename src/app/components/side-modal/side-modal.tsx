import style from './side-modal.module.css'
import leftButtonIcon from './../../../assets/icon/chevron-left-light.png'
import bellLightIcon from './../../../assets/icon/bell-light.png';
import defaultProfileIcon from './../../../assets/icon/default-profile-icon.png';
import KakaoLoginButton from './../../../assets/images/kakao-login-button.svg';
import heartSolid from './../../../assets/icon/heart-solid.svg'
import houseSolid from './../../../assets/icon/house-solid.svg'
import Image from 'next/image';

interface Props {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideModal = (props: Props) => {
  const closeModal = () => {
    props.setModalOpen(false);
  }

  return ( 
    <aside className={`${style.sideModal} rounded-tl-2xl rounded-bl-2xl bg-black w-[373px] absolute top-[20px] py-10 px-6`}>
      <nav className='flex justify-between mb-12'>
        <button onClick={closeModal}>
          <Image src={leftButtonIcon} width={24} alt={'left button'}></Image>
        </button>
        <button>
          <Image src={bellLightIcon} width={24} alt={'bell light button'}></Image>
        </button>
      </nav>
      <div className='flex flex-col items-center'>
          <Image className='mb-10' src={defaultProfileIcon} alt='defaultProfileIcon' width={72}></Image>
          <div className='text-white text-[20px] font-black mb-1'>로그인이 필요한 페이지입니다</div>
          <div className='text-gray-400 text-[14px] font-normal mb-[35px]'>더 많은 서비스를 만나보세요!</div>
          <Image className='mb-[54px]' src={KakaoLoginButton} width={331} height={46} alt='KakaoLoginButton'/>
          <div className='w-[373px] h-[9px] bg-black'/>
      </div>
      <div className='p-8'>
        <div className='text-gray-400 text-[14px] font-semibold mb-2'>메뉴</div>
        <div className=''>
          <div className='flex items-center gap-3 py-6 border-solid border-b border-[#454545]'>
            <Image src={houseSolid} width={15} alt='house-solid'></Image>
            <span className='text-white text-[14px] font-black'>최근 본 가게</span>
          </div>
          
        </div>
        <div className='mb-8'>
          <div className='flex items-center gap-3 py-6 border-solid border-b border-[#454545]'>
            <Image src={heartSolid} width={15} alt='heart-solid'></Image>
            <span className='text-white text-[14px] font-black'>찜한 가게</span>
          </div>
        </div>

      </div>

    </aside> );
}
 
export default SideModal;