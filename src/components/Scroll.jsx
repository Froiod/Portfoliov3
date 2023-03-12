// import { motion, useScroll, useTransform } from "framer-motion";

// export default function Scroll() {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 100], ["100px", 0]);

//   return (
//     <motion.div
//       className="w-28 h-28 rounded-full bg-blue-400 opacity-0 fixed top-1/2 left-1/2 transform "
//       style={{
//         y: y,
//       }}
//       animate={{
//         opacity: 1,
//         transition: {
//           duration: 1,
//           ease: "easeInOut",
//         },
//       }}
//       initial={{ opacity: 0, y: "300px" }}
//     />
//   );
// }
