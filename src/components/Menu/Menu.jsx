

const Menu = () => {
    return (
        <div className="bg-gradient-to-b from-zinc-950 via-zinc-900  to-zinc-800 text-white py-11 px-44 w-5/6 mx-auto flex flex-col items-center ">
        <h2 className="text-green-500 text-3xl font-bold text-center ">
            OUR MENU FOR TODAY
        </h2>
        <p className="text-center mt-3 text-gray-300">Order until 15:00</p>
        <div className="flex flex-col gap-5 md:flex-row   mt-10">
            
            <div className="md:w-3/5">
            

            <div className=" space-y-4">
                <div>
                <h3 className="text-xl  font-semibold">Appetizers:</h3>
                <p className="text-gray-300">Falafel, Hummus with Pita Bread, Baba Ghanoush</p>
                </div>
                <hr className="border-green-500 mr-16 my-4" /> 
                <div>
                <h3 className="text-xl font-semibold">Main Course:</h3>
                <p className="text-gray-300">
                    Koshary, Grilled Kofta, Chicken Shawarma, Molokhia with Rice
                </p>
                </div>
                <hr className="border-green-500 mr-16 my-4" /> 
                <div>
                <h3 className="text-xl  font-semibold">Salads:</h3>
                <p className="text-gray-300">Egyptian Green Salad, Tahini Salad, Fattoush</p>
                </div>
                <hr className="border-green-500 mr-16 my-4" /> 
                <div>
                <h3 className="text-xl  font-semibold">Beverages:</h3>
                <p className="text-gray-300">
                    Turkish Coffee, Mint Tea, Mango Juice, Sahlab
                </p>
                </div>
            </div>
            </div>

            
            <div className="w-2/5   ">
            <img
                src="https://nolisoli.ph/wp-content/uploads/2024/01/Filipino-cafe-food-Mary-Grace-header-image-nolisoliph.jpg"  
                alt="Food image"
            />
            </div>
        </div>

        <div className="mt-8 w-full flex justify-center">
        <button className="bg-green-500 text-black font-semibold py-2 px-8 rounded-full hover:bg-green-600 transition">
            ORDER NOW
        </button>
        </div>
        </div>
        );
}

export default Menu;