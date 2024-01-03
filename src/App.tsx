import { Container, Footer, HashtagList } from "./components";
import FeedbackItemsContexProvider from "./components/contexts/FeedbackItemsContexProvider";

function App() {
  return (
    <div className="app">
      <Footer />

      <FeedbackItemsContexProvider>
        <Container />

        <HashtagList />
      </FeedbackItemsContexProvider>
    </div>
  );
}

export default App;
