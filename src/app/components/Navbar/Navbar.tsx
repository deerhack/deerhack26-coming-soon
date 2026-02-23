"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"

import Link from "next/link"
import DeerhackLogo from "@/app/assets/icons/DeerhackLogo"
import { cabinetBold, cabinetMedium, satoshiBlack } from "@/app/utils/fonts"
import Image from "next/image"
import menuSVG from "@/app/assets/icons/menu"
import crossSVG from "@/app/assets/icons/cross.svg"
import Counter_wrapper from "../counter/Counter"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isResourceOpen, setIsResourceOpen] = useState(false)
  const resourceRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const handleResourceClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsResourceOpen(!isResourceOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    const currentRef = resourceRef.current as HTMLElement | null
    if (currentRef && !currentRef.contains(event.target as Node)) {
      setIsResourceOpen(false)
    }
  }

  useEffect(() => {
    if (isResourceOpen) {
      window.addEventListener("click", handleClickOutside)
    } else {
      window.removeEventListener("click", handleClickOutside)
    }

    return () => {
      window.removeEventListener("click", handleClickOutside)
      // Reset overflow when component unmounts
      document.body.style.overflow = "auto"
    }
  }, [isResourceOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false)
        document.body.style.overflow = "auto"
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isMenuOpen])

  return (
    <div className="w-full flex justify-center ">
      <header
        className={`fixed ${isMenuOpen ? "inset-0 bg-[#110C24] z-50 pt-7 px-[0.6rem]" : "bg-[#110C24A6] w-[95%] mt-7 rounded-xl"} isolate z-50 shadow-lg backdrop-blur-sm`}
      >
        <nav className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:h-[6rem] py-4 px-5 lg:px-20">
          {/* Top bar with logo and hamburger */}
          <div className="flex justify-between items-center w-full lg:w-auto lg:gap-[7.5rem]">
            <a href="/" className="flex-shrink-0 flex items-center "> 
              <DeerhackLogo width="50" height="50" />
            </a>
            {/* <button onClick={toggleMenu} className="lg:hidden text-secondary flex items-center justify-center ">
              {isMenuOpen ? (
                <Image
                  src={crossSVG || "/placeholder.svg"}
                  alt="Close Menu"
                  width={40}
                  height={40}
                  className="my-auto"
                />
              ) : (
                <Image src={menuSVG || "/placeholder.svg"} alt="Open Menu" width={40} height={40} className="my-auto" />
              )}
            </button> */}

            <div className="hidden lg:block ">
              {/* <Counter_wrapper /> */}
            </div>
          </div>

          {/* Mobile menu content */}
          {isMenuOpen && (
            <div className="flex flex-col h-[calc(100vh-80px)] justify-start px-4 py-5 lg:hidden ">
              {/* Counter */}
              <div className="flex justify-start mb-10 mt-16">
                {/* <Counter_wrapper /> */}
              </div>

              {/* Navigation Links */}
              <div className={`flex flex-col items-start space-y-6 ${cabinetBold.className} text-magnolia mb-20`}>
                <Link href="/schedule" className="hover:text-secondary text-2xl">
                  {/* Schedule */}
                </Link>

                {/* 
                 */}

                {/* <Link href="/organizers" className="hover:text-secondary text-2xl">
                  Organizers
                </Link> */}

                {/* <Link href="/legacy" className="hover:text-secondary text-2xl">
                  Legacy
                </Link> */}

                <Link href="/winners" className="hover:text-secondary text-2xl">
                  {/* Winners */}
                </Link>
              </div>

              {/* Register Button */}
              <div className="flex justify-start mt-6 ">
                {/* <Link href="https://deerhack-25.devfolio.co/" target="_blank">
                  <button
                    className={`${satoshiBlack.className} font-[20px] bg-secondary text-dark-purple text-[16px] p-3 rounded bg-opacity-90 hover:bg-opacity-100 transition duration-300 ease-in-out w-[13rem]`}
                  >
                    Registration Closed 
                  </button>
                </Link> */}
                <Counter_wrapper/>
              </div>
            </div>
          )}

          {/* Desktop menu content */}
          <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-[3rem] ">
            <div className="flex lg:flex-row lg:items-center h-full lg:gap-8 text-magnolia ">
              <Link href="/schedule" className={`hover:text-secondary text-base ${cabinetBold.className} `}>
                {/* Schedule */}
              </Link>

              {/* <div className="relative" ref={resourceRef}>
                <span
                  className={`hover:text-secondary cursor-pointer  block text-base ${cabinetBold.className}`}
                  onClick={handleResourceClick}
                >
                  Resources
                </span> */}

                {/* {isResourceOpen && (
                  <div className="fixed bg-violet/50 backdrop-blur-md shadow-lg transition-all ease-in-out duration-500 z-20 text-white rounded-br-xl rounded-bl-xl border-sm top-20 mt-[1rem] ">
                    <ul className={`w-[18.6rem] mt-0.5 text-left list-none ${cabinetMedium.className}`}>
                      <li className="p-5 mb-2">
                        <a href="/judging-criteria" className="hover:text-secondary" target="_blank" rel="noreferrer">
                          Judging Criteria
                        </a>
                      </li>
                      <li className="pt-4 px-6 mb-4">
                        <a
                          href="/selection-criteria"
                          className="hover:text-secondary"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Selection Criteria
                        </a>
                      </li>
                      <li className="pt-4 px-6 mb-4">
                        <a href="/code-of-conduct" className="hover:text-secondary" target="_blank" rel="noreferrer">
                          Code Of Conduct
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div> */}

              {/* <Link href="/organizers" className={`hover:text-secondary text-base ${cabinetBold.className}`}>
                Organizers
              </Link> */}

              {/* <Link href="/legacy" className={`hover:text-secondary text-base ${cabinetBold.className}`}>
                Legacy
              </Link> */}

              <Link href="/winners" className={`hover:text-secondary text-base ${cabinetBold.className}`}>
                {/* Winners */}
              </Link>
            </div>

            <div>
              {/* <Link href="https://deerhack-25.devfolio.co/" target="_blank">
                <button
                  className={`${satoshiBlack.className} font-[20px] bg-secondary text-dark-purple text-[18px]   p-3 rounded bg-opacity-90 hover:bg-opacity-100 transition duration-300 ease-in-out w-[13rem] `}
                >
                  Registration Closed
                </button>
              </Link> */}
               
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
