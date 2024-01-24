import Image from "next/image";
import Link from "next/link";

const Header = () => {

  return (
    <header className="main-header">
      <h1><Link href="/" className="flex gap-2 flex-nowrap"><Image src={"/assets/images/pray.png"} width={30} height={30} alt="logo" />Adhkar</Link></h1>
    </header>
  );
};

export default Header;
