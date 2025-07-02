import React from "react";

export default function PostContent() {
  return (
    <section className="bg-white p-8 rounded-lg shadow-sm flex-grow">
      <h1 className="text-4xl font-bold mb-2 text-slate-800">
        Getting Started with Next.js 14 and Flex
      </h1>
      <p className="text-sm text-slate-500 mb-8">Published on July 1, 2025</p>
      <article className="prose prose-lg max-w-none prose-slate">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
        </p>
        <p>
          Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
          fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
          scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
        </p>
      </article>
    </section>
  );
}
