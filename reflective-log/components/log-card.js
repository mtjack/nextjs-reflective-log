import PostDate from "./post-date";
import Link from "next/dist/client/link";

export default function LogCard({ entry }) {
	const { name, slug, date, coverColor } = entry;

	return (
		<>
			<Link href={`/log/${slug}`}>
				<a>
					<div className="book">
						<div className={`book-cover ${coverColor[0]}`}>
								<div className="book-details flex flex-col w-full">
									<p>{ name },</p>
									<PostDate date={date} />
								</div>
						</div>
						<div className="book-page"></div>
					</div>
				</a>
			</Link>
		</>
	)
}