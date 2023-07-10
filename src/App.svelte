<script>
  import Login from "./pages/Login.svelte";
  import Main from "./pages/Main.svelte";
  import Signup from "./pages/Signup.svelte";
  import Write from "./pages/Write.svelte";
  import Notfount from "./pages/Notfount.svelte";
  import Router from 'svelte-spa-router'
  import "./css/style/style.css"


  const routes = {
    '/' : Main,
    '/login' : Login,
    '/signup' : Signup,
    '/write' : Write,
    "*" : Notfount,
  }
</script>

<Router routes={routes}/>


<style>

</style>