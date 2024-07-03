interface IProps {
  children: React.ReactNode;
  className: string;
}

export const CommonBtn = (props: IProps) => {
  const { children, className } = props;
  return (
    <button
      className={`border border-chileanFire text-xl font-bold py-[9px] px-[23px] text-white bg-chileanFire uppercase  ${className}`}
    >
      {children}
    </button>
  );
};
