import type { ReactNode } from "react";

const SectionCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="animate-[fadeIn_0.45s_ease-out] rounded-xl bg-white p-5 shadow-sm transition-all duration-500 hover:shadow-lg sm:p-7 lg:p-8">
      {children}
    </div>
  );
};

export default SectionCard;
