import Navbar from "../../components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="relative isolate px-6 pt-14 lg:px-8">

                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 cursor-pointer">
                            How it works{' '}<span aria-hidden="true">&rarr;</span>

                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                            From slips to savings.
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                            Upload till slips, categorize purchases, and gain control of your budget.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-zinc-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-sm/6 font-semibold text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >

                </div>
            </div>
            <div className="md:flex">
                <div className="md:flex-1">
                    <div className="h-[150px] w-[150px] m-auto mb-5 rounded-[50%] bg-emerald-500">

                    </div>
                </div>
                <div className="md:flex-1">
                    <div className="h-[150px] w-[150px] m-auto mb-5 rounded-[50%] bg-yellow-500">

                    </div>
                </div>
                <div className="md:flex-1">
                    <div className="h-[150px] w-[150px] m-auto mb-5 rounded-[50%] bg-red-500">

                    </div>
                </div>
            </div>
            <div>
                <div className="text-center mt-20">
                    <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 ">
                        With Slipify, Tracking and Managing spendings is easy
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        Effortless tracking and managing spendings, for individuals and businesses
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-zinc-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started<span aria-hidden="true">→</span>
                        </a>

                    </div>
                </div>
            </div>
            <div className="md:flex mt-30 gap-4 w-[90%] m-auto">
                <div className="md:flex-1 h-[400px]  border border-gray-300 m-auto mb-5">
                    <div className="p-5">
                        <p className="p-2 rounded-[5px] bg-gray-300 w-[fit-content]">01</p>
                        <p className="mt-5 text-xl font-medium text-gray-900">Upload your slip</p>
                        <p className="text-gray-500 mt-3">You don't have to capture any data manually, simply upload your slip and we will do the rest for you</p>
                    </div>
                </div>
                <div className="md:flex-1 h-[400px]   border border-gray-300 m-auto m-auto mb-5">
                    <div className="p-5">
                        <p className="p-2 rounded-[5px] bg-gray-300 w-[fit-content]">02</p>
                        <p className="mt-5 text-xl font-medium text-gray-900">Analyze</p>
                        <p className="text-gray-500 mt-3">Track your spending patterns to gain insights to your spending habits</p>
                    </div>
                </div>
                <div className="md:flex-1 h-[400px]  border border-gray-300 m-auto m-auto mb-5">
                    <div className="p-5">
                        <p className="p-2 rounded-[5px] bg-gray-300 w-[fit-content]">03</p>
                        <p className="mt-5 text-xl font-medium text-gray-900">Make decisions</p>
                        <p className="text-gray-500 mt-3">Make informed spending decisions</p>
                    </div>
                </div>
            </div>
            <div className="m-auto mt-20 w-[fit-content]">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    They love us
                </div>
            </div>
            <div className="text-center mt-5">
                <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 ">
                    See why our users love Slipify
                </h1>
                <p className="mt-3 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    Read the impact we've had from those who matters the most - Our customers
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-md bg-zinc-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Get started<span aria-hidden="true">→</span>
                    </a>

                </div>
            </div>
            <div className="mt-10 md:flex gap-4 w-[90%] m-auto">
                <div className="flex-1 min-h-[300px] border border-gray-300 rounded-xl">
                    <div className="flex -space-x-1 overflow-hidden mt-5 ml-5">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="inline-block size-10 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5"
                        />
                        <p className="ml-5 mt-2 text-gray-500 font-semibold">Christopher M</p>
                    </div>
                    <p className="ml-5 mt-2 text-gray-500 font-semibold">Thrilled to be one of the first users of Slipify. The impact is invaluable and I have really loved every single interaction with this product</p>
                </div>
                <div className="flex-1 min-h-[300px] border border-gray-300 rounded-xl">
                    <div className="flex -space-x-1 overflow-hidden mt-5 ml-5">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="inline-block size-10 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5"
                        />
                        <p className="ml-5 mt-2 text-gray-500 font-semibold">Christopher M</p>
                    </div>
                    <p className="ml-5 mt-2 text-gray-500 font-semibold">Thrilled to be one of the first users of Slipify. The impact is invaluable and I have really loved every single interaction with this product</p>
                </div>
                <div className="flex-1 min-h-[300px] border border-gray-300 rounded-xl">
                    <div className="flex -space-x-1 overflow-hidden mt-5 ml-5">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="inline-block size-10 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5"
                        />
                        <p className="ml-5 mt-2 text-gray-500 font-semibold">Christopher M</p>
                    </div>
                    <p className="ml-5 mt-2 text-gray-500 font-semibold">Thrilled to be one of the first users of Slipify. The impact is invaluable and I have really loved every single interaction with this product</p>
                </div>
            </div>
            <div className="m-auto mt-20 w-[90%] h-[300px] bg-indigo-500 mb-[100px] grid items-center">
               <div className="p-5">
                      <h1 className="text-4xl font-semibold tracking-tight text-balance text-white text-center">
                    Smarter Spending, More Savings
                </h1>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-md bg-zinc-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Get started<span aria-hidden="true">→</span>
                    </a>

                </div>
               </div>
            </div>
            <div className="m-auto mt-20 md:flex w-[90%] text-center md:text-left">
               <div className="md:flex-1">
                  <div className="flex lg:flex-1 mb-5 ">
            <a href="#" className="m-auto md:m-none -m-1.5 p-1.5 block ">
              <span className="sr-only">Your Company</span>
              <p className="text-2xl text-slate-900 font-medium">Slipify.com</p>
            </a>
          </div>
               </div>
                <div className="md:flex-1">
                    <p className="mb-5 md:mb-3 font-semibold text-gray-500">Product</p>
                    <a href="/" className='block mb-3 hover:text-gray-500'>Features</a>
                    <a href="/" className='block mb-3 hover:text-gray-500'>Upgrades</a>
                    <a href="/" className='block mb-5 hover:text-gray-500'>Documentation</a>
                </div>
                 <div className="md:flex-1">
                    <p className="mb-3 font-semibold text-gray-500">About</p>
                    <a href="/" className='block mb-3 hover:text-gray-500'>Vision</a>
                    <a href="/" className='block mb-3 hover:text-gray-500'>Blog</a>
                    <a href="/" className='block mb-3 hover:text-gray-500'>Our Stories</a>
                 </div>  
            </div>
        </div>
    )
}

export default Home;