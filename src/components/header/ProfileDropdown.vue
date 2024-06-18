<script setup lang="ts">
import { useHeaderStore } from '@/stores/headerStore';

const headerStore = useHeaderStore();
</script>

<template>
    <div class="dropdown-container">
        <div class="button" id="avatar-container" title="Profile" @click="headerStore.switchProfileDropdown">
            <v-avatar image="/images/pictures/ai-generated-8501940_1920.jpg" size="28"></v-avatar>
            <img class="avatar-arrow" id="avatar-arrow" src="/images/logos/triangle-arrow.png" alt="">
        </div>
        <div class="dropdown" v-if="headerStore.profileDropdownIsOpened">
            <div class="dropdown-header-container">
                <img class="user-image" src="/images/pictures/ai-generated-8501940_1920.jpg"></img>
                <h2 class="username">Username</h2>
                <h3 class="user-email">user@useremail.com</h3>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dropdown-container {
    position: relative;
    display: flex;
    align-items: center;
}

#avatar-container {
    display: inline-flex;
    align-items: end;
    cursor: pointer;
}

#avatar-arrow {
    height: 0.5rem;
}

.dropdown {
    position: absolute;
    margin: 10rem 0 0 0;
    padding: 20px 0;
    width: $profile-dropdown-width;
    left: 50%;
    margin-left: calc(($profile-dropdown-width / 1.15) * -1);
    box-sizing: border-box;
    z-index: 2;

    background: white;
    border-radius: 6px;
    list-style: none;
}

.dropdown-header-container {
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: repeat(2, 30px);
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
}

.user-image {
    width: 3rem;
    border-radius: 50%;
    grid-area: 1 / 1 / 3 / 2;
    margin: auto;
}

.username {
    grid-area: 1 / 2 / 2 / 2;
    padding-left: 1rem;
}

.user-email {
    width: 100%;
    grid-area: 2 / 2 / 2 / 2;
    padding-left: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>