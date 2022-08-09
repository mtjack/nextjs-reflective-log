import Link from "next/dist/client/link";

export default function LogCard({ entry }) {
	const {name, slug, date, tags} = entry;
	
	const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

	const DateUTC = Date.parse(date);
	const createPostDate = new Date(DateUTC);

	const postDate = `${createPostDate.getDate()} ${months[createPostDate.getMonth()]} ${createPostDate.getFullYear()}`;

	return (
		<div>
			<h2>{name}</h2>

			<Link href={`${slug}`}>
				<a>View post</a>
			</Link>

			<p>{postDate}</p>

			<ul>
				{tags.map((tag) => (
						<li>{tag}</li>
				))}
			</ul>
		</div>
	)
}