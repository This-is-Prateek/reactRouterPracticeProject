import React from 'react'

const Contact = () => {
    return (
        <div className=' w-full py-24 flex justify-center text-sm'>
            <div className='flex gap-10 w-3/4'>
                <div className='w-1/2 flex justify-end'>
                    <div className='w-fit bg-gray-300 p-10 flex flex-col gap-2 rounded-3xl'>
                        <div className='flex flex-col'>
                            <div className='text-2xl font-bold'>Get in touch</div>
                            <div className='text-base'>Fill in the form to start a conversation</div>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-5' src="/images/address.svg" alt="address" />
                            <div>Acme Inc, Street, State, Postal Code</div>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-5' src="/images/number.svg" alt="phone number" />
                            <div>+44 1234567890</div>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-5' src="/images/mail.svg" alt="email" />
                            <div>info@acme.org</div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex justify-start'>
                    <form action="" className='w-fit h-full flex flex-col gap-4 justify-center'>
                        <input className='border border-black h-10 w-80 rounded-md pl-3' type="text" placeholder='Full Name'/>
                        <input className='border border-black h-10 w-80 rounded-md pl-3' type="text" placeholder='Email'/>
                        <input className='border border-black h-10 w-80 rounded-md pl-3' type="text" placeholder='Telephone Number'/>
                        <button type="submit" className='w-fit px-6 py-2 bg-[#fd5e00] rounded-3xl flex items-center justify-center cursor-pointer'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact