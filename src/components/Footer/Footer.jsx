import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-1/4 flex justify-center border border-x-0'>
            <div className='flex flex-col gap-6 w-3/4 h-full text-sm p-2'>
                <div className='flex h-4/5 w-full'>
                    <div className='w-1/2 flex items-center'>
                        <img className='w-28 h-28 mr-32' src="/images/Logo.svg" alt="logo" />
                    </div>
                    <div className='flex w-1/2 gap-20'>
                        <div className='flex flex-col gap-4'>
                            <div className='font-bold' >RESOURCES</div>
                            <div className="cursor-pointer">Home</div>
                            <div className="cursor-pointer">About</div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='font-bold'>FOLLOW US</div>
                            <div className="cursor-pointer">Github</div>
                            <div className="cursor-pointer">Discord</div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='font-bold'>LEGAL</div>
                            <div className="cursor-pointer">Privacy Policy</div>
                            <div className="cursor-pointer">Terms & Conditions</div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='h-1/5 flex w-full'>
                    <div className='w-1/2'>©2024PrateekKumawat. All Rights Reserved.</div>
                    <div className='w-1/2 flex justify-end'>
                        <div className='flex gap-5'>
                            <img className='w-4 cursor-pointer' src="/images/fb.svg" alt="" />
                            <img className='w-4 cursor-pointer' src="/images/insta.svg" alt="" />
                            <img className='w-4 cursor-pointer' src="/images/twitter.svg" alt="" />
                            <img className='w-4 cursor-pointer' src="/images/discord.svg" alt="" />
                            <img className='w-4 cursor-pointer' src="/images/github.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer