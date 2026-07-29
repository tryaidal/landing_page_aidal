import { faqItems } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionEyebrow } from "@/components/section-eyebrow";

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-32 md:px-16">
      <SectionEyebrow n="08" label="FAQ" />
      <h2 className="mb-12 text-3xl font-bold md:text-4xl">
        Questions we get
        <br />
        <em className="text-muted-foreground not-italic">before people sign up.</em>
      </h2>
      <Accordion className="rounded-lg border border-border">
        {faqItems.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="px-6 py-4 text-base font-medium hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-[0.9375rem] leading-7 text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
