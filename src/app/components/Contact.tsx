"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import {
  fadeInRight,
  fadeInUp,
  fadeInUpLarge,
  rotateYVariant,
} from "../data/variants";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwfkjxPtgpPk_t2crkwR-5GRkLLpUJlntQ6AAulqsddRl6qA_R0F1-hom5RTxSKg84s/exec";

const Contact = React.forwardRef<HTMLElement, unknown>((_, ref) => {
  const [status, setStatus] = useState<string | null>(null);
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [nameError, setNameError] = useState("");
  const [loading, setLoading] = useState(false);

  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const form = e.target as HTMLFormElement;
    const name = form.NAME.value.trim();
    const email = form.EMAIL.value.trim();
    const subject = form.SUBJECT.value.trim();
    const message = form.MESSAGE.value.trim();

    // Name validation
    if (name.length < 2) {
      setNameError("Please enter your name.");
      setTimeout(() => setNameError(""), 4000);
      return;
    }

    // Email validation
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      setTimeout(() => setEmailError(""), 4000);
      return;
    }

    // Message validation
    if (message.length < 10) {
      setMessageError("Please enter at least 10 characters.");
      setTimeout(() => setMessageError(""), 4000);
      return;
    }

    // Build FormData for Google Script
    const data = new FormData(form);

    try {
      setLoading(true);
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("Thank you! Your message has been sent. 😊");
        form.reset();
      } else {
        setStatus("Error sending message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 5000);
    }
  }

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      ref={ref}
      className="bg-neutral-950 flex flex-col justify-center items-center text-neutral-100 py-16 px-6"
    >
      <motion.h4
        variants={fadeInRight}
        initial="initial"
        whileInView="whileInView"
        className="text-[15px] text-center text-neutral-300 font-medium"
      >
        GET IN TOUCH
      </motion.h4>
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        className="text-3xl animated-text-gradient md:text-5xl font-semibold pt-2 mb-6 md:mb-10 text-neutral-100 text-center"
      >
        Contact Me
      </motion.h2>

      <div className="w-full sm:max-w-2xl md:max-w-3xl border border-neutral-600 p-4 md:p-8 rounded-2xl shadow-md text-neutral-100">
        <div className="flex max-md:flex-col sm:w-xl md:w-2xl gap-4 mb-6">
          <motion.a
            href="mailto:89shubh32@gmail.com"
            className="flex flex-1 items-center text-sm justify-center gap-1 py-2 border border-neutral-600 rounded-lg font-medium"
            variants={rotateYVariant}
            initial="initial"
            whileInView="whileInView"
            whileHover={{ scale: 1.01 }}
          >
            <FiMail className="text-sm" /> karthikpandey580@gmail.com
          </motion.a>

          <motion.a
            href="https://api.whatsapp.com/send/?phone=%2B919118963299&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            variants={rotateYVariant}
            initial="initial"
            whileInView="whileInView"
            whileHover={{ scale: 1.01 }}
            className="flex flex-1 items-center text-sm justify-center gap-1 py-2 border border-neutral-600 rounded-lg font-medium"
          >
            <FaWhatsapp className="text-sm" /> WhatsApp
          </motion.a>
        </div>

        <motion.p
          variants={fadeInUpLarge}
          initial="hidden"
          whileInView="visible"
          className="p-4 text-neutral-300 text-xs font-medium text-center"
        >
          Or send me a message directly
        </motion.p>

        <motion.form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <motion.div
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
            className="space-y-1"
          >
            <motion.input
              type="text"
              name="NAME"
              placeholder="Name"
              className="w-full px-4 py-3 border placeholder:text-sm bg-neutral-900 border-neutral-600 rounded-lg focus:outline-none"
              required
            />
            {nameError && <p className="text-red-500 text-xs">{nameError}</p>}
          </motion.div>

          {/* Email */}
          <motion.div
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
            className="space-y-1"
          >
            <motion.input
              type="email"
              name="EMAIL"
              placeholder="Email"
              className="w-full px-4 py-3 border placeholder:text-sm bg-neutral-900 border-neutral-600 rounded-lg focus:outline-none"
              required
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          </motion.div>

          {/* Subject */}
          <motion.div
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
          >
            <motion.input
              type="text"
              name="SUBJECT"
              placeholder="Subject (optional)"
              className="w-full px-4 py-3 border placeholder:text-sm bg-neutral-900 border-neutral-600 rounded-lg focus:outline-none"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
            className="space-y-1"
          >
            <motion.textarea
              name="MESSAGE"
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-3 border placeholder:text-sm bg-neutral-900 border-neutral-600 rounded-lg focus:outline-none resize-none"
              required
            />
            {messageError && (
              <p className="text-red-500 text-xs">{messageError}</p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.01 }}
            className="w-full bg-neutral-950 px-4 py-3 rounded-lg text-sm font-medium border border-neutral-600 flex justify-center"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        {status && (
          <p className="mt-4 text-center text-sm font-medium text-green-500">
            {status}
          </p>
        )}
      </div>
    </motion.section>
  );
});

Contact.displayName = "Contact";
export default Contact;
