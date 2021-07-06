<script>
    import Card from './Card.svelte';
    
    // Props for the Card
    export let title = 'Sample Card';
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
</script>

<Card>
    <!-- Front Face of the Card -->
    <div slot="card-front" class="w-full h-full">
        <div class="grid grid-cols-4 w-full h-full {backgroundColor2} rounded-xl">
            <div class="curved col-span-3 flex flex-col justify-around items-center {backgroundColor1} rounded-l-xl">
                <div class="text-center">
                    <h1 class="text-3xl {textColor1}">{title}</h1>
                    <p class="text-sm mt-1 {textColor2}">{post}</p>
                </div>
                <h2 class="text-base text-center {textColor1}">{description}</h2>
            </div>
            <div class="flex flex-col justify-center items-center {backgroundColor2} rounded-r-xl">
                <img class="w-full" src={image} alt={title}>
            </div>
        </div>
    </div>

    <!-- Back Face of the Card -->
    <div slot="card-back" class="w-full h-full">
        <div class="flex flex-col justify-between {backgroundColor1} rounded-xl w-full h-full">
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
</Card>

<style>
    .curved {
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
    }
</style>