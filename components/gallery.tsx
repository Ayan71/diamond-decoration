"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  { src: "/images/wedding-mandap.jpg", category: "Wedding", title: "Royal Wedding Mandap" },
  { src: "/images/reception-stage.jpg", category: "Reception", title: "Elegant Reception Stage" },
  { src: "/images/haldi-decoration.jpg", category: "Haldi", title: "Traditional Haldi Setup" },
  { src: "/images/mehndi-setup.jpg", category: "Mehndi", title: "Colorful Mehndi Decor" },
  { src: "/images/engagement-setup.jpg", category: "Engagement", title: "Romantic Engagement" },
  { src: "/images/gallery-1.jpg", category: "Wedding", title: "Crystal Mandap Design" },
  { src: "/images/gallery-2.jpg", category: "Wedding", title: "Traditional Setup" },
  { src: "/images/gallery-3.jpg", category: "Reception", title: "Modern Stage" },
  { src: "/images/gallery-4.jpg", category: "Wedding", title: "Garden Wedding" },
  { src: "/images/gallery-5.jpg", category: "Mehndi", title: "Sangeet Night" },
  { src: "/images/gallery-6.jpg", category: "Wedding", title: "Grand Entrance" },
]

const filters = ["All", "Wedding", "Reception", "Haldi", "Mehndi", "Engagement"]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = activeFilter === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter)

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return
    const currentIndex = filteredImages.findIndex((_, i) => 
      galleryImages.indexOf(filteredImages[i]) === selectedImage
    )
    if (direction === "prev") {
      setSelectedImage(galleryImages.indexOf(filteredImages[currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1]))
    } else {
      setSelectedImage(galleryImages.indexOf(filteredImages[(currentIndex + 1) % filteredImages.length]))
    }
  }

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4"
          >
            Our Work
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Decoration{" "}
            <span className="bg-gradient-to-r from-primary via-gold to-secondary bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our portfolio of stunning wedding decorations that have made countless celebrations unforgettable.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-amber-400 to-yellow-600 text-black shadow-lg shadow-amber-500/30"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                onClick={() => setSelectedImage(galleryImages.indexOf(image))}
                className={`group relative cursor-pointer overflow-hidden rounded-xl ${
                  index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className={`relative ${index % 5 === 0 ? "aspect-square" : "aspect-[4/5]"}`}>
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-foreground font-medium text-sm">{image.title}</p>
                    <p className="text-gold text-xs">{image.category}</p>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/50">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-lg p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-muted/50 text-foreground hover:bg-muted transition-colors z-10"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("prev")
              }}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-muted/50 text-foreground hover:bg-gold/20 hover:text-gold transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("next")
              }}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-muted/50 text-foreground hover:bg-gold/20 hover:text-gold transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                fill
                className="object-contain"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                <p className="text-foreground font-semibold text-xl">{galleryImages[selectedImage].title}</p>
                <p className="text-gold">{galleryImages[selectedImage].category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
