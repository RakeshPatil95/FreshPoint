import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col justify-center items-center flex-grow p-6">
        <h1 className="text-4xl font-semibold text-green-700 mb-6">
          Welcome to FreshPoint Grocery!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Get your daily groceries delivered right to your doorstep.
        </p>
        <Button className="bg-green-600 text-white hover:bg-green-700 text-lg px-6 py-3 rounded-md">
          Start Shopping
        </Button>
      </div>
    </div>
  );
}
