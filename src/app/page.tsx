import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='container mx-auto flex-col flex justify-center items-center mt-80 px-8'>
    <button className='flex justify-between items-center rounded-full bg-orange-500 d-block w-full py-6 px-8 text-2xl font-normal text-black mb-6'>
        <Image src='/kakao-icon.png' alt='kakao icon' width={20} height={20} priority />
        <Link href={'/main'}>카카오톡으로 시작하기</Link>
        <div></div>
    </button>
    <div className='flex justify-between items-center text-white text-2xl font-normal'>
        <button className='mr-6'>회원가입</button>
        <div className='border-solid border-white border-r w-px h-4 mr-6'></div>
        <button>로그인</button>
    </div>
</main>
  )
}
