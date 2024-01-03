import { FeedbackList, Header } from "@/components";
import { TFeedbackItem } from "@/lib/type";

type ContainerProps = {
  feedbackItems: TFeedbackItem[];
  errorMessage: string;
  isLoading: boolean;
  handleAddToList: (text: string) => void;
};

export default function Container({
  feedbackItems,
  errorMessage,
  isLoading,
  handleAddToList,
}: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        feedbackItems={feedbackItems}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </main>
  );
}
