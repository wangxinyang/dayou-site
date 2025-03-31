"use client";

import React from "react";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavLinks = () => {
  return (
    <>
      <Link href="#id" className="block text-lg relative group">
        <span className="relative">
          Top
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </Link>
      <Link href="#aboutus" className="block text-lg relative group">
        <span className="relative">
          私達について
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </Link>
      <Link href="#products" className="block text-lg relative group">
        <span className="relative">
          取扱商品
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </Link>
      <Link href="#contact" className="block text-lg relative group">
        <span className="relative">
          お問い合わせ
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </Link>
    </>
  );
};

export const Navbar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="md:hidden text-stone-950">
          <Menu size={28} />
        </SheetTrigger>
        <SheetContent>
          <div className="p-2 flex flex-col space-y-4">
            <NavLinks />
          </div>
        </SheetContent>
      </Sheet>
      <ul className="hidden md:flex space-x-6">
        <NavLinks />
      </ul>
    </div>
  );
};
