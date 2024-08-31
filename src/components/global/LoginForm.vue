<script setup lang="ts">
import type { ILoginDTO } from '@/core/auth/ILoginDTO';
import { useLoginStore } from '@/stores/loginStore';
import { ref } from 'vue';

const loginStore = useLoginStore()

const username = ref<string>("")
const password = ref<string>("")

const loginDTO: ILoginDTO = {
    username: "",
    password: ""
}

const createLoginDTO = (): void => {
    loginDTO.username = username.value
    loginDTO.password = password.value
}

function submitForm() {
    createLoginDTO()
    loginStore.login(loginDTO)
}

</script>

<template>
    <div class="login-background">
        <form class="login-form-container" @submit.prevent="submitForm">
            <img class="login-flowers-frame" src="/images/pictures/frame-6790657_1920.png" alt="flower-frame">
            <button class="close-button" @click="loginStore.switchLoginForm()">
                <img class="close-button-image" src="/images/logos/close.svg" alt="close-image">
            </button>
            <h2>Login</h2>
            <label for="email-input">Email</label>
            <input class="email-input" type="email" name="email-input" id="email-input" v-model="username" required>
            <label for="password-input">Password</label>
            <input class="password-input" type="password" name="password-input" id="password-input" v-model="password" required>
            <button class="login-button" id="default-login-button" type="submit">Login</button>
            <h3>or</h3>
            <button class="login-button" id="google-login-button">
                <p class="login-text">Login with</p>
                <img class="google-icon" id="google-icon" src="/images/logos/icons8-google.svg" alt="google-icon">
            </button>
            <p class="small-text">Don't have an account?</p>
            <a href="#"><p class="register-text">Register now</p></a>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.login-background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    backdrop-filter: blur(3px);
}

.login-form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 17rem;
    background-color: white;
    z-index: 99;
    border-radius: 1rem;
    border: black solid 1px;
    padding: 0.5rem 0.5rem 1rem 0.5rem;
    margin: auto;
    margin-top: 10rem;
}

.close-button {
    margin-left: auto;
}

.close-button-image {
    width: 2rem;
}

h2 {
    font-family: "Alex Brush", cursive;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
}

label {
    display: block;
    font-family: "Alex Brush", cursive;
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
    text-align: left;
}

input {
    width: 10rem;
    background-color: $login-input-color;
    border-radius: 5px;
    border: black solid 1px;
    margin-bottom: 0.7rem;
    font-family: "Aleo", serif;
    z-index: 98;
}

.login-flowers-frame {
    position: absolute;
    left: 0%;
    right: 0%;
    margin-left: auto;
    margin-right: auto;
    width: 22rem;
    pointer-events: none;
}

h3 {
    margin: 0.3rem auto 0.3rem auto;
    font-family: "Alex Brush", cursive;
    font-size: 1.5rem;
}

.login-button {
    border-radius: 5px;
    border: black solid 1px;
    padding: 0.3rem 1rem 0.3rem 1rem;
    box-shadow: 2px 4px 3px lightgray;
    width: 3rem;
    min-height: 2.5rem;
    font-family: "Aleo", serif;
}

#default-login-button {
    margin-top: 3rem;
}

.login-text {
    font-family: "Aleo", serif;
    display: inline-block;
    margin-right: 0.5rem;
}

.google-icon {
    width: 2rem;
    display: inline;
}

.small-text {
    font-size: 0.8rem;
    margin: 1rem 0 0.5rem 0;
}

.register-text {
    font-family: "Aleo", serif;
    color: black;
    text-decoration: underline;
    cursor: pointer;
}

@media only screen and (min-width: 992px) {

    .login-form-container {
        margin-top: 15rem;
    }

    .login-flowers-frame {
        width: 22rem;
    }
}

@media only screen and (min-width: 1200px) {
    .login-flowers-frame {
        width: 22rem;
    }
}
</style>