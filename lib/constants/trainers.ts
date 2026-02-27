import { IconType } from "react-icons";
import {
  FaStar,
  FaGraduationCap,
  FaSwimmer,
  FaHeartbeat,
} from "react-icons/fa";
import Chad from "@/lib/assets/images/Chad.webp"
import Cyrus from "@/lib/assets/images/Cyrus.webp"

// TYPES

export interface TrainerCredential {
  icon: IconType;
  text: string;
  color?: string;
}

export interface Trainer {
  id: string;
  name: string;
  title: string;
  photo: string; // Path to image - placeholder for now
  bio: string[];
  credentials: TrainerCredential[];
}

// TRAINER DATA

export const trainers: Trainer[] = [
  {
    id: "cy-morrison",
    name: "Cy Morrison",
    title: "Founder",
    photo: Cyrus.src,
    bio: [
      "My journey in fitness began as a Division I swimmer at Cornell University, where I learned the discipline and science behind peak athletic performance.",
      "After my competitive swimming career, I combined my passion for fitness with a commitment to public health, earning my Master's in Public Health (MPH) and becoming a Certified Strength and Conditioning Specialist (CSCS).",
      "This unique combination allows me to approach personal training not just as exercise prescription, but as a comprehensive wellness strategy that considers your entire lifestyle, health history, and long-term goals.",
      "Beyond training, I've published research in medical journals and founded Kick for Kids, a nonprofit that raised over $84,000 for pediatric care. I believe in giving back and making fitness accessible to everyone.",
    ],
    credentials: [
      {
        icon: FaStar,
        text: "CSCS - Certified Strength & Conditioning Specialist",
        color: "#C9A961", // Gold
      },
      {
        icon: FaGraduationCap,
        text: "Master of Public Health (MPH)",
        color: "#E84545", // Red
      },
      {
        icon: FaSwimmer,
        text: "Division I Athlete - Cornell University Swimming",
        color: "#003262", // Blue
      },
      {
        icon: FaHeartbeat,
        text: "Published Health Researcher",
        color: "#00BFA5", // Teal
      },
    ],
  },
  {
    id: "chad-morrison",
    name: "Chad Morrison",
    title: "Trainer",
    photo: Chad.src,
    bio: [
      "My journey in fitness began in the pool, swimming after my big brother. This led to 16 years of competitive swimming, ultimately competing in Division 1 at the University of California - San Diego. Athletics have given me purpose and routine, teaching me the importance of consistent, intentional work. After finishing my swimming career, I quickly learned that training was a part of my identity. Now, I’m driven to continue that journey by helping others build strength, confidence, and longevity through movement, all things athletics gave me.",
      "I’m deeply curious about the “why” behind training. I enjoy studying different training styles and understanding what physiologically drives their effectiveness and how the body adapts to different stimuli. That curiosity allows me to design programs that are purposeful, individualized, and rooted in science rather than trends.",
      "With a background in bioengineering, I’ve developed a strong understanding of biomechanics and human performance, which I’ve applied directly to athletics and movement quality. My experience working in gait and biomechanics further sharpened my ability to analyze movement patterns and optimize performance while reducing injury risk.",
      "For me, personal training is more than just workouts, it’s about building sustainable systems that help people move better, perform better, and feel stronger in every area of life.",
    ],
    credentials: [
      {
        icon: FaStar,
        text: "CSCS - Certified Strength & Conditioning Specialist",
        color: "#C9A961", // Gold
      },
      {
        icon: FaGraduationCap,
        text: "Bachelor of Science in Bioengineering from University of California San Diego",
        color: "#E84545", // Red
      },
      {
        icon: FaSwimmer,
        text: "Division 1 Athlete - University of California San Diego Swimming",
        color: "#003262", // Blue
      },
      {
        icon: FaHeartbeat,
        text: "2+ Experience in Gait and Biomechanics at Rady Children’s Hospital",
        color: "#00BFA5", // Teal
      },
    ],
  },
];
