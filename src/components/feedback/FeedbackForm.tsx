import { useState } from "react";

import { MAX_CHAR } from "@/lib/contants";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

export default function FeedbackForm({ onAddToList }: FeedbackFormProps) {
  const [text, setText] = useState("");
  const [isValidIndicator, setIsValidIndicator] = useState(false);
  const [isInvalidIndicator, setIsInvalidIndicator] = useState(false);

  const charCount = MAX_CHAR - text.length;

  const handleChange = (e: ChangeEvent) => {
    const newText = e.target.value;

    if (newText.length > MAX_CHAR) {
      return;
    }

    setText(newText);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.includes("#") && text.length >= 5) {
      setIsValidIndicator(true);
      setTimeout(() => setIsValidIndicator(false), 2000);
    } else {
      setIsInvalidIndicator(true);
      setTimeout(() => setIsInvalidIndicator(false), 2000);
      return;
    }
    onAddToList(text);

    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`form ${isValidIndicator ? "form--valid" : ""} ${
        isInvalidIndicator ? "form--invalid" : ""
      }`}
    >
      <textarea
        id="feedback-textarea"
        value={text}
        onChange={handleChange}
        placeholder=" "
        spellCheck={false}
        maxLength={150}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
