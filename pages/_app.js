import Head from 'next/head'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>
                    Website under construction – Al&rsquo;s Folio
                </title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
