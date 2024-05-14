import Link from "next/link";
import capitalizeFirstLetter from "../utils/capitalFirstLetter";

export default function Tag({ tag }) {
  return (
    <Link
      key={tag}
      className="bg-gray-200 p-1 rounded-md mr-2 text-xs"
      href={`/tags/${tag}`}
    >
      {capitalizeFirstLetter(tag)}
    </Link>
  );
}
