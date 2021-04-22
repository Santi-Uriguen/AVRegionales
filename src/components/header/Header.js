import HeaderCarousel from "./components/HeaderCarousel.js";
import HeaderNavbar from "./components/HeaderNavbar.js";
export default function Header() {
  return (
    <header className="header">
      <HeaderNavbar />
      <h1 className="title">AV Regionales</h1>
      <HeaderCarousel />
    </header>
  );
}
