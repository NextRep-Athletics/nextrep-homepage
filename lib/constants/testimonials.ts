// TYPES

export interface Testimonial {
  id: string;
  name: string;
  photo: string; // Path to image - placeholder for now
  quote: string;
  subtitle: string;
}

// TESTIMONIAL DATA

export const testimonials: Testimonial[] = [
  {
    id: "alex-martin",
    name: "Alex Martin",
    photo: "/images/testimonials/alex-martin.jpg", // TODO: Replace with actual image
    quote:
      "It's not just about looking better. I sleep better, I have more energy, and I actually enjoy working out now.",
    subtitle: "Active NextRep Client",
  },
  {
    id: "jane-peterson",
    name: "Jane Peterson",
    photo: "/images/testimonials/jane-peterson.jpg", // TODO: Replace with actual image
    quote:
      "Down 42 pounds and I actually enjoy working out now. This program made fitness sustainable, not miserable.",
    subtitle: "Active NextRep Client",
  },
];
