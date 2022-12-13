import React from 'react'

function Profile() {
    return (
        <div>
            <section class="flex flex-col justify-center antialiased bg-white text-gray-200 min-h-screen">
                <div class="max-w-6xl mx-auto p-2 sm:px-6 h-full">
                    <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                        {/* A */}
                        <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
                            <div class="px-6">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full flex justify-center">
                                        <div class="relative">
                                            <img src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true" class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                                        </div>
                                    </div>
                                    <div class="w-full text-center mt-20">
                                        <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                                            <div class="p-3 text-center">
                                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">5</span>
                                                <span class="text-sm text-slate-400">Article</span>
                                            </div>
                                            <div class="p-3 text-center">
                                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">54</span>
                                                <span class="text-sm text-slate-400">Followers</span>
                                            </div>

                                            <div class="p-3 text-center">
                                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">564</span>
                                                <span class="text-sm text-slate-400">Following</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center mt-2">
                                    <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Mike Thompson</h3>
                                    <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                                        <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Paris, France
                                    </div>
                                </div>
                                <div class="mt-6 py-6 border-t border-slate-200 text-center">
                                    <div class="flex flex-wrap justify-center">
                                        <div class="w-full px-4">
                                            <p class="font-light leading-relaxed text-slate-600 mb-4">An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* B */}
                        <section class="flex flex-col justify-center antialiased bg-white text-gray-600 min-h-screen p-4">
                            <div class="h-full">
                                {/* <!-- Table --> */}
                                <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                                    <header class="px-5 py-4 border-b border-gray-100">
                                        <h2 class="font-semibold text-gray-800">Turtcoins History (Earning)</h2>
                                    </header>
                                    <div class="p-3">
                                        <div class="overflow-x-auto">
                                            <table class="table-auto w-full">
                                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                                    <tr>

                                                        <th class="p-2 whitespace-nowrap">
                                                            <div class="font-semibold text-left">Article Name</div>
                                                        </th>
                                                        <th class="p-2 whitespace-nowrap">
                                                            <div class="font-semibold text-left">Coins earned</div>
                                                        </th>
                                                        <th class="p-2 whitespace-nowrap">
                                                            <div class="font-semibold text-center">Date</div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="text-sm divide-y divide-gray-100">
                                                    <tr>

                                                        <td class="p-2 whitespace-nowrap">
                                                            <div class="text-left">Node with Redis : Hashes </div>
                                                        </td>
                                                        <td class="p-2 whitespace-nowrap">
                                                            <div class="text-left font-medium text-green-500">89</div>
                                                        </td>
                                                        <td class="p-2 whitespace-nowrap">
                                                            <div class="font-medium text-center">11/25/2022</div>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td class="p-2 whitespace-nowrap">
                                                            <div class="text-left">NodeJs session cookie</div>
                                                        </td>
                                                        <td class="p-2 whitespace-nowrap">
                                                            <div class="text-left font-medium text-green-500">67</div>
                                                        </td>
                                                        <td class="p-2 whitespace-nowrap">
                                                            <div class="font-medium text-center">11/12/2022</div>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td class="p-2 whitespace-nowrap">
                                                            <div class="text-left">memory stats of system</div>
                                                        </td>
                                                        <td class="p-2 whitespace-nowrap">
                                                            <div class="text-left font-medium text-green-500">96</div>
                                                        </td>
                                                        <td class="p-2 whitespace-nowrap">
                                                            <div class="font-medium text-center">11/15/2022</div>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td class="p-2 whitespace-nowrap">
                                                            <div class="text-left">system disk usage</div>
                                                        </td>
                                                        <td class="p-2 whitespace-nowrap">
                                                            <div class="text-left font-medium text-green-500">26</div>
                                                        </td>
                                                        <td class="p-2 whitespace-nowrap">
                                                            <div class="font-medium text-center">11/1/2022</div>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td class="p-2 whitespace-nowrap">
                                                            <div class="text-left">battery stats</div>
                                                        </td>
                                                        <td class="p-2 whitespace-nowrap">
                                                            <div class="text-left font-medium text-green-500">  89</div>
                                                        </td>
                                                        <td class="p-2 whitespace-nowrap">
                                                            <div class="font-medium text-center">11/2/2022</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                                <button class='mt-12 pl-8 pr-8 bg-gray-700 rounded-md text-white font-bold w-58 h-12 relative
    before:w-full before:h-full before:scale-x-[1.15] before:scale-y-[1.35] before:absolute before:top-[50%] before:left-[50%]
    before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] 
    before:from-blue-300 before:to-gray-600 before:bg-gradient-to-br
    before:rounded-md  
    hover:bg-gray-600 transition-all duration-300
'>
                                    Available Turt-Coins 🪙
                                    <span class="ml-2 px-1 py-1 text-2xl text-gray-100 border-l-2 border-gray-100 font-mono">
                                    </span>364
                                </button>
                            </div>
                        </section>


                    </article>
                </div>


            </section>
            <div className='mb-32 '>

                <button className=" group relative inline-flex items-center  px-7 py-3.5 rounded shadow-lg outline-none bg-gradient-to-br from-pink-500 to-indigo-500 text-lg text-white font-medium transition-all duration-200 ease-out hover:text-yellow-700 hover:from-transparent hover:to-transparent hover:shadow-none active:top-0.5 focus:outline-none">

                    {/* span::before */}
                    <span className="absolute h-0 w-0.5 right-0 top-0 bg-gradient-to-br from-pink-500 to-purple-500 transition-all duration-500 ease-out group-hover:h-full" aria-hidden="true" />
                    <span className="absolute left-0 bottom-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full" aria-hidden="true" />

                    Published Articles
                    {/* span::after */}
                    <span className="absolute left-0 bottom-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full" aria-hidden="true" />
                    <span className="absolute w-0 h-0.5 right-0 top-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out group-hover:w-full" aria-hidden="true" />

                </button>



                <button className="ml-32 group relative inline-flex items-center  px-7 py-3.5 rounded shadow-lg outline-none bg-gradient-to-br from-pink-500 to-indigo-500 text-lg text-white font-medium transition-all duration-200 ease-out hover:text-yellow-700 hover:from-transparent hover:to-transparent hover:shadow-none active:top-0.5 focus:outline-none">

                    {/* span::before */}
                    <span className="absolute h-0 w-0.5 right-0 top-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out group-hover:h-full" aria-hidden="true" />
                    <span className="absolute left-0 bottom-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full" aria-hidden="true" />

                    Discarded Articles

                    {/* span::after */}
                    <span className="absolute left-0 bottom-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full" aria-hidden="true" />
                    <span className="absolute w-0 h-0.5 right-0 top-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out group-hover:w-full" aria-hidden="true" />

                </button>

            </div>

        </div>
    )
}

export default Profile