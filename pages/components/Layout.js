import Head from 'next/head'
import Link from 'next/link'


const Layout = ({children, title="Top 15 Crypto Cap"}) =>{
    return(
        <div className="layout">
        <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <header className="header">
            <Link href="/" passHref>
                <a>
                    <img src="clogo.png" alt="logo" className="logo"/>
                </a>
            </Link>
        </header>

        <main>
            {children}
        </main>

        </div>
    )
}

export default Layout;

