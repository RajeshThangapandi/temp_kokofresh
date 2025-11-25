"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Slide {
  title: string
  subtitle: string
  description: string
  image: string
  accentColor: string
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
      accentColor: "from-amber-400 to-yellow-500",
    },
    {
      title: "Farm Traceable",
      subtitle: "Ingredients",
      description:
        "Know exactly where your food comes from — complete transparency from farm to kitchen.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/indian-spice-farm-harvest-ugGkK6QZQ1jAUGD5mfz543JeNpEiv2.jpg",
      accentColor: "from-green-400 to-emerald-500",
    },
    {
      title: "Authentic &",
      subtitle: "Handcrafted",
      description:
        "Small batch roasted. Crafted by skilled women artisans. Pure, traditional, and full of flavor.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/women-artisans-spices-b4lYC8QAIwE5cyUtXTrOXRqMUl7qNq.jpg",
      accentColor: "from-orange-400 to-amber-500",
    },
    {
      title: "100% Pure",
      subtitle: "Natural Ingredients",
      description:
        "No preservatives. No additives. No palm oil. Only clean, real, authentic spices.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/pure-natural-spices-array-S2R8scxEfC2ENnYCuI6LmJaApZjsek.jpg",
      accentColor: "from-rose-400 to-pink-500",
    },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative mt-16 md:mt-20 h-[90vh] w-full overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          {/* BACKGROUND IMAGE */}
          <motion.img
            key={slides[current].image}
            src={slides[current].image}
            alt="slide"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: "linear" }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* CENTER CONTENT */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.9 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        {/* GRADIENT LINE */}
        <div
          className={`h-1 w-20 mb-5 rounded-full bg-gradient-to-r ${slides[current].accentColor}`}
        />

        {/* TITLE */}
        <h1 className="text-white font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-xl">
          {slides[current].title}
          <br />
          <span
            className={`bg-gradient-to-r ${slides[current].accentColor} bg-clip-text text-transparent`}
          >
            {slides[current].subtitle}
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-300 mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed">
          {slides[current].description}
        </p>

        {/* CTA */}
        <button className="mt-8 px-10 py-3.5 text-lg font-semibold bg-white text-black rounded-lg hover:bg-gray-200 transition-all shadow-xl">
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
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
