import { IPost } from "./contracts/IPost";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";
const contentDiv = document.getElementById("content");
const searchField = document.getElementById("search-field") as HTMLInputElement;
const searchButton = document.getElementById("search-btn") as HTMLButtonElement;

let allPosts: IPost[] = [];

function fetchAndDisplay(url: string) {
  fetch(url)
    .then((response: Response) => {
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((posts: IPost[]) => {
      displayPosts(posts);
      allPosts = posts;
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

//* Function to filter posts by title
function searchPosts(searchFieldValue: string): IPost[] {
  return allPosts.filter((post) =>
    post.title.toLowerCase().includes(searchFieldValue.toLowerCase())
  );
}

//* Function to create a list of posts
function createToDoList(posts: IPost[]): string {
  const sortedPosts = posts.sort((a, b) => a.title.localeCompare(b.title));
  console.log(sortedPosts);

  const listElements = sortedPosts.map((post: IPost) => {
    const completionCheck = post.completed;
    return `<li style="color: ${completionCheck ? "red" : "black"}">
      <p>Id: ${post.id}</p>
      <p>UserId: ${post.userId}</p>
      <p>Title: ${post.title}</p>
      <p>Completed?: ${completionCheck}</p>
    </li>`;
  });

  return `<ul>${listElements.join("")}</ul>`;
}

//* Function to display posts
function displayPosts(posts: IPost[]) {
  if (contentDiv) {
    contentDiv.innerHTML = createToDoList(posts);
  }
}

//* Event listener
searchButton?.addEventListener("click", (event: Event) => {
  event.preventDefault();
  const searchFieldValue = searchField.value;
  console.log("Button clicked");
  searchPosts(searchFieldValue);
  const result = searchPosts(searchFieldValue);
  displayPosts(result);
});

//* Initial fetch
fetchAndDisplay(BASE_URL);
