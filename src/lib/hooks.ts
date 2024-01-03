import { useContext, useEffect, useState } from "react";

import { FeedbackItemsContext } from "@/components/contexts/FeedbackItemsContexProvider";
import { type TFeedbackItem } from "./type";

export function useFeedbackItemsContex() {
  const context = useContext(FeedbackItemsContext);

  if (!context) {
    throw new Error(
      "FeedbackItemsContext is not defined in FeedbackList component"
    );
  }

  return context;
}

export function useFeedbackItems() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFeedbackItems = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!res.ok) {
          throw new Error();
        }

        const data = await res.json();
        setFeedbackItems(data.feedbacks);
      } catch (e) {
        setErrorMessage("Something went wrong");
      }

      setIsLoading(false);
    };

    fetchFeedbackItems();
  }, []);

  return {
    feedbackItems,
    errorMessage,
    isLoading,
    setFeedbackItems,
  };
}
