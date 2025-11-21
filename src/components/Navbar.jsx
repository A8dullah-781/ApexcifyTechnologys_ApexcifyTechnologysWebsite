import React, { useState, useRef, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const desktopLinksRef = useRef([]);
  const lineRef = useRef(null);
  const [showNav, setShowNav] = useState(true);
const lastScrollY = useRef(0);

useEffect(() => {
  const handleScroll = () => {
    const currentY = window.scrollY;

    if (currentY > lastScrollY.current) {
      // scrolling DOWN
      setShowNav(false);
    } else {
      // scrolling UP
      setShowNav(true);
    }

    lastScrollY.current = currentY;
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const links = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact Us", id: "contact" }
  ];

  useEffect(() => {
    if (desktopLinksRef.current.length && lineRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "center" },
        { scaleX: 1, duration: 1, ease: "bounce.out" }
      );

      tl.fromTo(
        desktopLinksRef.current,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "bounce.out"
        },
        "-=0.3"
      );
    }
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.to(mobileMenuRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut"
        });
      }
    }
  }, [isOpen]);

  return (
   <nav
  className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
    ${showNav ? "translate-y-0" : "-translate-y-full"}
    text-white px-5 md:px-10 py-3 flex justify-between items-center`}
>

      {/* Animated Line */}
      <div
        ref={lineRef}
        className="pointer-events-none absolute left-0 top-[8vh] lg:top-[14vh] w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent origin-center scale-x-0"
      ></div>

      {/* Logo */}
      <div className="text-[5vw] lg:text-[2vw] font-bold">Apexcify</div>

      {/* Desktop Links */}
      <div className="hidden md:flex py-5 items-center gap-8 text-[1.5vw] font-medium">
        {links.map((link, idx) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            ref={(el) => (desktopLinksRef.current[idx] = el)}
            className="relative group cursor-pointer"
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Button */}
      <div className="hidden md:block">
        <button className="px-6 py-2 text-[1vw] border border-white text-white bg-transparent rounded-2xl transition duration-200 hover:shadow-[0_0_6px_#00eaff] hover:border-[#00eaff]">
          Let’s Talk
        </button>
      </div>

      {/* Hamburger Icon */}
      <div
        className="md:hidden text-3xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{ zIndex: 9999 }}
      >
        {isOpen ? <MdClose /> : <MdMenu />}
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-[70%] bg-gray-900 flex flex-col items-center gap-4 px-6 py-20 md:hidden"
        style={{ x: "100%", opacity: 0 }}
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="cursor-pointer border-b-1 w-[200px] text-center text-lg py-2"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <button className="px-6 py-2 mt-2 border border-white text-white bg-transparent rounded-2xl transition duration-200 hover:shadow-[0_0_6px_#00eaff] hover:border-[#00eaff]">
          Let’s Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
