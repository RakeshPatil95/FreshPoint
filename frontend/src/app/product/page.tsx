"use client";

export default function Product() {
  const groceries = [
    { id: 1, name: "Fresh Apples", price: "₹120/kg", image: "/apple.jpg" },
    { id: 2, name: "Organic Bananas", price: "₹60/dozen", image: "/banana.jpg" },
    { id: 3, name: "Whole Wheat Bread", price: "₹50/loaf", image: "/bread.jpg" },
    { id: 4, name: "Fresh Milk", price: "₹80/litre", image: "/milk.jpg" },
    { id: 5, name: "Brown Eggs", price: "₹150/dozen", image: "/eggs.jpg" },
    { id: 6, name: "Tomatoes", price: "₹40/kg", image: "/tomato.jpg" },
  ];

  return (
    <div className="bg-green-50 min-h-screen flex flex-col">
      <div className="flex flex-col justify-center items-center flex-grow p-6">
        <h1 className="text-4xl font-semibold text-green-700 mb-6">
          Welcome to FreshPoint Grocery!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Get your daily groceries delivered right to your doorstep.
        </p>

        {/* Grocery Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {groceries.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-green-700 font-medium">{item.price}</p>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
