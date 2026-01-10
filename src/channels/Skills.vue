<template>
    <div class="screen">
        <div class="content-container">
            <h1 class="title">What I do</h1>
            <p class="subtitle">
                Here are some of the technical skills and tools I have experience with:
            </p>

            
            <div class="icons-container">
                <div class="icon-label">SKILLS</div>

                <div class="icon-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" />
                    <span>VUE.JS</span>
                </div>
                
                <div class="icon-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" />
                    <span>ANGULAR</span>
                </div>
                
                <div class="icon-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                    <span>TYPESCRIPT</span>
                </div>
                
                <div class="icon-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                    <span>JAVASCRIPT</span>
                </div>
                
                <div class="icon-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                    <span>HTML</span>
                </div>

                <div class="icon-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                    <span>CSS</span>
                </div>
                
                <div class="icon-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SCSS" />
                    <span>SCSS</span>
                </div>
                
                <div class="icon-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                    <span>NODE.JS</span>
                </div>
            

                <div class="icon-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                    <span>GITHUB</span>
                </div>
                
                <div class="icon-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                    <span>FIGMA</span>
                </div>

                <div class="icon-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                    <span>REACT.JS</span>
                </div>
            
               <div class="icon-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                    <span>DOCKER</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
@font-face {
    font-family: 'Sauce Tomato';
    src: url('../assets/Sauce Tomato.otf') format('opentype');
}

.screen {
    position: relative;
    width: 100%;
    height: 100%;
    --s: 41px;
    --c1: var(--color-yellow);
    --c2: var(--color-turquoise);
    --c3: var(--color-pink);
    
    --_g:,var(--c1) 25%,var(--c2) 0 150deg,var(--c1) 0 240deg,#0000 0;
    background:
        conic-gradient(from  60deg at calc(3.866*var(--s)),var(--c2) 60deg,#0000 0)
         calc(1.366*var(--s)) calc(1.366*var(--s)),
        conic-gradient(from 240deg at calc( .866*var(--s)),var(--c2) 60deg,#0000 0)
         calc(2.366*var(--s)) calc(1.366*var(--s)),
        conic-gradient(at var(--s) var(--s),#0000 75%,var(--c1) 0)
         calc(1.366*var(--s)) calc(var(--s)/-2),
        conic-gradient(from 30deg at calc(-.288*var(--s)) 50%, #0000 120deg,var(--c3) 0),
        conic-gradient(from 90deg at calc(3.732*var(--s)) calc(1.866*var(--s)),
         var(--c3) 120deg,#0000 0),
        conic-gradient(from -30deg at calc(3.732*var(--s)) calc(.866*var(--s)),
         var(--c3) 120deg,var(--c1) 0 210deg,#0000 0),
        conic-gradient(from 150deg at calc( .866*var(--s))var(--_g)),
        conic-gradient(from -30deg at calc(2.866*var(--s))var(--_g)) var(--c3);
    background-size: calc(4.732*var(--s)) calc(2.732*var(--s));
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
}

.content-container {
    position: relative;
    z-index: 2;
    background: var(--color-turquoise-dark);
    border-radius: 8px;
    padding: 3em 4em;
    max-width: 900px;
border: 1px solid var(--color-dark);
    box-shadow: 12px 16px 0 var(--color-dark);}

.title {
    font-family: 'Sauce Tomato', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-background);
    margin: 0 0 0.5em 0;
    text-align: center;
}

.subtitle {
    color: var(--color-background);
    font-size: 1em;
    line-height: 1.6;
    text-align: center;
    margin: 0 0 2em 0;
    max-width: 700px;
}

.icons-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2em 1.5em;
    margin-top: 2em;
}

.icon-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8em;
    transition: transform 0.3s ease;
}

.icon-card:hover {
    transform: translateY(-8px);
}

.icon-card img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.icon-card span {
    color: var(--color-background);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: center;
}

.icon-label {
    position: absolute;
    top: 10y0px;
    left: 10px;
    background: #ffc107;
    color: #1a1a1a;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 4px 12px;
    transform: rotate(-90deg);
    transform-origin: left bottom;
    letter-spacing: 2px;
}

@media (max-width: 1000px) {
    .content-container {
        padding: 2em 2.5em;
        max-width: 700px;
    }
    
    .icons-container {
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5em 1em;
    }
    
    .title {
        font-size: 2.5rem;
    }
}

@media (max-width: 720px) {
    .content-container {
        padding: 1.5em 1.5em;
        margin: 1em;
    }
    
    .icons-container {
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5em 1em;
    }
    
    .title {
        font-size: 2rem;
    }
    
    .subtitle {
        font-size: 0.85rem;
    }
    
    .icon-card img {
        width: 50px;
        height: 50px;
    }
}
</style>
