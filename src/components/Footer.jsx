/**
 * @copyright 2025 siddharthramanathan
 * @license Apache-2.0
 */

import { li } from "framer-motion/client";
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Timeline',
    href: '#timeline'
  },
  {
    label: 'Projects',
    href: '#project'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/sidram1705'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sidram-17m2002/'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/aah_shid/'
  }
];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container reveal-up">

            <div className="lg:grid lg:grid-cols-2">

                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                        Let&apos;s work together today!
                    </h2>

                    <ButtonPrimary
                        href="mailto:sidram1705@gmail.com"
                        label="Start project"
                        icon="chevron_right"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">

                    <div>
                        <p className="mb-2">Sitemap</p>

                        <ul>
                            {sitemap.map(({ label, href }, key) => (
                                <li key={key}>
                                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2">Socials</p>

                        <ul>
                            {socials.map(({ label, href }, key) => (
                                <li key={key}>
                                    <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>

            <div className="flex items-center justify-between pt-10 mb-8 reveal-up">
                <a href="" className="">
                    <img src="/images/logo.ico" width={40} height={40} alt="Logo" />
                </a>

                <p className="text-zinc-500 text-sm">
                    &copy; 2024 <span className="text-zinc-200 ">Siddharth Ramanathan</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer