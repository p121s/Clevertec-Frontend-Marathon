// export interface IBook {
//   id: string;
//   category: string;
//   titleCategory: string;
//   images: string[];
//   title: string;
//   author: string;
//   aboutBook: string;
//   year: string;
//   rate: number | 0;
//   publishingHouse: string;
//   pages: string;
//   binding: string;
//   format: string;
//   genre: string;
//   weight: string;
//   ISBN: string;
//   manufacturer: string;
//   reviews: IReview[];
// }

export interface IBook {
  id: number;
  title: string;
  rating: number;
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

// export interface IReview {
//   avatar: string;
//   nameUser: string;
//   date: string;
//   rate: string;
//   textReview: string;
// }

export interface ImageBook {
  url: string;
}

export interface ReviewImageProps {
  image: string;
}

export interface ArrowReviewsProps {
  isReviewsOpen: boolean;
}

// export interface SwiperMiniStyledProps {
//   isVisible: boolean;
// }
