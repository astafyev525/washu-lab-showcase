import { NavLink } from "./NavLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-foreground">WashU Laboratory</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink
                to="/"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                activeClassName="text-primary"
              >
                Home
              </NavLink>
              <NavLink
                to="/people"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                activeClassName="text-primary"
              >
                People
              </NavLink>
              <NavLink
                to="/papers"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                activeClassName="text-primary"
              >
                Papers
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <NavLink
                to="/"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                activeClassName="text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/people"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                activeClassName="text-primary"
                onClick={() => setIsOpen(false)}
              >
                People
              </NavLink>
              <NavLink
                to="/papers"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                activeClassName="text-primary"
                onClick={() => setIsOpen(false)}
              >
                Papers
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
