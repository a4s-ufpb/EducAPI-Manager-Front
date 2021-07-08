import { Sort } from './sort.model';

export class Pageable {
  sort: Sort | undefined;
  offset: number | undefined;
  pageNumber: number | undefined;
  pageSize: number | undefined;
  unpaged: boolean | undefined;
  paged: boolean | undefined;
}
