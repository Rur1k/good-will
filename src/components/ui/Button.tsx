import type { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  href: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
};

export default function Button({ href, className, onClick, children }: ButtonProps) {
  return (
    <a href={href} className={`${className ? `${className} ` : ""}general_btn d-flex`} onClick={onClick}>
      <span className="btn_text">{children}</span>
      <img src="/img/btn.svg" alt="" />
      <span className="btn_line"></span>
    </a>
  );
}
