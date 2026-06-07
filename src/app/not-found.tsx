import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-4 py-10">
      <section className="w-full max-w-3xl rounded-3xl bg-[#E2EDF7] px-6 py-10 text-center shadow-sm sm:px-10 lg:px-14">
        <div className="mx-auto mb-6 flex justify-center">
          <Image
            src="/assets/images/flogo.png"
            alt="Shikkha Chat Logo"
            width={150}
            height={60}
            priority
            className="h-auto w-[150px] object-contain"
          />
        </div>

        <h1 className="text-7xl font-bold text-[#FF0000] sm:text-8xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-black sm:text-3xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-700 sm:text-base">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি। পেজটি মুছে ফেলা
          হয়েছে, ঠিকানা পরিবর্তন হয়েছে, অথবা ভুল লিংক ব্যবহার করা হয়েছে।
        </p>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-700 sm:text-base">
          Sorry, the page you are looking for does not exist or may have been
          moved.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-lg bg-[#FF0000] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-md"
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="rounded-lg border border-[#FF0000] bg-white px-6 py-3 text-sm font-bold text-[#FF0000] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF0000] hover:text-white hover:shadow-md"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;