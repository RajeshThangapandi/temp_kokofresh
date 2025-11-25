"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Slide {
  title: string
  subtitle: string
  description: string
  image: string
}

export function HeroSectionUpdates() {
  const slides: Slide[] = [
    {
      title: "Freshly Made",
      subtitle: "To Your Order",
      description:
        "Every masala is crafted fresh when you order and delivered to your door. Experience the real meaning of made-to-order freshness.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/fresh-masala-grinding-67YlV3a7WWaD1LwXvfDG7hBuGEot3E.jpg",
    },
    {
      title: "Farm Traceable",
      subtitle: "Ingredients",
      description:
        "Know exactly where your food comes from — complete transparency from farm to kitchen.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/indian-spice-farm-harvest-ugGkK6QZQ1jAUGD5mfz543JeNpEiv2.jpg",
    },
    {
      title: "Authentic &",
      subtitle: "Handcrafted",
      description:
        "Small batch roasted. Crafted by skilled women artisans. Pure, traditional, and full of flavor.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/women-artisans-spices-b4lYC8QAIwE5cyUtXTrOXRqMUl7qNq.jpg",
    },
    {
      title: "100% Pure",
      subtitle: "Natural Ingredients",
      description:
        "No preservatives. No additives. No palm oil. Only clean, real, authentic spices.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/pure-natural-spices-array-S2R8scxEfC2ENnYCuI6LmJaApZjsek.jpg",
    },
  ]

  const [current, setCurrent] = useState(0)

  // Auto slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  // Swipe / touch navigation
  const handleSwipe = (offsetX: number) => {
    if (offsetX > 80) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    } else if (offsetX < -80) {
      setCurrent((prev) => (prev + 1) % slides.length)
    }
  }

  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-black mt-0 md:mt-0">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => handleSwipe(info.offset.x)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <motion.img
            key={slides[current].image}
            src={slides[current].image}
            alt="slide"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: "linear" }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />
        </motion.div>
      </AnimatePresence>

      {/* CENTER CONTENT */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.9 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        {/* GOLD BAR */}
        <div className="h-1 w-24 mb-5 rounded-full bg-gradient-to-r from-[#FED649] to-white" />

<h1
  className="
    font-serif font-bold 
    text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
    leading-tight 
    text-[#FED649]
    drop-shadow-[0_0_8px_rgba(255,220,120,0.9)]
    drop-shadow-[0_0_16px_rgba(255,190,60,0.6)]
    drop-shadow-[0_0_32px_rgba(255,160,20,0.4)]
  "
>
  <span>{slides[current].title}</span>
  <br />
  <span>{slides[current].subtitle}</span>
</h1>






        {/* DESCRIPTION */}
        <p className="text-white/80 mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed">
          {slides[current].description}
        </p>

        {/* CTA BUTTON */}
        <button
          className="
            mt-10
            bg-gradient-to-r from-[#DD9627] via-[#FED649] to-[#B47B2B]
            hover:brightness-95
            text-black
            font-extrabold
            text-xl sm:text-2xl
            w-[260px] sm:w-[320px]
            py-3 sm:py-4
            rounded-2xl
            shadow-[0_0_20px_rgba(254,214,73,0.6)]
            hover:shadow-[0_0_30px_rgba(254,214,73,0.9)]
            transition-all
            duration-300
            hover:scale-105
          "
        >
          Shop Now
        </button>
      </motion.div>

      {/* DOTS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              current === i
                ? "w-8 bg-[#FED649]"
                : "w-2 bg-white/50 hover:bg-[#FED649]"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
