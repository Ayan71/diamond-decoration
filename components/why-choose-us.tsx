"use client"

import { motion } from "framer-motion"
import { Sparkles, Palette, DollarSign, Users, Award, Clock } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Premium Designs",
    description: "Exquisite decorations crafted with the finest materials and attention to detail.",
  },
  {
    icon: Palette,
    title: "Custom Themes",
    description: "Personalized themes tailored to reflect your unique style and vision.",
  },
  {
    icon: DollarSign,
    title: "Affordable Packages",
    description: "Luxury decorations at competitive prices to fit every budget.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Skilled professionals with years of expertise in wedding decoration.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Every setup meets our high standards of excellence and elegance.",
  },
  {
    icon: Clock,
    title: "Timely Execution",
    description: "Punctual service ensuring your venue is perfectly ready on time.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative">
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
            Why Choose Us
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Diamond{" "}
            <span className="bg-gradient-to-r from-primary via-gold to-secondary bg-clip-text text-transparent">
              Difference
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience the perfect blend of tradition and innovation with our expert decoration services.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-gold/40 transition-all duration-500"
            >
              {/* Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/10 via-transparent to-primary/10 pointer-events-none"
              />

              {/* Icon */}
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
                className="relative w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-gold/20 transition-shadow duration-500"
              >
                <feature.icon className="w-7 h-7 text-gold" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/30 transition-all duration-500 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/30 transition-all duration-500 rounded-bl-lg" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
