import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-dark-600 py-12 px-4 md:px-6 text-light-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display text-light-100 text-lg mb-4">NATURA</h3>
            <p className="text-light-400 text-sm mb-4">
              Modern architectural residences designed to create harmony between built environment and nature.
            </p>
          </div>

          <div>
            <h4 className="font-display text-light-100 mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-light-400 hover:text-accent1-light text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#residences" className="text-light-400 hover:text-accent1-light text-sm">
                  Residences
                </Link>
              </li>
              <li>
                <Link href="#design" className="text-light-400 hover:text-accent1-light text-sm">
                  Design Philosophy
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-light-400 hover:text-accent1-light text-sm">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-light-100 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-light-400 hover:text-accent1-light text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light-400 hover:text-accent1-light text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light-400 hover:text-accent1-light text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-light-100 mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-light-400 hover:text-accent1-light text-sm">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light-400 hover:text-accent1-light text-sm">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light-400 hover:text-accent1-light text-sm">
                  Pinterest
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-dark-400 text-center">
          <p className="text-light-400 text-sm">
            &copy; {new Date().getFullYear()} Natura Architectural Residences. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
