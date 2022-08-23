export default function PostDate({ date }) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

	const dateOriginal = Date.parse(date);
	const createPostDate = new Date(dateOriginal);

	const postDate = `${createPostDate.getDate()} ${months[createPostDate.getMonth()]} ${createPostDate.getFullYear()}`;

	return (
		<p>{postDate}</p>
	)
}