import { Search } from "lucide-react";
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

      <div className="flex items-center gap-4"></div>
    </div>
  );
}
