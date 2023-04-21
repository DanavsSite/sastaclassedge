import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();
  return (
    <>
      <button onClick$={() => nav("/hindi/ch3")}>CH. 3 </button>
      <br />
      <br />
    </>
  );
});
