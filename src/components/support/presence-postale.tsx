import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PresencePostale() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Presence postale</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Find a post office</AccordionTrigger>
          <AccordionContent>
            Use our locator tool to find the nearest post office to you.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Opening hours</AccordionTrigger>
          <AccordionContent>
            Check the opening hours for your local post office.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Services available</AccordionTrigger>
          <AccordionContent>
            Learn about the various services offered at our post offices.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Accessibility information</AccordionTrigger>
          <AccordionContent>
            Find information about accessibility features at our post offices.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
