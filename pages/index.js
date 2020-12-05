import tw, { styled } from 'twin.macro';

const Container = styled.div`
    ${tw`container bg-blue-900`}
`;

export default function Home() {
    return (
        <div className="text-gray-100">
            <Container>from styled component</Container>
            <div className="container bg-red-900">from classname</div>
        </div>
    );
}
