import { useQuery } from "@tanstack/react-query";

export default function useFetchViaSearchParams(
  queryFn,
  queryKey,
  searchParamId
) {

  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [queryKey], 
    queryFn: queryFn, 
  });

  const courseInView = data?.find((item) => {
    return item.id === Number(searchParamId);
  });

  return { courseInView };
}
