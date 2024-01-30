import Layout from "@/components/layout";
import { getAllPostIds } from "@/lib/posts";

export default function Post() {
    console.log(id);
    return (
        <Layout> ... </Layout>
    );
}


export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false
    }
}
