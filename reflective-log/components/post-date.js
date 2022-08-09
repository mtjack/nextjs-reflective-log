export default function PostDate({ date }) {
  const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	const dateOriginal = Date.parse(date);
	const createPostDate = new Date(dateOriginal);

	const postDate = `${createPostDate.getDate()} ${months[createPostDate.getMonth()]} ${createPostDate.getFullYear()}`;

	return (
		<p>{postDate}</p>
	)
}