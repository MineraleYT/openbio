'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faGithub,
  faInstagram,
  faTiktok,
  faTwitch
} from '@fortawesome/free-brands-svg-icons';
import { AnimatedBackground } from './components/AnimatedBackground';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" role="document">
      <AnimatedBackground />
      <main className="flex-1 flex items-center justify-center p-4 relative">
        <div className="max-w-2xl w-full relative z-10">
          <div className="text-center mb-8">
            <div className="mb-6 relative w-32 h-32 mx-auto" role="img" aria-label="Profile picture">
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
            <a
              href="https://www.youtube.com/@minerale"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-800/80 hover:bg-red-600 backdrop-blur-sm rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-white/90 hover:text-white border-2 border-cyan-500/50"
            >
              <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 mb-2" />
              <span className="text-lg font-medium">YouTube</span>
            </a>

            <a
              href="https://github.com/mineraleyt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-800/80 hover:bg-gray-900 backdrop-blur-sm rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-white/90 hover:text-white border-2 border-cyan-500/50"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6 mb-2" />
              <span className="text-lg font-medium">GitHub</span>
            </a>

            <a
              href="https://instagram.com/mineraleyt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-800/80 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 backdrop-blur-sm rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-white/90 hover:text-white border-2 border-cyan-500/50"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 mb-2" />
              <span className="text-lg font-medium">Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/@mineraleyt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-800/80 hover:bg-black backdrop-blur-sm rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-white/90 hover:text-white border-2 border-cyan-500/50"
            >
              <FontAwesomeIcon icon={faTiktok} className="w-6 h-6 mb-2" />
              <span className="text-lg font-medium">TikTok</span>
            </a>

            <a
              href="https://twitch.tv/mineraleyt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-800/80 hover:bg-purple-700 backdrop-blur-sm rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-white/90 hover:text-white border-2 border-cyan-500/50"
            >
              <FontAwesomeIcon icon={faTwitch} className="w-6 h-6 mb-2" />
              <span className="text-lg font-medium">Twitch</span>
            </a>
          </div>
        </div>
      </main>

      <footer className="relative z-10 py-4 text-center text-gray-400 text-sm">
        Made with <span className="text-red-500">♥</span> by{" "}
        <a href="https://github.com/mineraleyt" className="hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
          Minerale
        </a>
      </footer>
    </div>
  );
}
