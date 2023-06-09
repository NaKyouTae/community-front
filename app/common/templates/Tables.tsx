function Tables() {
    const posts = [
        { id: '', no: 0, title: '', createdAt: '', views: 0}
    ]

    return (
        <div>
            <div className={"table_header"}>
                <div>번호</div>
                <div>제목</div>
                <div>생성일</div>
                <div>조회수</div>
            </div>
            <div className={"table_body"}>
                {
                    posts.map((post: any) => (
                        <div key={post.id}>
                            <div>{post.no}</div>
                            <div>{post.title}</div>
                            <div>{post.createdAt}</div>
                            <div>{post.views}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Tables