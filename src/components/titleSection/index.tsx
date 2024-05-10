const TitleSection = ({ pink, black, blue, className }: isTitleSection) => {
  return (
    <h1
      className={`text-gray-950 text-[32px] lg:text-[32px] font-bold leading-10 lg:leading-[56px] mb-3 ${className}`}
    >
      {black}
      <span className="text-pink-800">{pink}</span> 
      <span className="text-turnary-800">{blue}</span>
    </h1>
  );
};

export default TitleSection;
