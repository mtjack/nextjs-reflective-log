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
		<div className="bg-base-200">
			<div className="flex flex-col items-center gap-3 mb-5 py-10">
				<h1 className="text-6xl border-b-2">{singleEntry.name}</h1>
				<PostDate date={singleEntry.date} />
			</div>

			<div className="prose lg:prose-xl pb-6 px-4 mx-auto">
				{documentToReactComponents(singleEntry.content.json)}

				<Link href={`/log/pages/1`}>
					<a className="btn btn-secondary my-3">Back to all logs</a>
				</Link>
			</div>

			
		</div>
	)
}