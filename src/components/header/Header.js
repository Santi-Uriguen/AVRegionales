import HeaderCarousel from "./components/HeaderCarousel.js";
import HeaderNavbar from "./components/HeaderNavbar.js";
export default function Header() {
  return (
    <header className="header hide">
      <HeaderNavbar />
      <HeaderCarousel />
    </header>
  );
}
