import { component$, useSignal } from "@builder.io/qwik";

import qwikLogo from "./assets/qwik.svg";
import viteLogo from "/vite.svg";
import "./app.css";

export const App = component$(() => {
    const count = useSignal(0);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} class="logo" alt="Vite logo" />
                </a>
                <a href="https://qwik.builder.io" target="_blank">
                    <img src={qwikLogo} class="logo qwik" alt="Qwik logo" />
                </a>
            </div>
            <h1>Vite + Qwik</h1>
            <div class="card">
                <h2>activate workflow</h2>
                <button onClick$={() => count.value++}>
                    count is {count.value}
                </button>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt qui earum cupiditate similique?
            </p>
            <p class="read-the-docs">
                Click on the Vite and Qwik logos to learn more
            </p>
        </>
    );
});
