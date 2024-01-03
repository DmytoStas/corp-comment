import { FeedbackForm, Logo, PageHeading, Pattern } from "@/components";
import { useFeedbackItemsStore } from "../store/feedbackItemsStore";

export default function Header() {
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={addItemToList} />
    </header>
  );
}
