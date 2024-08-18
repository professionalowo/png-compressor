import ReactMarkdown from "react-markdown";
import markdown from "../markdown/about.md";
export function AboutScreen() {
  return <ReactMarkdown children={markdown} skipHtml />;
}
