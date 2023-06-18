import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useMovieQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
    { value: "primary_release_date.desc", label: "Release Date Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
  ];
  const setSortOrder = useMovieQueryStore((s) => s.setSortOrder);
  const sortOrder = useMovieQueryStore((s) => s.movieQuery.sortOrder);
  const cuurentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by : {cuurentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
