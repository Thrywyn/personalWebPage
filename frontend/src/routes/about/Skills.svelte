<script lang="ts">
    import LogoSquare from "$lib/components/Styling/LogoSquare.svelte";
    import LogoCloud from "$lib/components/Styling/LogoCloud.svelte";
</script>

<div class="gap-4 mt-8">
    <div class="prose">
        <h2>Skills 🎯</h2>
        <h3>Web Development</h3>
    </div>
    <LogoCloud>
        <LogoSquare>
            <i
                class="fa-brands fa-css3-alt fa-2xl"
                style="color: #214ce5" /><span>CSS</span>
        </LogoSquare>
        <LogoSquare
            ><i
                class="fa-brands fa-square-js fa-2xl"
                style="color: #f0dc4e;" /><span>JavaScript</span></LogoSquare>
        <LogoSquare
            ><img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                alt="Typescript logo"
                class="w-8 h-8" /><span>TypeScript</span></LogoSquare>
        <LogoSquare
            ><i class="fa-brands fa-html5 fa-2xl" style="color: #e54c21" /><span
                >HTML</span
            ></LogoSquare>
    </LogoCloud>
    <div class="prose"><h3>Libraries</h3></div>
    <LogoCloud>
        <LogoSquare
            ><img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                class="w-8 h-8"
                alt="" /><span>TailWind</span>
        </LogoSquare>
        <LogoSquare
            ><img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                alt="Bootstrap logo"
                class="w-8 h-8" /><span>Bootstrap</span>
        </LogoSquare>
        <LogoSquare
            ><svg
                class="fill-token"
                width="32px"
                height="32px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40">
                <path
                    class="dark:fill-white fill-black"
                    fill-rule="evenodd"
                    d="M19.855 10.21c5.07 0 9.398 1.736 12.495 4.588l.057-.017c.388-.12.72-.244.994-.37.879-.406 2.032-1.236 3.46-2.492-.232 2.188-.48 3.794-.747 4.818a19.306 19.306 0 0 1-.662 1.994 15.855 15.855 0 0 1 1.707 4.672c1.221 6.057-.871 8.735-5.727 10.23.037.18.065.373.086.58.173 1.772-.733 4.633-1.82 4.633-.716 0-1.181-.986-1.68-2.426-.155 1.666-.923 3.58-1.813 3.58-.958 0-1.467-1.767-2.21-4.022C23.618 37.75 23.05 40 22.046 40c-1.02 0-.46-3.177-2.181-4.523-8.721.47-16.057-2.718-16.057-11.916 0-1.693.405-3.346 1.147-4.88-.132-.257-.255-.51-.37-.761-.58-1.264-1.275-3.176-2.085-5.737 2.074 1.53 3.665 2.442 4.772 2.735.11.029.226.055.346.077 2.906-2.879 7.248-4.785 12.237-4.785ZM17.82 22.62c-2.947 0-5.336 2.294-5.336 5.124 0 2.83 2.389 5.124 5.336 5.124 2.946 0 5.335-2.294 5.335-5.124 0-2.76-2.27-5.009-5.115-5.12Zm7.573 6.4c-.891 0-1.362 1.883-1.362 2.727 0 .66.224 1.024.589 1.09.885.082.615-1.194 1.056-1.194.47 0 1.02 1.305 1.48 1.128.547-.322.338-1.024.149-1.578-.665-1.394-1.02-2.173-1.912-2.173Zm5.801-6.7c-2.03 0-3.676 2.014-3.676 4.5 0 2.485 1.646 4.5 3.676 4.5 2.03 0 3.677-2.015 3.677-4.5 0-2.486-1.646-4.5-3.677-4.5ZM18.5 25a3 3 0 1 1-.5 5.958 3 3 0 0 0 0-5.917c.162-.027.33-.041.5-.041ZM31 24c1.38 0 2.5 1.343 2.5 3s-1.12 3-2.5 3c-.171 0-.339-.02-.5-.06 1.141-.278 2-1.489 2-2.94 0-1.451-.859-2.662-2-2.94.161-.04.329-.06.5-.06Zm.284-18.586.324.207c.146.093.19.288.096.434l-2.39 3.655a.314.314 0 0 1-.433.093l-.324-.207a.314.314 0 0 1-.095-.434l2.39-3.655a.314.314 0 0 1 .432-.093Zm-23.177.554 1.94 2.75c.1.141.066.337-.076.437l-.319.22a.314.314 0 0 1-.435-.077l-1.94-2.749a.314.314 0 0 1 .076-.438l.318-.22a.314.314 0 0 1 .436.077ZM20.683 0l.58 4.826 2.146-2.385.06 5.942-.426-.094c-1.242-.273-2.369-.41-3.379-.41a9.635 9.635 0 0 0-2.821.399l-.474.143.382-7.432 1.967 3.675L20.683 0Z" />
            </svg>
            <span>SkeletonUI</span>
        </LogoSquare>
        <LogoSquare>
            <img
                src="https://mui.com/static/logo.png"
                alt="material ui logo"
                class="w-8 h-8" />
            <span>MaterialUI</span>
        </LogoSquare>
        <LogoSquare>
            <img
                src="/logos/nextui.png"
                alt="nextUI ui logo"
                class="w-8 h-8" /><span>NextUI</span>
        </LogoSquare>
        <LogoSquare>
            <img
                src="/logos/daisyUI.png"
                alt="daisyUI ui logo"
                class="w-8 h-8" /><span>daisyUI</span>
        </LogoSquare>
    </LogoCloud>

    <div class="prose"><h3>Frameworks</h3></div>
    <LogoCloud>
        <LogoSquare
            ><i class="fa-brands fa-react fa-2xl" style="color: #61dbfb" /><span
                >React</span
            ></LogoSquare>
        <LogoSquare>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
                alt="Svelte logo"
                class="w-8 h-8" />
            <span>Svelte</span>
        </LogoSquare>
    </LogoCloud>

    <div class="prose"><h3>Languages</h3></div>
    <LogoCloud>
        <LogoSquare
            ><img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                alt="Python logo"
                class="w-8 h-8" /><span>Python</span></LogoSquare>
        <LogoSquare
            ><img
                src="https://www.svgrepo.com/show/184143/java.svg"
                alt="Java logo"
                class="w-8 h-8" /><span>Java</span></LogoSquare>
        <LogoSquare
            ><img
                src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
                alt="C logo"
                class="w-8 h-8" /><span>C</span></LogoSquare>
    </LogoCloud>

    <div class="prose"><h3>Databases</h3></div>
    <LogoCloud>
        <LogoSquare
            ><img
                src="https://pocketbase.io/images/logo.svg"
                alt="Pocketbase logo"
                class="w-8 h-8" /><span>Pocketbase</span></LogoSquare>
        <LogoSquare
            ><i class="fa-solid fa-database fa-2xl" /><span>SQL</span
            ></LogoSquare>
    </LogoCloud>

    <div class="prose"><h3>Other</h3></div>
    <LogoCloud>
        <LogoSquare
            ><i class="fa-brands fa-github fa-2xl" /><span>Git</span
            ></LogoSquare>
        <LogoSquare
            ><i class="fa-brands fa-npm fa-2xl" style="color: #cc3534;" /><span
                >npm</span
            ></LogoSquare>
        <LogoSquare
            ><img
                src="https://vitejs.dev/logo-with-shadow.png"
                alt="Vite Logo"
                class="w-8 h-8" /><span>Vite</span></LogoSquare>
        <LogoSquare><span>LaTeX</span></LogoSquare>
        <LogoSquare><span>Markdown</span></LogoSquare>
        <LogoSquare
            ><img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                alt="Figma logo"
                class="w-8 h-8" /><span>Figma</span></LogoSquare>
        <LogoSquare
            ><img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg"
                alt="Notion logo"
                class="w-8 h-8" /><span>Notion</span></LogoSquare>
        <LogoSquare
            ><i class="fa-brands fa-trello fa-2xl" /><span>Trello</span
            ></LogoSquare>
        <LogoSquare
            ><i class="fa-brands fa-slack fa-2xl" /><span>Slack</span
            ></LogoSquare>
    </LogoCloud>

    <div class="prose"><h3>Teamwork</h3></div>
    <LogoCloud>
        <LogoSquare
            ><img src="/logos/agile.png" alt="" class="w-8 h-8" /><span
                >Agile</span
            ></LogoSquare>
        <LogoSquare
            ><img
                src="https://www.scrum.org/themes/custom/scrumorg_v2/assets/images/logo-250.png"
                alt="Scrum logo"
                class="w-8 h-8" /><span>Scrum</span></LogoSquare>
    </LogoCloud>
</div>
