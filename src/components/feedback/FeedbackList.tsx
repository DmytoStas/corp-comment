import { Spinner, ErrorMessage } from "@/components";
import FeedbackItem from "./FeedbackItem";
import { useFeedbackItemsContex } from "@/lib/hooks";

export default function FeedbackList() {
  const { isLoading, errorMessage, fiteredFeedbackItems } =
    useFeedbackItemsContex();

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
