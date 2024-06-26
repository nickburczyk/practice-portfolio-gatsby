import * as React from 'react'
import { Link } from 'gatsby'
import { 
  container, 
  heading, 
  navLinks, 
  navLinkItem, 
  navLinkText,
  siteTitle 
} from './layout.module.css'
import { useMetadata } from '../../hooks'

const Layout = ({ pageTitle, children }) => {
  const metadata = useMetadata()

  return (
    <div className={container}>
      <header className={siteTitle}>{metadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout