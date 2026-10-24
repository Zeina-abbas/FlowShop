import { useEffect, useState } from "react";

const Header = ({ id }: { id: string }) => {
    // const [isDark, setIsDark] = useState(false);

    // useEffect(() => {
    //     if (isDark) {
    //         document.documentElement.classList.add('dark');
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //     }
    // }, [isDark]);

    // const toggleDarkMode = ()=>{
    //     setIsDark((prev) => !prev);
    // }

    return (
        <div className="flex justify-between items-center py-4 px-10 bg-emerald-950 text-white fixed top-0 left-0 right-0 z-50">
            <h1 className="text-2xl font-bold">Flow Shop</h1>
            <div className="flex text-[14px] md:text-[18px]">
                <a href="#" className="pr-3">Home</a>
                <a href={`#${id}`}>Products</a>
            </div>
            {/* <div className="w-9 h-4 rounded-full bg-white text-emerald-950 flex items-center px-[3px] cursor-pointer">
                <div className="w-3 h-3 rounded-full transition-all duration-300"></div>
            </div> */}
        </div>
    )
}

export default Header
