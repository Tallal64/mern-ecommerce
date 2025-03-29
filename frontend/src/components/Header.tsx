import { Menu, Moon, Search, ShoppingCart, Sun } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "@/store/theme";
import { Button } from "./ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/categories", label: "Categories" },
];

export default function Header() {
  const { isDarkMode, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme();
  };

  if (isDarkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                MINIMAL
              </span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleTheme}
              aria-label="Toggle theme"
              className="rounded-full text-muted-foreground hover:text-foreground"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              className="rounded-full text-muted-foreground hover:text-foreground"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Link to="" className="relative">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Shopping cart"
                className="rounded-full text-muted-foreground hover:text-foreground"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  0
                </span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Menu"
              className="md:hidden rounded-full text-muted-foreground hover:text-foreground"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
