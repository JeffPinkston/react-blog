import React, { useState } from 'react'
import { NavLink } from 'react-navi'
import siteMetadata from '../siteMetadata'
import ArticleSummary from './ArticleSummary'
import Bio from './Bio'
import Pagination from './Pagination'
import styles from './BlogIndexPage.module.css'
// import Toggle from './Toggle'
// import useDarkMode from '../hooks/useDarkMode'

function BlogIndexPage({ blogRoot, pageCount, pageNumber, postRoutes }) {
  // const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div>
      <header>
        <div className="headerRow">

          <h1 className={styles.title}>
            <NavLink className="headerRow__navlink" href={blogRoot}>{siteMetadata.title}</NavLink>
          </h1>
          {/* <div className="toggle__div">
            <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div> */}
        </div>
        <Bio />

      </header>
      <ul className={styles.articlesList}>
        {postRoutes.map(route =>
          <li key={route.url.href}>
            <ArticleSummary blogRoot={blogRoot} route={route} />
          </li>
        )}
      </ul>
      {
        pageCount > 1 &&
        <Pagination
          blogRoot={blogRoot}
          pageCount={pageCount}
          pageNumber={pageNumber}
        />
      }
      <footer className={styles.footer}>
        <div>
          <a
            href='./rss.xml'
            target='_blank'
            style={{ float: 'right' }}>
            RSS
          </a>
          <NavLink href='./about'>
            About
          </NavLink> &bull;{' '}
          <NavLink href='./tags'>
            Tags
          </NavLink> &bull;{' '}
          <a href='https://github.com/frontarm/create-react-blog'>
            Source
          </a>
        </div>
      </footer>
    </div>
  )
}

export default BlogIndexPage
