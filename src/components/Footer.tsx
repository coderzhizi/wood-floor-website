import Image from "next/image";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-12">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
              <Image
                src="/nav_logo.webp"
                alt="Wood Flooring Logo"
                width={170}
                height={32}
                priority
              />
              <p className="text-[#E5E7EB] mt-4 text-sm text-center md:text-left">
                Sustainable, high-quality wood flooring solutions for your home.
              </p>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 md:mb-0">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#home"
                      className="hover:text-[#92400E] transition-all"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#products"
                      className="hover:text-[#92400E] transition-all"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-[#92400E] transition-all"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-[#92400E] transition-all"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-medium">Phone:</span> (123) 456-7890
                  </li>
                  <li>
                    <span className="font-medium">Email:</span>{" "}
                    support@woodfloorpro.com
                  </li>
                  <li>
                    <span className="font-medium">Address:</span> 123 Wood St,
                    City, Country
                  </li>
                </ul>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com"
                    className="text-[#E5E7EB] hover:text-[#92400E] transition-all"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    className="text-[#E5E7EB] hover:text-[#92400E] transition-all"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.twitter.com"
                    className="text-[#E5E7EB] hover:text-[#92400E] transition-all"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    className="text-[#E5E7EB] hover:text-[#92400E] transition-all"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-sm text-[#E5E7EB] mb-4">
                Subscribe to our newsletter to receive the latest updates on our
                products and offers.
              </p>
              <form className="flex items-center justify-center md:justify-start">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 text-black rounded-l-lg focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#92400E] text-white px-6 py-2 rounded-r-lg hover:bg-[#7e350b] transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-[#444] mt-8 pt-6 text-center text-sm text-[#E5E7EB]">
            <p>&copy; 2023 木地板公司. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
