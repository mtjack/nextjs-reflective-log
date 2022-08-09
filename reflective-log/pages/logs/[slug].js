import { client } from "../../api/client";
import PostDate from "../../components/post-date";
import { gql } from "@apollo/client";

export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`
		query {
			logEntryCollection {
				items {
					slug
				}
			}
		}
		`
	})

	const paths = data.logEntryCollection.items.map(log => ({
		params: { slug: log.slug }
	}))

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const { data } = await client.query({
		query: gql`
		query {
			logEntryCollection(where: {slug:"${params.slug}"}) {
				items {
					name,
					slug,
					tags,
					date,
					content {
						json
					}
				}
			}
		}`
	})

	return {
		props: {
			singleEntry: data.logEntryCollection.items[0]
		}
	}
}

export default function singleEntry({ singleEntry }) {
	return (
		<div>
			<p>This is a single post</p>

			<PostDate date={singleEntry.date} />
		</div>
	)
}