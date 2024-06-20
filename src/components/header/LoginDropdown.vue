<script setup lang="ts">
import { useHeaderStore } from '@/stores/headerStore';
import { useLoginStore } from '@/stores/loginStore';

const headerStore = useHeaderStore()
const loginStore = useLoginStore()
</script>

<template>
    <div class="dropdown-container">
        <div class="button" id="avatar-container" title="Guest" @click.prevent="headerStore.switchDropdown('login')">
            <img class="avatar-image" id="avatar-image" src="/images/logos/account-circle-outline.svg">
            <img class="avatar-arrow" id="avatar-arrow" src="/images/logos/triangle-arrow.png" alt="avatar-arrow">
        </div>
        <div class="dropdown" v-if="headerStore.loginDropdownIsOpened">
            <div class="dropdown-header-container">
                <img class="user-image" src="/images/logos/account-circle-outline.svg"></img>
                <h2 class="username">Guest</h2>
            </div>
            <div class="link" @click="loginStore.switchLoginForm()">
                <img class="link-icon" src="/images/logos/login.svg" alt="">
                <p class="link-text">Login</p>
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

#avatar-image {
    width: 2rem;
    
}

#avatar-arrow {
    height: 0.5rem;
}

.dropdown {
    position: absolute;
    margin: 14rem 0 0 0;
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
    "a b";
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
    padding-left: 0.2rem;
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

@media only screen and (min-width: 992px) {
    #avatar-image {
        width: 2.2rem;
    }
}

@media only screen and (min-width: 1200px) {
    #avatar-image {
        width: 2.5rem;
    }
}
</style>