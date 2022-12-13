import React from 'react'
import './Hero.css';
function Hero() {
    return (
        <div>


            <div class="bg-white... py-6">
                <h2 class="pb-8 text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-700 text-left pl-32 ml-16 underline hover:underline-offset-4 hover:decoration-indigo-500 ">Related Reading:</h2>
                <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">

                    <div class="flex flex-row flex-wrap">

                        <div class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
                            <div class="relative hover-img max-h-98 overflow-hidden">
                                <a href="#">
                                    <img class="max-w-half w-half mx-auto h-auto" src={require('./images/FAANG.png')} alt="Image description" />
                                </a>
                                <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                                    <a href="#">
                                        <h2 class="text-3xl font-bold capitalize text-white mb-3">Reasons why technology companies are laying off its workforce</h2>
                                    </a>
                                    <p class="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>
                                    <div class="pt-2">
                                        <div class="text-gray-100">
                                            <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>career
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex-shrink max-w-full w-full lg:w-1/2">
                            <div class="box-one flex flex-row flex-wrap">
                                <article class="flex-shrink max-w-full w-full sm:w-1/2">
                                    <div class="relative hover-img max-h-48 overflow-hidden">
                                        <a href="#">
                                            <img class="max-w-full w-full mx-auto h-auto" src={require('./images/session.png')} alt="Image description" />
                                        </a>
                                        <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                            <a href="#">
                                                <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">Cookie is setting but getting an empty session at the server in nodejs</h2>
                                            </a>
                                            <div class="pt-1">
                                                <div class="text-gray-100">
                                                    <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Technical
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article class="flex-shrink max-w-full w-full sm:w-1/2">
                                    <div class="relative hover-img max-h-48 overflow-hidden">
                                        <a href="#">
                                            <img class="max-w-full w-full mx-auto h-auto" src={require('./images/Red.png')} alt="Image description" />
                                        </a>
                                        <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                            <a href="#">
                                                <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">Node with Redis : Sorted Sets</h2>
                                            </a>
                                            <div class="pt-1">
                                                <div class="text-gray-100">
                                                    <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Technical
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article class="flex-shrink max-w-full w-full sm:w-1/2">
                                    <div class="relative hover-img max-h-48 overflow-hidden">
                                        <a href="#">
                                            <img class="max-w-full w-full mx-auto h-auto" src={require('./images/cpu.png')} alt="Image description" />
                                        </a>
                                        <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                            <a href="#">
                                                <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">Getting Total number of CPU cores available on system using python</h2>
                                            </a>
                                            <div class="pt-1">
                                                <div class="text-gray-100">
                                                    <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Python
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article class="flex-shrink max-w-full w-full sm:w-1/2">
                                    <div class="relative hover-img max-h-48 overflow-hidden">
                                        <a href="#">
                                            <img class="max-w-full w-full mx-auto h-auto" src={require('./images/load.png')} alt="Image description" />
                                        </a>
                                        <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                            <a href="#">
                                                <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">Getting system load in percentage using python</h2>
                                            </a>
                                            <div class="pt-1">
                                                <div class="text-gray-100">
                                                    <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Python
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero