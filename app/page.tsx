import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Vercel Customer Success Engineer Exercise 2024
      </h1>
      <p className="mb-4">
        {`▲ Hello! This is Michael Raymond's submission for the CSE take home exercise.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
