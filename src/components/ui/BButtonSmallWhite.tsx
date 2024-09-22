/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
type BButtonProps = {
  children: string;
  size?: "large" | "middle" | "small";
  link?: string;
  onClick?: any;
};
const BButtonSmallWhite = ({ children, size, link, onClick }: BButtonProps) => {
  return (
    <Button
      onClick={onClick}
      type="link"
      href={link}
      className="RButtonWhite bg-accentColor border-accentColor border-2 text-white font-medium hover:text-primaryColor rounded-none px-6 py-5"
      size={size || "large"}
    >
      {children}
    </Button>
  );
};

export default BButtonSmallWhite;