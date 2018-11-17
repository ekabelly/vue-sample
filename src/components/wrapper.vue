<template>
    <div class="container-fluid">
        <app-registration></app-registration>
        <app-registrations></app-registrations>
    </div>
</template>

<script>
export default {
    created(){
        setTimeout(()=> this.$store.dispatch('fetchUsers'), 2000);
    }
}
</script>



<!--<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>-->

