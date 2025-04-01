"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const categories = [
    { id: 1, name: "Fruits", image: "/fruits.jpg" },
    { id: 2, name: "Vegetables", image: "/vegetables.jpg" },
    { id: 3, name: "Dairy", image: "/dairy.jpg" },
    { id: 4, name: "Bakery", image: "/bakery.jpg" },
    { id: 5, name: "Beverages", image: "/beverages.jpg" },
    { id: 6, name: "Snacks", image: "/snacks.jpg" },
  ];

  return (
    <div className="bg-green-50 min-h-screen flex flex-col">
      <div className="flex flex-col justify-center items-center flex-grow p-6">

        {/* Grocery Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
              onClick={() => router.push(`/category/${category.name.toLowerCase()}`)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-32 h-32 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
