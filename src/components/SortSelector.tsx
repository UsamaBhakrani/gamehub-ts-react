import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useData from "../hooks/useData";

interface Props {}

const SortSelector = () => {
  useData;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Relevance</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
