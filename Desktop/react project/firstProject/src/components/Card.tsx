const Card = ({img,title,price,rating}:{img:string,title:string,price:number,rating:number}) => {
    return (
        <div className="flex flex-col items-center text-center gap-[10px] border-[1px] border-gray-300 rounded-md p-3 cursor-pointer hover:scale-103 transition-all duration-300 bg-white ">
            <img src={img} className="" alt="product img" />
            <h1 className="text-[24px] text-gray-950 font-bold leading-[1.3]">{title}</h1>
            <h3 className="text-[18px] font-bold">${price.toFixed(2)}</h3>
            <span className="text-yellow-500 font-bold">Rating : {rating}</span>
        </div>
    )
}

export default Card