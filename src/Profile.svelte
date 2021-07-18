<script>
    import { pop, replace } from 'svelte-spa-router';
    import CardLayout1 from './CardLayout1.svelte';

    // Fetch Data from API
    let cards = [];
    let isReceived = false;
    
    if (localStorage.getItem('id') == null) {
        pop();
    } else {
        fetch('http://localhost:3000/profile/' + localStorage.getItem('id'),{
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            cards = data.message.cards;
            isReceived = !isReceived;
        });   
    }
    
    // Return Card Layout
    // const getCardLayout = cardLayout => {
    //     if (cardLayout == 'CardLayout1')
    //         return CardLayout1;
    //     else if (cardLayout == 'CardLayout2')
    //         return CardLayout2;
    //     else if (cardLayout == 'CardLayout3')
    //         return CardLayout3;
    //     else if (cardLayout == 'CardLayout4')
    //         return CardLayout4;
    //     else if (cardLayout == 'CardLayout5')
    //         return CardLayout5;
    //     else if (cardLayout == 'CardLayout6')
    //         return CardLayout6;
    //     else if (cardLayout == 'CardLayout7')
    //         return CardLayout7;
    //     else if (cardLayout == 'CardLayout8')
    //         return CardLayout8;
    // }

    // Logout
    const logout = () => {
        localStorage.removeItem('id');
        replace('/');
    }
</script>

<nav class="bg-gradient-to-r from-blue-700 to-blue-400 py-2">
    <div class="container mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between">
        <h1 class="text-3xl text-gray-50 m-1 font-bold">Card.io</h1>
        <div class="flex flex-row items-center justify-center p-2 bg-gradient-to-r from-blue-800 to-blue-700 rounded-md md:bg-none md:my-0">
            <a href="/#/profile/card-editor" class="text-gray-50 hover:text-gray-200 cursor-pointer">Create Card</a>
            <p on:click={logout} class="text-gray-50 hover:text-gray-200 cursor-pointer ml-2">Log Out</p>
        </div>
    </div>
</nav>

<main class="w-full h-full bg-gradient-to-r from-gray-100 to-gray-50">
    <h1 class="text-center text-3xl text-blue-600 font-bold py-2">My Profile</h1>
    <div class="grid grid-cols-1 md:grid-cols-2">
        {#if isReceived}
            {#if cards}
                {#each cards as card}
                    <article class="mx-auto my-2">
                        <svelte:component 
                            this={CardLayout1}
                            title={card.title}
                            post={card.post} 
                            description={card.description} 
                            features={card.features} 
                            address={card.address} 
                            contact={card.contact} 
                            backgroundColor1={card.backgroundColor1} 
                            backgroundColor2={card.backgroundColor2}
                            textColor1={card.textColor1}
                            textColor2={card.textColor2}
                            textColor3={card.textColor3}
                        />
                    </article>
                {/each}
            {/if}
        {/if}
    </div>
</main>