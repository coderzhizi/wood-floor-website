import Image from "next/image";
import { motion } from "motion/react";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-20 bg-white shadow-lg">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/nav_logo.webp"
              alt="Wood Flooring Logo"
              width={170}
              height={32}
              priority
            />
          </div>
          <nav className="flex space-x-6 text-gray-700">
            {["Home", "Products", "About", "Cases", "News", "Contact"].map(
              (text) => (
                <motion.a
                  key={text}
                  href={`${text.toLowerCase().replace(" ", "")}`}
                  className="hover:text-[#92400E] transition-all"
                  whileHover={{ scale: 1.1, color: "#92400E" }}
                  whileTap={{ scale: 0.9 }}
                >
                  {text}
                </motion.a>
              )
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
