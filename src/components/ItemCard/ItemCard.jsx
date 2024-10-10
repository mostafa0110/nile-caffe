

const ItemCard = ({ imageUrl, name, description, price }) => {
    return (
      <div className="max-w-sm bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 bg-zinc-800 rounded-lg shadow-xl flex flex-col">
        <img className="w-full h-48 object-cover rounded-t-lg" src={imageUrl} alt={name} />
        <div className="p-5 flex flex-col flex-grow">
          <h5 className="text-xl font-bold text-white">{name}</h5>
          <p className="mt-2 text-sm text-gray-400 flex-grow">{description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-bold text-green-500">{price} EGP</span>
            <button className="px-4 py-2 bg-green-500 font-semibold text-black rounded hover:bg-green-600">Add to Cart</button>
          </div>
        </div>
      </div>
    );
  };
  

export default ItemCard;
