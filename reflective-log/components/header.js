import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-col justify-center bg-slate-600 p-4 my-0 mx-auto">
            <h1>Personal Reflective Log</h1>
            <nav>
                <ul className="flex justify-center gap-2">
                    <li>
                        <Link href={"/"}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/log/pages/1"}>
                            <a>Log</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}