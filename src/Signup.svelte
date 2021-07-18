<script>
    import { push, replace } from 'svelte-spa-router';

    // Checks if user is in session, redirects to profile if true 
    if(localStorage.getItem('id')) {
        replace('/profile');
    }

    let username = '';
    let password = '';
    
    // Editing Here
    const signup = () => {
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.id != null) {
                localStorage.setItem('id', data.id);
                push('/profile');
            }
        });
    }
</script>

<section class="w-full h-screen bg-gradient-to-r from-blue-700 to-blue-400 flex flex-row justify-center items-center">
    <!-- Sign Up Tab -->
    <div class="w-full md:w-2/5 bg-gradient-to-r from-gray-200 to-gray-100 p-2 mx-2 rounded-md shadow-md">
        <h2 class="text-center text-2xl font-bold text-blue-600 mb-2">Sign Up</h2>
        <input class="w-full rounded-md mt-1 mb-3 px-2 py-1 border-2 border-transparent focus:border-blue-600 focus:outline-none" type="text" name="username" id="username" bind:value={username} placeholder="Username" required><br>
        <input class="w-full rounded-md mt-1 mb-3 px-2 py-1 border-2 border-transparent focus:border-blue-600 focus:outline-none" type="password" name="password" id="password" bind:value={password} placeholder="Password" required><br>
        <button on:click={signup} class="bg-gradient-to-r from-green-600 to-green-500 px-2 py-1 text-gray-50 rounded-md focus:outline-none" type="button">Sign Up</button>
        <p class="mt-2">Already have an Account? <a class="text-blue-600 hover:text-blue-800" href="/#/">Click here to Log In</a></p>
    </div>
</section>