import { client } from "../api/client";
import LogCard from "../components/log-card";
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
      <div>
        <p>This site is where I upload my Personal Reflective Log for my University Profecional Practice 3 module.</p>
        <p>The Log is kept weekly(ish) and will cover what I've done at work that week and my reflections on it.</p>
        
      </div>

      <div className="flex flex-wrap justify-center gap-8 my-8 mx-auto">
        {data.map((entry, i) =>(
          <LogCard entry={entry} key={i}/>
        ))}
      </div>
    </>
  )
}
