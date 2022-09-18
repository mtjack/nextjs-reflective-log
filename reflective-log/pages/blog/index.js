import { getPosts } from "../../api/client";
import { Config } from "../../utils/config";
import LogCard from "../../components/log-card";
import Pagination from "../../components/pagination";

export async function getStaticProps() {
    const posts = await getPosts(1)
    const totalPages = Math.ceil(posts.total / Config.pagination.pageSize)

    return {
        props: {
            posts: posts.items,
            totalPages,
            currentPage: "1",
        },
    }
}

export default function logIndex(props) {
    return (
        <>
            <div className="md:max-w-lg lg:max-w-5xl my-0 mx-auto">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-y-14 place-items-center">
                    {props.posts.map((entry, i) => (
                        <LogCard entry={entry} key={i}/>  
                    ))}
                </div>
            </div>

            <Pagination totalPages={props.totalPages} currentPage={props.currentPage}/>
        </>
    )
}