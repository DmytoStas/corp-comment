import { FeedbackForm, Logo, PageHeading, Pattern } from "@/components";
import { useFeedbackItemsContex } from "@/lib/hooks";

export default function Header() {
  const { handleAddToList } = useFeedbackItemsContex();

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddToList} />
    </header>
  );
}
