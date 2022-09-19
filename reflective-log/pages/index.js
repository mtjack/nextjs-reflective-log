import { client } from "../api/client";
import LogCard from "../components/log-card";
import Link from "next/link";
import { gql } from "@apollo/client";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query {
      logEntryCollection(limit: 3, order: date_DESC) {
        items {
          name,
          slug,
          date,
          coverColor
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
      <Link href={"/log/pages/1"}>
        <a>View all logs</a>
      </Link>

      <div>
        {data.map((entry, i) =>(
          <LogCard entry={entry} key={i}/>
        ))}
      </div>
    </>
  )
}
