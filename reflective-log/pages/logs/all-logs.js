import { client } from "../../api/client";
import {  gql } from "@apollo/client"
import LogCard from "../../components/log-card";

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
		query {
			logEntryCollection {
				items {
					name,
					slug,
					image {
						url,
					},
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

			<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">

				{data.map((entry, i) => (
					<LogCard entry={entry} key={i}/>  
				))}

			</div>
		</div>
	)
}