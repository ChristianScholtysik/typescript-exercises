export {};

type Comment = { postId: number; id: number; email: string; body: string };

fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then((response: Response) => {
    if (!response.ok) {
      console.log("Response was not ok");
    }
    return response.json();
  })
  .then((comments: Comment[]) => {
    comments.forEach((comment: Comment) => {
      console.log(comment.email);
    });
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done with fetching the comments");
  });

type Post = { userId: number; id: number; title: string; body: string };

fetch(" https://jsonplaceholder.typicode.com/posts")
  .then((response: Response) => {
    if (!response.ok) {
      console.log("Response was not ok");
    }
    return response.json();
  })
  .then((posts: Post[]) => {
    console.log("AllPosts: ", posts);

    const highestPostId = Math.max(...posts.map((post) => post.id));
    console.log("Highest Post Id : ", highestPostId);

    const sortedTitles = posts.sort((a, b) => a.title.length - b.title.length);
    const shortestTitle = sortedTitles[0].title;
    console.log("Shortest Title: ", shortestTitle);

    const sortedBodyText = posts.sort((a, b) => a.body.length - b.body.length);
    const longestBodyText = sortedBodyText[0].body;
    console.log("Longest Body Text: ", longestBodyText);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done with fetching the posts");
  });
