
// function Title(props){
//   return <h1> {props.children} </h1>

import Footer from "../src/components/commons/Footer";
import Menu from "../src/components/commons/Menu";

export default function Home() {
    return (
        <div style={{
            flex: '1',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}
        >
            <Menu />
            <Footer />
        </div>
    )
    // <Title>My page</Title>
}
