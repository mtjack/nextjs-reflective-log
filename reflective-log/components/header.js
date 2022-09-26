import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav className="navbar bg-base-100">
                <div className="flex-1">
                    <Link href={"/"}>
                        <a className="btn btn-ghost normal-case text-xl">Reflective Log</a>
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link href={"/log/pages/1"}>
                            <a>All Logs</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about"}>
                            <a>About</a>
                        </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}