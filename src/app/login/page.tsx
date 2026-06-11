const LoginPage = () => {
  return (
    <main className="min-h-screen bg-secondary px-4 py-10">
      <section className="mx-auto max-w-[600px] rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Login
        </p>

        <h1 className="mt-3 text-3xl font-black text-black">Login Page</h1>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          This is your login page. Add your login form or authentication system
          here.
        </p>

        <form className="mt-8 space-y-4 text-left">
          <div>
            <label className="mb-2 block text-sm font-bold text-black">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-secondary px-4 py-3 outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-black">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-secondary px-4 py-3 outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-5 py-3 font-bold text-white transition-all duration-300 hover:bg-primary/90"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;