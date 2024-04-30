<template>
    <div>
        <div class="mt-5" v-show="message!=''">
            <article class="message">
                <div class="message-body" v-html="message"></div>
              </article>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue';
    
    const message = ref()
    
</script>