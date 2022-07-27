import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from './Header/Header'
import Footer from './Footer'

const META_DESCRIPTION = 'Meta description'

interface LayoutProps {
  title: string
  iconHref: string
  children: React.ReactNode
}

const Layout = ({ title, iconHref, children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="icon" href={iconHref} />
      </Head>
      <Header />
      {children}
      <Footer good={1} low={0} />
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  iconHref: PropTypes.string,
}

Layout.defaultProps = {
  title: 'Meet Henrique Derosa',
  iconHref: '/favicon.ico',
}

export default Layout
