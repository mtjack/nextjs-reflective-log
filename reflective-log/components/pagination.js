import Link from "next/link";

export default function Pagination(props) {
    const { totalPages, currentPage} = props;

    const prevPageUrl = `/log/pages/${parseInt(currentPage, 10) - 1}`;
    const nextPageUrl = `/log/pages/${parseInt(currentPage, 10) + 1}`
    const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
    const prevDisabled = parseInt(currentPage, 10) === 1

    return (
        <ol className="btn-group flex justify-center mb-5">
            <li className="btn">
                {prevDisabled && <span>{"<<"}</span>}
                {!prevDisabled && (
                    <Link href={"1"}>
                        <a>{"<<"}</a>
                    </Link>
                )}
            </li>

            <li className="btn">
                {prevDisabled && <span>{"<"}</span>}
                {!prevDisabled && (
                    <Link href={prevPageUrl}>
                        <a>{"<"}</a>
                    </Link>
                )}
            </li>

            <li className="btn">
                Page {currentPage} of {totalPages}
            </li>

            <li className="btn">
                {nextDisabled && <span>Next {">"}</span>}
                {!nextDisabled && (
                    <Link href={nextPageUrl}>
                        <a> {">"}</a>
                    </Link>
                )}
            </li>

            <li className="btn">
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