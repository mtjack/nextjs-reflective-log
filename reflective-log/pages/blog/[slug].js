import { client } from "../../api/client";
import PostDate from "../../components/post-date";
import { gql } from "@apollo/client";
import Link from "next/dist/client/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


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
			<h1>{singleEntry.name}</h1>

			<PostDate date={singleEntry.date} />

			<div className="prose lg:prose-xl">
				{documentToReactComponents(singleEntry.content.json)}
			</div>

			<Link href={"/logs/all-logs"}>
				<a>Back to all logs</a>
			</Link>
		</div>
	)
}