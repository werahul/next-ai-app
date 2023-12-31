import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import TextIn3D from "./Text3D/page";
import CustomHead from "./CustomHead";

export default function Home({ selectedFile }: any) {

  return (
    <div className=" ">
      <CustomHead />
      <Hero selectedFile={selectedFile} />
    </div>
  )
}
