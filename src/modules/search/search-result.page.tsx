import { useParams } from "react-router-dom";

export const SearchResult = () => {
  const { searchTerm } = useParams();

  return <div>{searchTerm}</div>;
};
