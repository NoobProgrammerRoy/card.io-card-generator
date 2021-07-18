<script>
    import { push, pop } from 'svelte-spa-router';
    import CardLayout1 from './CardLayout1.svelte';
    import CardLayout2 from './CardLayout2.svelte';
    import CardLayout3 from './CardLayout3.svelte';
    import CardLayout4 from './CardLayout4.svelte';
    import CardLayout5 from './CardLayout5.svelte';
    import CardLayout6 from './CardLayout6.svelte';
    import CardLayout7 from './CardLayout7.svelte';
    import CardLayout8 from './CardLayout8.svelte';

    if (localStorage.getItem('id') == null) {
        pop();
    }

    // Props for the card
    let title;
    let post;
    let description;
    let image;
    let features = [''];
    let address;
    let contact;

    // Style Props for the Card
    let backgroundColor1 = 'bg-gray-50';
    let backgroundColor2 = 'bg-blue-600';
    let textColor1 = 'text-gray-800';
    let textColor2 = 'text-gray-500';
    let textColor3 = 'text-gray-50';

    // Background and Text Color Arrays
    let backgroundColors = [
        'bg-gray-50', 'bg-red-500', 'bg-blue-600', 'bg-green-600', 'bg-yellow-400', 'bg-purple-400'
    ];

    let textColors = [
        'text-gray-800', 'text-gray-500', 'text-gray-50', 'text-red-500', 'text-blue-600', 'text-green-600', 'text-yellow-400', 'text-purple-400'
    ];

    // Array of Card Layouts
    let cards = [
        {
            name: 'CardLayout1',
            layout: CardLayout1
        },
        {
            name: 'CardLayout2',
            layout: CardLayout2
        },
        {
            name: 'CardLayout3',
            layout: CardLayout3
        },
        {
            name: 'CardLayout4',
            layout: CardLayout4
        },
        {
            name: 'CardLayout5',
            layout: CardLayout5
        },
        {
            name: 'CardLayout6',
            layout: CardLayout6
        },
        {
            name: 'CardLayout7',
            layout: CardLayout7
        },
        {
            name: 'CardLayout8',
            layout: CardLayout8
        }
    ];
    let selectedCard = cards[0];

    // Function to add Features
    const addFeature = () => {
        features = [...features, ''];
    }

    // Editing Here
    const createCard = () => {
        fetch('http://localhost:3000/card', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem('id'),
                cardLayout: selectedCard.name,
                backgroundColor1: backgroundColor1,
                backgroundColor2: backgroundColor2,
                textColor1: textColor1,
                textColor2: textColor2,
                textColor3: textColor3,
                title: title,
                post: post,
                description: description,
                features: features,
                address: address,
                contact: contact
            })
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message);
            push('/profile');   
        });
    }
</script>

<!-- Editing Here -->
<nav class="bg-gradient-to-r from-blue-700 to-blue-400 py-2">
    <div class="container mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between">
        <h1 class="text-3xl text-gray-50 m-1 font-bold">Card.io</h1>
        <div class="flex flex-row items-center justify-center p-2 bg-blue-800 rounded-md md:bg-transparent">
            <a href="/#/profile" class="text-gray-50 hover:text-gray-200 cursor-pointer">Profile</a>
        </div>
    </div>
</nav>

<main class="grid grid-cols-1 md:h-screen md:grid-cols-2">
    <!-- Card Editor -->
    <div class="flex flex-col items-center bg-indigo-200">
        <h1 class="text-3xl font-bold my-2">Card Editor</h1>

        <p>Card Layout</p>
        <div class="mt-1 mb-2">
            <select class="p-1 rounded-md outline-none" name="card-layout" id="card-layout" bind:value={selectedCard}>
                {#each cards as card, i}
                    <option value={card}>{'Card ' + (i + 1)}</option>        
                {/each}
            </select>
        </div>

        <p>Background Color 1</p>
        <div class="mt-1 mb-2">
            {#each backgroundColors as bgColor}
            <label class="cursor-pointer inline-block w-6 h-6 rounded-md mx-1 border-2 {(backgroundColor1 == bgColor) ? 'border-green-400' : 'border-gray-900'} {bgColor}">
                <input class="hidden" type="radio" bind:group={backgroundColor1} value={bgColor}>
            </label>
            {/each}
        </div>

        <p>Background Color 2</p>
        <div class="mt-1 mb-2">
            {#each backgroundColors as bgColor}
            <label class="cursor-pointer inline-block w-6 h-6 rounded-md mx-1 border-2 {(backgroundColor2 == bgColor) ? 'border-green-400' : 'border-gray-900'} {bgColor}">
                <input class="hidden" type="radio" bind:group={backgroundColor2} value={bgColor}>
            </label>
            {/each}
        </div>
        
        <p>Text Color 1</p>
        <div class="mt-1 mb-2">
            {#each textColors as textColor}
            <label class="cursor-pointer inline-block w-6 h-6 rounded-md mx-1 border-2 {(textColor1 == textColor) ? 'border-green-400' : 'border-gray-900'} {textColor.replace('text', 'bg')}">
                <input class="hidden" type="radio" bind:group={textColor1} value={textColor}>
            </label>
            {/each}
        </div>

        <p>Text Color 2</p>
        <div class="mt-1 mb-2">
            {#each textColors as textColor}
            <label class="cursor-pointer inline-block w-6 h-6 rounded-md mx-1 border-2 {(textColor2 == textColor) ? 'border-green-400' : 'border-gray-900'} {textColor.replace('text', 'bg')}">
                <input class="hidden" type="radio" bind:group={textColor2} value={textColor}>
            </label>
            {/each}
        </div>

        <p>Text Color 3</p>
        <div class="mt-1 mb-2">
            {#each textColors as textColor}
            <label class="cursor-pointer inline-block w-6 h-6 rounded-md mx-1 border-2 {(textColor3 == textColor) ? 'border-green-400' : 'border-gray-900'} {textColor.replace('text', 'bg')}">
                <input class="hidden" type="radio" bind:group={textColor3} value={textColor}>
            </label>
            {/each}
        </div>

        <label class="hidden" for="card-title">Title</label>
        <input class="w-11/12 rounded-md mt-1 mb-3 px-2 py-1 border-2 border-transparent focus:border-blue-600 focus:outline-none" type="text" name="card-title" id="card-title" bind:value={title} placeholder="Title" required>
        
        <label class="hidden" for="card-post">Post</label>
        <input class="w-11/12 rounded-md mt-1 mb-3 px-2 py-1 border-2 border-transparent focus:border-blue-600 focus:outline-none" type="text" name="card-post" id="card-post" bind:value={post} placeholder="Post" required>
        
        <label class="hidden" for="card-description">Description</label>
        <input class="w-11/12 rounded-md mt-1 mb-3 px-2 py-1 border-2 border-transparent focus:border-blue-600 focus:outline-none" type="text" name="card-description" id="card-description" bind:value={description} placeholder="Description" required>
        
        <!-- Editing left to be done here, image upload to be fixed -->
        <div class="w-full text-center flex flex-row justify-center items-center mt-1 mb-3">
            <label class="cursor-pointer fas fa-image mr-1 px-3 py-2 rounded-md text-gray-50 bg-purple-500 hover:bg-purple-600">
                <span class="pl-2 font-thin">Upload Image</span>
                <input class="hidden" type="file" name="card-image" id="card-image" accept="image/jpeg, image/png" bind:value={image} required>
            </label>
            <label class="hidden" for="card-features">Features</label>
            <button on:click={addFeature} class="ml-1 px-4 py-1 rounded-md text-gray-50 bg-indigo-500 hover:bg-indigo-600" type="button">Add Feature</button>
        </div>
        {#each features as feature, i}
            <input class="w-11/12 rounded-md mt-1 mb-3 px-2 py-1 border-2 border-transparent focus:border-blue-600 focus:outline-none" type="text" name="card-features" id={"card-features" + i} bind:value={feature} placeholder="Feature" required>
        {/each}

        <label class="hidden" for="card-address">Address</label>
        <input class="w-11/12 rounded-md mt-1 mb-3 px-2 py-1 border-2 border-transparent focus:border-blue-600 focus:outline-none" type="text" name="card-address" id="card-address" bind:value={address} placeholder="Address" required>

        <label class="hidden" for="card-contact">Contact</label>
        <input class="w-11/12 rounded-md mt-1 mb-3 px-2 py-1 border-2 border-transparent focus:border-blue-600 focus:outline-none" type="text" name="card-contact" id="card-contact" bind:value={contact} placeholder="Contact" required>
    
        <button on:click={createCard} class="w-11/12 mt-1 mb-3 p-2 bg-green-500 text-gray-50 rounded-md hover:bg-green-600" type="button">Create Card</button>
    </div>

    <!-- Card -->
    <div class="md:flex md:flex-col md:justify-center md:items-center overflow-x-auto m-2">
        <div>
            <svelte:component
            this={selectedCard.layout} 
            {title}
            {post} 
            {description} 
            {image} 
            {features} 
            {address} 
            {contact} 
            {backgroundColor1} 
            {backgroundColor2}
            {textColor1}
            {textColor2}
            {textColor3}
            />
        </div>
    </div>
</main>