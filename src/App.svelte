<script>
    import Router from 'svelte-spa-router';
    // import CardEditor from './CardEditor.svelte';
    import Index from './Index.svelte';
    import Signup from './Signup.svelte';
    import Profile from './Profile.svelte';
    import CardEditor from './CardEditor.svelte';
</script>

<!-- <CardEditor /> -->
<!-- <Index /> -->
<!-- <Signup /> -->

<Router routes={{
    '/': Index,
    '/signup': Signup,
    '/profile': Profile,
    '/profile/card-editor': CardEditor
}}/>