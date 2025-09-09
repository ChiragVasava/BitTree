"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"


export default function Home() {
  const router = useRouter()
  const [text, setText] = useState("")

  const createTree = () => {

    router.push(`/generate?handle=${text}`)

  }

  return (

    <main>
      <section className="bg-[#254f1a] min-h-screen relative overflow-hidden pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

            {/* Left Content */}
            <div className="space-y-8 lg:pr-12">
              {/* Main Heading */}
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-[#d2e823] leading-tight">
                Everything you are. In one, simple link in bio.
              </h1>

              {/* Description */}
              <p className="text-white text-lg lg:text-xl leading-relaxed max-w-lg">
                Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
              </p>

              {/* Input and Button */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <div className="relative flex-1">
                  <input value={text} onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder="Enter your Handle"
                    className="w-full px-6 py-4 rounded-xl border-none outline-none text-gray-700 text-lg font-medium bg-white focus:ring-4 focus:ring-white/30 transition-all duration-300"
                  />
                </div>
                
                  <button onClick={() => createTree()}
                    className="bg-gradient-to-r from-[#e09bb9] to-[#d084c4] hover:from-[#d084c4] hover:to-[#c06eb8] text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl whitespace-nowrap">
                    Claim your BitTree
                  </button>
                
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="relative lg:block hidden">
              <div className="relative z-20">
                {/* Main Phone Container */}
                <div className="relative mx-auto w-80 transform rotate-12 hover:rotate-6 transition-transform duration-700">
                  {/* Phone Frame */}
                  <div className="bg-gradient-to-br from-[#87ceeb] via-[#dda0dd] to-[#f0a0c0] rounded-3xl p-1 shadow-2xl">
                    <div className="bg-white rounded-3xl overflow-hidden">
                      {/* Phone Screen Content */}
                      <div className="relative h-[600px] bg-gradient-to-br from-[#87ceeb] via-[#dda0dd] to-[#f0a0c0] p-6">

                        {/* Profile Section */}
                        <div className="text-center mb-6">
                          <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <div className="w-full h-full bg-gradient-to-br from-[#ff9a9e] to-[#fecfef] flex items-center justify-center">
                              <div className="w-16 h-16 bg-white/30 rounded-full"></div>
                            </div>
                          </div>
                          <h3 className="text-white font-bold text-lg">Ariel J</h3>
                          <p className="text-white/80 text-sm">Young artist & cat mom</p>
                        </div>

                        {/* Links */}
                        <div className="space-y-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                            <p className="text-gray-800 font-medium text-center">Latest Single</p>
                          </div>

                          <div className="bg-gradient-to-r from-[#ff6b9d] to-[#ffa0ac] rounded-2xl p-4 shadow-lg transform -rotate-2">
                            <p className="text-white font-medium text-center">Bubble Gum Music Video</p>
                          </div>

                          <div className="bg-[#1db954] rounded-2xl p-4 shadow-lg">
                            <p className="text-white font-medium text-center">Listen on Spotify</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                {/* Vinyl Record */}
                <div className="absolute -top-8 -right-8 w-24 h-24 z-30">
                  <div className="w-full h-full bg-black rounded-full shadow-2xl border-4 border-white transform rotate-45 hover:rotate-90 transition-transform duration-1000">
                    <div className="absolute inset-4 bg-black rounded-full">
                      <div className="absolute inset-4 bg-gray-800 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-black rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 text-white text-xs font-bold">98.5</div>
                  </div>
                </div>

                {/* Social Media Bubbles */}
                <div className="absolute -bottom-6 -right-6 flex space-x-2 z-30">
                  <div className="w-12 h-12 bg-pink-400 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>

                  <div className="w-12 h-12 bg-red-500 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>

                  <div className="w-12 h-12 bg-purple-500 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                    </svg>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute bottom-12 -left-12 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center z-30 transform hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-l-[12px] border-l-gray-800 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-32 h-32 bg-[#d2e823]/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-pink-400/20 rounded-full blur-lg"></div>
              </div>
            </div>

            {/* Mobile Version of Phone Mockup */}
            <div className="block lg:hidden mt-12">
              <div className="relative mx-auto w-64">
                <div className="bg-gradient-to-br from-[#87ceeb] via-[#dda0dd] to-[#f0a0c0] rounded-3xl p-1 shadow-2xl">
                  <div className="bg-white rounded-3xl overflow-hidden">
                    <div className="relative h-[480px] bg-gradient-to-br from-[#87ceeb] via-[#dda0dd] to-[#f0a0c0] p-4">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <div className="w-full h-full bg-gradient-to-br from-[#ff9a9e] to-[#fecfef] flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/30 rounded-full"></div>
                          </div>
                        </div>
                        <h3 className="text-white font-bold">Ariel J</h3>
                        <p className="text-white/80 text-xs">Young artist & cat mom</p>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                          <p className="text-gray-800 font-medium text-center text-sm">Latest Single</p>
                        </div>
                        <div className="bg-gradient-to-r from-[#ff6b9d] to-[#ffa0ac] rounded-xl p-3 shadow-lg">
                          <p className="text-white font-medium text-center text-sm">Bubble Gum Music Video</p>
                        </div>
                        <div className="bg-[#1db954] rounded-xl p-3 shadow-lg">
                          <p className="text-white font-medium text-center text-sm">Listen on Spotify</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}