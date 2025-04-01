"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full bg-green-600 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Fresh Point
        </Link>

        {/* Desktop Nav (Hidden on Mobile) */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/cart" className="hover:text-green-200 flex items-center">
            <ShoppingCart className="w-5 h-5 mr-1" />
            Cart
          </Link>
          <Button
            onClick={() => router.push("/")}
            variant="default" // Changed to "default" for better visibility
            className="bg-white text-green-600 hover:bg-green-100" // Modified colors
          >
            Logout
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden text-white">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-6 bg-green-600 text-white">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-lg font-semibold" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="/cart" className="text-lg font-semibold flex items-center" onClick={() => setOpen(false)}>
                <ShoppingCart className="w-5 h-5 mr-1" />
                Cart
              </Link>
              <Button
                onClick={() => router.push("/")}
                variant="default" // Changed to "default" for better visibility
                className="bg-white text-green-600 hover:bg-green-100" // Modified colors
              >
                Logout
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}