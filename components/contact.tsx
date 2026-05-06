"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, Instagram, MapPin, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formState.name.trim()) newErrors.name = "Name is required"
    if (!formState.phone.trim()) newErrors.phone = "Phone is required"
    else if (!/^[0-9]{10}$/.test(formState.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit phone number"
    }
    if (!formState.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", phone: "", message: "" })
    
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "diamonddecoration925@gmail.com",
      href: "mailto:diamonddecoration925@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9770611113",
      href: "tel:+919770611113",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@diamond_decoration_dmd",
      href: "https://www.instagram.com/diamond_decoration_dmd",
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
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
            Get In Touch
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-primary via-gold to-secondary bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to make your celebration unforgettable? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let&apos;s Create Magic Together
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a grand wedding or an intimate celebration in mind, 
                our team is here to bring your vision to life. Contact us to discuss 
                your requirements and receive a personalized quote.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === "Instagram" ? "_blank" : undefined}
                  rel={info.label === "Instagram" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-gold/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-gold/20 transition-shadow">
                    <info.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-medium group-hover:text-gold transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-gold/10 to-primary/10 border border-gold/20"
            >
              <MapPin className="w-5 h-5 text-gold mt-0.5" />
              <div>
                <p className="text-foreground font-medium">Serving All Over India</p>
                <p className="text-muted-foreground text-sm">
                  We bring premium decoration services to your doorstep
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => {
                    setFormState({ ...formState, name: e.target.value })
                    if (errors.name) setErrors({ ...errors, name: "" })
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-card/50 border ${
                    errors.name ? "border-destructive" : "border-border"
                  } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formState.phone}
                  onChange={(e) => {
                    setFormState({ ...formState, phone: e.target.value })
                    if (errors.phone) setErrors({ ...errors, phone: "" })
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-card/50 border ${
                    errors.phone ? "border-destructive" : "border-border"
                  } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => {
                    setFormState({ ...formState, message: e.target.value })
                    if (errors.message) setErrors({ ...errors, message: "" })
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-card/50 border ${
                    errors.message ? "border-destructive" : "border-border"
                  } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all resize-none`}
                  placeholder="Tell us about your event and requirements..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-gold via-gold to-gold/80 text-gold-foreground font-semibold flex items-center justify-center gap-2 shadow-lg shadow-gold/25 hover:shadow-xl hover:shadow-gold/30 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-5 h-5 border-2 border-gold-foreground/30 border-t-gold-foreground rounded-full animate-spin"
                    />
                  ) : isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
