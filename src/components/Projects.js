import React, { useEffect, useState } from 'react'

export default function Projects() {
    const { projects } = require("../constants/data.json")
    const [projectState, setProjectState] = useState([])

    useEffect(() => {
        setProjectState(projects)
        return () => {
            setProjectState(null)
        }
    }, [projects])
    return (
        <section id="projects" className='text-gray-400 bg-gray-900 body-font'>
            <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Project's I have worked on.
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">

                </p>
            </div>
            <div className="flex flex-wrap -m-4">
                {projectState?.map((project) => {
                    const { technologies } = project
                    const technologyKeys = Object.keys(technologies)
                    return <a
                        key={project.id}
                        className="sm:w-1/3 w-350 p-4">
                        <div className="flex relative">
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 hover:bg-gray-800">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                                <p className="leading-relaxed">{project.description}</p><br />
                                <h1 className="title-font text-lg font-medium text-white mb-3">Technologies</h1>
                                <div className="flex justify-between">
                                    {technologyKeys.map(technology => (
                                        <div>
                                            <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">{(technology[0].toUpperCase() + technology.substring(1))}</h2>
                                            <div className="flex space-between">
                                                <ul>
                                                    {(project.technologies[technology]).map((val, idx) => (
                                                        <li key={idx}>{val}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                })}
            </div>
        </section>
    )
}
