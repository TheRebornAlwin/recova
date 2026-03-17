export interface Product {
  id: string;
  handle: string;
  title: string;
  tagline: string;
  description: string;
  price: number;
  compareAtPrice: number;
  images: string[];
  features: {
    title: string;
    description: string;
  }[];
  specs: string[];
  category: string;
}

export const heroProduct: Product = {
  id: "neckrelieve-pulse",
  handle: "neckrelieve-pulse",
  title: "NeckRelieve Pulse",
  tagline: "Feel the tension release in minutes, not hours",
  description:
    "Advanced EMS pulse technology that sends targeted electrical signals directly into your neck muscles. Unlike heat pads or basic massagers, the NeckRelieve Pulse works at the muscular level to break down deep tension from hours of screen time.",
  price: 39.99,
  compareAtPrice: 79.99,
  images: [
    "/images/product-placeholder-1.jpg",
    "/images/product-placeholder-2.jpg",
    "/images/product-placeholder-3.jpg",
    "/images/product-placeholder-4.jpg",
  ],
  features: [
    {
      title: "EMS Pulse Technology",
      description:
        "Electrical muscle stimulation sends targeted pulses directly into the muscle fibers, releasing deep tension that stretching and heat can't reach.",
    },
    {
      title: "8 Massage Modes",
      description:
        "From gentle tapping to deep kneading, choose the mode that matches your level of tension. Each mode targets muscles differently for complete relief.",
    },
    {
      title: "19 Intensity Levels",
      description:
        "Start low and work your way up. Fine-tune the exact strength you need, whether it's a subtle pulse or a deep muscle-contracting session.",
    },
    {
      title: "Portable & Wireless",
      description:
        "Weighs under 50g with a rechargeable battery. Wear it under your collar at work, on the couch, or anywhere your neck needs relief.",
    },
    {
      title: "Use It Anywhere",
      description:
        "Not just for necks. Place it on shoulders, upper back, lower back, or anywhere you carry tension. The flexible pad conforms to your body.",
    },
    {
      title: "15-Minute Sessions",
      description:
        "Auto-shutoff after 15 minutes per session, the optimal time for muscle recovery. Use it daily as part of your wellness routine.",
    },
  ],
  specs: [
    "Technology: EMS (Electrical Muscle Stimulation)",
    "Modes: 8 unique massage patterns",
    "Intensity: 19 adjustable levels",
    "Battery: 150mAh rechargeable (USB)",
    "Session length: ~15 minutes per charge",
    "Weight: Less than 50g",
    "Charge time: 7-8 minutes",
    "Includes: Device, 3 gel pads, USB cable, remote control",
  ],
  category: "Neck Relief",
};

export const products: Product[] = [heroProduct];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "How do I contact Recova support?",
    answer:
      "You can reach us anytime at shoprecova@gmail.com. We typically respond within 24 hours on business days.",
  },
  {
    question: "How does the NeckRelieve Pulse actually work?",
    answer:
      "It uses EMS (Electrical Muscle Stimulation) technology. Small electrical pulses travel through gel pads into your muscle fibers, causing them to contract and release. This mimics what happens during a deep tissue massage, but at a fraction of the cost and from the comfort of your home.",
  },
  {
    question: "Is it safe to use?",
    answer:
      "Yes. EMS technology has been used in physical therapy and rehabilitation for decades. The NeckRelieve Pulse is designed for home use with adjustable intensity levels so you can start gentle and work your way up. Do not use if you have a pacemaker, are pregnant, or have epilepsy.",
  },
  {
    question: "Do you ship worldwide?",
    answer:
      "Yes, we ship to most countries worldwide. Standard shipping typically takes 7-15 business days depending on your location. All orders include tracking.",
  },
  {
    question: "How long does processing take?",
    answer:
      "Orders are processed within 1-3 business days. Once shipped, you will receive a tracking number via email.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "You can request changes or cancellations within 12 hours of placing your order by emailing shoprecova@gmail.com. After that, your order may have already entered processing.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and Shop Pay through our secure Shopify checkout.",
  },
  {
    question: "Will I have to pay customs or import taxes?",
    answer:
      "Depending on your country, you may be subject to local customs duties or import taxes. These are the responsibility of the buyer and vary by region.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day money-back guarantee. If you are not satisfied with your purchase, contact us within 30 days of delivery for a full refund. The item must be in its original condition.",
  },
  {
    question: "What if my item arrives damaged or defective?",
    answer:
      "Contact us immediately at shoprecova@gmail.com with photos of the damage. We will send a replacement at no extra cost or issue a full refund.",
  },
  {
    question: "How long does a refund take?",
    answer:
      "Once we receive and inspect the returned item, refunds are processed within 5-7 business days. It may take an additional 3-5 business days to appear on your statement depending on your bank.",
  },
  {
    question: "How long does the battery last?",
    answer:
      "A full charge gives you approximately 15 minutes of use, which is one complete session. It charges back up in just 7-8 minutes via USB, so it is always ready when you need it.",
  },
];

export interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  image?: string;
}

export const reviewsData: Review[] = [
  {
    name: "Marcus T.",
    rating: 5,
    date: "February 28, 2026",
    text: "My neck was constantly tight from staring at screens all day. I was skeptical about EMS but after reading about it I tried this thing. The first few sessions felt weird, but now I literally can't imagine not having it. I use it every night after work.",
  },
  {
    name: "Sarah K.",
    rating: 5,
    date: "February 22, 2026",
    text: "I sit at a desk for 8+ hours and my neck was killing me. After three weeks of using this daily, my pain is like 70% better. I can actually sit through meetings without constantly shifting around. Game changer.",
  },
  {
    name: "Patricia S.",
    rating: 5,
    date: "February 15, 2026",
    text: "My shoulders get so stiff in the mornings. This has become part of my daily routine now. I use it for 15 minutes while having coffee and it loosens everything up. Wish I found this years ago honestly.",
  },
  {
    name: "James R.",
    rating: 5,
    date: "February 10, 2026",
    text: "It's not just pressure or heat, it actually pulses into the muscle and you can feel it breaking down the tension. Nothing else has worked like this for me. Even on the lowest setting you can really feel it working.",
  },
  {
    name: "David L.",
    rating: 5,
    date: "February 5, 2026",
    text: "Was not prepared for how powerful this little thing is. Even on level 1 it's surprisingly strong. Multiple modes are great, I mainly use the massage and kneading settings. Very impressed for the price.",
  },
  {
    name: "Rachel M.",
    rating: 4,
    date: "January 30, 2026",
    text: "Perfect size for my neck. The current is stronger than I expected, comparable to the TENS unit at my physical therapist's office. Only giving 4 stars because I wish the gel pads lasted longer.",
  },
  {
    name: "Brian N.",
    rating: 5,
    date: "January 25, 2026",
    text: "These things are awesome. Insanely powerful for a battery powered massager. I bought another EMS device before this that you plug in and it's nowhere close to the strength of this little thing. Great job.",
  },
  {
    name: "Melissa W.",
    rating: 5,
    date: "January 20, 2026",
    text: "I use it for my back during that time of the month and it helps SO much with the cramps and tension. Charges fast too. Honestly the best $40 I've spent in a while.",
  },
  {
    name: "Carlos H.",
    rating: 5,
    date: "January 18, 2026",
    text: "The pulses are surprisingly effective at targeting deeper layers of muscle tension. I've tried heating pads, foam rollers, even a massage gun and nothing hits quite like this. The fact it's wireless is a huge plus.",
  },
  {
    name: "Jessica A.",
    rating: 5,
    date: "January 15, 2026",
    text: "I was totally surprised that this actually works. Different settings for different needs and it genuinely helps relieve the pain in my shoulder. Worth every penny, getting one for my mom too.",
  },
  {
    name: "Tyler P.",
    rating: 4,
    date: "January 12, 2026",
    text: "Very strong vibrations. Anything over the first couple settings is too much for me personally. But on the lower settings it's perfect. Extremely happy with it overall.",
  },
  {
    name: "Amanda G.",
    rating: 5,
    date: "January 8, 2026",
    text: "Honestly one of the best purchases I've made. I've got spinal issues and have tried everything. The massage mode on this is incredible, it actually relaxes the muscles around my spine. Highly recommend.",
  },
  {
    name: "Kevin D.",
    rating: 5,
    date: "January 5, 2026",
    text: "Great product. Very strong pulses, just like when I go to physical therapy. Works amazing. The 8 different modes each feel distinct and I can easily change settings and intensity. Solid build.",
  },
  {
    name: "Lauren F.",
    rating: 5,
    date: "December 30, 2025",
    text: "I love this little thing. It's portable enough to toss in my purse and use anywhere. The fact that it's cordless and rechargeable makes it so convenient. I use it at my desk every afternoon.",
  },
  {
    name: "Robert J.",
    rating: 5,
    date: "December 26, 2025",
    text: "Works really well and you can wear it under clothes. Strong stimulation that actually makes my back feel better. I've been using it daily for two weeks and the improvement is noticeable.",
  },
  {
    name: "Emily C.",
    rating: 4,
    date: "December 22, 2025",
    text: "This is my second purchase because I liked the first one so much. It's so versatile I needed more for different sore spots. Only complaint is the gel pads could be stickier but it's a minor thing.",
  },
  {
    name: "Daniel B.",
    rating: 5,
    date: "December 18, 2025",
    text: "My husband loves it for his bad knee. He uses it every evening and says the pain has reduced significantly. We're both converts now. Feels like having a mini physical therapist at home.",
  },
  {
    name: "Christine L.",
    rating: 5,
    date: "December 15, 2025",
    text: "The battery lasts a good 15 minutes which is plenty for one session. Charges back up in like 7 minutes. I use it between my shoulder blades and on my lower back. The different modes are really nice.",
  },
  {
    name: "Michael R.",
    rating: 5,
    date: "December 10, 2025",
    text: "I'm a truck driver and my neck is always messed up from the road. Started using this on my breaks and the difference after just a week was unreal. My wife noticed I wasn't complaining about my neck anymore.",
  },
  {
    name: "Natalie V.",
    rating: 5,
    date: "December 5, 2025",
    text: "Feels wonderful on pinched nerves. I've had a pinch in my shoulder for months and this is the only thing that gives me consistent relief. The intensity levels let me dial in exactly what I need.",
  },
  {
    name: "Andrew T.",
    rating: 4,
    date: "December 1, 2025",
    text: "It sends out these electric pulses through your muscles and you can literally feel the tension leaving. Smaller than I expected but it works amazing. Start on the lowest setting, trust me.",
  },
  {
    name: "Stephanie H.",
    rating: 5,
    date: "November 28, 2025",
    text: "Bought this after seeing someone recommend EMS for tech neck. As someone who's at a computer 10 hours a day, this has been a lifesaver. I use the kneading mode mostly and it's perfect.",
  },
  {
    name: "Jason W.",
    rating: 5,
    date: "November 22, 2025",
    text: "Very impressed for the price. Works like the devices they use in rehab clinics. I've tried it on my neck, shoulders, and lower back and it works great on all of them. Fast charging too.",
  },
  {
    name: "Monica E.",
    rating: 5,
    date: "November 18, 2025",
    text: "I have hip and back pain from sitting all day and this relaxes me so much. I also bought extra gel pads just in case. Delivery was fast and the product does exactly what it says.",
  },
  {
    name: "Ryan K.",
    rating: 4,
    date: "November 15, 2025",
    text: "Good product but be careful with the intensity. Even on level 1 it's quite noticeable. I usually keep it around 3-5 which is the sweet spot for me. Really helps with the tension in my traps.",
  },
  {
    name: "Tiffany N.",
    rating: 5,
    date: "November 10, 2025",
    text: "This exceeded my expectations honestly. I wasn't sure a little device like this could do much but the first time I used it on my neck the tension just melted. Now my whole family fights over it lol.",
  },
  {
    name: "Greg S.",
    rating: 5,
    date: "November 5, 2025",
    text: "I work construction and my body is always sore. Put this on my shoulders after work and it's like a reset button. The massage mode is my favorite. Powerful little device for sure.",
  },
  {
    name: "Hannah M.",
    rating: 5,
    date: "October 30, 2025",
    text: "Finally something that actually targets the deep muscle tension instead of just the surface. I've wasted so much money on other gadgets that barely did anything. This one you can actually FEEL working.",
  },
  {
    name: "Victor P.",
    rating: 5,
    date: "October 25, 2025",
    text: "Recommended it to everyone at my office. We all have desk jobs and neck pain is basically universal here. Three coworkers have already ordered their own after trying mine.",
  },
  {
    name: "Ashley D.",
    rating: 4,
    date: "October 20, 2025",
    text: "Really powerful for its size. The different modes each feel unique which is nice. The gel pads need replacing after a while but the device itself is solid. Would buy again for sure.",
  },
  {
    name: "Brandon C.",
    rating: 5,
    date: "October 15, 2025",
    text: "I've spent hundreds on chiropractor visits for my neck. This $40 device honestly gives me more daily relief than anything else I've tried. It's now part of my nightly routine and I sleep so much better.",
  },
  {
    name: "Olivia J.",
    rating: 5,
    date: "October 10, 2025",
    text: "Love that I can use this while watching TV or even at my desk. It's discreet enough to wear under a scarf at work. The EMS feeling took a session to get used to but now it feels amazing.",
  },
  {
    name: "Nathan F.",
    rating: 5,
    date: "October 5, 2025",
    text: "Best purchase I've made this year. My neck pain from gaming was getting out of hand and stretching wasn't cutting it anymore. This gets into the muscle in a way nothing else can. 10/10.",
  },
  {
    name: "Megan R.",
    rating: 5,
    date: "September 28, 2025",
    text: "I bought one for myself and then immediately ordered two more as gifts. It's that good. My mom has chronic shoulder pain and she said it's the best thing she's ever used for it.",
  },
  {
    name: "Derek H.",
    rating: 4,
    date: "September 20, 2025",
    text: "Solid little device. The EMS pulses genuinely help with muscle recovery after workouts too, not just pain relief. Using it on sore muscles after the gym has cut my recovery time noticeably.",
  },
  {
    name: "Lisa T.",
    rating: 5,
    date: "September 15, 2025",
    text: "I'm a nurse and on my feet all day. The tension builds up in my neck and shoulders something fierce. This has been an absolute godsend. I use it every single day and the relief is immediate.",
  },
];
