"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export function Hero() {
  const headingText = "Make Your Wedding Royal"
  const headingWords = headingText.split(" ")

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxury Wedding Mandap"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/logo.jpeg"
            alt="Diamond Mandap Decoration"
            width={120}
            height={120}
            className="mx-auto rounded-full border-4 border-gold/50 shadow-2xl shadow-gold/20"
          />
        </motion.div>

        {/* Animated Heading */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          {headingWords.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-4">
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  custom={wordIndex * 5 + letterIndex}
                  variants={letterVariants}
                  className={
                    word === "Royal"
                      ? "text-gold inline-block"
                      : "text-foreground inline-block"
                  }
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Brand Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4"
        >
          with{" "}
          <span className="bg-gradient-to-r from-primary via-gold to-secondary bg-clip-text text-transparent">
            Diamond Decoration
          </span>
        </motion.p>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Elegant Mandap Designs Crafted for Your Special Day
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#services"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-gold to-gold/80 text-gold-foreground font-semibold rounded-full shadow-lg shadow-gold/25 transition-all"
          >
            Explore Designs
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            whileHover={{ scale: 1.05, borderColor: "rgba(212, 175, 55, 0.8)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 border-2 border-gold/50 text-gold font-semibold rounded-full backdrop-blur-sm transition-all hover:bg-gold/10"
          >
            Contact Now
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-gold rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
