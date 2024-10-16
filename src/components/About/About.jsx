import React from 'react'

const About = () => {
    return (
        <div className=' w-full flex justify-center py-24'>
            <div className='flex gap-4 w-3/4'>
                <div className='w-1/2 flex justify-center'>
                    <div className='w-80'>
                        <img className='w-72 h-72 rounded-2xl' src="/images/aboutImg1.png" alt="abstract" />
                    </div>
                </div>
                <div className='w-1/2 flex flex-col justify-center items-center gap-2'>
                    <div className='text-2xl font-bold w-full flex justify-start'>
                        <div>React development is carried out by passionate developers</div>
                    </div>
                    <div className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo dignissimos odio, sunt magni itaque esse earum delectus ducimus voluptates recusandae architecto? Nisi quod ipsam repudiandae dolor, dicta nulla incidunt!
                        <br /><br />
                        Laborum blanditiis possimus similique error repudiandae dolores, consectetur doloremque omnis id fuga numquam sint doloribus quaerat sunt ad tempora sapiente deleniti debitis vitae. Obcaecati ea perspiciatis odio esse eius soluta!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About