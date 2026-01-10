<template>
    <div class="screen">
        <span class="text-box">Hello, I'm Carla!</span>
        <!-- <span class="text-box"></span> -->
        <div class="cookie"></div>
        <div class="cookie"></div>
        <div class="cookie"></div>
        
        <div class="see-more">
            <span>* Welcome to my portfolio! * Glad you're here :) * Feel free to explore my CV, recent projects and more! * </span>
        </div>
        
        <div class="picture-wrap">
            <img class="picture" src="../assets/me_cutout.png" alt="Profile Picture" />
            <div class="speech-bubble">I'm a software developer based in Germany. I specialize in frontend development and love creating beautiful and user-friendly interfaces.</div>
        </div>
    </div>
</template>
<script setup></script>
<style scoped>
@font-face {
    font-family: 'Sauce Tomato';
    src: url('../assets/Sauce Tomato.otf') format('opentype');
}

@keyframes rotateCookie {
    from {
        transform: rotate(-0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.screen {
    width: 100%;
    height: 100%;
    background:
        /* linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 60%), */
        repeating-conic-gradient(
            from -20deg at 80% 90%,
            var(--color-pink-light) 0deg 12deg,
            var(--color-turquoise-light) 12deg 24deg,
            var(--color-yellow) 24deg 36deg,
            var(--color-red-light) 36deg 48deg,
            var(--color-yellow-light) 48deg 60deg
        );
}


.picture-wrap {
    position: absolute;
    bottom: -80px;
    right: -5%;
}

.picture {
    width: 600px;
    display: block;
    filter: drop-shadow(5px 10px 0 var(--color-dark));
}

@media (max-width: 1000px) {
    .picture-wrap {
        right: -80px;
    }
}


.text-box {
    border-radius: 2px;
    /* min-width: 40%; */
    /* border: 1px solid var(--color-border); */
    /* box-shadow: 10px 15px 0 var(--color-dark); */
    align-content: center;
    text-align: left;
    padding: 20px;
    font-size: 6rem;
    line-height: 1.2;
    font-family: 'Sauce Tomato', 'Arial', sans-serif;
    color: var(--color-red);
    /* text-transform: uppercase; */
    font-weight: 800;
    text-shadow: 5px 5px 0 var(--color-white), 10px 10px 0 var(--color-pink-light);
    /* background-color: var(--color-red-dark); */
    position:absolute;
    left: 5%;
    top: 5%;
    /* font-weight: bold; */
}

.speech-bubble {
    z-index: 4;
    background: var(--color-yellow-light);
    border-radius: .4em;
    position: absolute;
    right: calc(100% + -220px);
    top: 50%;
    transform: translateY(-60%);
    width: 270px;
    color: var(--color-dark);
    font-size: 1.3em;
    padding: 0.5em;
    border: 1px solid var(--color-dark);
    box-shadow: 6px 8px 0 var(--color-dark);
}

.speech-bubble:after {
	content: '';
	position: absolute;
	right: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 1.156em solid transparent;
	border-left-color: var(--color-yellow-light);
	border-right: 0;
	border-top: 0;
	margin-top: -0.578em;
	margin-right: -1.156em;
}
.cookie {
    z-index: 0;
    position: absolute;
    bottom: 10%;
    left: 5%;
    width: 200px;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    padding: 16px;
    text-align: center;
    font-size: 1.5em;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--color-text);
    background: var(--color-yellow-dark);
    mask-image: url('../assets/cookie.svg');
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    transform: rotate(-20deg);
}

.cookie:hover {
    animation: rotateCookie 4s linear infinite;
}

.cookie:nth-of-type(2) {
    background-color: var(--color-pink);
    width: 150px;
    left: 20%;
    bottom: 30%;
    transform: rotate(-10deg);
    font-size: 1.2em;
    font-weight: 700;
}

.cookie:nth-of-type(3) {
    background-color: var(--color-turquoise);
    width: 274px;
    left: 86%;
    bottom: 6%;
    transform: rotate(8deg);
    font-size: 1.2em;
    font-weight: 700;
}

.see-more {
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2;
    position: absolute;
    padding: 10px 0;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.4em;
    font-weight: 700;
    color: var(--color-white);
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;

    span {
        animation: run 14s linear infinite;
    }
}

@keyframes run {
0% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>