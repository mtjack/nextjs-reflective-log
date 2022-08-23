import PostDate from "./post-date";
import Link from "next/dist/client/link";
import { URLPattern } from "next/server";

export default function LogCard({ entry }) {
	const { name, slug, image, date, tags } = entry;

	return (
		<>
			<Link href={`${slug}`}>
				<a>
					<div className="book" >
						<div className="book-cover" style={{backgroundImage: `url(${image.url})`}}>
								<div className="book-details flex w-full gap-1">
									<p>{ name } -</p>
									<PostDate date={date} />
								</div>
						</div>
						<div className="book-page"></div>
					</div>
				</a>
			</Link>

			<ul>
				{tags.map((tag, i) => (
					<li key={i}>{tag}</li>
				))}
			</ul>
		</>
	)
}