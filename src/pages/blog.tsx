import * as React from 'react';
import { Link } from 'gatsby';

const BlogPage = () => {
    return (
        <main>
            <h1>Blog</h1>
            <Link to="/">Back to Home</Link>
            <p>Hi there! I'm Jeffrey Liu, the creator this site and a third-year student at the university of Waterloo.</p>
        </main>
       
    )
}

export const Head = () => <title>Blog</title>

export default BlogPage