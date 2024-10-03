import { ReactNode } from "react";
import Header from "@/components/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-minMax gap-4 p-4">
      <Header />
      {children}
    </div>
  );
}
