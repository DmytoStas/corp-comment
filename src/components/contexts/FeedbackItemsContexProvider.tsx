import { createContext, useMemo, useState } from "react";
import { type TFeedbackItem } from "@/lib/type";
import { useFeedbackItems } from "@/lib/hooks";

type FeedbackItemsContexProviderProps = {
  children: React.ReactNode;
};

type TFeedbackItemsContext = {
  fiteredFeedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  companyList: string[];
  handleAddToList: (text: string) => void;
  handleSelectCompany: (company: string) => void;
};

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(
  null
);

export default function FeedbackItemsContexProvider({
  children,
}: FeedbackItemsContexProviderProps) {
  const [selectedCompany, setSelectedCompany] = useState("");
  const { feedbackItems, errorMessage, isLoading, setFeedbackItems } =
    useFeedbackItems();

  const fiteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter((item) => item.company === selectedCompany)
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((item, index, array) => array.indexOf(item) === index),
    [feedbackItems]
  );

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    setFeedbackItems((prev) => [...prev, newItem]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <FeedbackItemsContext.Provider
      value={{
        fiteredFeedbackItems,
        isLoading,
        errorMessage,
        companyList,
        handleAddToList,
        handleSelectCompany,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
}
