import { styled } from "styled-components";
import { motion } from "framer-motion";

export default function GeneralTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Title
      className={className}
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </Title>
  );
}

const Title = styled(motion.div)`
  margin: 0;
  font-weight: bold;
  font-size: 48px;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
