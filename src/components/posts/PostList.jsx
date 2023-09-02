import PostItem from "./PostItem";

function PostList({posts, DeletePost}) {
    return ( 
        <div>
            {posts.map(post => <PostItem id = {post.id} name = {post.title} body = {post.body} DeletePost = {DeletePost} key = {post.id}/>)}
        </div>
     );
}

export default PostList;