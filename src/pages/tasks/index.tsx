import styled from 'styled-components';
import tw from 'twin.macro';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Faction from '../../components/Faction';

const Container = styled.div`
    ${tw`
        w-full
        py-20
        px-40
    `}
`;

const Header = styled.div`
    ${tw`
        flex
    `}
`;

const LeftHeader = styled.div`
    ${tw`
        w-6/12
        flex
        flex-col
    `}
`;

const RightHeader = styled.div`
    ${tw`
        w-6/12
        flex
        flex-col
    `}
`;

const Title = styled.h1`
    ${tw`
        text-3xl
        font-bold
    `}
`;

const TaskContent = styled.div`

`;

export default function Tasks() {
    return(
        <Container>
            <Head>
                <link 
                    type="text/css" 
                    href="https://wow.zamimg.com/css/basic.css?16" 
                    rel="stylesheet" />
                <script 
                    type="text/javascript"
                    src="/js/wowhead.js" />
                <script 
                    type="text/javascript" 
                    src="https://wow.zamimg.com/widgets/power.js" />
            </Head>
            <Header>
                <LeftHeader>
                    <Title>
                        Level up from 1-50 in 6.2h!
                    </Title>
                    <Faction />
                </LeftHeader>
                <RightHeader>

                </RightHeader>
            </Header>
            <TaskContent>
                <a href="https://www.wowhead.com/item=31015">hai</a>
            </TaskContent>
        </Container>
    );
}

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.resolve(process.cwd(), 'src', 'posts'));

    const posts = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(path.resolve(process.cwd(), 
            'src', 'posts', filename), 'utf-8');
        const { data: frontMatter } = matter(markdownWithMeta);

        return {
            frontMatter,
            slug: filename.split('.')[0]
        }
    });

    return {
        props: {
            posts
        }
    }
}