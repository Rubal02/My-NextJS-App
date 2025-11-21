import Image from "next/image";
import TrainingIntro from "@/components/intro/training";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <main className="">

        <TrainingIntro /> 
      <Link href="/intro1">Next</Link> 
      </main>
    </div>
  );
}
