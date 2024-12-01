import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I track my package?</AccordionTrigger>
          <AccordionContent>
            You can track your package by entering the tracking number on our
            website or mobile app.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What are the shipping rates?</AccordionTrigger>
          <AccordionContent>
            Shipping rates vary depending on the package size, weight, and
            destination. Check our pricing page for more details.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How long does delivery take?</AccordionTrigger>
          <AccordionContent>
            Delivery times depend on the service you choose and the destination.
            Standard delivery usually takes 3-5 business days.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
