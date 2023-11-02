export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  description: string;
  slug: string;
  categoryName: string;
  name: string;
}

export interface fullProduct {
  _id: string;
  images: any;
  description: string;
  slug: string;
  categoryName: string;
  name: string;
  price: number;
}
