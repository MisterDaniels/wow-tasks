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
        mb-8
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

const Logo = styled.h1`
    ${tw`
        text-5xl
        font-bold
        mb-16
    `}
`;

const Title = styled.h1`
    ${tw`
        text-3xl
        font-bold
        mb-3
    `}
`;

const TaskContent = styled.div`

`;

export default function Tasks(props) {
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
            <Logo>
                WOW Tasks
            </Logo>
            <TaskContent>
                <Header>
                    <LeftHeader>
                        <Title>
                            { props.title }
                        </Title>
                        <Faction />
                    </LeftHeader>
                    <RightHeader>

                    </RightHeader>
                </Header>
                { props.children }
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