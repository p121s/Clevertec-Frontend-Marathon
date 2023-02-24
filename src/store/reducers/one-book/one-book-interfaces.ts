export interface OneBookStore {
  book: IBook;
  isLoading: boolean;
  isError: boolean;
  id: number | '';
}

export interface IBook {
  id: number;
  title: string;
  rating: number | null;
  issueYear: string;
  description: string;
  publish: string;
  pages: string;
  cover: string;
  weight: string;
  format: string;
  ISBN: string;
  producer: string;
  authors: string[];
  images: ImageBook[];
  categories: string[];
  comments: IComment[];
  booking: {
    id: number;
    order: boolean;
    dateOrder: string;
    customerId: number;
    customerFirstName: string;
    customerLastName: string;
  };
  delivery: {
    id: number;
    handed: boolean;
    dateHandedFrom: string;
    dateHandedTo: string;
    recipientId: number;
    recipientFirstName: string;
    recipientLastName: string;
  };
  histories: IHistory[];
}

export interface IComment {
  id: number;
  rating: number;
  text: string;
  createdAt: string;
  user: {
    commentUserId: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
  };
}

export interface IHistory {
  id: number;
  userId: number;
}

export interface ImageBook {
  url: string;
}
