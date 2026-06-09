import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Shikkha Chat",
  description: "Contact page for Shikkha Chat",
};

type ContactInfo = {
  title: string;
  value: string;
  icon: React.ReactNode;
};

const LocationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-9 w-9 text-primary"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M12 21s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-9 w-9 text-primary"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19 19.5 19.5 0 0 1 5 12.81 19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.8a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.9.31 1.84.53 2.8.66A2 2 0 0 1 22 16.92Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-9 w-9 text-primary"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m22 6-10 7L2 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const contactInfo: ContactInfo[] = [
  {
    title: "Address",
    value: "Ramna, Dhaka-1000",
    icon: <LocationIcon />,
  },
  {
    title: "Phone",
    value: "02-58310500",
    icon: <PhoneIcon />,
  },
  {
    title: "Email",
    value: "info@vnsc.edu.bd, vnsc_bd@yahoo.com",
    icon: <EmailIcon />,
  },
];

const Contact = () => {
  return (
    <main className="min-h-screen bg-secondary">
      {/* Page Header */}
      <section className="bg-white py-10 shadow-sm">
        <div className="mx-auto max-w-[1260px] px-4 text-center text-2xl font-bold text-black sm:text-3xl lg:text-left">
          Contact
          <div className="mx-auto mt-3 h-[3px] w-20 rounded-full bg-primary lg:mx-0" />
        </div>
      </section>

      {/* Contact Cards */}
      <section className="mx-auto my-10 max-w-[1260px] px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:min-h-48">
          {contactInfo.map((item, index) => (
            <div
              key={item.title}
              className="group flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/10">
                {item.icon}
              </div>

              <p className="text-lg font-bold text-[#1267B1] transition-colors duration-300 group-hover:text-primary">
                {item.title}
              </p>

              <p className="mt-2 break-words text-sm leading-6 text-gray-600 sm:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="mx-auto my-10 max-w-[1260px] px-4">
        <div className="rounded-3xl bg-white p-5 shadow-lg transition-all duration-500 hover:shadow-2xl sm:p-8 lg:p-16 xl:p-20">
          <form className="flex flex-col space-y-6 lg:space-y-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-xl bg-[#ECECEC] p-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-500 focus:bg-secondary focus:ring-2 focus:ring-primary/40 lg:w-1/2"
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile No."
                className="w-full rounded-xl bg-[#ECECEC] p-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-500 focus:bg-secondary focus:ring-2 focus:ring-primary/40 lg:w-1/2"
              />
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full rounded-xl bg-[#ECECEC] p-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-500 focus:bg-secondary focus:ring-2 focus:ring-primary/40 lg:w-1/2"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-xl bg-[#ECECEC] p-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-500 focus:bg-secondary focus:ring-2 focus:ring-primary/40 lg:w-1/2"
              />
            </div>

            <textarea
              rows={5}
              placeholder="Message"
              name="message"
              className="w-full resize-none rounded-xl bg-[#ECECEC] p-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-500 focus:bg-secondary focus:ring-2 focus:ring-primary/40"
            />

            <button
              type="submit"
              className="mx-auto w-full rounded-xl bg-primary px-8 py-3 font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-xl active:scale-95 lg:w-44"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-[1260px] px-4 pb-10">
        <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-lg transition-all duration-500 hover:shadow-2xl">
          <iframe
            title="Viqarunnisa Noon School and College Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14608.589438797351!2d90.407051!3d23.742124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b84e57c2368d%3A0x4df20dee9b73140e!2sViqarunnisa%20Noon%20School%20and%20College!5e0!3m2!1sen!2sbd!4v1731414574228!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full rounded-2xl sm:h-[400px] lg:h-[450px]"
          />
        </div>
      </section>
    </main>
  );
};

export default Contact;