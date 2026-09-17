export interface GalleryImage {
  id: number;
  src: string;
  fallbackText: string;
  category: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  originalPrice: string;
  discountedPrice: string;
  popular?: boolean;
  features: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  initials: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 1,
    src: '1.png',
    fallbackText: 'Commune Fitness Official Logo',
    category: 'Brand Identity',
    title: 'Commune Fitness Official Emblem',
    description: 'The iconic dumbbell and bodybuilder insignia representing strength and discipline.'
  },
  {
    id: 2,
    src: '2.png',
    fallbackText: 'Commune Fitness 3D Wood Wall Signage',
    category: 'Architecture',
    title: 'Commune Fitness Luxury Reception Signage',
    description: 'Precision metallic 3D signage set against acoustic fluted wood panelling at Rex Plaza.'
  },
  {
    id: 3,
    src: '3.png',
    fallbackText: 'Main Arena & Acoustic Ceiling',
    category: 'Main Floor',
    title: 'Main Training Floor & Equipment Arena',
    description: 'State-of-the-art Life Fitness machinery with geometric ambient LED rings and wood acoustic ceilings.'
  },
  {
    id: 4,
    src: '4.png',
    fallbackText: 'Free Weights & Architectural Pillars',
    category: 'Strength Zone',
    title: 'Free Weight & Pillar Detailing',
    description: 'Heavy dumbbells, Olympic power stations, and modern fluted architectural columns.'
  },
  {
    id: 5,
    src: '5.png',
    fallbackText: 'Treadmill Row & Zen Niches',
    category: 'Cardio Deck',
    title: 'Treadmill Row & Zen Decor',
    description: 'High-tech cardio treadmills overlooking illuminated zen niches with plants and cyclist mural art.'
  },
  {
    id: 6,
    src: '6.png',
    fallbackText: 'Hammered Gold Studio & Yoga',
    category: 'Yoga & Aerobics',
    title: 'Gold Hammered Ceiling Yoga & Aerobic Studio',
    description: 'Spacious studio featuring hammered gold acoustic ceiling for yoga, kids fitness, and Zumba.'
  },
  {
    id: 7,
    src: '7.png',
    fallbackText: 'Life Fitness Console 950 Calories',
    category: 'Smart Tech',
    title: 'Life Fitness Real-time Performance Console',
    description: 'Interactive telemetry tracking 950+ kcal burned, 10.66 km distance, and 165 bpm heart-rate.'
  },
  {
    id: 8,
    src: '8.png',
    fallbackText: 'Commune Fitness Family & Community',
    category: 'Community',
    title: 'Commune Fitness Community & Youth Energy',
    description: 'Vibrant, welcoming atmosphere fostering discipline, camaraderie, and wellness for all ages.'
  },
  {
    id: 9,
    src: '9.png',
    fallbackText: 'Rex Plaza 4th Floor Exterior',
    category: 'Facility & Parking',
    title: 'Rex Plaza 4th Floor, Kataka',
    description: 'Premier landmark destination on Ice Factory Road with ample parking and direct elevator access.'
  },
  {
    id: 10,
    src: '10.png',
    fallbackText: 'Sanjit Kumar Sahoo Leadership',
    category: 'Leadership',
    title: 'Sanjit Kumar Sahoo - Visionary MD',
    description: 'Co-Founder & Managing Director driving wellness ecosystems and business innovation.'
  },
  {
    id: 11,
    src: '11.png',
    fallbackText: 'Sanjit Kumar Sahoo Luxury Setting',
    category: 'Leadership',
    title: 'Executive Vision & Scale',
    description: '22+ years enterprise leadership bringing luxury fitness standards to Kataka and Bhubaneswar.'
  },
  {
    id: 12,
    src: '12.png',
    fallbackText: 'Sanjit Kumar Sahoo Portrait',
    category: 'Leadership',
    title: 'Sanjit Kumar Sahoo - Co-Founder & MD',
    description: 'Serial entrepreneur behind Blast Cafe, Barbeque Nation, healthcare ventures, and Commune Fitness.'
  }
];

export const MEMBERSHIP_RATES: PricingPlan[] = [
  {
    id: 'month-1',
    name: '1 Month Admission',
    duration: 'Monthly Pass',
    originalPrice: '₹2,500',
    discountedPrice: '₹2,000',
    features: [
      'Full Access to Heavy Strength Arena',
      'Life Fitness Cardio Deck',
      'Personal Locker & Changing Suite',
      'General Trainer Floor Support'
    ]
  },
  {
    id: 'month-3',
    name: '3 Months Quarterly',
    duration: 'Quarterly Pass',
    originalPrice: '₹6,000',
    discountedPrice: '₹5,100',
    popular: true,
    features: [
      'Unlimited Gym & Cardio Access',
      'Dedicated Steam & Sauna Recovery',
      'Comprehensive Body Composition Analysis',
      'Complimentary Locker & Towel Service',
      'Diet & Calorie Target Consultation'
    ]
  },
  {
    id: 'month-6',
    name: '6 Months Half-Yearly',
    duration: 'Half-Yearly VIP',
    originalPrice: '₹10,000',
    discountedPrice: '₹9,000',
    features: [
      'All 3-Month Features Included',
      'Unlimited Zumba, Yoga & CrossFit Classes',
      'Priority Locker Access',
      '2 Guest Passes for Family or Friends',
      'Bi-weekly Trainer Progress Checkups'
    ]
  },
  {
    id: 'month-12',
    name: '12 Months Yearly Pass',
    duration: 'Annual All-Access VIP',
    originalPrice: '₹18,000',
    discountedPrice: '₹16,200',
    popular: true,
    features: [
      '365 Days Unrestricted All-Floor Access',
      'Full Steam & Sauna Detox Facility',
      'Complimentary Custom Macro Diet Plan',
      '5 VIP Guest Passes',
      'Exclusive Commune Fitness Apparel Kit',
      'Highest Long-term Savings'
    ]
  }
];

export const SPECIAL_TRAINING_RATES = [
  {
    id: 'pt-12',
    name: 'Personal Training (12 Sessions)',
    subtitle: '1-on-1 Dedicated Elite Coach',
    price: '₹6,000',
    originalPrice: '₹8,000',
    features: ['Customized workout split', 'Form correction & injury prevention', 'Nutritional monitoring']
  },
  {
    id: 'steam-month',
    name: 'Steam & Sauna Recovery Pass',
    subtitle: 'Unlimited Monthly Detox Access',
    price: '₹1,500',
    originalPrice: '₹2,500',
    features: ['Muscle inflammation reduction', 'Rapid metabolic detox', 'Aromatherapy eucalyptus infusion']
  },
  {
    id: 'diet-consult',
    name: 'Diet & Nutrition Consultation',
    subtitle: 'Custom Macro & Calorie Blueprint',
    price: '₹1,000',
    originalPrice: '₹2,000',
    features: ['Body fat percentage scan', 'Personalized meal schedule', 'Supplement optimization guidance']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Asrit Mohanty',
    role: 'Verified Local Guide',
    initials: 'AM',
    rating: 5,
    text: 'A good training environment along with fully equipped Great place for Work out. Highly recommended in Kataka. The staff and vibe are top notch.'
  },
  {
    id: '2',
    author: 'Sahil Sahoo',
    role: 'Verified Local Guide',
    initials: 'SS',
    rating: 5,
    text: 'A great gym with top quality equipment and a very clean environment. The machines are modern and well maintained, especially the Life Fitness series.'
  },
  {
    id: '3',
    author: 'Suprava Patra',
    role: 'Active Gym Member',
    initials: 'SP',
    rating: 5,
    text: 'Friendly and helpful staff, spotless clean washrooms, and the overall atmosphere is highly motivating for intense daily workouts.'
  },
  {
    id: '4',
    author: 'Rajesh Dash',
    role: 'Local Guide Kataka',
    initials: 'RD',
    rating: 5,
    text: 'One of the best premium fitness destinations in Odisha with excellent recovery zones like steam and sauna. True 5-star experience!'
  },
  {
    id: '5',
    author: 'Debashis Panda',
    role: 'CrossFit Athlete',
    initials: 'DP',
    rating: 5,
    text: 'The fluted wood acoustics and lighting make working out feel like a luxury sanctuary. Best powerlifting and cardio zones in Cuttack/Kataka.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: 'Where is Commune Fitness located in Kataka?',
    answer: 'We are situated at College Square, 4th Floor, Rex Plaza, Ice Factory Road, Kataka, Odisha 753003. We have dedicated parking space, security, and high-speed elevator access directly to the 4th floor.'
  },
  {
    id: 2,
    question: 'What are the gym operating hours?',
    answer: 'Commune Fitness is open daily to fit your lifestyle! Morning sessions run early until 12:00 PM, and our evening session reopens at 4:00 PM and runs late into the night.'
  },
  {
    id: 3,
    question: 'Are certified personal trainers and group classes included?',
    answer: 'Yes! Every active membership grants you guidance from our certified floor coaches. We also organize energetic Zumba, Yoga, and high-intensity CrossFit classes for all fitness levels.'
  },
  {
    id: 4,
    question: 'Is the steam and sauna recovery suite included in membership?',
    answer: 'Quarterly, half-yearly, and yearly memberships include complimentary access to our luxury steam and sauna suites for accelerated muscle recovery, detoxicating sweat, and relaxation.'
  },
  {
    id: 5,
    question: 'Can I get a customized diet and nutrition chart?',
    answer: 'Yes! Our in-house sports nutritionists assess your body composition, basal metabolic rate, and fitness goals to deliver tailored vegetarian and non-vegetarian macro blueprints.'
  }
];

export const MOTIVATION_TAGLINES = [
  "FORGE YOUR ULTIMATE SELF",
  "WHERE DISCIPLINE MEETS OPULENCE",
  "KATAKA'S PREMIER LUXURY FITNESS SANCTUARY",
  "ENGINEERING BODIES, TRANSFORMING LIVES",
  "LIFE FITNESS EQUIPMENT • SAUNA RECOVERY • ELITE COACHING"
];
