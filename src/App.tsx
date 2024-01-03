import { useEffect } from "react";
import { Container, Footer, HashtagList } from "./components";
import { useFeedbackItemsStore } from "./components/store/feedbackItemsStore";

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Footer />

      <Container />

      <HashtagList />
    </div>
  );
}

export default App;
