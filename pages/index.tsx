import type { NextPage } from 'next'
import Head from 'next/head'
import IonIcon from '@reacticons/ionicons';


const Home: NextPage = () => {
  return (
    <div>
       <Head>
         <title>Niraj Kaushal | ReactJS - JavaScript - NextJS - NestJS - Tailwind CSS</title>
         <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
         <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
       </Head>
       <body>
         <header className='h-[62px] bg-[#24292F] py-[16px] px-[32px] flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center'>
            <div className='h-[32px] w-[32px] rounded-full overflow-hidden'>
              <img src='https://avatars.githubusercontent.com/u/8850541?v=4' alt='Profile Picture'/>
            </div>
            <div className='pl-[16px] relative'>
              <input className='bg-[#24292F] border-[1px] rounded-md h-[30px] border-gray-600 py-[5px] px-[12px] text-[14px] pb-[7px] w-[270px]' placeholder='Search or jump to...'/>
              <div className='border-[1px] rounded-[4px] border-gray-600 p-[4px] absolute right-[5px] top-[5px] w-[20px] h-[20px] flex justify-center items-center text-[12px] text-gray-600'>/</div>
            </div>
            <nav className='pl-[16px]'>
              <ul className='flex gap-[16px] text-sm items-center'>
                <li><a href='/pull-request' className='text-white font-semibold'>Pull requests</a></li>
                <li><a href='/issues' className='text-white font-semibold'>Issues</a></li>
                <li><a href='/marketplace' className='text-white font-semibold'>Marketplace</a></li>
                <li><a href='/explore' className='text-white font-semibold'>Explore</a></li>
              </ul>
            </nav>
          </div>
          <div className='flex flex-row items-center gap-[16px]'>
            <ul className='flex gap-[16px] text-white'>
              <li className='flex items-center'><IonIcon name='notifications-outline' className='text-[18px]'/></li>
              <li className='flex items-center'><IonIcon name='add-outline' className='text-[18px]'/><IonIcon name='caret-down-outline' className='text-[12px] mb-[-2px]'/></li>
            </ul>
            <div className='flex flex-row items-center'><div className='h-[24px] w-[24px] rounded-full overflow-hidden'>
              <img src='https://avatars.githubusercontent.com/u/8850541?v=4' alt='Profile Picture'/>
            </div>
            <IonIcon name='caret-down-outline' className='text-white text-[12px] mb-[-2px] ml-[2px]'/></div>
          </div>
         </header>
         <div className='h-[70px] border-b-[1px] border-gray-300'></div>
         <main className='px-[20px] min-h-screen max-w-[1280px] mx-auto'>
          <div className='flex flex-row mt-[-36px] gap-[10px]'>
            <div className='w-72'>
              <div className='h-72 w-72 rounded-full border-2 border-gray-200 overflow-hidden'>
                <img src='https://avatars.githubusercontent.com/u/8850541?v=4' alt='Profile Picture'/>
              </div>
              <div className='mt-5'>
                <h3 className='text-2xl font-semibold'>Niraj Kaushal</h3>
                <h5 className='text-xl font-thin text-gray-700'>nirajkaushal</h5>
                <p className='text-md mt-5'>FOSS Enthusiast, Web Developer and Designer</p>
                <button className='bg-gray-50 border-[1px] border-gray-300 w-full rounded-md py-1 mt-5'>Follow</button>
              </div>
              <div className='flex flex-row items-center gap-[5px] my-5 text-sm'>
                <IonIcon name='people-outline'/>
                <span className='text-gray-600'><strong className='font-semibold'>29</strong> followers</span>
                <span className='w-[2px] h-[2px] bg-gray-600 rounded-full'></span>
                <span className='text-gray-600'><strong className='font-semibold'>289</strong> followings</span>
              </div>
              <ul className=''>
                <li className='mb-[8px] flex items-center gap-[8px]'><IonIcon name='business-outline' className='text-[18px] text-gray-500'/><span className='text-sm'>@CoralMango Pvt. Ltd.</span></li>
                <li className='mb-[8px] flex items-center gap-[8px]'><IonIcon name='location-outline' className='text-[18px] text-gray-500'/><span className='text-sm'>Delhi</span></li>
                <li className='mb-[8px] flex items-center gap-[8px]'><IonIcon name='mail-unread-outline' className='text-[18px] text-gray-500'/><span className='text-sm'>nirajkaushal.dev@gmail.com</span></li>
                <li className='mb-[8px] flex items-center gap-[8px]'><IonIcon name='globe-outline' className='text-[18px] text-gray-500'/><span className='text-sm'>https://nirajkaushal.com</span></li>
              </ul>
            </div>
            <div className=' h-screen w-full'>
              <div className='px-[40px]'>
                <ul className='flex gap-6 items-center'>
                  <li className='flex items-center gap-2 h-[36px] px-4 pb-4 border-b-[3px] border-orange-400'><IonIcon name='business-outline' className='text-[18px] text-gray-500'/><span className='text-sm font-semibold text-gray-700'>Overview</span></li>
                  <li className='flex items-center gap-2 h-[36px] px-4 pb-4 '><IonIcon name='business-outline' className='text-[18px] text-gray-500'/><span className='text-sm font-semibold text-gray-700'>Repositories</span><span className='bg-gray-100 px-2 rounded-full text-sm'>64</span></li>
                  <li className='flex items-center gap-2 h-[36px] px-4 pb-4 '><IonIcon name='business-outline' className='text-[18px] text-gray-500'/><span className='text-sm font-semibold text-gray-700'>Projects</span></li>
                  <li className='flex items-center gap-2 h-[36px] px-4 pb-4 '><IonIcon name='business-outline' className='text-[18px] text-gray-500'/><span className='text-sm font-semibold text-gray-700'>Packages</span></li>
                  <li className='flex items-center gap-2 h-[36px] px-4 pb-4 '><IonIcon name='business-outline' className='text-[18px] text-gray-500'/><span className='text-sm font-semibold text-gray-700'>Starts</span></li>
                </ul>
              </div>
              <div className='w-full p-[20px] mt-[20px]'>
                <div className='border-[1px] rounded-md p-[20px]'>
                  <h1>Welcome</h1>
                </div>
              </div>
            </div>
          </div>
         </main>
       </body>
    </div>
  )
}

export default Home
