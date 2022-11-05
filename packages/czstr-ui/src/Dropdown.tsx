import { ReactChild } from 'react';

import {
    Heading,
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "./elements";
  
  export const DropdownItem = ({ title, description }: { title: string, description: string}) => {
    return (
      <AccordionItem>
        <Heading as="h3" py={6}>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4}>{description}</AccordionPanel>
      </AccordionItem>
    );
  };
  
  export const Dropdown = ({ children }: { children: ReactChild }) => {
    return <Accordion>{children}</Accordion>;
  };
  