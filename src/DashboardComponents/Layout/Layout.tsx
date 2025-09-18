import { ChartBarIcon,ArrowUpTrayIcon,ArrowTrendingUpIcon,Cog6ToothIcon, Bars3Icon,XMarkIcon,Squares2X2Icon,WalletIcon,BellIcon,SparklesIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogPanel } from '@headlessui/react'


const Layout = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
        return (
        <div className="md:flex gap-4">
            <div className="md:flex-2 h-[100vh] invisible bg-indigo-500 border border-gray-200 border-left fixed top-0 left-0 right-0 bottom-0 md:relative md:visible">
               <div className="m-5 h-[60px]"> 
                     <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <p className="text-xl text-white font-medium">Slipify.com</p>
            </a>
          </div>
                   <div className="md:hidden inline float-right mt-5">
                     <XMarkIcon className="size-9 text-white"/>
                   </div>
                   <div className="">

                   </div>
               </div>   
               <div className="">
                 <Link to="/dashboard/upload">
                   <p className="text-sm m-5  p-2 rounded-[5px] text-white hover:bg-white hover:text-slate-900 focus:bg-gray-300"><Squares2X2Icon className="size-4 inline-block relative bottom-[2px] mr-1"/>Dashboard</p>
                 </Link>
               </div> 
                 <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5 p-2 rounded-[5px] text-white hover:bg-white hover:text-slate-900"><ArrowUpTrayIcon className="size-4 inline-block relative bottom-[2px] mr-2"/>Upload</p>
                 </Link>
               </div> 
                 <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5 p-2 rounded-[5px] text-white hover:bg-white hover:text-slate-900"><ArrowTrendingUpIcon className="size-4 inline-block relative bottom-[2px] mr-2"/>Spendings</p>
                 </Link>
               </div> 
               <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5 p-2 rounded-[5px] text-white hover:bg-white hover:text-slate-900"><WalletIcon className="size-4 inline-block relative bottom-[2px] mr-2"/>Goals</p>
                 </Link>
               </div>
                <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5 p-2 rounded-[5px] text-white hover:bg-white hover:text-slate-900"><SparklesIcon className="size-4 inline-block relative bottom-[2px] mr-2"/>AI Assistant </p>
                 </Link>
               </div>
               <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5 p-2 rounded-[5px] text-white hover:bg-white hover:text-slate-900"><BellIcon className="size-4 inline-block relative bottom-[2px] mr-2"/>Notifications </p>
                 </Link>
               </div>
               
            </div>
            <div className="md:hidden grid items-center w-[90%] m-auto  border border-gray-300 mt-4 rounded-lg">
              
                <div className="">
                   <p className="p-3 text-lg font-medium inline float-left">Dashboard</p>
                      <Bars3Icon className="inline float-right size-6 border p-1 rounded-[5px] mt-3.5 mr-5" onClick={() => setMobileMenuOpen(true)}/>
                </div>


            </div>
            <div className="md:flex-10 h-[100vh] w-[90%] m-auto md:w-[100%] max-h-[100vh] md:overflow-x-scroll">
                <Outlet />
            </div>
                    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div>
                   <Link to="/dashboard">
                   <p className="text-sm m-5  p-2 rounded-[5px] hover:bg-gray-200 focus:bg-gray-300"><ChartBarIcon className="size-4 inline-block relative bottom-[2px] mr-1"/>Dashboard</p>
                 </Link>
               </div> 
                 <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5 p-2 rounded-[5px] hover:bg-gray-200"><ArrowUpTrayIcon className="size-4 inline-block relative bottom-[2px] mr-2"/>Upload</p>
                 </Link>
               </div> 
                 <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5 p-2 rounded-[5px] hover:bg-gray-200"><ArrowTrendingUpIcon className="size-4 inline-block relative bottom-[2px] mr-2"/>Spendings</p>
                 </Link>
               </div> 
               <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5 p-2 rounded-[5px] hover:bg-gray-200"><Cog6ToothIcon className="size-4 inline-block relative bottom-[2px] mr-2"/>Settings</p>
                 </Link>
               </div>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        </div>
    )
}

export default Layout;