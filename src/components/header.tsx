import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href={"/"} className="text-2xl font-extrabold text-slate-300">
          U-commerce
        </Link>

        <form className="flex items-center w-[320px] rounded-md bg-slate-700 px-4 py-2 ring-slate-700 relative">
          <input
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-500 pl-10"
            placeholder="Search for your product..."
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4" />
          <span className="text-sm">Cart</span>
        </div>

        <div className="w-px h-4 text-red-300 z-50" />

        <Link href={"/"} className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src={"https://github.com/upalx.png"}
            className="w-7 h-7 rounded-full"
            width={24}
            height={24}
            alt={"User image"}
          />
        </Link>
      </div>
    </div>
  );
}
