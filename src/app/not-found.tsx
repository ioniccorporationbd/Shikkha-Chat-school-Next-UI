import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-bg-primary px-4 py-10">
      <section className="w-full max-w-3xl rounded-3xl bg-secondary px-6 py-10 text-center shadow-sm sm:px-10 lg:px-14">
        <div className="mx-auto mb-6 flex justify-center">
          <Image
            src="/assets/images/flogo.png"
            alt="Shikkha Chat Logo"
            width={150}
            height={60}
            priority
            className="h-auto w-37.5 object-contain"
          />
        </div>

        <h1 className="text-7xl font-bold text-primary sm:text-8xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-secondary sm:text-base">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি। পেজটি মুছে ফেলা
          হয়েছে, ঠিকানা পরিবর্তন হয়েছে, অথবা ভুল লিংক ব্যবহার করা হয়েছে।
        </p>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-secondary sm:text-base">
          Sorry, the page you are looking for does not exist or may have been
          moved.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-inverse transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-md"
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="rounded-lg border border-primary bg-bg-primary px-6 py-3 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-inverse hover:shadow-md"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;