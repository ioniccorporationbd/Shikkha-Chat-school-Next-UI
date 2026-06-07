import BannerSlider from "@/Components/BannerSlider";
import GoverningBody from "@/Components/GoverningBody";
import Oddhayan from "@/Components/Oddhayan";
import Slider1 from "@/Components/Slider1";
import Slider2 from "@/Components/Slider2";

const Page = () => {
  return (
    <main>
      <BannerSlider />
      <div className="max-w-350 mx-auto">
        <Oddhayan/>
      <GoverningBody/>
      <Slider1/>
      <Slider2/>
      </div>
      
    </main>
  );
};

export default Page;