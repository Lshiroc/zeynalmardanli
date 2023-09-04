/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useRef, RefObject } from 'react';
import Link from 'next/link';
import validator from 'validator';
import Image from 'next/image';
import style from './home.module.scss';
import topoqraf from './../assets/images/topoqraf2.png';
import todoWebsite from './../assets/images/todowebsite.png';
import externalLink from './../assets/images/external-link.svg';
import code from './../assets/images/code.svg';
import facebook from './../assets/images/facebook.svg';
import facebookHero from './../assets/images/facebook-hero.svg';
import github from './../assets/images/github.svg';
import githubHero from './../assets/images/github-hero.svg';
import linkedin from './../assets/images/linkedin.svg';
import linkedinHero from './../assets/images/linkedin-hero.svg';
import xLogo from './../assets/images/x.svg';
import xHeroLogo from './../assets/images/x-hero.svg';
import kururin from './../assets/images/kururin-kuru-kuru.gif';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState('none');
  const [currentPage, setCurrentPage] = useState('Home');
  const [messageSent, setMessageSent] = useState(false);
  const home = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const mailInput = useRef<HTMLInputElement>(null);
  const textInput = useRef<HTMLTextAreaElement>(null);
  const sendBtn = useRef<HTMLButtonElement>(null);

  const elementIsVisibleInViewport = (el:any, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };

  const sendMessage = () => {
    const mainInp = mailInput.current?.value.trim() as string;
    const textInp = textInput.current?.value.trim() as string;
    if(!validator.isEmail(mainInp) || textInp == "") {
      if(sendBtn.current) {
        sendBtn.current.innerHTML = "Wrong inputs! Try again";
        setTimeout(() => {
          if(sendBtn.current) {
            sendBtn.current.innerHTML = "Send";
          }  
        }, 5000);
        return false;
      }
    } 

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mail: mailInput.current?.value,
        message: textInput.current?.value
      })
    }

    fetch('https://zeynalmardanli-backend.vercel.app/mail', options)
    .then(resp => resp.json())
    .then(data => {
      if(data.messageId) {
        if(mailInput.current) {
          mailInput.current.value = "";
        }
        if(textInput.current) {
          textInput.current.value = "";
        }
        if(sendBtn.current) {
          sendBtn.current.innerHTML = "Message Sent!";
        }
        setMessageSent(true);
        setTimeout(() => {
          setMessageSent(false);  
          if(sendBtn.current) {
            sendBtn.current.innerHTML = "Send";
          }
        }, 3500);
      }
    })
    .catch(err => {
      console.error(err);
      if(sendBtn.current) {
        sendBtn.current.innerHTML = "Oops, try again later";
      }
      setTimeout(() => {
        if(sendBtn.current) {
          sendBtn.current.innerHTML = "Send";
        }  
      }, 5000);
    });
  }  

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setScrolled(window.scrollY > 100);

      if(elementIsVisibleInViewport(home.current)) {
        setCurrentPage('Home');
      }

      if(elementIsVisibleInViewport(projects.current)) {
        setCurrentPage('Projects');
      }

      if(elementIsVisibleInViewport(contact.current)) {
        setCurrentPage('Contact');
      }
    });
  }, [])

  return (
    <>
      <nav className={style.navbar}>
        <div className={`${style.wrapper} ${scrolled && style.smallVersion}`}>
          <Link href="/" className={style.logo}>ZEYNAL M</Link>
          <div className={`${style.menu} ${menuOpen == 'open' ? style.open : menuOpen == 'close' && style.close}`}>
              <Link onClick={() => setMenuOpen('close')} href="/#home" className={`${style.menuItem} ${currentPage == 'Home' && style.active}`}>HOME</Link>
              <Link onClick={() => setMenuOpen('close')} href="/#projects" className={`${style.menuItem} ${currentPage == 'Projects' && style.active}`}>PROJECTS</Link>
              <Link onClick={() => setMenuOpen('close')} href="/#contact" className={`${style.menuItem} ${currentPage == 'Contact' && style.active}`}>CONTACT</Link>
            <div className={`${style.border} ${menuOpen == 'close' ? style.close : menuOpen == 'open' && style.open}`}></div>
          </div>
          <div className={`${style.menuBtn} ${menuOpen == 'open' && style.open}`} onClick={() => setMenuOpen(menuOpen == 'open' ? 'close' : 'open')}>
            <span className={style.menuLine}></span>
            <span className={style.menuLine}></span>
            <span className={style.menuLine}></span>
          </div>
        </div>
      </nav>
      <header id="home" className={`grid grid-cols-2 relative ${style.hero}`}>
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
        <div ref={home} className={`w-full col-start-2 col-end-3 ${style.heroRight} ${menuOpen == 'open' && style.upZIndex}`}>
          <h1 className={`text-7xl font-medium ${style.heading}`}><span className="text-zinc-800">Hello, I'm</span><br/><span className="text-pink-400">Zeynal Mardanli</span></h1>
          <div className={style.socials}>
            <Link href='https://www.linkedin.com/in/zeynalmardanli/' className={style.social}>
              <Image className={style.img} src={linkedinHero} alt="Linkedin" />
            </Link>
            <Link href='https://www.facebook.com/profile.php?id=100079193090176' className={style.social}>
              <Image className={style.img} src={facebookHero} alt="Facebook" />
            </Link>
            <Link href='https://twitter.com/lshiroc' className={style.social}>
              <Image className={`${style.img} ${style.xLogo}`} src={xHeroLogo} alt="X" />
            </Link>
            <Link href='https://github.com/Lshiroc' className={style.social}>
              <Image className={style.img} src={githubHero} alt="GitHub" />
            </Link>
          </div>
        </div>
      </header>
      <main className={style.main}>
        <section id="projects" className={style.projects}>
            <h1 className={style.title}>Projects</h1>
            <div className={style.content}>
              <div ref={projects} className={style.project}>
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
                <div className={style.name}>Doin' It | To-Do Website</div>
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
        <section id="contact" className={style.contact}>
          <div className={`sectionx ${style.wrapper}`}>
            <div className={style.leftPart}>
              <div className={style.title}>Interested in Working with me?</div>
              <div className={style.subTitle}>Do not hesitate to text me</div>
              <div ref={contact} className={style.content}>
                <input type="text" placeholder="Email" ref={mailInput} className={style.input} />
                <textarea placeholder="Your message" ref={textInput} className={style.message}></textarea>
                <button ref={sendBtn} onClick={() => sendMessage()} className= {style.sendBtn}>Send</button>
              </div>
            </div>
            <div className={style.rightPart}>
              <div className={style.title}>You can also find me in</div>
              <div className={style.socials}>
                <Link href="https://www.linkedin.com/in/zeynalmardanli/" className={style.social}>
                  <Image className={style.logo} src={linkedin} alt="Linkedin" />
                  <p className={style.username}>@ZeynalMardanli</p>
                </Link>
                <Link href="https://github.com/Lshiroc" className={style.social}>
                  <Image className={style.logo} src={github} alt="GitHub" />
                  <p className={style.username}>@Lshiroc</p>
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100079193090176" className={style.social}>
                  <Image className={style.logo} src={facebook} alt="Facebook" />
                  <p className={style.username}>@ZeynalMardanli</p>
                </Link>
                <Link href="https://twitter.com/lshiroc" className={style.social}>
                  <Image className={`${style.logo} ${style.xLogo}`} src={xLogo} alt="X" />
                  <p className={style.username}>@Lshiroc</p>
                </Link>
              </div>
            </div>
          </div>
          <div className={`${style.kururin} ${messageSent && style.animate}`}>
            <Image className={style.img} src={kururin} alt="Kururin" priority />
          </div>
        </section>
      </main>
    </>
  )
}
