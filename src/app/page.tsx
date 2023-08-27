"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './home.module.scss';
import topoqraf from './../assets/images/topoqraf2.png';
import todoWebsite from './../assets/images/todowebsite.png';
import externalLink from './../assets/images/external-link.svg';
import code from './../assets/images/code.svg';
import facebook from './../assets/images/facebook.svg';
import github from './../assets/images/github.svg';
import linkedin from './../assets/images/linkedin.svg';
import xLogo from './../assets/images/x.svg';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setScrolled(window.scrollY > 100);
    })
  }, [])

  return (
    <>
      <nav className={style.navbar}>
        <div className={`${style.wrapper} ${scrolled && style.smallVersion}`}>
          <Link href="/" className={style.logo}>Zeynal Mardanli</Link>
          <div className={style.menu}>
            <Link href="/" className={style.menuItem}>Home</Link>
            <Link href="/" className={style.menuItem}>Projects</Link>
            <Link href="/" className={style.menuItem}>Skills</Link>
            <Link href="/" className={style.menuItem}>Contact</Link>
          </div>
          <div className={`${style.menuBtn} ${menuOpen && style.open}`} onClick={() => setMenuOpen(prev => !prev)}>
            <span className={style.menuLine}></span>
            <span className={style.menuLine}></span>
            <span className={style.menuLine}></span>
          </div>
        </div>
      </nav>
      <header className={`grid grid-cols-2 relative ${style.hero}`}>
        <div className={style.radial}></div>
        <div className={`absolute grid grid-cols-2 gap-x-32 gap-y-6 ${style.heroBackground}`}>
          <div className={`text-8xl font-bold ${style.text}`}>Web Developer</div>
          <div className={`text-8xl font-bold ${style.text}`}>Web Developer</div>
          <div className={`text-8xl font-bold ${style.text}`}>&nbsp; &nbsp; &nbsp; &nbsp; Web Developer</div>
          <div className={`text-8xl font-bold ${style.text}`}>&nbsp; &nbsp; &nbsp; &nbsp; Web Developer</div>
          <div className={`text-8xl font-bold ${style.text}`}>Web Developer</div>
          <div className={`text-8xl font-bold ${style.text}`}>Web Developer</div>
          <div className={`text-8xl font-bold ${style.text}`}>Web Developer</div>
          <div className={`text-8xl font-bold ${style.text}`}>Web Developer</div>
          <div className={`text-8xl font-bold ${style.text}`}>Web Developer</div>
          <div className={`text-8xl font-bold ${style.text}`}>Web Developer</div>
          <div className={`text-8xl font-bold ${style.text}`}>Web Developer</div>
          <div className={`text-8xl font-bold ${style.text}`}>Web Developer</div>
          <div className={`text-8xl font-bold ${style.text}`}>Web Developer</div>
          <div className={`text-8xl font-bold ${style.text}`}>Web Developer</div>
          <div className={`text-8xl font-bold ${style.text}`}>Web Developer</div>
          <div className={`text-8xl font-bold ${style.text}`}>Web Developer</div>
          <div className={`text-8xl font-bold ${style.text}`}>Web Developer</div>
        </div>
        <h1 className={`w-full col-start-2 col-end-3 text-7xl font-medium ${style.heading}`}><span className="text-zinc-800">Hello, I'm</span><br/><span className="text-pink-400">Zeynal Mardanli</span></h1>
      </header>
      <main className={style.main}>
        <section className={style.projects}>
            <h1 className={style.title}>Projects</h1>
            <div className={style.content}>
              <div className={style.project}>
                <Image src={topoqraf} alt="Topoqraf" className={style.image} />
                <div className={style.name}>Topoqraf</div>
                <div className={style.technologies}>
                  NextJS + ReactJS + SASS + REST API
                </div>
                <div className={style.description}>Topoqraf is the first Data Vizualization Platform in Azerbaijan, which allows you to get latest data on various researches.</div>

                <div className={style.actions}>
                  <Link href='https://topoqraf.com/en' target="_blank" className={style.action}>
                    <Image src={externalLink} alt="Live Site" />
                    <p>site</p>
                  </Link>
                  <Link href='https://github.com/Lshiroc/todo-website' target="_blank" className={style.action}>
                  <Image src={code} alt="See Code" />
                    <p>code</p>
                  </Link>
                </div>
              </div>
              <div className={style.project}>
                <Image src={todoWebsite} alt="To-Do Website" className={style.image} />
                <div className={style.name}>Doin' It</div>
                <div className={style.technologies}>
                  ReactJS + MongoDB + NodeJS + ExpressJS + JWT + SASS + REST API
                </div>
                <div className={style.description}>To-Do Website for managing daily tasks or project plans with making multiple folders</div>

                <div className={style.actions}>
                  <Link href='https://todo-website-zeta.vercel.app/' target="_blank" className={style.action}>
                    <Image src={externalLink} alt="Live Site" />
                    <p>site</p>
                  </Link>
                  <Link href='https://github.com/Lshiroc/todo-website' target="_blank" className={style.action}>
                  <Image src={code} alt="See Code" />
                    <p>code</p>
                  </Link>
                </div>
              </div>
            </div>
        </section>
        <section className={style.contact}>
          <div className={`sectionx ${style.wrapper}`}>
            <div className={style.leftPart}>
              <div className={style.title}>Interested in Working with me?</div>
              <div className={style.subTitle}>Do not hesitate to text me</div>
              <div className={style.content}>
                <input type="text" placeholder="Email" className={style.input} />
                <textarea placeholder="Your message" className={style.message}></textarea>
                <button className= {style.sendBtn}>Send</button>
              </div>
            </div>
            <div className={style.rightPart}>
              <div className={style.title}>You can also find me in</div>
              <div className={style.socials}>
                <Link href="/" className={style.social}>
                  <Image className={style.logo} src={linkedin} alt="Linkedin" />
                  <p className={style.username}>@ZeynalMardanli</p>
                </Link>
                <Link href="/" className={style.social}>
                  <Image className={style.logo} src={github} alt="GitHub" />
                  <p className={style.username}>@Lshiroc</p>
                </Link>
                <Link href="/" className={style.social}>
                  <Image className={style.logo} src={facebook} alt="Facebook" />
                  <p className={style.username}>@ZeynalMardanli</p>
                </Link>
                <Link href="/" className={style.social}>
                  <Image className={style.logo} src={xLogo} alt="X" />
                  <p className={style.username}>@Lshiroc</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
