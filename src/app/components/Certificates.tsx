"use client";

import React, { useState } from "react";
import { certificates } from "../data/data";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { FiDownload } from "react-icons/fi";

const CertificatesCarousel = React.forwardRef<HTMLElement>((_, ref) => {
  const [overlayImage, setOverlayImage] = useState<string | null>(null);
  const loopItems = [...certificates, ...certificates];

  return (
    <>
      <section
        ref={ref as any}
        className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-neutral-100 py-20"
      >
        <div className="text-center mb-12">
          <h4 className="text-sm text-neutral-400 uppercase tracking-widest">
            My Credentials
          </h4>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-2">
            Certificates
          </h2>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex items-stretch space-x-8"
            style={{ width: `${loopItems.length * 24}rem` }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: loopItems.length * 1.5,
                ease: "linear",
              },
            }}
          >
            {loopItems.map((cert, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 w-80 md:w-96 h-[27rem] perspective-1000"
                onHoverStart={() =>
                  cert.thumbnail && setOverlayImage(cert.thumbnail)
                }
                onHoverEnd={() => setOverlayImage(null)}
                whileHover={{ y: -10, scale: 1.05, rotateX: 3, rotateY: -3 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
              >
                <div className="bg-gradient-to-tr from-purple-600 via-pink-500 to-red-500 rounded-3xl p-1 shadow-2xl h-full">
                  <div className="bg-neutral-950 rounded-2xl overflow-hidden flex flex-col h-full">
                    {/* Thumbnail */}
                    {cert.thumbnail && (
                      <div className="relative w-full h-60 flex-shrink-0">
                        <Image
                          src={cert.thumbnail}
                          alt={cert.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    {/* Body */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Title container with fixed height and overflow */}
                        <h3 className="text-2xl font-semibold mb-1 max-h-[4.5rem] overflow-hidden">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-neutral-400">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>

                      {/* Download button */}
                      <motion.a
                        href={cert.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow"
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <FiDownload size={18} /> Download
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
    </>
  );
});
CertificatesCarousel.displayName = "CertificatesCarousel";
export default CertificatesCarousel;
