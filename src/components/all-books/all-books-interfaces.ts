export interface BookProps {
    authors: string[];
    booking: null;
    categories: string[];
    delivery: null;
    histories: IHistory[] | null;
    id: number;
    image: { url: string };
    issueYear: string;
    rating: number | null;
    title: string;
    isLinear: boolean;
  }

  interface IHistory {
    id: number;
    userId: number;
  }

export interface CardBookStyledProps {
    isLinear?: boolean
}