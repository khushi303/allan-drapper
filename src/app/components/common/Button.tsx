interface IProps {
  children: React.ReactNode;
  customCss: string;
}

export const Button = (props: IProps) => {
  const { children, customCss } = props;
  return (
    <button
      className={`border border-chileanFire text-xl font-bold py-[9px] px-[23px] text-white bg-chileanFire uppercase ${customCss}`}
    >
      {children}
    </button>
  );
};
