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
    id: "chris-tate",
    name: "Chris Tate",
    photo: "",
    quote:
      "Working with NextRep, I have a stronger structure making my schedule easier to follow. These plans also strenghen muscle groups I would not have found on my own.",
    subtitle: "Active NextRep Client",
  },
];
