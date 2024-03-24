import Analytics from '@layout/analytics/Analytics'
import ReactQueryClientProvider from '@provider/reactQueryClientProvider/ReactQueryClientProvider'
import RecoilProvider from '@provider/recoilProvider/RecoilProvider'
import '@styles/fonts.css'
import type { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import StyledComponentsProvider from '../provider/styledComponentsProvider/StyledComponentsProvider'
export const metadata: Metadata = {
    title: 'FIGVERSE',
    description: 'FIGVERSE',
}

export const viewport: Viewport = {
    themeColor: 'black',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

const GlobalContainer = dynamic(() => import('@layout/globalContainer/GlobalContainer'), { ssr: false })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
                />
                <meta
                    name='apple-mobile-web-app-capable'
                    content='yes'></meta>
                <meta
                    property='og:type'
                    content='website'
                />
                <meta
                    property='og:title'
                    content='FIGVERSE'
                />
                <meta
                    property='og:description'
                    content='세상 모든 영감과 시작'
                />
                <meta
                    property='og:image'
                    content='https://fig.xyz/favicon.ico'
                />
                <meta
                    property='og:url'
                    content='https://www.fig.xyz'
                />
            </Head>
            <body>
                <RecoilProvider>
                    <ReactQueryClientProvider>
                        <StyledComponentsProvider>
                            <Analytics />
                            <GlobalContainer>{children}</GlobalContainer>
                        </StyledComponentsProvider>
                    </ReactQueryClientProvider>
                </RecoilProvider>
            </body>
        </html>
    )
}
