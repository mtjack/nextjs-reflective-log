import { getPosts, getTotalPosts } from "../../../api/client";
import { Config } from "../../../utils/config";
import LogCard from "../../../components/log-card";
import Pagination from "../../../components/pagination";

export async function getStaticPaths() {
    const totalPosts = await getTotalPosts();
    const totalPages = Math.ceil(totalPosts / Config.pagination.pageSize);

    const paths = []

    for (let page = 2; page <= totalPages; page++) {
        paths.push({ params: {page: page.toString()} })
    }

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const posts = await getPosts(params.page)
    const totalPages = Math.ceil(posts.total / Config.pagination.pageSize)

    return {
        props: {
            data: posts.items,
            totalPages,
            currentPage: params.page,
        },
    }
}

export default function BlogIndexPage({ data, currentPage, totalPages }) {
    return (
        <>
            <div className="md:max-w-lg lg:max-w-5xl my-0 mx-auto">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-y-14 place-items-center">
                    {data.map((entry, i) => (
                        <LogCard entry={entry} key={i}/>  
                    ))}
                </div>
            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage}/>
        </>
    )
}

