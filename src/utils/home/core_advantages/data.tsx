import {
  Shield as ShieldIcon,
  TrendingUp as TrendingUpIcon,
  PrecisionManufacturing as PrecisionIcon,
} from '@mui/icons-material';

export const ADVANTAGES_DATA = [
  {
    title: 'Reliability & Quality',
    description:
      'Our robotics systems achieve 99.8% operational reliability through redundant systems, predictive maintenance algorithms, and industrial-grade components designed for continuous operation in demanding environments.',
    icon: <ShieldIcon fontSize="large" />,
  },
  {
    title: 'Cost Savings',
    description:
      'Customers typically experience a 35% reduction in operational costs through improved efficiency, reduced waste, lower energy consumption, and optimized resource utilization across their manufacturing and logistics processes.',
    icon: <TrendingUpIcon fontSize="large" />,
  },
  {
    title: 'Precision & Consistency',
    description:
      'Our systems deliver sub-millimeter precision with consistency that human operations cannot match, reducing defects and enabling complex manufacturing processes that were previously impossible.',
    icon: <PrecisionIcon fontSize="large" />,
  },
];
