
const ButtonStyle = ({text,onClick}:{text:string;onClick:() => void}) => {
    return (
        <div>
            <button className="bg-emerald-950 sm:text-[16px] text-[8px] text-white md:px-6 md:py-2 px-4 py-1 rounded-md cursor-pointer transition-all duration-300" onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default ButtonStyle
