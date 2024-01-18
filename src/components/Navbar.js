import React from 'react'

export default function Navbar() {
    return (
        <header className='bg-blue-50 shadow-lg shadow-blue-50/50 md:sticky top-0 z-10'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl text-blue-950">
                        Sambat Das
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:text-white">
                        Past Work
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                </nav>
            </div>
        </header>

    )
}
