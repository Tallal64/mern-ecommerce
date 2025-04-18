import { Github, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
    { href: "#", Icon: <Github /> },
    { href: "#", Icon: <Instagram /> },
    { href: "#", Icon: <Twitter /> },
  ];

  return (
    <footer className="border-t bg-background text-muted-foreground">
      <div className="flex flex-col gap-y-4 items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex space-x-5">
          {socialLinks.map((link, index) => (
            <Link
              to={link.href}
              key={index}
              className="text-muted-foreground hover:text-primary transition-colors duration-200" 
            >
              <p className="h-5 w-5">{link.Icon}</p>
            </Link>
          ))}
        </div>

        <div className="">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} MINIMAL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
