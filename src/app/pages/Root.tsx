import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full mt-20 px-margin-mobile md:px-margin-desktop py-16 max-w-container-max mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
