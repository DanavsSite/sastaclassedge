import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div>
        <embed
          style={{ width: "100vw", height: "100vh" }}
          src="/ch3-1.hindi.pdf"
          type="application/pdf"
        ></embed>
        <embed
          style={{ width: "100vw", height: "100vh" }}
          src="/ch3-2.hindi.pdf"
          type="application/pdf"
        ></embed>
      </div>
    </>
  );
});
