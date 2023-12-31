import getStories from "../../../lib/get-stories.js";
import Stories from "../../components/Stories.js";

export default async function ShowPage() {
  const stories = await getStories("showstories");

  return <Stories stories={stories} />;
}
