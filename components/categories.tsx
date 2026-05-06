"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const categories = [
  {
    title: "Wedding Mandap",
    image: "/images/wedding-mandap.jpg",
    description: "Traditional & modern mandap designs",
  },
  {
    title: "Reception Stage",
    image: "/images/reception-stage.jpg",
    description: "Elegant reception stage setups",
  },
  {
    title: "Haldi Decoration",
    image: "/images/haldi-decoration.jpg",
    description: "Vibrant haldi ceremony decor",
  },
  {
    title: "Mehndi Setup",
    image: "/images/mehndi-setup.jpg",
    description: "Colorful mehndi arrangements",
  },
  {
    title: "Engagement Setup",
    image: "/images/engagement-setup.jpg",
    description: "Romantic engagement decorations",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function Categories() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Decoration{" "}
            <span className="bg-gradient-to-r from-primary via-gold to-secondary bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From traditional mandaps to modern reception stages, we craft every celebration with elegance and perfection.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 || index === 1 ? "lg:col-span-1" : ""
              } ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="aspect-[4/5] sm:aspect-[3/4] relative">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Gold Glow on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 shadow-[inset_0_0_100px_rgba(212,175,55,0.3)] pointer-events-none"
                />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors">
                      {category.description}
                    </p>
                  </motion.div>
                </div>

                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl border border-gold/0 group-hover:border-gold/40 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
