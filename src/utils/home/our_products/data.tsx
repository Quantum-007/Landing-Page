export const PRODUCT_IMAGES = [
  '/assets/home/our_products/Slide-1.svg',
  '/assets/home/our_products/Slide-2.svg',
  '/assets/home/our_products/Slide-3.svg',
  '/assets/home/our_products/Slide-4.svg',
  '/assets/home/our_products/Slide-5.svg',
];

export const INDUSTRY_DATA = [
  {
    id: 'quantum-flex',
    title: 'QuantumFlex™',
    robotType: '6-Axis Articulated Robot',
    description:
      'Versatile 6-axis articulated robot for complex manufacturing, welding, and material handling tasks.',
    metrics: [
      { value: '210kg', label: 'Payload' },
      { value: '2.8m', label: 'Reach/Range' },
      { value: '±0.08mm', label: 'Precision' },
      { value: '180°/s', label: 'Speed' },
    ],
    painPoints: ['Flexible Mounting', 'Heavy Payload', 'Path Planning'],
    bestFor: ['Heavy manufacturing', 'Welding', 'Assembly'],
  },
  {
    id: 'quantum-co',
    title: 'QuantumCo™',
    robotType: 'Collaborative Robot',
    description:
      'Advanced collaborative robot designed to work alongside human operators in mixed manufacturing environments.',
    metrics: [
      { value: '35kg', label: 'Payload' },
      { value: '1.7m', label: 'Reach/Range' },
      { value: '±0.03mm', label: 'Precision' },
      { value: '120°/s', label: 'Speed' },
    ],
    painPoints: ['Force Sensing', 'Multi-Tool Support', 'Adaptive Learning'],
    bestFor: [
      'Human - Robot Collaboration',
      'Medical Devices',
      'Food Production',
    ],
  },
  {
    id: 'quantum-delta',
    title: 'QuantumDelta™',
    robotType: 'Delta Robot',
    description:
      'High-speed picking and placing robot optimized for food, pharmaceutical, and small component assembly.',
    metrics: [
      { value: '8kg', label: 'Payload' },
      { value: '1.2m', label: 'Reach/Range' },
      { value: '±0.02mm', label: 'Precision' },
      { value: '200 picks/min', label: 'Speed' },
    ],
    painPoints: ['High-Speed', 'Precision Control', 'Washdown Ready'],
    bestFor: ['Picking', 'Packaging', 'Sorting applications'],
  },
  {
    id: 'quantum-swift',
    title: 'QuantumSwift™',
    robotType: 'SCARA Robot',
    description:
      'Selective Compliance Articulated Robot Arm designed for precise assembly and handling operations.',
    metrics: [
      { value: '20kg', label: 'Payload' },
      { value: '850mm', label: 'Reach/Range' },
      { value: '±0.01mm', label: 'Precision' },
      { value: '7m/s', label: 'Speed' },
    ],
    painPoints: ['Compact Design', 'High Throughput', 'IoT Enabled'],
    bestFor: ['Electronics Assembly', 'Testing', 'Small Component Handling'],
  },
  {
    id: 'quantum-mover',
    title: 'QuantumMover™',
    robotType: 'Autonomous Mobile Robot',
    description:
      'Self-navigating mobile robot for material transport across factory floors, warehouses, and distribution centers.',
    metrics: [
      { value: '1500kg', label: 'Payload' },
      { value: '2.0m/s', label: 'Speed' },
      { value: '±10mm', label: 'Precision' },
      { value: 'Site-wide', label: 'Reach/Range' },
    ],
    painPoints: [
      'Dynamic Navigation',
      'Fleet Management',
      'Obstacle Avoidance',
    ],
    bestFor: ['Material transport', 'warehouse logistics'],
  },
  {
    id: 'quantum-aero',
    title: 'QuantumAero™',
    robotType: 'Drone/UAV',
    description:
      'Autonomous aerial system for inventory management, inspection, and light cargo transport.',
    metrics: [
      { value: '5kg', label: 'Payload' },
      { value: '15m/sec', label: 'Speed' },
      { value: '10km', label: 'Reach/Range' },
      { value: '±5cm', label: 'Precision' },
    ],
    painPoints: [
      'Indoor Navigation',
      'Computer Vision',
      'Extended Flight Time',
    ],
    bestFor: ['Inventory scanning', 'inspection', 'Monitorin'],
  },
];
