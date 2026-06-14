import Courses from "@/Home Components/Courses";
import GoverningBody from "@/Home Components/GoverningBody";
import Oddhayan from "@/Home Components/Oddhayan";
import Slider1 from "@/Home Components/Slider1";
import Slider2 from "@/Home Components/Slider2";
import SliderGallery from "@/Home Components/SliderGallery";

const Page = () => {
  return (
    <main className="w-full overflow-hidden bg-bg-primary">
      <div className="mx-auto w-full max-w-7xl">
        <Oddhayan />

        <GoverningBody />

        {/* Slider + Notice Board Responsive Section */}
        <section className="px-3 py-5 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 xl:grid-cols-7">
            {/* Left Slider */}
            <div className="w-full lg:col-span-1 xl:col-span-4">
              <div className="h-full w-full overflow-hidden rounded-xl bg-bg-primary shadow-sm">
                <Slider1 />
              </div>
            </div>

            {/* Right Notice Board */}
            <div className="w-full lg:col-span-1 xl:col-span-3">
              <div className="h-full w-full rounded-xl bg-bg-primary shadow-sm">
                <Slider2 />
              </div>
            </div>
          </div>
        </section>
        <Courses />
      </div>
      <SliderGallery />
    </main>
  );
};

export default Page;