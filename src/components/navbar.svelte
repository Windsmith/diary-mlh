<script>
    import { text } from "svelte/internal";
    import "../landingpage.css";

    let logged = true;
    let popup = false;
    let sign = false;

    let showPW = false;
    let textType = "password";

    

    function formUpdate() {
        if (sign) {
            formHolder.margin = "50%";
            formHolder.loginOpacity = "0%";
            formHolder.signupOpacity = "100%";
        } else {
            formHolder.margin = "0%";
            formHolder.loginOpacity = "100%";
            formHolder.signupOpacity = "0%";
        }
    }

    function viewPopup() {
        popup = !popup;
        formUpdate();
    }

    let formHolder = {
        margin: "0%",
        signupOpacity: "0%",
        loginOpacity: "100%"
    };

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
    <div id="left"><a href="/">Diary</a></div>
    <div id="right">
        {#if !logged}
        <a id="login" on:click={() => {sign = false; viewPopup();}} href="#">Log In</a>
        <a id="signup" on:click={() => {sign = true; viewPopup();}} href="#">Sign Up</a>
        {:else}
        <div id="user">User</div>
        {/if}
        {#if popup}
        <div on:click={() => {popup = false}} class="loginsignup">
            <div on:click={(e) => {e.stopPropagation()}} class="popup">
                <div class="form-div" style="margin: 0 0 0 {formHolder.margin};">
                    {#if !sign}
                    <form class="loginForm" action=""
                     method="POST" style="opacity: {formHolder.loginOpacity};">
                        Log In<br><br>
                        <input class="txt" type="text" placeholder="E-mail" id="email-log" name="email"><br>
                        <input class="txt" type={textType} placeholder="Password" id="password-log" name="password"><a on:click={() => {showPW = !showPW; setType()}} class="eye" href="#"><img class="eyeimg" src="eye.svg" alt="idk"></a><br>
                        <a id="toSign" on:click={() => {sign = showPW = true; formUpdate()}}>Don't have an account? Sign up.</a><br>
                        <input type="submit" name="submit-l" value="Log In">
                        <span id="or">or</span><br>
                        <button class="googlelog" type="submit"><div class="gglbtn"><img class="google" src="google.svg" alt="idk"> Log In with Google</div></button>
                    </form>
                    {:else}
                    <form class="signupForm" action=""
                     method="POST" style="opacity: {formHolder.signupOpacity};">
                        Sign Up <br>
                        <input class="txt" type="text" placeholder="Name" id="name-sign" name="name"><br>
                        <input class="txt" type="text" placeholder="E-mail" id="username-email" name="email"><br>
                        <input class="txt" type={textType} placeholder="Password" id="password-sign" name="password"><a on:click={() => {showPW = !showPW; setType()}} class="eye" href="#"><img class="eyeimg" src="eye.svg" alt="idk"></a><br>
                        <input class="txt" type="password" placeholder="Re-type Password" id="repassword-sign" name="re-password"><br>
                        <a id="toLog" on:click={() => {sign = false; showPW = true; formUpdate();}}>Have an account? Log in.</a><br>
                        <input type="submit" name="submit-s" value="Sign Up"><br>
                        <span>or</span>
                        <button class="googlelog" type="submit"><div class="gglbtn"><img class="google" src="google.svg" alt="idk"> Log In with Google</div></button>
                    </form>
                    {/if}
                </div>
            </div>
        </div>
        {/if}
    </div>
</div>