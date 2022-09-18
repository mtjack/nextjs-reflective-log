import Link from "next/link";

export default function Pagination(props) {
    const { totalPages, currentPage} = props;

    const prevPageUrl = currentPage === "2" ? "/blog" : `/blog/pages/${parseInt(currentPage, 10) - 1}`;
    const nextPageUrl = `/blog/pages/${parseInt(currentPage, 10) + 1}`

    const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
    const prevDisabled = parseInt(currentPage, 10) === 1

    return (
        <ol>
            <li>
                {prevDisabled && <span>Previous Page</span>}
                {!prevDisabled && (
                    <Link href={prevPageUrl}>
                        <a>Previous Page</a>
                    </Link>
                )}
            </li>

            <li>
                {currentPage} of {totalPages}
            </li>

            <li>
                {nextDisabled && <span>Next Page</span>}
                {!nextDisabled && (
                    <Link href={nextPageUrl}>
                        <a>Next Page</a>
                    </Link>
                )}
            </li>
        </ol>
    )
}