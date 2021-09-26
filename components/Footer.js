import Link from "next/link";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 px-32 py-14 bg-green-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <Link href="/">
          <h5 className="cursor-pointer hover:text-red-400 font-bold">ABOUT</h5>
        </Link>
        <Link href="/">
          <p className="cursor-pointer hover:text-red-400 ">How holidaze work</p>
        </Link>
        <Link href="/">
          <p className="cursor-pointer hover:text-red-400">bla bls</p>
        </Link>
        <Link href="/">
          <p className="cursor-pointer hover:text-red-400">bla bls</p>
        </Link>
        <Link href="/">
          <p className="cursor-pointer hover:text-red-400">bla bls</p>
        </Link>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
