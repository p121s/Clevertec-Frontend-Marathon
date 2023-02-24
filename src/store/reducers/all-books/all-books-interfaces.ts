export interface AllBooksStore {
  books: IBook[];
  isLoading: boolean;
  isLoaded: boolean;
  isError: boolean;
}

export interface IBook {
  authors: string[];
  booking: null;
  categories: string[];
  delivery: null;
  histories: IHistory[] | null;
  id: number;
  image: { url: string };
  issueYear: string;
  rating: number;
  title: string;
  isLinear: boolean;
}

interface IHistory {
  id: number;
  userId: number;
}
