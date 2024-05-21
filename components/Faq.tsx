import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Faq() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="w-full pt-12 mb-6 xl:mb-24">
          <h2 className="text-4xl text-primary font-bold relative w-max flex items-center justify-between gap-x-3 mb-12 text-center mx-auto">
            Bizim Stüdyo
          </h2>
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="ms-3">
                    01. Ne tür fotoğraf ekipmanları kullanıyorsunuz?
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit distinctio incidunt, id officiis Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Impedit distinctio
                  incidunt, id officiis Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Impedit distinctio incidunt, id officiis
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <p className="ms-3">
                    02. Fotoğraflarımı görmek için stüdyonuza gelmek zorunda
                    mıyım?
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit distinctio incidunt, id officiis Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Impedit distinctio
                  incidunt, id officiis Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Impedit distinctio incidunt, id officiis
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <p className="ms-3">
                    03. Ne kadar süredir bu işi yapıyorsunuz?
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit distinctio incidunt, id officiis Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Impedit distinctio
                  incidunt, id officiis Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Impedit distinctio incidunt, id officiis
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit distinctio incidunt, id officiis
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
