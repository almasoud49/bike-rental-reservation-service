import { Button } from "antd";
type BButtonProps = {
  children: string;
  size?: "large" | "middle" | "small";
  link?: string;
};
const BButtonWhite = ({ children, size, link }: BButtonProps) => {
  return (
    <Button
      type="link"
      href={link}
      className="RButtonWhite bg-accentColor border-accentColor border-2 text-white font-medium rounded-none px-8 py-6"
      size={size || "large"}
    >
      {children}
    </Button>
  );
};

export default BButtonWhite;