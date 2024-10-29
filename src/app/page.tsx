"use client";

import Header from "./content/header";
import Footer from "./content/footer";
import Main from "./content/main";

export default function Home() {
  return (
    <div className="grid justify-items-center min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
