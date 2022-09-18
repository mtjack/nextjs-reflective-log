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
					date,
					coverColor
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
		<div className="md:max-w-lg lg:max-w-5xl my-0 mx-auto">
			<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-y-14 place-items-center">
				{data.map((entry, i) => (
					<LogCard entry={entry} key={i}/>  
				))}
			</div>
		</div>
	)
}