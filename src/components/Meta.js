import Head from 'next/head'

function meta() {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>Bjørn Endre Langeland - Offline</title>
            <meta name="description" content="Bjørn Endre Langeland - Graphic designer in Oslo, Norway." />
            <meta name="keywords" content="graphic design, ux, user experience, ui, user interface, digital design, interactive design, webdesign" />
            <link rel="stylesheet" type="text/css" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
            <link href="https://fonts.googleapis.com/css?family=Montserrat:300,600,900" rel="stylesheet" />
            <link rel="apple-touch-icon" sizes="180x180" href="./favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="./favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="./favicons/favicon-16x16.png" />
            <link rel="manifest" href="./favicons/site.webmanifest" />
            <link rel="shortcut icon" href="./favicons/favicon.ico" />
            <meta name="msapplication-TileColor" content="#165efe" />
            <meta name="msapplication-config" content="./favicons/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    )
}

export default meta
