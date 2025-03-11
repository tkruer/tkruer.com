import Link from "next/link";
import { ThemeToggle } from "./ui/toggle-theme";

export function Header() {
  return (
    <nav className="pt-6 flex items-center justify-between w-full">
      <ul className="flex gap-6">
        <li>
          <Link href="/" prefetch={true} className="hover:text-gray-300 transition-colors">
            home
          </Link>
        </li>
        <li>
          <Link href="/notes" prefetch={true} className="hover:text-gray-300 transition-colors">
            notes
          </Link>
        </li>
        <li>
          <Link href="/about" prefetch={true} className="hover:text-gray-300 transition-colors">
            about
          </Link>
        </li>
      </ul>
      <div className="ml-auto sm:ml-0 sm:order-2 flex justify-end ">
        <ThemeToggle />
      </div>
    </nav>
  );
}