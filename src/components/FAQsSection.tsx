
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    id: 1,
    question: "Who is \"The Ultimate Social Media Health Bundle\" for?",
    answer: "This Canva template is perfect for anyone who wants to create scroll-stopping social media posts without hiring expensive graphic designers or starting from scratch."
  },
  {
    id: 2,
    question: "How long do I have access to the template?",
    answer: "You get **lifetime access** to everything included in The Ultimate Social Media Bundle—plus **all future updates** at no extra cost."
  },
  {
    id: 3,
    question: "What if I'm not tech-savvy?",
    answer: "No worries! We've made it super simple. These are **plug-and-play Canva templates** designed for ease of use."
  },
  {
    id: 4,
    question: "Are stock photos included with the templates?",
    answer: "Yes, we've included **free Canva stock photos** in all templates."
  },
  {
    id: 5,
    question: "Can I access the templates without a Canva Pro Account?",
    answer: "Absolutely! You only need a **FREE Canva account** to access and edit the templates. No Canva Pro subscription required."
  }
];

export const FAQsSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Everything you need to know about our Health & Nutrition Templates Bundle
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <Card key={faq.id} className="overflow-hidden">
            <button
              className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openFAQ === faq.id ? (
                  <ChevronUp className="w-6 h-6 text-gray-500 flex-shrink-0" />
                ) : (
                  <Chev
                )}
              </div>
            </button>
            
            {openFAQ === faq.id && (
              <div className="px-6 pb-6">
                <div className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {faq.answer.split('**').map((part, index) => 
                    index % 2 === 0 ? part : <strong key={index}>{part}</strong>
                  )}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
