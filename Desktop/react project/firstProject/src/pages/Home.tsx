
const Home = () => {
    return (
        <div className="md:px-[100px] px-[30px] md:py-[0px] flex flex-col md:flex-row justify-between items-center gap-5 bg-gray-100 h-[50vh] md:h-[90vh]">
            <div className="flex flex-col gap-5 lg:justify-center my-25 ">
                <h1 className="lg:max-w-[500px] leading-[1.1] text-gray-950 md:text-[50px] text-[30px] font-bold">Discover Your Next Favorite Items</h1>
                <p className="lg:max-w-[400px] text-[18px] text-gray-600">Explore our curated collection of top-tier products, unbelievable discounts</p>
            </div>
            <div>
                <img className="max-w-[450px] hidden md:block w-[150px]" src="/images/heroImg-edited.webp" alt="product" />
            </div>
        </div>
    )
}

export default Home
