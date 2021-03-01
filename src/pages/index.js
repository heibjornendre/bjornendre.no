import dynamic from 'next/dynamic'
import Meta from '../components/meta'

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

        <footer>
            <ul className="thedude">
                <li>Bjørn Endre Langeland</li>
                <li>Graphic Designer in Oslo, Norway.</li>
            </ul>
            <ul className="links">
                {/* <li><a href="https://www.behance.net/bjornendre" title="behance.net/bjornendre">Behance</a></li> */}
                <li><a href="https://www.instagram.com/heibjornendre/" title="instagram.com/heibjornendre/">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/bjornendre/" title="linkedin.com/in/bjornendre/">Linkedin</a></li>
                {/* <li><a href="https://www.creuna.no" title="creuna.no">Creuna</a></li> */}
            </ul>
        </footer>
      </div>
    </>
  )
}
