type CallButtonProps = {
  phone: string;
  children?: React.ReactNode;
  className?: string;
};

export function CallButton({ phone, children = "Call Now", className = "" }: CallButtonProps) {
  const normalizedPhone = phone.replace(/\s+/g, "");
  return <a href={`tel:${normalizedPhone}`} className={className}>{children}</a>;
}
