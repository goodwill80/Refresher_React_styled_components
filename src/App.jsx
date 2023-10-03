import { Button } from './Components/Button.style';
import { Container } from './Components/Container.style';
import { GlobalStyles } from './GlobalStyles.styles';

function App() {
  return (
    <>
      {/* Put global style anywhere in App */}
      <GlobalStyles />
      <Container>
        <Button buttonLabel="Click this" backgroundColor="violet"></Button>
      </Container>
    </>
  );
}

export default App;
