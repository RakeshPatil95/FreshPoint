"use client";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

const dummyProducts: Record<string, { id: number; name: string; price: string; image: string }[]> = {
  fruits: [
    { id: 1, name: "Apple", price: "₹120/kg", image: "/apple.jpg" },
    { id: 2, name: "Banana", price: "₹60/dozen", image: "/banana.jpg" },
  ],
  vegetables: [
    { id: 3, name: "Tomato", price: "₹40/kg", image: "/tomato.jpg" },
    { id: 4, name: "Carrot", price: "₹50/kg", image: "/carrot.jpg" },
  ],
  dairy: [
    { id: 5, name: "Milk", price: "₹80/litre", image: "/milk.jpg" },
    { id: 6, name: "Cheese", price: "₹200/500g", image: "/cheese.jpg" },
  ],
};

export default function CategoryPage() {
  const router = useRouter();
  const params = useParams();
  const category = Array.isArray(params.category) ? params.category[0] : params.category;

  const products = category && dummyProducts[category] ? dummyProducts[category] : [];

  return (
    <div className="bg-green-50 min-h-screen flex flex-col">
      <div className="flex flex-col justify-center items-center flex-grow p-6">
        <h1 className="text-3xl font-semibold text-green-700 mb-6 text-center capitalize">
          {category} Products
        </h1>

        {products.length > 0 ? (
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-green-700 font-medium">{product.price}</p>
                <Button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                  Add to Cart
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg mt-6">No products available.</p>
        )}

        <div className="text-center mt-8">
          <Button onClick={() => router.push("/")} className="bg-gray-600 text-white hover:bg-gray-700 px-4 py-2">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
