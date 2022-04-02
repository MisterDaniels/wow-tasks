import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
`;

const Details = styled.div`
    flex: 1;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;

const Home = () => {
    return (
        <Wrapper>
            <Details className="container">
                <main>
                    <h1 className="text-gray-500 font-normal mt-1">
                        Welcome to <a href="https://nextjs.org">Next.js!</a>
                    </h1>
                </main>
            </Details>
        </Wrapper>
    );
}

export default Home;