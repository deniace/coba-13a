import Layout from "@/components/layout";
import { getAllPostIds, getPostData } from "@/lib/posts";

export default function Post({ postData }) {
  // console.log(id);
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

export async function getStaticPaths() {
  // return a list  of possible value for id
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // fetch nesesary data for the blog post using param id
  const postData = getPostData(params.id);
  console.log(params);
  return {
    props: {
      postData,
    },
  };
}
