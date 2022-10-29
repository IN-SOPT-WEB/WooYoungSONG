import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import styled from 'styled-components';

const BackGroud = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
`
function App() {
  return (
    <BackGroud>
      <Header />
      <Content />
    </BackGroud>
  );
}

export default App;
