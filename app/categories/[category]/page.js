import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocumentsByCategory } from "@/app/utils/doc-util";
import { getDocuments } from "@/lib/doc";
import React from "react";

const CategoryPage = ({ params: { category } }) => {
  const document = getDocuments();
  const matchedDoc = getDocumentsByCategory(document, category);

  return <ContentDisplay id={matchedDoc[0].id} />;
};

export default CategoryPage;
