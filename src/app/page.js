import Hero from "@/components/home/hero";
import HowtoApply from "@/components/home/howtoApply";
import MultipleItems from "@/components/home/sliders";
import VisaApplication from "@/components/home/VisaApplication";

export default function Home() {
  return (
    <>
      <Hero />
      <VisaApplication />
      <HowtoApply />
      <MultipleItems />
    </>
  );
}
