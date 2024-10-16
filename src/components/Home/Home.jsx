import React from 'react'

const Home = () => {
    return (
        <div className=' w-full flex justify-center'>
            <div className='flex flex-col w-3/4'>
                <div className='flex w-full h-[400px]'>
                    <div className='w-1/2 flex justify-center items-center'>
                        <img className='w-72 h-72 rounded-2xl' src="/images/homeImg2.png" alt="" />
                    </div>
                    <div className='w-1/2 flex flex-col justify-center gap-2'>
                        <div className='flex flex-col'>
                            <div className='flex justify-end text-3xl font-bold'>Download Now</div>
                            <div className='flex justify-end text-2xl font-bold'>Lorem Ipsum</div>
                        </div>
                        <div className='flex justify-end text-sm'>
                            <div className='w-fit px-4 py-2 bg-[#fd5e00] rounded-3xl flex items-center cursor-pointer'>
                                <img className='w-6 rounded-2xl' src="/images/playStore.svg" alt="download" />
                                <div>Download now</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col items-center justify-center h-[400px]'>
                    <img className='w-72 h-72' src="/images/homeImg1.png" alt="" />
                    <div className='text-3xl font-bold'>Lorem Ipsum</div>
                </div>
            </div>
        </div>
    )
}

export default Home