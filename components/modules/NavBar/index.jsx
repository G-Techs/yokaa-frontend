import LeftNav from "./LeftNav";
import TopNav from "./TopNav";

const NavBar = () => {
  return (
    <>
      <div className="absolute left-16">
        <TopNav />
      </div>
      <LeftNav />
    </>
  );
};

export default NavBar;
