import React from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";

// import Footer from "@/components/Footer"

export default function Layout({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="caf-drawer" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col min-h-screen drawer-content">
        <Navbar />
        <div className="flex flex-col px-4 w-full max-w-7xl grow">
          <div className="items-start grow">{children}</div>
        </div>
      </div>
      <div className="drawer-side">
        <Drawer />
      </div>
    </div>
  );
}
