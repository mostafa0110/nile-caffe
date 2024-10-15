import Link from "next/link";
const ItemCard = ({ imageUrl, name, description, price, onOrderNow }) => {
  return (
    <div className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 rounded-lg shadow-xl flex flex-col max-w-xs md:max-w-sm lg:max-w-md mx-auto transition-transform transform hover:scale-105">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={imageUrl}
        alt={name}
      />
      <div className="p-5 flex flex-col flex-grow">
        <h5 className="text-xl font-bold text-white">{name}</h5>
        <p className="mt-2 text-sm text-gray-400 flex-grow">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-green-500">{price} EGP</span>
          <Link
            href="/OrderPage" // Call the function passed via props
            className="px-4 py-2 bg-green-500 font-semibold text-black rounded hover:bg-green-600 transition duration-300"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
