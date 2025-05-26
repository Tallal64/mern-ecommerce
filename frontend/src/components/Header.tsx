import { useTheme } from "@/store/theme";
import { AnimatePresence, motion } from "framer-motion";
import {
  LuMenu,
  LuMoon,
  LuSearch,
  LuShoppingCart,
  LuSun,
  LuUserRound,
} from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/70"
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                <motion.span
                  className="text-transparent bg-gradient-to-r from-primary to-primary/50 bg-clip-text"
                  initial={{ backgroundPosition: "0% 50%" }}
                  whileHover={{
                    backgroundPosition: "100% 50%",
                    transition: { duration: 0.8 },
                  }}
                >
                  MINIMAL
                </motion.span>
              </h1>
            </Link>
          </motion.div>

          <nav className="items-center hidden space-x-8 md:flex">
            {links.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Search"
                className="rounded-full cursor-pointer text-muted-foreground hover:text-foreground"
              >
                <LuSearch className="w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleTheme}
                aria-label="Toggle theme"
                className="rounded-full cursor-pointer text-muted-foreground hover:text-foreground"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDarkMode ? "dark" : "light"}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDarkMode ? (
                      <LuSun className="w-5 h-5" />
                    ) : (
                      <LuMoon className="w-5 h-5" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="addToCart" className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Shopping cart"
                  className="rounded-full cursor-pointer text-muted-foreground hover:text-foreground"
                >
                  <LuShoppingCart className="w-5 h-5" />
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground"
                  >
                    0
                  </motion.span>
                </Button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                aria-label="Menu"
                className="rounded-full cursor-pointer text-muted-foreground hover:text-foreground"
              >
                <LuMenu className="w-5 h-5" />
              </Button>
            </motion.div>

            <Link to={"/auth/login"}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="user"
                  className="rounded-full cursor-pointer text-muted-foreground hover:text-foreground"
                >
                  <LuUserRound className="w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
