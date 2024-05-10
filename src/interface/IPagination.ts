interface IPagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  count:number;
}
