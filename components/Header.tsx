import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="py-2">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Logo />
        <SearchBar />
      </div>
    </header>
  );
};
export default Header;
