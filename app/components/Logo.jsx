import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <Image
          src="/icons/logo.svg"
          alt="Protocol"
          className="h-6 w-auto"
          height={20}
          width={100}
          priority
        />
      </Link>
    </div>
  );
}
