<script setup lang="ts">
import { useHeaderStore } from '@/stores/headerStore';

const headerStore = useHeaderStore();
</script>

<template>
    <div class="dropdown-background" v-if="headerStore.loginDropdownIsOpened" @click="headerStore.switchDropdown('login')"></div>
    <div class="dropdown-container">
        <div class="button" id="avatar-container" title="Profile" @click="headerStore.switchDropdown('profile')">
            <v-avatar image="/images/pictures/ai-generated-8501940_1920.jpg" size="28"></v-avatar>
            <img class="avatar-arrow" id="avatar-arrow" src="/images/logos/triangle-arrow.png" alt="">
        </div>
        <div class="dropdown" v-if="headerStore.profileDropdownIsOpened">
            <div class="dropdown-header-container">
                <img class="user-image" src="/images/pictures/ai-generated-8501940_1920.jpg"></img>
                <h2 class="username">Username</h2>
                <h3 class="user-email">user@useremail.com</h3>
            </div>
            <a class="link" href="#">
                <img class="link-icon" src="/images/logos/purchases.png" alt="purchases">
                <p class="link-text">Purchases</p>
            </a>
            <a class="link" href="#">
                <img class="link-icon" src="/images/logos/ratings.png" alt="">
                <p class="link-text">Reviews</p>
            </a>
            <a class="link" href="#">
                <img class="link-icon" src="/images/logos/settings.png" alt="">
                <p class="link-text">Settings</p>
            </a>
            <a class="link" href="#">
                <img class="link-icon" src="/images/logos/logout.png" alt="">
                <p class="link-text">Logout</p>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dropdown-background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 98;
    top: 0;
    left: 0;
}

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
    margin: 22rem 0 0 0;
    padding: 10px 0;
    width: $profile-dropdown-width;
    left: 50%;
    margin-left: calc(($profile-dropdown-width / 1.15) * -1);
    box-sizing: border-box;
    z-index: 2;

    background: white;
    border-radius: 6px;
    border: 1px solid black;
    list-style: none;
}

.dropdown-header-container {
    width: 90%;
    display: grid;
    grid-template-columns: 4rem 8rem;
    grid-template-rows: repeat(2, 1.8rem);
    grid-template-areas: 
    "a b"
    "a c";
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
}

.user-image {
    width: 3rem;
    border-radius: 50%;
    grid-area: a;
    margin: auto;
}

.username {
    grid-area: b;
    padding-left: 1rem;
    font-family: "Aleo", serif;
}

.user-email {
    width: 100%;
    grid-area: c;
    padding-left: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "Aleo", serif;
}

.link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    margin-bottom: 1rem;
}

.link-icon {
    width: 2rem;
    margin-left: 1.5rem;
}

.link-text {
    margin-left: 1rem;
    font-family: "Aleo", serif;
    font-size: 1.2rem;
}
</style>