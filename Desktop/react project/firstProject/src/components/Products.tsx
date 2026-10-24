import { useEffect, useState } from "react";
import Card from "./Card";
import ButtonStyle from "./ButtonStyle";

const Products = () => {
    const [skip, setSkip] = useState(0);
    const [products, setProducts] = useState<any[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const limit = 8;

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(false);
            try {
                const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
                const data = await response.json();
                setProducts(data.products);
                setTotal(data.total);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
                setError(true);
            }
        };

        fetchProducts();
    }, [skip]);

    return (
        <div className="bg-gray-100">
            <div className="px-[30px] pt-7 sm:pt-0 md:px-[100px]">
                <input type="search" className="w-50 sm:w-100 bg-emerald-950 text-white placeholder:text-gray-300 md:placeholder:text-[16px] placeholder:text-[12px] md:text-[16px] text-[12px] border-1 outline-0 rounded-[4px] px-3 py-2" placeholder="search for a product .." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            </div>
            <div id="products" className="scroll-mt-15 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 px-[30px] md:px-[100px] lg:grid-cols-4 items-center justify-items-center md:items-start md:justify-stard py-10 mb-20 bg-gray-100">
                {
                    loading ? (
                        <div className="col-span-full flex justify-center items-center py-10">
                            <p className="text-gray-950 text-[24px] md:text-[30px] font-bold">Loading The Products...</p>
                        </div>
                    ) : error ? (
                        <div className="col-span-full flex justify-center items-center py-10">
                            <p className="text-gray-950 text-[24px] md:text-[30px] font-bold">Error Fetching Products</p>
                        </div>
                    ) : products.length === 0 ? (
                        <div className="col-span-full flex justify-center items-center py-10">
                            <p className="text-gray-950 text-[24px] md:text-[30px] font-bold">No Products Found</p>
                        </div>
                    ) : (
                        products.map((product) =>
                            searchInput === "" ||
                                product.title.toLowerCase().includes(searchInput.toLowerCase()) ? (
                                <Card
                                    key={product.id}
                                    img={product.thumbnail}
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rating}
                                />
                            ) : null
                        )
                    )
                }
                <div className="col-span-full w-full flex justify-between items-center px-2 md:px-5 mt-4">
                    <ButtonStyle onClick={() => { if (skip > 0) setSkip(skip - limit); }} text="Previous" />
                    <p className="text-emerald-950 border-b-[3px] py-1 text-[12px] md:text-[16px]">{Math.floor(skip / limit) + 1} of {Math.ceil(total / limit)}</p>
                    <ButtonStyle onClick={() => { if (skip + limit < total) setSkip(skip + limit); }} text="Next" />
                </div>
            </div>
        </div>
    );
};

export default Products;