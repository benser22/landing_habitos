import React from "react";

function Layout({ children }) {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <main className="my-2">{children}</main>
    </div>
  );
}

export default Layout;
