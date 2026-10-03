import { ArrowUpRight, MenuIcon } from './Icons'

const work = [
  { number: '01', title: 'The Quiet Architecture', type: 'Editorial direction', tint: 'ink' },
  { number: '02', title: 'Forms of Attention', type: 'Publication design', tint: 'clay' },
  { number: '03', title: 'After the Rain', type: 'Art direction', tint: 'mist' },
]

function Header() {
  return <header className="site-header">
    <a className="wordmark" href="#top">RA<span>.</span></a>
    <nav aria-label="Primary navigation"><a href="#work">Selected work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
    <button className="menu-button" type="button" aria-label="Open menu"><MenuIcon /></button>
  </header>
}

function Hero() {
  return <section className="hero-section" id="top">
    <p className="eyebrow">Independent designer · Jakarta, Indonesia</p>
    <h1>Reyhan<br /><em>Alfahrezi</em></h1>
    <div className="hero-bottom"><p>Building considered identities, digital experiences, and printed matter for people with something to say.</p><a className="text-link" href="#work">Explore selected work <ArrowUpRight /></a></div>
  </section>
}

function WorkCard({ item }) {
  return <article className={`work-card ${item.tint}`}>
    <div className="work-art"><span>{item.number}</span><div className="art-shape"></div></div>
    <div className="work-meta"><div><p>{item.type}</p><h2>{item.title}</h2></div><a aria-label={`View ${item.title}`} href="#contact"><ArrowUpRight /></a></div>
  </article>
}

function SelectedWork() {
  return <section className="work-section" id="work"><div className="section-heading"><p className="eyebrow">Selected work / 2022—24</p><p>01—03</p></div><div className="work-list">{work.map((item) => <WorkCard item={item} key={item.number} />)}</div></section>
}

function About() {
  return <section className="about-section" id="about"><p className="eyebrow">Profile</p><div><h2>Design is a way of making space for <em>ideas</em> to breathe.</h2><p>I’m Reyhan, a multidisciplinary designer focused on visual identities and editorial systems. I work independently with cultural, fashion, and hospitality brands.</p><a className="text-link" href="#contact">More about me <ArrowUpRight /></a></div></section>
}

function Footer() {
  return <footer id="contact"><p className="eyebrow">Have a project in mind?</p><a className="footer-email" href="mailto:hello@reyhanalfahrezi.com">Let’s talk <ArrowUpRight /></a><div className="footer-bottom"><span>© 2024 M.REYHAN ALFAHREZI</span><span>Made with intention</span><a href="#top">Back to top ↑</a></div></footer>
}

export default function App() {
  return <main><Header /><Hero /><SelectedWork /><About /><Footer /></main>
}
