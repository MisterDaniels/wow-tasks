import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Tasks from './index';
import { Task as TaskContent, Checkbox } from '../../components';

const components = {
    Task: TaskContent,
    Checkbox
}

const Task = ({ frontMatter: { title }, mdxSource }) => {
    return (
        <Tasks title={ title }>
            <MDXRemote {...mdxSource} components={ components } />
        </Tasks>
    );
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.resolve(process.cwd(), 'src', 'posts'));

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.resolve(process.cwd(), 'src', 'posts', 
        `${slug}.mdx`), 'utf-8');

    const { data: frontMatter, content } = matter(markdownWithMeta);
    const mdxSource = await serialize(content);

    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    }
}

export default Task;