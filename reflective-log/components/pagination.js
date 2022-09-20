import Link from "next/link";

export default function Pagination(props) {
    const { totalPages, currentPage} = props;

    const prevPageUrl = `/log/pages/${parseInt(currentPage, 10) - 1}`;
    const nextPageUrl = `/log/pages/${parseInt(currentPage, 10) + 1}`
    const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
    const prevDisabled = parseInt(currentPage, 10) === 1

    return (
        <ol class="flex justify-between max-w-md my-2 mx-auto">
            <li>
                {prevDisabled && <span>{"<<"}</span>}
                {!prevDisabled && (
                    <Link href={"1"}>
                        <a>{"<<"}</a>
                    </Link>
                )}
            </li>

            <li>
                {prevDisabled && <span>{"<"} Previous Page</span>}
                {!prevDisabled && (
                    <Link href={prevPageUrl}>
                        <a>{"<"} Previous Page</a>
                    </Link>
                )}
            </li>

            <li>
                Page {currentPage} of {totalPages}
            </li>

            <li>
                {nextDisabled && <span>Next Page {">"}</span>}
                {!nextDisabled && (
                    <Link href={nextPageUrl}>
                        <a>Next Page {">"}</a>
                    </Link>
                )}
            </li>

            <li>
                {nextDisabled && <span>{">>"}</span>}
                {!nextDisabled && (
                    <Link href={`${totalPages}`}>
                        <a>{">>"}</a>
                    </Link>
                )}
            </li>
        </ol>
    )
}