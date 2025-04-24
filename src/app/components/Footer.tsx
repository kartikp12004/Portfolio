// import { motion } from "motion/react";
// import { fadeInRight } from "../data/variants";

// const Footer = () => {
//   return (
//     <motion.footer
//       variants={fadeInRight}
//       initial="initial"
//       whileInView="whileInView"
//       viewport={{ once: true }}
//       className="bg-neutral-950 border-t border-neutral-600 text-neutral-100 text-center py-6 "
//     >
//       <p className="text-sm">
//         &copy; {new Date().getFullYear()} Shubham Agrawal. All rights reserved.{" "}
//         {/*Replace 'John Doe' with your actual name*/}
//       </p>
//     </motion.footer>
//   );
// };

// export default Footer;

import { motion } from "motion/react";
import { fadeInRight } from "../data/variants";
import { FiDownload } from "react-icons/fi";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeInRight}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="bg-neutral-950 border-t border-neutral-600 text-neutral-100 py-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
    >
      {/* Left: Copyright */}
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Kartik Pandey. All rights reserved.
      </p>

      {/* Right: Download Code link */}
      <motion.a
        href="https://pages.razorpay.com/pl_PCO2e5YUhV8lbe/view"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm gap-1 text-neutral-300 hover:text-white transition-colors"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <FiDownload /> Download Code
      </motion.a>
    </motion.footer>
  );
};

export default Footer;
