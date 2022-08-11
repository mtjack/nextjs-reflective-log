import Link from "next/link";

export default function Home() {
  return (
    <Link href={"/logs/all-logs"}>
      <a>View all logs</a>
    </Link>
  )
}
