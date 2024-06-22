<script setup lang="ts">

</script>

<template>
    <div class="login-background">
        <div class="login-form-container">
            <img class="login-flowers-frame" src="../../../public/images/pictures/frame-6790657_1920.png" alt="">
            <h2>Login</h2>
            <label for="email-input">Email</label>
            <input class="email-input" type="email" name="email-input" id="email-input">
            <label for="password-input">Password</label>
            <input class="password-input" type="password" name="password-input" id="password-input">
            <h3>or</h3>
            <button class="google-login-button" id="google-login-button">
                <p>Login with</p>
                <img class="google-icon" id="google-icon" src="../../../public/images/logos/icons8-google.svg" alt="">
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.login-background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    z-index: 98;
    display: flex;
    align-items: center;
    justify-content: center;
}
.login-form-container {
    width: 70%;
    background-color: white;
    z-index: 99;
    border-radius: 1rem;
    border: black solid 1px;
    padding: 1.5rem 3rem 1.5rem 3rem;
    text-align: center;
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
    width: 100%;
    background-color: $login-input-color;
    border-radius: 5px;
    border: black solid 1px;
    margin-bottom: 0.7rem;
    font-family: "Aleo", serif;
}
.login-flowers-frame {
    position: absolute;
    top: 26%;
    left: 0%;
    right: 0%;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
}
h3 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    font-family: "Alex Brush", cursive;
    font-size: 1.5rem;
}
button {
    border-radius: 10px;
    border: black solid 1px;
    padding: 0.3rem 1rem 0.3rem 1rem;
    box-shadow: 2px 4px 3px lightgray;
}
p {
    font-family: "Aleo", serif;
    display: inline-block;
    margin-right: 0.5rem;
}

.google-icon {
    width: 2rem;
    display: inline;
}
</style>