const ContentHeading = ({ title }: { title: string }) => {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold text-primary sm:text-2xl">{title}</h2>
      <div className="mt-2 h-[3px] w-20 rounded-full bg-primary" />
    </div>
  );
};

export default ContentHeading;
