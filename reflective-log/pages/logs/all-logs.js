import { client } from "../../api/client";
import {  gql } from "@apollo/client"
import Link from "next/link";

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
        query {
            logEntryCollection {
                items {
                    name,
                    slug,
                    date,
                    tags
                }
            }
        }`
    })

    return {
        props: {
            data: data.logEntryCollection.items
        }
    }
}

export default function AllLogs({ data }) {
    return (
        <div>
            <p>All Logs</p>

            {data.map((entry) => (
                <Link href={`${entry.slug}`}>
                    <a>Post</a>
                </Link>   
            ))}
        </div>
    )
}