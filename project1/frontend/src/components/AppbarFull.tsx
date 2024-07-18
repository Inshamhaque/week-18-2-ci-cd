import pic from './th.jpeg';
//take image from google here 
export const AppbarFull = () => {
    return (
        <div className="flex justify-between items-center p-2 ml-4 mr-4">
            <div className="flex flex-row ml-4 mr-4 gap-x-5 items-center font-serif">
                <div className="text-2xl font-bold">Bloggify</div>
                <div className="items-center">
                    <form className="items-center align-middle max-w-md mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-8 h-8 text-slate-500 dark:text-slate-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block bg-slate-100 w-full p-3 pl-10 text-sm text-slate-900   rounded-3xl dark:text-slate-900" placeholder="Search" required />
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex flex-row gap-x-8 items-center">
                <div className="flex flex-row gap-x-2 text-slate-700 hover:text-black cursor-pointer items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    <div>Write</div>
                </div>
                <div className="mt-1 flex text-slate-700 justify-center hover:text-black cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="0.5" stroke="currentColor" className="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </div>
                <div className='flex items-center'>
                    <img className="w-8 h-8 rounded-full" src={pic} alt="Author avatar" />
                </div>
            </div>
        </div>
    );
}
