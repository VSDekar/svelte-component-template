<script>
  import { Router, Link } from 'svelte-move';
  import { routes } from './routes';
</script>

<style>
</style>

<main>
  <Link to="/">Home</Link>
  <Router {routes} hash={true} />
</main>
