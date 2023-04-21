import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div>
        <embed
          style={{ width: "100vw", height: "100vh" }}
          src="/ch3-hindi.pdf"
          type="application/pdf"
        ></embed>
      </div>
    </>
  );
});
