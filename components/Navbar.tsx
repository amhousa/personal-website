import Link from "next/link"
import { Menu } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          amirsalmani.com
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="#about" className="hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-blue-400 transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </div>
        {/* <button className="md:hidden">
          <Menu />
        </button> */}
      </div>
    </nav>
  )
}

export default Navbar

