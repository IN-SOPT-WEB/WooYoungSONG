import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import styled from 'styled-components';
import './App.css';

const BackGroud = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
