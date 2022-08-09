import PostDate from "./post-date";
import Link from "next/dist/client/link";

export default function LogCard({ entry }) {
	const {name, slug, date, tags} = entry;

	return (
		<div>
			<h2>{name}</h2>

			<Link href={`${slug}`}>
				<a>View post</a>
			</Link>

			<PostDate date={date} />

			<ul>
				{tags.map((tag) => (
						<li>{tag}</li>
				))}
			</ul>
		</div>
	)
}