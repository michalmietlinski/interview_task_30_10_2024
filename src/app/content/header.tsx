export default function Header() {
  return (
    <header className="grid bg-navbar w-full content-center justify-center text-white h-12 p-8 sticky top-0">
      <h1
        tabIndex={0}
        className="max-w-screen-2xl w-full focus:ring focus:ring-violet-300"
      >
        Navbar Item
      </h1>
    </header>
  );
}
