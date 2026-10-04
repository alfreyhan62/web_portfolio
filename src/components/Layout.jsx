import { useEffect, useState } from 'react'
import favicon from '../assets/favicon.png'
import portrait from '../assets/fotosaya.png'

export function Hero() {
  return <section className="hero" id="home">
    <div className="hero-outline" aria-hidden="true"><span>M.REYHAN</span><span>ALFAHREZI</span></div>
    <div className="hero-portrait"><img src={portrait} alt="M.REYHAN ALFAHREZI — Web Developer and Security Specialist" /><div className="glass-ribbon" /></div>
    <div className="hero-content shell">
      <div className="hero-bottom"><div className="socials"><a className="hire" href="https://www.instagram.com/reyh_aaannnn" target="_blank" rel="noreferrer">Instagram</a><a className="hire" href="https://github.com/alfreyhan62" target="_blank" rel="noreferrer">GitHub</a><a className="hire" href="https://www.linkedin.com/in/reyhan-alfahrezi-842446306" target="_blank" rel="noreferrer">LinkedIn</a></div></div>
    </div>
  </section>
}

export function Navbar() {
  const [dark, setDark] = useState(false)
  const toggleTheme = (event) => { const next = !dark; const root = document.documentElement; const applyTheme = () => { setDark(next); root.classList.toggle('dark-theme', next) }; const { left, top, width, height } = event.currentTarget.getBoundingClientRect(); root.style.setProperty('--theme-x', `${left + width / 2}px`); root.style.setProperty('--theme-y', `${top + height / 2}px`); if (document.startViewTransition) document.startViewTransition(applyTheme); else { root.classList.add('theme-transition'); applyTheme(); window.setTimeout(() => root.classList.remove('theme-transition'), 320) } }
  return <header className="floating-nav"><nav><a className="brand" href="#home"><img src={favicon} alt="M.REYHAN ALFAHREZI" /> <span>M.REYHAN ALFAHREZI</span></a><div className="nav-links"><a href="#work">PROJECT</a><a href="#about">ABOUT</a><a href="#skills">SKILLS</a><a href="#contact">CONTACT</a></div><div className="nav-actions"><button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={dark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}>{dark ? <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg> : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5 8.5 8.5 0 1 0 20.5 14.1Z" /></svg>}</button><a className="hire" href="#contact">HIRE ME <span>→</span></a></div></nav></header>
}

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => { await navigator.clipboard.writeText('alfreyhan6@gmail.com'); setCopied(true); window.setTimeout(() => setCopied(false), 2500) }
  return <footer className="contact" id="contact"><div className="shell"><div className="contact-grid"><div><h2>HAVE A PROJECT<br />IN MIND?</h2><p className="contact-copy">Open to web development projects, custom digital systems, and technical SEO work. If you have an idea or a problem that needs solving, feel free to get in touch.</p></div><div className="direct"><p>DIRECT COMMUNICATION</p><div><a href="mailto:alfreyhan6@gmail.com">alfreyhan6@gmail.com</a><button type="button" onClick={copyEmail}>{copied ? 'COPIED' : 'COPY'}</button></div><small className={copied ? 'visible' : ''}>COPIED TO CLIPBOARD</small><a className="button send" href="mailto:alfreyhan6@gmail.com">SEND DIRECT DISPATCH <span>→</span></a></div></div><div className="footer-meta"><span>© 2025 M.REYHAN ALFAHREZI. ALL RIGHTS RESERVED.</span><span><a href="https://www.instagram.com/reyh_aaannnn" target="_blank" rel="noreferrer">INSTAGRAM</a><a href="https://github.com/alfreyhan62" target="_blank" rel="noreferrer">GITHUB</a><a href="https://www.linkedin.com/in/reyhan-alfahrezi-842446306" target="_blank" rel="noreferrer">LINKEDIN</a><b>|</b><JakartaTime /></span></div></div></footer>
}
function JakartaTime() {
  const formatter = () => new Intl.DateTimeFormat([], { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date())
  const [time, setTime] = useState(formatter)
  useEffect(() => { const timer = window.setInterval(() => setTime(formatter()), 60000); return () => window.clearInterval(timer) }, [])
  return <>JAKARTA {time} WIB</>
}
