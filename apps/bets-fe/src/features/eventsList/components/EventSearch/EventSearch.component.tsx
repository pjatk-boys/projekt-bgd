import {
  Input,
  InputGroup,
  InputGroupProps,
  InputRightElement,
} from "@chakra-ui/react";
import { ChangeEvent, useMemo } from "react";
import debounce from "lodash/debounce";
import { SearchIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";

type Props = InputGroupProps & {
  query: string;
  setQuery: (query: string) => void;
};

export const EventSearch = ({ query, setQuery, ...inputGroupProps }: Props) => {
  const onChange = useMemo(
    () =>
      debounce((e: ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;

        setQuery(newQuery);

        const params = new URLSearchParams();
        params.set("query", newQuery);

        history.replaceState(
          null,
          "",
          `${window.location.pathname}?${params.toString()}`
        );
      }, 300),
    []
  );

  return (
    <InputGroup {...inputGroupProps}>
      <Input placeholder="Event name" onChange={onChange} bgColor="white" />
      <InputRightElement>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  );
};
