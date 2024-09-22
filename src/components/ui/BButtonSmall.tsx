/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Tooltip } from "antd";
type BButtonProps = {
  children: string;
  size?: "large" | "middle" | "small";
  link?: string;
  type?: "submit";
  wFull?: boolean;
  onClick?: any;
  disabled?: boolean;
  tooltipTxt?: string;
};
const BButtonSmall = ({
  children,
  size,
  link,
  type,
  wFull,
  onClick,
  disabled,
  tooltipTxt,
}: BButtonProps) => {
  return (
    <Tooltip title={tooltipTxt}>
      <Button
        disabled={disabled}
        onClick={onClick}
        htmlType={type}
        type="link"
        href={link}
        className={`RButton bg-accentColor dark:hover:RButtonDarkHover border-accentColor border-2 text-white font-medium hover:text-primaryColor rounded-none px-6 py-5 ${
          wFull && "w-full"
        }`}
        size={size || "large"}
      >
        {children}
      </Button>
    </Tooltip>
  );
};

export default BButtonSmall;