import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Image from "next/image";
import { Suspense } from "react";
import FeaturedLoading from '@/components/FeaturedLoading';
import SportCategories from "@/components/SportCategories";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div >
      <Banner />

       <SportCategories />

      <Suspense fallback={<FeaturedLoading />}>
                <Featured />
            </Suspense>

      <WhyChooseUs />
    </div>
  );
}
