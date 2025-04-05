"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavLinks = ({ closeSheet }: { closeSheet?: () => void }) => {
  return (
    <>
      <Link
        href="#id"
        className="block text-xs sm:text-sm relative group"
        onClick={closeSheet}
      >
        <span className="relative text-foreground hover:text-primary transition-colors">
          Top
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </Link>
      <Link
        href="#aboutus"
        className="block text-xs sm:text-sm relative group"
        onClick={closeSheet}
      >
        <span className="relative text-foreground hover:text-primary transition-colors">
          私達について
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </Link>
      <Link
        href="#products"
        className="block text-xs sm:text-sm relative group"
        onClick={closeSheet}
      >
        <span className="relative text-foreground hover:text-primary transition-colors">
          取扱商品
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </Link>
      <Link
        href="#contact"
        className="block text-xs sm:text-sm relative group"
        onClick={closeSheet}
      >
        <span className="relative text-foreground hover:text-primary transition-colors">
          お問い合わせ
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </Link>
    </>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="md:hidden text-stone-950">
          <Menu size={28} />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>ナビゲーション</SheetTitle>
          <div className="p-2 flex flex-col space-y-4">
            <NavLinks closeSheet={handleClose} />
          </div>
        </SheetContent>
      </Sheet>
      <ul className="hidden md:flex space-x-6">
        <NavLinks />
      </ul>
    </div>
  );
};
