import { useState } from "react";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <main>
      Hello from Vite!
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
