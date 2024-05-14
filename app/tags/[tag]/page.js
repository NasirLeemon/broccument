import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocumentsByTags } from "@/app/utils/doc-util";
import { getDocuments } from "@/lib/doc";

const TagPage = ({ params }) => {
  const { tag } = params;

  const document = getDocuments();
  const matchedDoc = getDocumentsByTags(document, tag);

  return <ContentDisplay id={matchedDoc[0]?.id} />;
};

export default TagPage;
