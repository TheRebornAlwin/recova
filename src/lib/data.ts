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
  tagline: "Real relief for the neck pain that won't go away.",
  description:
    "Advanced EMS pulse technology that sends targeted electrical signals directly into your neck muscles. Unlike heat pads or basic massagers, the NeckRelieve Pulse works at the muscular level to break down deep tension from hours of screen time.",
  price: 39.99,
  compareAtPrice: 79.99,
  images: [
    "https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pfk0Kw47MguLm6ivMzDEsFxVQ3ahCRKr0yb9T7",
    "https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pfqu1NTvSANYDXpkLJl8fIBQzm26uxZR9PHiO7",
    "https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pfWSBBiRd7TVsGoIJ1D8Yt5lg6SP09OacNXnFZ",
    "https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pfyhIs6xSwyRmT5N4UxsjMfXha3kb7JeSpnK9Z",
    "https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pfqIt4tsANYDXpkLJl8fIBQzm26uxZR9PHiO7o",
    "https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pfWnHX3Td7TVsGoIJ1D8Yt5lg6SP09OacNXnFZ",
    "https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pf7FCHlgoahkXuN67i1KgfSqwl385Cx4c9jret",
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
    name: "Jayden M.",
    rating: 5,
    date: "Feb 28, 2026",
    text: "my neck was killing me from staring at screens all day and i was skeptical about this thing but honestly its way better than i expected. the pulses are super strong and you can actually feel it working. i use it every night now",
  },
  {
    name: "Samantha R.",
    rating: 5,
    date: "Feb 22, 2026",
    text: "Bought two of these, one for me and one for my mom. She's absolutely obsessed with it. The different modes are perfect for targeting different areas. Great quality for the price.",
  },
  {
    name: "Tyler K.",
    rating: 5,
    date: "Feb 15, 2026",
    text: "works amazing on my neck after long gaming sessions. the remote is clutch so i dont have to reach back and mess with it. only wish the gel pads lasted longer but for 40 bucks cant complain",
  },
  {
    name: "Aisha P.",
    rating: 5,
    date: "Feb 8, 2026",
    text: "I've tried heating pads and those massage guns before and they were all kinda useless for deep neck pain. This one actually surprised me. The EMS pulses get way deeper than anything else I've used and it's really quiet.",
  },
  {
    name: "Marcus D.",
    rating: 5,
    date: "Jan 30, 2026",
    text: "shipped fast, packaged well, works perfectly. the 8 modes are all different enough to actually matter. kneading + massage combo is insane",
  },
  {
    name: "Emily W.",
    rating: 5,
    date: "Jan 22, 2026",
    text: "Got this for my desk at work and literally everyone who sees it asks about it. Such a lifesaver for afternoon neck tension. The auto shutoff is really nice too since I sometimes forget its on",
  },
  {
    name: "Chris L.",
    rating: 5,
    date: "Jan 15, 2026",
    text: "really solid little device. the ems pulses are way stronger than i expected for something this small. would recommend for sure",
  },
  {
    name: "Nina G.",
    rating: 5,
    date: "Jan 8, 2026",
    text: "My shoulders feel like a completely different body part after using this thing. I use the lower intensity for relaxing and crank it up when I have a knot. Love it so much I bought one for my sister too.",
  },
  {
    name: "Derek H.",
    rating: 5,
    date: "Jan 3, 2026",
    text: "bought this on a whim and now i cant imagine not having it. the deep pulse mode is unreal. my coworkers think i went to a chiropractor lol",
  },
  {
    name: "Priya S.",
    rating: 5,
    date: "Dec 28, 2025",
    text: "Perfect gift for my husband. He sits at a desk all day and always complains about his neck. He says it feels like a real TENS unit from physical therapy. Build quality is solid too.",
  },
  {
    name: "Jordan B.",
    rating: 4,
    date: "Dec 22, 2025",
    text: "great device for the price. the ems pulses are strong and it targets my neck pain perfectly. only giving 4 stars because shipping took a bit longer than expected but the product itself is 5/5",
  },
  {
    name: "Megan F.",
    rating: 5,
    date: "Dec 15, 2025",
    text: "I carry all my stress in my neck and shoulders and this thing has genuinely helped me wind down at night. the different intensity levels are so nice for finding what works. best purchase I've made this year honestly",
  },
  {
    name: "Liam O.",
    rating: 5,
    date: "Dec 10, 2025",
    text: "second one i bought. first one was for me and this one is for my dad for christmas. he's got chronic neck issues and is going to lose it when he tries this. quality is consistent between both units",
  },
  {
    name: "Rachel T.",
    rating: 5,
    date: "Dec 4, 2025",
    text: "the 15 minute auto shutoff is a lifesaver. i set it when i go to bed and it turns off on its own. no more falling asleep with a heating pad on. also the remote works from across the room which is nice",
  },
  {
    name: "Kevin Z.",
    rating: 5,
    date: "Nov 28, 2025",
    text: "got this for my wife because she always has neck pain from looking down at her phone. she goes absolutely crazy for it. uses it every single morning with her coffee. worth every penny",
  },
  {
    name: "Olivia M.",
    rating: 4,
    date: "Nov 22, 2025",
    text: "really effective little massager. i use it after my workouts and it helps so much with recovery. taking off one star only because i wish there were more gel pad replacements included but thats minor",
  },
  {
    name: "Hassan A.",
    rating: 5,
    date: "Nov 15, 2025",
    text: "this is my second ems device and easily the best one. the first one i bought on amazon broke within a month, this one has been going strong for weeks now. way more powerful too",
  },
  {
    name: "Sophie C.",
    rating: 5,
    date: "Nov 8, 2025",
    text: "Bought it for after-work neck relief and it completely transforms how I feel by bedtime. I put it on with the kneading mode while watching tv and it just melts everything. Absolutely love it.",
  },
  {
    name: "Alex R.",
    rating: 5,
    date: "Nov 1, 2025",
    text: "skeptical at first but this thing is legit. the pulses go deep into the muscle and you can literally feel knots releasing. highly recommend to anyone on the fence",
  },
  {
    name: "Tanya J.",
    rating: 5,
    date: "Oct 26, 2025",
    text: "got this as a treat for myself and i dont regret it one bit. my neck feels like a completely different neck now lol. the quality is amazing for under 40 bucks",
  },
  {
    name: "Brandon W.",
    rating: 4,
    date: "Oct 20, 2025",
    text: "solid product. my only complaint is the gel pads lose stickiness after about a week of daily use but thats expected. the ems strength and different modes are excellent",
  },
  {
    name: "Lisa N.",
    rating: 5,
    date: "Oct 14, 2025",
    text: "My daughter has been complaining about neck pain from studying and this did not disappoint. She literally thanked me which never happens lol. The adjustable intensity is perfect so she can start gentle.",
  },
  {
    name: "Ryan P.",
    rating: 5,
    date: "Oct 8, 2025",
    text: "i work from home and sit at my desk like 10 hours a day. this thing on my neck during afternoon meetings has been a game changer. nobody can even tell im using it",
  },
  {
    name: "Jade K.",
    rating: 5,
    date: "Oct 2, 2025",
    text: "bought 3 of these for my massage studio to use on clients between appointments and they love them. creates such targeted relief. already ordered 2 more",
  },
  {
    name: "Carlos V.",
    rating: 5,
    date: "Sep 25, 2025",
    text: "this thing is way better than expected. i was worried it would be some cheap gimmick but its actually really well built. the ems pulses feel exactly like what they use at my physical therapists office",
  },
  {
    name: "Anna B.",
    rating: 4,
    date: "Sep 18, 2025",
    text: "Love the device itself. The pulses are strong and it genuinely helps my neck stiffness. Only 4 stars because it took about 2 weeks to arrive but I understand its shipping from far away.",
  },
  {
    name: "Mike T.",
    rating: 5,
    date: "Sep 12, 2025",
    text: "my wife and i both use this every night now. we fight over who gets it first lol. its become part of our routine. 15 minutes on the neck before bed and i sleep so much better. can't recommend enough",
  },
  {
    name: "Zara L.",
    rating: 5,
    date: "Sep 5, 2025",
    text: "I'm a physiotherapist and I recommend EMS to my patients regularly. Having an affordable portable option like this is excellent. The 8 modes give real versatility for different muscle groups.",
  },
  {
    name: "Tom H.",
    rating: 5,
    date: "Aug 30, 2025",
    text: "replaced my old neck massager with this and the difference is night and day. so much more targeted and the pulses actually get into the muscle instead of just vibrating the surface. 10/10",
  },
  {
    name: "Danielle S.",
    rating: 5,
    date: "Aug 24, 2025",
    text: "perfect for my office. i just stick it on my neck, put on a scarf, and nobody knows. the wireless design is a huge plus and the remote control means i dont have to reach back to change settings",
  },
  {
    name: "James C.",
    rating: 5,
    date: "Aug 18, 2025",
    text: "got this because my neck was messed up from sleeping wrong and my roommate immediately ordered one too after trying mine. we both use them daily now. best purchase of the year easily",
  },
  {
    name: "Kayla D.",
    rating: 4,
    date: "Aug 12, 2025",
    text: "really effective ems device. the pulse modes are all genuinely different which is nice. only reason for 4 stars is i wish there was a phone app to control it but the remote works fine",
  },
  {
    name: "Noah F.",
    rating: 5,
    date: "Aug 5, 2025",
    text: "ive shown this to literally everyone i know and they all want one. just ordered two more as gifts for my parents. the quality is genuinely impressive for the price",
  },
  {
    name: "Isabel R.",
    rating: 5,
    date: "Jul 30, 2025",
    text: "My doctor recommended trying EMS for my chronic neck tension and this has been perfect. The slow deep pulses are so effective at releasing tightness. Best money I've spent on my health this year.",
  },
  {
    name: "Ethan G.",
    rating: 5,
    date: "Jul 24, 2025",
    text: "bought this for neck pain from working out and it works wonders. the lower settings are gentle enough for sensitive areas and cranking it up on my traps feels incredible after deadlift day",
  },
  {
    name: "Chloe W.",
    rating: 5,
    date: "Jul 18, 2025",
    text: "just wow. i didnt expect much for $40 but this exceeded all my expectations. the ems pulses are genuinely strong and targeted. my whole family fights over it now lol",
  },
];
