import { ApolloClient, InMemoryCache, HttpLink, from, gql } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { Config } from "../utils/config";

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.forEach(({ message, locations, path }) => 
			console.log(
					`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
			),
		);

	if (networkError) console.log(`[Network error]: ${networkError}`);
})

const httpLink = new HttpLink({
	uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}/`,
	credentials: 'include',
	headers: {
		authorization: `Bearer ${process.env.ACCESS_TOKEN}`
	}
});

export const client = new ApolloClient({
	link: from([errorLink, httpLink]),
	cache: new InMemoryCache()
});

export async function getTotalPosts() {
	const { data } = await client.query({
		query: gql`
		query {
			logEntryCollection {
				total
			}
		}
		`
	})

	return data.logEntryCollection.total
}

export async function getPosts(page) {
	const skipMultiplier = page === 1 ? 0 : page - 1;
	const skip = skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;

	const { data } = await client.query({
		query: gql`
		query {
			logEntryCollection(limit: ${Config.pagination.pageSize}, skip: ${skip}, order: date_DESC) {
				total,
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

	return (data.logEntryCollection);
}
