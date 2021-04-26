<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"

export default{
    name:"Applayout",
    components:{
        AppHeader,
        AppFooter
    }
}
</script>
