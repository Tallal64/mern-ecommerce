import { Github, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
    { href: "#", Icon: <Github /> },
    { href: "#", Icon: <Instagram /> },
    { href: "#", Icon: <Twitter /> },
  ];

  return (
    <footer className="border-t">
      <div className="flex flex-col gap-y-4 items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex space-x-5">
          {socialLinks.map((link, index) => (
            <Link
              to={link.href}
              key={index}
              className="text-gray-600 hover:text-black"
            >
              <p className="h-5 w-5">{link.Icon}</p>
            </Link>
          ))}
        </div>

        <div className="">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} MINIMAL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
