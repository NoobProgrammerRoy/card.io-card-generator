<script>
    import { onMount } from "svelte";

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
        <div class="flip-card-front">
            <slot name="card-front">
                <p>Front Face of the Card</p>
            </slot>
        </div>
        <!-- Back Face of the Card -->
        <div class="flip-card-back">
            <slot name="card-back">
                <p>Back Face of the Card</p>
            </slot>
        </div>
    </div>
</div>

<style>
    /* The flip card container - set the width and height to whatever you want. 
    We have added the border property to demonstrate that the flip itself goes 
    out of the box on hover (remove perspective if you don't want the 3D effect */
    .flip-card {
        background-color: transparent;
        width: 300px;
        height: 200px;
        perspective: 1000px;
        /* Remove this if you don't want the 3D effect */
    }

    @media all and (min-width: 768px) {
        .flip-card {
            width: 450px;
            height: 300px;
        }
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
