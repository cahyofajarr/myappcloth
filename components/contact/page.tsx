import ContactForm from "@/components/contact/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="opacity-80 mb-6">Ada pertanyaan? Kirim pesanmu di bawah.</p>
      <ContactForm />
    </section>
  );
}
