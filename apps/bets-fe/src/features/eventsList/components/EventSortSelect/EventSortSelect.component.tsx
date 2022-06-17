import { Select, SelectProps } from "@chakra-ui/react";
import { OrderByModel } from "models/orderBy.d";
import { ChangeEvent, useCallback } from "react";

type Props = SelectProps & {
  orderBy: OrderByModel;
  setOrderBy: (orderBy: OrderByModel) => void;
};

export const EventSortSelect = ({
  orderBy,
  setOrderBy,
  ...selectProps
}: Props) => {
  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const newOrderBy = e.target.value as OrderByModel;

    setOrderBy(newOrderBy);

    const params = new URLSearchParams();
    params.set("orderBy", newOrderBy);

    history.replaceState(
      null,
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  }, []);

  return (
    <Select {...selectProps} onChange={onChange} bgColor="white">
      {Object.entries(OrderByModel).map(([key, value]) => {
        return (
          <option key={key} value={value}>
            {value}
          </option>
        );
      })}
    </Select>
  );
};
