<script setup lang="ts">

import { ref } from 'vue';
import { useLoginStore } from '@/stores/loginStore';
import LoginDropdown from './LoginDropdown.vue';
import LoginForm from '../global/LoginForm.vue';
import UserProfileDropdown from './UserProfileDropdown.vue';
import AdminProfileDropdown from './AdminProfileDropdown.vue';
const searchInput = ref()

const loginStore = useLoginStore()

</script>

<template>
    <header class="header">
        <div class="first-row-container">
            <img id="main-logo" src="/images/logos/jj-full-logo-black.png" class="main-logo"></img>

            <div class="first-row-search-container">
                <div class="categories-container">
                    <button class="button button-with-margin">
                        <img src="/images/logos/menu.svg" alt="categories-button-image">
                    </button>
                    <p class="categories-title">Categories</p>
                </div>
                <div class="search-bar-container">
                    <input v-model="searchInput" class="search-bar" type="text">
                    <button class="button">
                        <img src="/images/logos/magnify.svg" alt="">
                    </button>
                </div>
            </div>

            <div class="icons-container" id="icons-container">
                    <button class="button button-with-margin">
                        <img src="/images/logos/heart-outline.svg" alt="">
                    </button>

                    <button class="button button-with-margin">
                        <img src="/images/logos/cart-outline.svg" alt="">
                    </button>

                <LoginDropdown v-if="!loginStore.isLoggedIn" />
                <UserProfileDropdown v-if="loginStore.loggedUserRole == 'ROLE_USER'"/>
                <AdminProfileDropdown v-if="loginStore.loggedUserRole == 'ROLE_ADMIN'"/>
                <LoginForm v-if="loginStore.loginFormIsOpened"/>

            </div>
        </div>

        <div class="second-row-container">
            <div class="categories-container">
                <button class="button button-with-margin">
                        <img src="/images/logos/menu.svg" alt="categories-button-image">
                </button>
                <p class="categories-title">Categories</p>
            </div>
            <div class="search-bar-container">
                <input v-model="searchInput" class="search-bar" type="text">
                <button class="button">
                        <img src="/images/logos/magnify.svg" alt="">
                    </button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    box-shadow: 2px 6px 3px lightgray;
}

.first-row-container {
    width: 100%;
    display: flex;
}

.main-logo {
    width: 10rem;
    margin: 0.3rem 0rem 0.3rem 1rem;
}

.first-row-search-container {
    display: none;
}

#icons-container {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 1rem;
}

.button {
    width: 1.5rem;
}

.button-with-margin{
    margin-right: 0.8rem;
}

#avatar-container {
    display: inline-flex;
    align-items: end;
    cursor: pointer;
}

#avatar-arrow {
    height: 0.5rem;
}

.second-row-container {
    display: flex;
}

.categories-container {
    display: flex;
    align-items: center;
    margin-left: 2rem;
}

.categories-title {
    font-family: "Aleo", serif;
    font-size: 0.7rem;
    margin-right: 1rem;
}

.search-bar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-width: 2px;
    border-style: solid;
    border-color: black;
    border-radius: 5px;
    margin: 0.5rem 2rem 0.5rem auto;
}

.search-bar {
    font-size: 0.8rem;
    width: clamp(200px, 40dvw, 500px);
}

@media only screen and (min-width: 992px) {
    .main-logo {
        width: 12rem;
        margin: 0.7rem 0rem 0.7rem 1rem;
    }

    .second-row-container {
        display: none;
    }

    .first-row-search-container {
        display: flex;
        justify-content: center;
        margin: auto;
    }

    .button {
        width: 1.5rem;
    }

    .categories-title {
        font-size: 0.8rem;
        margin-right: 2rem;
    }

}

@media only screen and (min-width: 1200px) {
    .main-logo {
        width: 13rem;
    }

    .button {
        width: 1.7rem;
    }

    .button-with-margin {
        margin-right: 1.3rem;
    }

    .categories-title {
        font-size: 0.8rem;
    }

}
</style>