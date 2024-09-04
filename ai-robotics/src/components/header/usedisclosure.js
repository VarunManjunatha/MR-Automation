import { useDisclosure } from "@chakra-ui/react";

export const UseMenuState  = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return { isOpen, onOpen, onClose };
};
