import Container from "../global/Container";
import CartButton from "./CartButton";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import { Suspense } from "react";

function Navbar() {
  return (
    <Suspense>
      <Container ClassName="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </Suspense>
  );
}

export default Navbar;
