export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function getWhatsAppUrl(phone: string, message?: string): string {
  const encoded = message
    ? encodeURIComponent(message)
    : encodeURIComponent(
        "Hello, I am interested in your commercial food machinery. Please share more details."
      );
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function getTelUrl(phone: string): string {
  return `tel:+233${phone.replace(/^0/, "")}`;
}

export function getMailtoUrl(email: string, subject?: string): string {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${email}${params}`;
}
