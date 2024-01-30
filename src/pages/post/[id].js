import Layout from "@/components/layout";
import { getAllPostIds, getPostData } from "@/lib/posts";

import Head from "next/head";
import Date from "../../components/date";

import utilStyle from "../../styles/utils.module.css";

export default function Post({ postData }) {
  // console.log(id);
  return (
    <Layout>
      {/** add this <Head> tag  */}
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyle.headingX1}>{postData.title}</h1>
        <div className={utilStyle.lightText}>
          <Date dateString={postData.date} />
        </div>
      </article>
      {/* {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} /> */}
      {/* {postData.date} */}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
  const postData = await getPostData(params.id);
  console.log(params);
  return {
    props: {
      postData,
    },
  };
}
