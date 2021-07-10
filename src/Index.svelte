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

<main class="h-screen w-full bg-gradient-to-r from-blue-500 to-blue-700">
    <!-- Navbar -->
    <nav class="container mx-auto flex flex-row items-center justify-between">
        <h1 class="text-3xl text-gray-50 m-1 font-bold">Card.io</h1>
        <a href="#" class="text-gray-50 hover:text-gray-200">Sign Up</a>
    </nav>

    <!-- Body -->
    <section class="w-full grid grid-cols-1 md:grid-cols-2" style="height: 90%;">
        <div class="flex flex-col justify-center items-center h-full mx-2">
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
        <div class="flex flex-col justify-center items-start h-full mx-2">
            <h1 class="text-5xl text-gray-50 mb-5 font-bold">Card.io</h1>
            <p class="text-base leading-5 text-gray-100">
                Generate Customized Business and Visiting Cards to build your online presence. 
            </p>
            <p class="text-base leading-5 text-gray-100 mb-3">
                Create, Print and Share Cards online to strengthen your portfolio. 
            </p>
            <div class="my-2 p-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-md w-full md:w-3/5">
                <h2 class="text-xl text-blue-600 mb-2 font-bold">Welcome Back</h2>
                <input class="w-full rounded-md mt-1 mb-3 px-2 py-1 border-2 border-transparent focus:border-blue-600 focus:outline-none" type="text" name="username" id="username" bind:value={username} placeholder="Username" required><br>
                <input class="w-full rounded-md mt-1 mb-3 px-2 py-1 border-2 border-transparent focus:border-blue-600 focus:outline-none" type="password" name="password" id="password" bind:value={password} placeholder="Password" required><br>
                <button on:click={login} class="bg-green-500 hover:bg-green-600 ring-2 ring-green-300 px-2 py-1 text-gray-50 rounded-md focus:outline-none" type="button">Login</button>
            </div>
        </div>
    </section>
</main>