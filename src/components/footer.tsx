import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-between items-center h-20 bg-white dark:bg-gray-800 shadow-md px-4 md:px-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © MiazuBD. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <Link
            className="text-sm text-gray-500 hover:underline dark:text-gray-400 dark:hover:text-gray-100"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-sm text-gray-500 hover:underline dark:text-gray-400 dark:hover:text-gray-100"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm text-gray-500 hover:underline dark:text-gray-400 dark:hover:text-gray-100"
            href="#"
          >
            Contact Us
          </Link>
        </nav>
      </footer>
    </>
  );
}

export default Footer;