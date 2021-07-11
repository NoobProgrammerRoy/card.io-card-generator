<script>
    import Router from 'svelte-spa-router';
    // import CardEditor from './CardEditor.svelte';
    import Index from './Index.svelte';
    import Signup from './Signup.svelte';
</script>

<!-- <CardEditor /> -->
<!-- <Index /> -->
<!-- <Signup /> -->

<Router routes={{
    '/': Index,
    '/signup': Signup,
}}/>