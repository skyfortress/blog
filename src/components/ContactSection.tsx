import ContactForm from './ContactForm';

interface ContactSectionProps {
  title: string;
  description: string;
  id?: string;
  backgroundColor?: 'white' | 'gray';
}

export default function ContactSection({ 
  title, 
  description, 
  id = "contact",
  backgroundColor = 'gray'
}: ContactSectionProps) {
  const bgClass = backgroundColor === 'white' ? 'bg-white' : 'bg-gray-50';

  return (
    <section id={id} className={`py-20 ${bgClass}`}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          {description}
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
