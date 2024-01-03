import { Spinner, ErrorMessage } from "@/components";
import FeedbackItem from "./FeedbackItem";
import { useFeedbackItemsStore } from "../store/feedbackItemsStore";

export default function FeedbackList() {
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);
  const fiteredFeedbackItems = useFeedbackItemsStore((state) =>
    state.getFilteredFeedbackItems()
  );

  return (
    <>
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      <ol className="feedback-list">
        {fiteredFeedbackItems.map((item) => (
          <FeedbackItem key={item.id} feedbackItem={item} />
        ))}
      </ol>
    </>
  );
}
