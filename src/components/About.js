import React from 'react'

export default function About() {
    const profileImage = require('../assets/images/mypic.jpeg')
    return (
        <section id="about">
            <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/4 md:pr-12 flex flex-col'>
                    <img className='px-12' src={profileImage} />
                </div>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                    <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
                        Hi, I'm Sambat.
                        <br className="hidden lg:inline-block" />I am a software engineer.
                    </h1>
                    <p className="mb-8 leading-relaxed text-gray-400">
                        Software Engineer with knowledge and experience of programming,
                        testing, bug-fixing, and developing reliable applications with knowledege of
                        the industrial standard of every aspect of the software development life cycle.
                    </p>
                    <div className='flex justify-center'>
                        <a
                            href='#contact'
                            className='inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg'
                        >
                            Work with me
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}
