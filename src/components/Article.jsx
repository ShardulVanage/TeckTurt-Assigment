import React from 'react'

function Article() {
    return (
        <div>

            <section className="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 min-h-screen">
                <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2 text-left mb-12">
                        <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Getting System Disk Usage Using Python</a>
                    </h3>
                    <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                        <a className="relative block group" href="#0">
                            <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                            <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                                <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={require('./images/disk.png')} width="540" height="303" alt="Blog post" />
                            </figure>
                        </a>
                        <div>
                            <header>
                                <div className="mb-3">
                                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                                        <li className="m-1">
                                            <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Product</a>
                                        </li>
                                        <li className="m-1">
                                            <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Python</a>
                                        </li>
                                    </ul>
                                </div>

                            </header>
                            <p className="text-lg text-gray-400 flex-grow text-left	">Hi there 👋,

                                Today we will see how we can find disk usage of any partition on our system using python3, so let's get started 🚀<br />

                                There is a python library called psutil which is used widely for retrieving information on running processes and system utilization (CPU, memory, disks, network, sensors) in Python. Explaining the whole library is not possible in a single article but for now, we will explain a few functions of it like disk_usage() which return disk usage statistics about a partition that contains the given path.<br />



                                disk_usage() function takes one argument as input i.e. any directory path or path in the system and it returns disk usage statistics about a partition that contains the given path in the form of a tuple including total, used, and free space expressed in bytes, plus the percentage usage.<br />



                                If the given path doesn't exist in the system then OSError is raised.<br />
                                Here is the script for using this function.</p>
                            <footer className="flex items-center mt-4">
                                <a href="#0">
                                    <img className="rounded-full flex-shrink-0 mr-4" src="https://preview.cruip.com/open-pro/images/news-author-04.jpg" width="40" height="40" alt="Author 04" />
                                </a>
                                <div>
                                    <a className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">By teckturt official </a>
                                    <span className="text-gray-700"> - </span>
                                    <span className="text-gray-500"> 12/9/2022</span>
                                </div>
                            </footer>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Article