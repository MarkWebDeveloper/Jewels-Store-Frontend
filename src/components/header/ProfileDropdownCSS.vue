<script setup lang="ts">

</script>

<template>
    <details class="dropdown">
        <summary role="button">
                <div class="button" id="avatar-container" title="Profile">
                    <v-avatar image="/images/pictures/ai-generated-8501940_1920.jpg" size="28"></v-avatar>
                    <img class="avatar-arrow" id="avatar-arrow" src="/images/logos/triangle-arrow.png" alt="">
                </div>
        </summary>
        <ul>
            <li><a href="#">I'm a dropdown.</a></li>
            <li><a href="#">In Pure CSS</a></li>
            <li><a href="#">As in...</a></li>
            <li><a href="#">No JavaScript.</a></li>
            <li><a href="#">At All.</a></li>
        </ul>
    </details>

</template>

<style lang="scss" scoped>
#avatar-container {
    display: inline-flex;
    align-items: end;
    cursor: pointer;
}

#avatar-arrow {
    height: 0.5rem;
}
/* Follow me for more pens like this! */

/* Boring button styles */
// a.button {
//   /* Frame */
//   display: inline-block;
//   padding: 20px 28px;
//   border-radius: 50px;
//   box-sizing: border-box;
  
//   /* Style */
//   border: none;
//   background: red;
//   color: white;
//   font-size: 24px;
//   cursor: pointer;
// }

a.button:active {
  filter: brightness(75%);
}

/* Dropdown styles */
.dropdown {
  position: relative;
  padding: 0;
  
  border: none;
}

.dropdown summary {
  list-style: none;
  list-style-type: none;
}

.dropdown > summary::-webkit-details-marker {
  display: none;
}

.dropdown summary:focus {
  outline: none;
}

.dropdown summary:focus a.button {
  border: 2px solid white;
}

.dropdown summary:focus {
  outline: none;
}

.dropdown ul {
  position: absolute;
  margin: 20px 0 0 0;
  padding: 20px 0;
  width: $profile-dropdown-width;
  left: 50%;
  margin-left: calc(($profile-dropdown-width / 1.2)  * -1);
  box-sizing: border-box;
  z-index: 2;
  
  background: white;
  border-radius: 6px;
  list-style: none;
}

.dropdown ul li {
  padding: 0;
  margin: 0;
}

.dropdown ul li a:link, .dropdown ul li a:visited {
  display: inline-block;
  padding: 10px 0.8rem;
  width: 100%;
  box-sizing: border-box;
  
  color: black;
  text-decoration: none;
}

.dropdown ul li a:hover {
  background-color: red;
  color: white;
}

/* Dropdown triangle */
.dropdown ul::before {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  top: -10px;
  left: 81%;
  margin-left: -10px;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent white transparent;
}


/* Close the dropdown with outside clicks */
.dropdown > summary::before {
  display: none;
}

.dropdown[open] > summary::before {
    content: ' ';
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
}

</style>