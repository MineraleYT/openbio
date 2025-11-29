'use client';

import Image from 'next/image';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SocialLink } from './components/SocialLink';

import { socialLinks } from '../data/links';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />

      <main className="flex-1 flex items-center justify-center p-4 relative">
        <div className="max-w-2xl w-full relative z-10">
          <div className="text-center mb-8">
            <div className="mb-6 relative w-32 h-32 mx-auto">
              <Image
                src="/logo.webp"
                alt="Logo"
                fill
                priority
                sizes="128px"
                className="rounded-full border-4 border-cyan-500/50 object-cover backdrop-blur-sm bg-white/10"
              />
            </div>
            <h1 className="text-4xl font-bold mb-2 text-white">Minerale</h1>
            <p className="text-gray-200 text-lg">Welcome to my social links! 👋</p>
          </div>

          <div className="space-y-4">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.id}
                href={link.href}
                icon={link.icon}
                label={link.label}
                colorClass={link.colorClass}
              />
            ))}
          </div>
        </div>
      </main>

      <footer className="relative z-10 py-4 text-center text-gray-400 text-sm">
        Made with <span className="text-red-500">♥</span> by{" "}
        <a href="https://go.mineraleyt.com/github" className="hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
          Minerale
        </a>
      </footer>
    </div>
  );
}
