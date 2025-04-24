// import { motion } from "motion/react";
// import { fadeInUpLeft } from "../data/variants";
// import { education } from "../data/data";

// const Education = () => {
//   return (
//     <motion.div
//       variants={fadeInUpLeft}
//       initial="hidden"
//       whileInView="visible"
//       className="pb-4 border-b border-neutral-600"
//     >
//       <div className="flex flex-col">
//         <h3 className="text-lg text-neutral-100 font-semibold mb-2">
//           Education
//         </h3>
//         <p className="text-neutral-100 text-sm flex justify-between">
//           <span className="font-semibold">{education.college}</span>{" "}
//           <span>{education.duration}</span>
//         </p>
//         <p className="text-neutral-100 text-sm flex justify-between">
//           <span>{education.course}</span> <span>CGPA: {education.cgpa}</span>
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// export default Education;



"use client";

import { motion } from "motion/react";
import { fadeInUpLeft } from "../data/variants";
import { education, EducationEntry } from "../data/data";

const Education = () => {
  return (
    <motion.div
      variants={fadeInUpLeft}
      initial="hidden"
      whileInView="visible"
      className="pb-4 border-b border-neutral-600"
    >
      <h3 className="text-lg text-neutral-100 font-semibold mb-4">
        Education
      </h3>

      <div className="space-y-6">
        {education.map((entry: EducationEntry, idx: number) => (
          <div key={idx} className="text-neutral-100 text-sm">
            <div className="flex justify-between font-medium">
              <span>{entry.institution}</span>
              <span>{entry.date}</span>
            </div>
            <div className="flex justify-between">
              <span>{entry.qualification}</span>
              <span>
                {entry.scoreLabel}: {entry.score}
              </span>
            </div>
            {/* <div className="text-neutral-400 mt-1">{entry.location}</div> */}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
