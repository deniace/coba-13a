import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

// layout
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>


            <Head>
                <title>
                    asdf
                    absolute
                </title>
            </Head>

            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => {
                    console.log(`script has been loaded`);
                }}
            />

            <h1> ini post pertama First POsst</h1>

            <h2>
                <Link href="/"> back to home</Link>
            </h2>

            <img src="/image/profile.jpg" alt="Deni ace" />


        </Layout>
    );
}