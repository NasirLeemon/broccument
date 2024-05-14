import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocumentsByAuthor } from "@/app/utils/doc-util";
import { getDocuments } from "@/lib/doc";
import React from "react";

const AuthorPage = ({ params: { name } }) => {
  const document = getDocuments();
  const matchedDoc = getDocumentsByAuthor(document, name);
  return <ContentDisplay id={matchedDoc[0].id} />;
};

export default AuthorPage;
