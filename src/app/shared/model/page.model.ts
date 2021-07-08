import { Pageable } from './pageable.model';
import { Sort } from './sort.model';

export class Page<T> {
  content: Array<T> | undefined;
  pageable: Pageable | undefined;
  totalPages: number | undefined;
  totalElements: number | undefined;
  last: boolean | undefined;
  numberOfElements: number | undefined;
  sort: Sort | undefined;
  size: number | undefined;
  number: number | undefined;
  first: boolean | undefined;
  empty: boolean | undefined;
}
export const DEFAULT_PAGE_SIZE = 20;
export const FIRST_PAGE_NUMBER = 0;
