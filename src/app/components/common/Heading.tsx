interface HeadingProps {
  heading: string;
  className: string;
}

export const H2 = ({ heading, className }: HeadingProps) => {
  return <h2 className={`text-[42px] text-[#040707] leading-[105%] ${className}`}>{heading}</h2>;
};
