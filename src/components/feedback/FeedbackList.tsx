import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { TFeedbackItem } from "@/lib/type";

type FeedbackListProps = {
  feedbackItems: TFeedbackItem[];
  errorMessage: string;
  isLoading: boolean;
};

export default function FeedbackList({
  feedbackItems,
  errorMessage,
  isLoading,
}: FeedbackListProps) {
  return (
    <>
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      <ol className="feedback-list">
        {feedbackItems.map((item) => (
          <FeedbackItem key={item.id} feedbackItem={item} />
        ))}
      </ol>
    </>
  );
}
