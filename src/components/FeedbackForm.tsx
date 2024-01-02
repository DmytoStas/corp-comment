import { useState } from "react";

import { MAX_CHAR } from "@/lib/contants";

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

export default function FeedbackForm() {
  const [text, setText] = useState("");

  const charCount = MAX_CHAR - text.length;

  const handleChange = (e: ChangeEvent) => {
    const newText = e.target.value;

    if (newText.length > MAX_CHAR) {
      return;
    }

    setText(newText);
  };

  return (
    <form className="form">
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
