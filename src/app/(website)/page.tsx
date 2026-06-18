import styles from "../page.module.css";
import { HeroSection } from "@/components/sections/hero";
import { WinnersSection } from "@/components/sections/winners";
import { AwardNightSection } from "@/components/sections/award-night";
import { AboutSection } from "@/components/sections/about";
import { CountdownSection } from "@/components/sections/countdown";
import { CategoriesSection } from "@/components/sections/categories";
import { JurySection } from "@/components/sections/jury";
import { DirectorSection } from "@/components/sections/director";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { MediaSection } from "@/components/sections/media";
import { HonourGuestsSection } from "@/components/sections/honour-guests";
import { CtaSection } from "@/components/sections/cta";
import { client } from "@/sanity/lib/client";

// Define GROQ queries
const winnersQuery = `*[_type == "winner"] | order(_createdAt asc) {
  "id": _id,
  name,
  role,
  company,
  "image": image.asset->url
}`;

const categoriesQuery = `*[_type == "category"] | order(_createdAt asc) {
  "id": _id,
  title,
  bgGradient,
  label
}`;

const juryQuery = `*[_type == "juryMember"] | order(_createdAt asc) {
  "id": _id,
  name,
  role,
  bio,
  "image": image.asset->url
}`;

const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt asc) {
  "id": _id,
  name,
  role,
  quote,
  "image": image.asset->url
}`;

const aboutQuery = `*[_type == "about"][0] {
  title,
  subtitle,
  paragraphs,
  "image": image.asset->url
}`;

const directorQuery = `*[_type == "director"][0] {
  name,
  role,
  kicker,
  quote,
  paragraph,
  "image": image.asset->url
}`;

export default async function Home() {
  // Fetch data in parallel with fallback to empty array or null if Sanity fetches fail or return empty
  let winners = [];
  let categories = [];
  let juryMembers = [];
  let testimonials = [];
  let aboutContent = null;
  let directorMessage = null;

  try {
    const [
      fetchedWinners,
      fetchedCategories,
      fetchedJury,
      fetchedTestimonials,
      fetchedAbout,
      fetchedDirector
    ] = await Promise.all([
      client.fetch(winnersQuery),
      client.fetch(categoriesQuery),
      client.fetch(juryQuery),
      client.fetch(testimonialsQuery),
      client.fetch(aboutQuery),
      client.fetch(directorQuery)
    ]);

    winners = fetchedWinners || [];
    categories = fetchedCategories || [];
    juryMembers = fetchedJury || [];
    testimonials = fetchedTestimonials || [];
    aboutContent = fetchedAbout || null;
    directorMessage = fetchedDirector || null;
  } catch (error) {
    console.error("Sanity data fetch failed. Falling back to local mock data.", error);
  }

  return (
    <main className={styles.main}>
      <HeroSection />
      <WinnersSection initialWinners={winners.length > 0 ? winners : undefined} />
      <AboutSection initialAbout={aboutContent || undefined} />
      <CountdownSection />
      <AwardNightSection />
      <CategoriesSection initialCategories={categories.length > 0 ? categories : undefined} />
      <JurySection initialJury={juryMembers.length > 0 ? juryMembers : undefined} />
      <DirectorSection initialDirector={directorMessage || undefined} />
      <TestimonialsSection initialTestimonials={testimonials.length > 0 ? testimonials : undefined} />
      <MediaSection />
      <HonourGuestsSection />
      <CtaSection />
    </main>
  );
}
