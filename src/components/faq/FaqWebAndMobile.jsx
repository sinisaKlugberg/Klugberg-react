import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqWebandMObile = (props) => {

  console.log(props.faq)

  return (
    <>
      <dl className="ptf-accordion">
        <Accordion preExpanded={["a"]} allowZeroExpanded>
          {props.faq.pitanja_repeater.map((item, i) => (
            <AccordionItem key={i} uuid={item.expand}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <dt>{item.pitanje}</dt>
                </AccordionItemButton>
              </AccordionItemHeading>
              {/* Accordion Heading */}
              <AccordionItemPanel>
                <dd>{item.odgovor}</dd>
              </AccordionItemPanel>
              {/* Accordion Body Content */}
            </AccordionItem>
          ))}
        </Accordion>
      </dl>
    </>
  );
};

export default FaqWebandMObile;
