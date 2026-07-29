import { faqItems } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
      <div className="section-label">FAQ</div>
      <h2 className="mt-5 mb-12 text-[2rem] leading-[1.1] font-semibold md:text-[2.5rem]">
        Questions we get <span className="text-subtle">before people sign up.</span>
      </h2>
      <Accordion className="overflow-hidden rounded-xl border border-hairline bg-background shadow-xs">
        {faqItems.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="not-last:border-b not-last:border-hairline">
            <AccordionTrigger className="rounded-none px-6 py-4 text-[15px] font-medium hover:bg-card hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-[14px] leading-relaxed text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
