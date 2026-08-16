type WhatsAppButtonProps = {
  phone: string;
  message?: string;
  children?: React.ReactNode;
  className?: string;
};

export function WhatsAppButton({ phone, message = "Hi, I would like to enquire about a website for my business.", children = "Chat on WhatsApp", className = "" }: WhatsAppButtonProps) {
  const normalizedPhone = phone.replace(/\D/g, "");
  const href = `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
