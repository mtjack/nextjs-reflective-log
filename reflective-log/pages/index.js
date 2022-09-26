import { client } from "../api/client";
import LogCard from "../components/log-card";
import { gql } from "@apollo/client";
import Link from "next/link";
import Head from "next/head";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query {
      logEntryCollection(limit: 1, order: date_DESC) {
        items {
          slug
        }
      }
    }
    `
  })

  return {
    props: {
      data: data.logEntryCollection.items
    }
  }
}

export default function Home({ data }) {
  return (
    <>

      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Reflective Log</title>
      </Head>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://data.whicdn.com/images/334928403/original.jpg?t=1567715183" className="max-w-sm w-full rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Personal Reflective Log</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <div className="btn-group">
              <Link href={`/log/pages/1`}>
                <a className="btn btn-primary">All Logs</a>
              </Link>
              <Link href={`/log/${data[0].slug}`}>
                <a className="btn btn-Secondary">Latest Entry</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}
