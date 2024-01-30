import Layout, { siteTitle } from "@/components/layout";
import Image from "next/image";
import Head from "next/head";
import utilStyle from "../styles/utils.module.css";

import Link from "next/link";
import Date from "@/components/date";

import { getSortedPostsData } from "@/lib/posts";

export default function Home({ allPostData }) {
  return (
    <Layout Home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyle.headingMd}>
        <p>Selft intorduction</p>
        <p>Thsi is website using Next JS</p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2 className={utilStyle.headingLg}>BLOG</h2>
        <ul className={utilStyle.lists}>
          {allPostData.map(({ id, title, date }) => (
            <li className={utilStyle.listItem} key={id}>
              <Link href={`/post/${id}`}>{title}</Link>
              <br />
              <small className={utilStyle.ligthText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostData = getSortedPostsData();
  // console.log(allPostData);
  return {
    props: {
      allPostData,
    },
  };
}
