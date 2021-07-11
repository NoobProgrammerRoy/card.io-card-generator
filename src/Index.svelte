<script>
    import CardLayout1 from './CardLayout1.svelte';

    let username = '';
    let password = '';
    
    // Editing Here
    const login = () => {
        console.log(username)
        console.log(password)
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => res.json()).then(data => console.log(data));
    }
</script>

<main class="h-full md:h-screen w-full bg-gradient-to-r from-blue-500 to-blue-700 py-2">
    <!-- Navbar -->
    <nav class="container mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between">
        <h1 class="text-3xl text-gray-50 m-1 font-bold">Card.io</h1>
        <div class="flex flex-row items-center justify-center p-2 bg-blue-800 rounded-md md:bg-transparent">
            <a href="#about" class="text-gray-50 hover:text-gray-200">About</a>
            <a href="#features" class="text-gray-50 hover:text-gray-200 mx-2">Contact</a>
            <a href="/#/signup" class="text-gray-50 hover:text-gray-200">Sign Up</a>
        </div>
    </nav>

    <!-- Body -->
    <section class="w-full grid grid-cols-1 md:grid-cols-2 h-full">
        <div class="flex flex-col justify-center items-center h-full mx-2 my-2 md:my-0">
            <CardLayout1 
                backgroundColor2={"bg-red-500"}
                title={"John Doe"}
                post={"Software Developer"}
                description={"A highly skilled developer in technologies such as C++, C#, Java and Rust"}
                features={["Highly skilled programmer", "Good communication skills", "Fast Learner"]}
                address={"Lane no.50, Los Angeles, California, USA"}
                contact={"1234567890"}
            />
        </div>
        <div class="flex flex-col justify-center items-center md:items-start h-full mx-2 my-2 md:my-0">
            <h1 class="text-5xl text-gray-50 mb-3 font-bold">Card.io</h1>
            <p class="text-base leading-5 text-gray-100">
                Generate Customized Business and Visiting Cards to build your online presence. 
            </p>
            <p class="text-base leading-5 text-gray-100">
                Create, Print and Share Cards online to strengthen your portfolio. 
            </p>
            <div class="mt-5 p-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md w-full md:w-3/5 shadow-xl">
                <h2 class="text-xl text-blue-600 mb-2 font-bold">Welcome Back</h2>
                <input class="w-full rounded-md mt-1 mb-3 px-2 py-1 border-2 border-transparent focus:border-blue-600 focus:outline-none" type="text" name="username" id="username" bind:value={username} placeholder="Username" required><br>
                <input class="w-full rounded-md mt-1 mb-3 px-2 py-1 border-2 border-transparent focus:border-blue-600 focus:outline-none" type="password" name="password" id="password" bind:value={password} placeholder="Password" required><br>
                <button on:click={login} class="bg-green-500 hover:bg-green-600 ring-2 ring-green-300 px-2 py-1 text-gray-50 rounded-md focus:outline-none" type="button">Login</button>
            </div>
        </div>
    </section>
</main>

<section class="w-full py-4 bg-gradient-to-r from-gray-200 to-gray-300">
    <div class="container mx-auto">
        <article class="mb-2 text-center" id="about">
            <h2 class="text-blue-600 text-2xl font-bold mb-3">About</h2>
            <p class="mx-2">
                Card.io is an Online Business and Visiting Card Generator that allows users to create
                Customized Cards to build your online presence. Featuring our custom templating engine, 
                Card.io enables users to Create and Share cards to build your Portfolio.
            </p>
        </article>
        <article class="mt-2 text-center" id="features">
            <h2 class="text-blue-600 text-2xl font-bold mb-3">Features</h2>
            <div class="flex flex-col justify-center items-center md:flex-row mx-2">
                <div class="p-2 m-1 text-center shadow-md rounded-md w-full">
                    <span class="fas fa-address-card text-5xl text-gray-800"></span>
                    <p class="text-gray-800">Over 1000 different combinations of cards.</p>
                </div>
                <div class="p-2 m-1 text-center shadow-md rounded-md w-full">
                    <span class="fas fa-edit text-5xl text-gray-800"></span>
                    <p class="text-gray-800">Powerful Card Editor with fully customizable features.</p>
                </div>
                <div class="p-2 m-1 text-center shadow-md rounded-md w-full">
                    <span class="fas fa-handshake text-5xl text-gray-800"></span>
                    <p class="text-gray-800">Easy Sharing with your peers.</p>
                </div>
            </div>
        </article>
    </div>
</section>