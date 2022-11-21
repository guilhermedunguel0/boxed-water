import Footer from "../components/Footer";
import Header from "../components/Header";
import Instagram from "../components/Instagram";
import Presentation from "../components/Presentation";
import Products from "../components/Products";
import SeenOn from "../components/SeenOn";
import TreesSection from "../components/TreesSection";

import { GetStaticProps } from "next";
import { api } from "../utils/axios";

export interface PostsType {
  posts: {
    id: number;
    postUrl: string;
    imageUrl: string;
  }[]
}

export default function Home({posts}: PostsType) { 

  return (
    <>
      <main className="max-w-[90rem] m-auto px-2">
        <Header />
        <Presentation />
        <Products />
        <TreesSection />
        <Instagram posts={posts} />
        <SeenOn />
      </main>
      <Footer />
    </>
    
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const response = await api.get('efdf0786a7b10a5a70a9')

  return {
    props: {
      posts: response.data.data,
    }
  }
}
