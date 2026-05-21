import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Image from "next/image";
import { Suspense } from "react";
import FeaturedLoading from '@/components/FeaturedLoading';

export default function Home() {
  return (
    <div >
      <Banner />

      <Suspense fallback={<FeaturedLoading />}>
                <Featured />
            </Suspense>
    </div>
  );
}
