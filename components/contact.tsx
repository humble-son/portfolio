"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mgovqzkn");
  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Message Sent!
            </h2>
            <p className="text-foreground/70">
              Thank you for reaching out! I'll get back to you soon.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-foreground/70">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8 bg-card/50 border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                  placeholder="Your name"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                  placeholder="your@email.com"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
                  placeholder="Your message..."
                  rows={5}
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <motion.button
                type="submit"
                disabled={state.submitting}
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare size={18} />
                Send Message
              </motion.button>
            </form>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-foreground/60 text-center mb-4">
                Or reach out directly:
              </p>
              <motion.a
                href="mailto:abassibrahimtunde@gmail.com"
                className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Mail size={18} />
                abassibrahimtunde@gmail.com
              </motion.a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
