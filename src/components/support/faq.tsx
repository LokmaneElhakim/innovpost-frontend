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
          <AccordionTrigger>Où commander la carte Edahabia</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc">
              <li>
                Accéder au site web{" "}
                <span className="underline text-blue-500">
                  https://eccp.poste.dz/commande-edahabia
                </span>{" "}
                Sur
              </li>
              <li>
                l&apos;application Mobile ECCP disponible sur PLAY STORE
                (Installer)
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Services Postaux (Courier / Colis)
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Réseau Postal</AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
