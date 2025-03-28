"use client";

import React from "react";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavLinks = () => {
  return (
    <>
      <Link href="#id" className="block text-lg">
        Top
      </Link>
      <Link href="#aboutus" className="block text-lg">
        私達について
      </Link>
      <Link href="#products" className="block text-lg">
        商品
      </Link>
      <Link href="#contact" className="block text-lg">
        お問い合わせ
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
