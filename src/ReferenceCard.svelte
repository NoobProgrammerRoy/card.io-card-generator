<script>
    import { onMount } from "svelte";

    // Props for the Card
    export let name = 'Sample Card';
    export let post = 'Sample Post';
    export let description = 'Sample Description';
    export let image = './favicon.png';
    export let features = ['Sample Feature 1', 'Sample Feature 2'];
    export let address = 'Sample Address';
    export let contact = 'Sample Contact';

    // Style Props for the Card
    export let backgroundColor1 = 'bg-gray-50';
    export let backgroundColor2 = 'bg-blue-600';
    export let textColor1 = 'text-gray-800';
    export let textColor2 = 'text-gray-500';
    export let textColor3 = 'text-gray-50';

    // Implements Flip Functionality
    let card;
    let isFront = true;
    onMount(() => {
        card.addEventListener("click", () => {
            if (isFront) {
                card.style.transform = "rotateY(180deg)";
                isFront = !isFront;
            } else {
                card.style.transform = "rotateY(0deg)";
                isFront = !isFront;
            }
        });
    });
</script>

<div class="flip-card">
    <div class="flip-card-inner rounded-xl" bind:this={card}>
        <!-- Front Face of the Card -->
        <div class="flip-card-front grid grid-cols-3">
            <div class="col-span-2 flex flex-col justify-around items-center {backgroundColor1} rounded-l-xl">
                <div class="text-center">
                    <h1 class="text-3xl {textColor1}">{name}</h1>
                    <p class="text-sm mt-1 {textColor2}">{post}</p>
                </div>
                <h2 class="text-base text-center {textColor1}">{description}</h2>
            </div>
            <div class="flex flex-col justify-center items-center {backgroundColor2} rounded-r-xl">
                <img class="w-full" src={image} alt={name}>
            </div>
        </div>
        <!-- Back Face of the Card -->
        <div class="flip-card-back flex flex-col justify-between {backgroundColor1} rounded-xl">
            <div class="{backgroundColor1} {textColor1} rounded-t-xl p-2">
                {#each features as feature}
                    <p class="text-base">
                        <span class="fas fa-circle text-xs {textColor2} pr-1">
                        </span>{feature}
                    </p>
                {/each}
            </div>
            <div class="{backgroundColor2} text-center {textColor3} rounded-b-xl p-1">
                <p class="text-sm">{address}</p>
                <p class="text-base">{contact}</p>
            </div>
        </div>
    </div>
</div>

<style>
    /* The flip card container - set the width and height to whatever you want. 
    We have added the border property to demonstrate that the flip itself goes 
    out of the box on hover (remove perspective if you don't want the 3D effect */
    .flip-card {
        background-color: transparent;
        width: 450px;
        height: 300px;
        perspective: 1000px;
        /* Remove this if you don't want the 3D effect */
    }

    /* This container is needed to position the front and back side */
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    /* Position the front and back side */
    .flip-card-front,
    .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        /* Safari */
        backface-visibility: hidden;
    }
    
    /* Style the back side */
    .flip-card-back {
        transform: rotateY(180deg);
    }
</style>
