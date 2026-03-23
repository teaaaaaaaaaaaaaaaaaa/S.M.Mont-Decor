import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatCardProps {
  number: string;
  label: string;
  index: number;
}

export default function StatCard({ number, label, index }: StatCardProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-1">
        {number}
      </div>
      <div className="text-white/70 text-sm font-medium uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
