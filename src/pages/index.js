import dynamic from 'next/dynamic'
import Meta from '../components/meta'
import Footer from '../components/Footer'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/DotCanvas'),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <Meta />
      <div id="flexin">
        <section id="canvasWrapper">
            <DynamicComponentWithNoSSR />
            <div id="floatin">
                <h1>Offline</h1>
                <p>503: Service Temporarily Unavailable</p>
            </div>
        </section>

        <Footer 
          name = 'Bjørn Endre Langeland' 
          description= 'Graphic Designer in Oslo, Norway.'
          links = {[
            {
                name: 'Instagram',
                title: 'instagram.com/heibjornendre/',
                url: 'https://www.instagram.com/heibjornendre/'
            },
            {
                name: 'Linkedin',
                title: 'linkedin.com/in/bjornendre/',
                url: 'https://www.linkedin.com/in/bjornendre/'
            }
          ]}
        />

      </div>
    </>
  )
}
