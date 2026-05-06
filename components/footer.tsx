"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Instagram, Mail, Phone, Heart } from "lucide-react"

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/diamond_decoration_dmd",
    label: "Instagram",
    bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
  },
  {
    icon: Mail,
    href: "mailto:diamonddecoration925@gmail.com",
    label: "Email",
    bg: "bg-[#EA4335]",
  },
  {
    icon: Phone,
    href: "tel:+919770611113",
    label: "Phone",
    bg: "bg-[#25D366]",
  },
]

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/logo.jpeg"
                alt="Diamond Mandap Decoration"
                width={60}
                height={60}
                className="rounded-full border-1 border-gold/50"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Diamond Mandap
                </h3>
                <p className="text-gold text-sm">Decoration</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-4 max-w-md leading-relaxed">
              Creating unforgettable celebrations with premium decoration services.
              From traditional mandaps to modern reception stages, we bring your vision to life.
            </p>

            <p className="text-gold font-medium italic">Since 1887</p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT + SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-foreground font-semibold mb-6">Contact Us</h4>

            <div className="space-y-4">
              <a
                href="tel:+919770611113"
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9770611113
              </a>

              <a
                href="mailto:diamonddecoration925@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span className="break-all">
                  diamonddecoration925@gmail.com
                </span>
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label === "Instagram" ? "_blank" : undefined}
                  rel={social.label === "Instagram" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-11 h-11 rounded-full flex items-center justify-center text-white shadow-md transition-all ${social.bg}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Diamond Mandap Decoration. All rights reserved.
          </p>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for your special day
          </p>
        </div>

      </div>
    </footer>
  )
}