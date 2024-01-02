import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeedbackItems(data.feedbacks);
      });
  }, []);

  return (
    <ol className="feedback-list">
      {feedbackItems.map((item) => (
        <FeedbackItem key={item.id} feedbackItem={item} />
      ))}
    </ol>
  );
}
