import { simplifiedProduct } from "@/interface";
import { client } from "@/lib/sanity";

async function getData() {
  const query = `*[_type == "product][0...3] | order(_createdAt desc){
    _id, 
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": iamges[0].asset->url
  }`;

  const data = client.fetch(query);

  return data;
}

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();

  return <div></div>;
}
