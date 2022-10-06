import { useRouter } from "next/router";

// our-domian.com/news/something-important

function DetailsPage() {
  const router = useRouter();

  // console.log(router.query.newsId);
  const newsId = router.query.newsId;

  return <h1>The Details Page</h1>;
}

export default DetailsPage;
