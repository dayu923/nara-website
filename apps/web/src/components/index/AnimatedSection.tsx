import { useRef } from "react";
import { styled } from "styled-components";
import { motion, useInView } from "framer-motion";

export default function AnimatedSection({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <AnimatedBox
      id={id}
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </AnimatedBox>
  );
}

const AnimatedBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  max-width: 1224px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 160px;
  line-height: 1.5;
  font-family: "Sans Tab";
  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 116px;
  }
`;
