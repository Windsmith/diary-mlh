<script>
    import { text } from "svelte/internal";
import "../landingpage.css";

    let logged = false;
    let popup = false;
    let sign = false;

    let showPW = false;

    let textType = "password";

    function viewPopup() {
        popup = !popup;
    }

    function closeOnEsc(e) {
        if (e.key === 'Escape') {
            if (popup) {
                popup = false;
            }
        }
    }

    function setType() {
        if (showPW) {
            textType = "text";
        } else {
            textType = "password";
        }
    }




</script>

<div class="header" on:keydown={closeOnEsc}>
    <div id="left">Diary</div>
    <div id="right">
        {#if !logged}
        <a id="signup" on:click={() => {sign = true; viewPopup();}} href="#">Sign Up</a>
        <a id="login" on:click={() => {sign = false; viewPopup();}} href="#">Log In</a>
        {:else}
        <div id="user">User</div>
        {/if}
        {#if popup}
        <div on:click={() => {popup = false}} class="loginsignup">
            <div on:click={(e) => {e.stopPropagation()}} class="popup">
                <div class="form-div" style="margin: 0 0 0 0%;">
                    {#if !sign}
                    <form class="loginForm" action=""
                     method="POST" style="">
                        Log In<br><br>
                        <input type="text" placeholder="E-mail" id="email-log" name="email"><br>
                        <input type={textType} placeholder="Password" id="password-log" name="password"><a on:click={() => {showPW = !showPW}} class="eye">idk</a><br>
                        <a id="toSign" on:click={() => {sign = true;}}>Don't have an account? Sign up.</a><br>
                        <input type="submit" name="submit-l" value="Log In">
                    </form>
                    {:else}
                    <form class="signupForm" action=""
                     method="POST" style="">
                        Sign Up <br>
                        <input type="text" placeholder="Name" id="name-sign" name="name"><br>
                        <input type="text" placeholder="E-mail" id="username-email" name="email"><br>
                        <input type="password" placeholder="Password" id="password-sign" name="password"><br>
                        <input type="password" placeholder="Re-type Password" id="repassword-sign" name="re-password"><br>
                        <a id="toLog" on:click={() => {sign = false;}}>Have an account? Log in.</a><br>
                        <input type="submit" name="submit-s" value="Sign Up"><br>
                        or<br>
                        <button type="submit">Google</button>
                    </form>
                    {/if}
                </div>
            </div>
        </div>
        {/if}
    </div>
</div>

<!-- 

<div class="nav h-6">
    <div id="left">Diary</div>
    <div class="float-right static" id="right">
        <button type="button">Sign Up</button>
        <button type="button">Log In</button>
    </div>
</div> -->