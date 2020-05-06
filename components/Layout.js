import Navbar from './Navbar'
import Head from 'next/head'
import GlobalStyle from './GlobalStyle'

function Layout(props) {

    return (
        <div className='index'>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <GlobalStyle />
            <Head>
                <title>Weather App</title>
                <link rel="shortcut icon" href="#" />
            </Head>
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layout