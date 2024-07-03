interface HeadingProps {
  heading: string;
  className: string;
}

export const H3 = ({ heading, className }: HeadingProps) => {
  return <h3 className={`text-custom-3xl text-[#040707] leading-[105%] ${className}`}>{heading}</h3>;
};
