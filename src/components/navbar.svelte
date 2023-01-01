<script>
	import { onMount } from 'svelte';
	import { getUsername } from '../lib/firebase';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';

	const auth = getAuth();
	let logged;

	onMount(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				logged = true;
			} else {
				logged = false;
			}
		});
	});
    let userDetails = false;
	let popup = false;
	let sign = false;

    let sentinel = false;

	let showPW = false;
	let textType = 'password';

	async function fetchUsername() {
		if (auth.currentUser.displayName) {
			return auth.currentUser.displayName;
		} else {
			return await getUsername();
		}
	}

	function formUpdate() {
		if (sign) {
			formHolder.margin = '50%';
			formHolder.loginOpacity = '0%';
			formHolder.signupOpacity = '100%';
		} else {
			formHolder.margin = '0%';
			formHolder.loginOpacity = '100%';
			formHolder.signupOpacity = '0%';
		}
	}

	function viewPopup() {
		popup = !popup;
		formUpdate();
	}

	let formHolder = {
		margin: '0%',
		signupOpacity: '0%',
		loginOpacity: '100%'
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
			textType = 'text';
		} else {
			textType = 'password';
		}
	}
</script>

<div class="header" on:keydown={closeOnEsc}>
	<div id="left"><a href="/" class="text-nord4">Diary</a></div>
	<div id="right" on:m>
		{#if !logged}
			<a
				id="login"
				on:click={() => {
					sign = false;
					viewPopup();
				}}
				href="#">Log In</a
			>
			<a
				id="signup"
				on:click={() => {
					sign = true;
					viewPopup();
				}}
				href="#">Sign Up</a>
		{:else}
			{#await fetchUsername()}
				<div id="user" on:mouseenter={() =>fetching..</div>
			 {userDetails = true}}
         on:mouseleave|capture={() => {if (sentinel) {userDetails = false}}}>{:then uname}
				<div id="user">{uname}</div>
			{/await}
        {#if userDetails}
            <div id="userDet" on:mouseenter|capture={() => {sentinel = true}} on:mouseleave={() => userDetails = sentinel = false}>
                <a href="#">Settings</a>
                <a on:click={() => {logged = false}} href="#">Sign Out</a>
            </div>
        {/if}
		{/if}
		{#if popup}
			<div
				on:click={() => {
					popup = false;
				}}
				class="loginsignup"
			>
				<div
					on:click={(e) => {
						e.stopPropagation();
					}}
					class="popup"
				>
					<div class="form-div" style="margin: 0 0 0 {formHolder.margin};">
						{#if !sign}
							<form
								class="loginForm"
								action="/login"
								method="POST"
								style="opacity: {formHolder.loginOpacity};"
							>
								Log In<br /><br />
								<input
									class="txt"
									type="email"
									placeholder="E-mail"
									id="email-log"
									name="email"
								/><br />
								<input
									class="txt"
									type={textType}
									placeholder="Password"
									id="password-log"
									name="password"
								/><a
									on:click={() => {
										showPW = !showPW;
										setType();
									}}
									class="eye"
									href="#"><img class="eyeimg" src="eye.svg" alt="idk" /></a
								><br />
								<a
									id="toSign"
									on:click={() => {
										sign = true;
										formUpdate();
									}}>Don't have an account? Sign up.</a
								><br />
								<input type="submit" name="submit-l" value="Log In" />
								<span id="or">or</span><br />
								<button class="googlelog" type="submit"
									><div class="gglbtn">
										<img class="google" src="google.svg" alt="idk" /> Log In with Google
									</div></button
								>
							</form>
						{:else}
							<form
								class="signupForm"
								action="/signup"
								method="POST"
								style="opacity: {formHolder.signupOpacity};"
							>
								Sign Up <br />
								<input class="txt" type="text" placeholder="Name" id="name-sign" name="name" /><br
								/>
								<input
									class="txt"
									type="email"
									placeholder="E-mail"
									id="username-email"
									name="email"
								/><br />
								<input
									class="txt"
									type={textType}
									placeholder="Password"
									id="password-sign"
									name="password"
								/><a
									on:click={() => {
										showPW = !showPW;
										setType();
									}}
									class="eye"
									href="#"><img class="eyeimg" src="eye.svg" alt="idk" /></a
								><br />
								<input
									class="txt"
									type="password"
									placeholder="Re-type Password"
									id="repassword-sign"
									name="re-password"
								/><br />
								<a
									id="toLog"
									on:click={() => {
										sign = false;
										formUpdate();
									}}>Have an account? Log in.</a
								><br />
								<input type="submit" name="submit-s" value="Sign Up" /><br />
								<span>or</span>
								<button class="googlelog" type="submit"
									><div class="gglbtn">
										<img class="google" src="google.svg" alt="idk" /> Log In with Google
									</div></button
								>
							</form>
						{/if}
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;700;900&display=swap');

	:root {
		--colour1: rgb(38, 38, 38);
		--colour2: #23875c;
		--colour3: #d2a94b;
		--colour4: #bf0603;
		--colour5: #8d0801;

		--nord0: #2e3440;
		--nord1: #3b4252;
		--nord2: #434c5e;
		--nord3: #4c566a;

		--nord4: #d8dee9;
		--nord5: #e5e9f0;
		--nord6: #eceff4;

		--nord7: #8fbcbb;
		--nord8: #88c0d0;
		--nord9: #81a1c1;
		--nord10: #5e81ac;

		--nord11: #bf616a;
		--nord12: #e48163;
		--nord13: #ebcb8b;
		--nord14: #a3be8c;
		--nord15: #db7dca;
	}

	body {
		margin: 0;
		padding: 0;
		height: 100%;
		color: var(--nord12);
		background: var(--nord13);
		font-family: 'Outfit', sans-serif;
		font-weight: 500;
	}
        --nord4: #d8dee9;
        --nord5: #e5e9f0;
        --nord6: #eceff4;
        
        --nord7: #8fbcbb;
        --nord8: #88c0d0;
        --nord9: #81a1c1;
        --nord10: #5e81ac;
        
        --nord11: #bf616a;
        --nord12: #e48163;
        --nord13: #ebcb8b;
        --nord14: #a3be8c;
        --nord15: #db7dca;
        color: var(--nord12);
        background: var(--nord13);
        font-family: 'Outfit', sans-serif;
        font-weight: 500;
    }
    
    body {
        margin: 0;
        padding: 0;
        height: 100%;
    }

	.header {
		font-size: 6vh;
		height: 12vh;
		width: 100%;
		background-color: var(--nord0);
		display: flex;
		justify-content: space-between;
        z-index: 5;
	}

    .header > div {
        width: 50%;
        /* z-index: 5; */
    }

	#right {
		font-size: 4vh;
		text-align: right;
		display: block;
		height: 12vh;
		display: flex;
		justify-content: right;
	}

	#right > a {
		display: inline-block;
		vertical-align: middle;
		line-height: normal;
		padding: 3.7vh 2vh 0 2vh;
		margin: 0;
		display: block;
		text-decoration: none;
		color: var(--nord15);
		transition: background-color 150ms ease-in-out;
	}

	#right > a:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	#user {
		display: inline-block;
		vertical-align: middle;
		line-height: normal;
		padding: 3.7vh 2vh 0 2vh;
		margin: 0;
		display: block;
		text-decoration: none;
		color: var(--nord15);
		transition: background-color 150ms ease-in-out;
	}

	#user:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

    #userDet {
        position: absolute;
        background: var(--nord6);
        transform: translateY(11.9vh);
        padding-top: 0.1vh;
        z-index: 1;
        font-size: 3vh;
        width: 6em;
        text-align: center;
        border-radius: 0 0 10px 10px;
    }

    /* #userDet {
        padding: 0.5rem;
    } */

    #userDet > a {
        padding: 0.5rem;
        display: block;
        width: 100%;
    }
    #userDet > a:hover {
        background: rgba(0, 0, 0, 0.1);
    }

	#left {
		padding: 2vh 0 2vh 0.5em;
		display: inline-block;
		vertical-align: middle;
		line-height: normal;
	}

	.loginsignup {
		background-color: rgba(0, 0, 0, 0.2);
		position: absolute;
		width: 100%;
		height: clamp(100vh, 100vh, auto);
		justify-content: center;
	}

	.popup {
		color: var(--nord1);
		margin: 20vh auto;
		z-index: 50;
		background-color: rgb(37, 37, 37);
		border-radius: 20px;
		overflow: hidden;
		width: 50vw;
		box-shadow: 0px 0 10px 5px rgba(0, 0, 0, 0.3);
	}

	.form-div {
		z-index: 100;
		width: 50%;
		background-color: var(--nord5);
		height: 100%;
		transition: all 200ms ease-out;
	}

	.form-div > form {
		font-size: 2rem;
		width: 100%;
		padding: 1em 0 1em 0;
		text-align: center;
		transition: opacity 200ms 1s linear;
		font-weight: 300;
	}

	form > input.txt {
		border: 0;
		font-size: 2vh;
		padding: 5px;
		width: 15em;
		border-radius: 5px;
	}

	form > input[type='submit'] {
		padding: 0.5rem 1rem;
		font-size: 2.5vh;
		border-radius: 10px;
		text-decoration: underline;
		transition: all ease-out 200ms;
	}

	form > input[type='submit']:hover,
	form > input[type='submit']:focus {
		text-decoration: none;
		box-shadow: inset black 0 0 6px;
		background-color: rgba(0, 0, 0, 0.05);
	}

	#password-log,
	#password-sign {
		width: 13em;
		border-radius: 5px 0 0 5px;
	}

	.eye {
		background: white;
		border-left: var(--nord9) solid 1px;
		width: 2rem;
		border-radius: 0 5px 5px 0;
		color: var(--nord15);
		font-size: 2vh;
		padding: 6.5px 6px;
	}

	.eyeimg {
		line-height: normal;
		vertical-align: middle;
		display: inline-block;
		width: 2.5vh;
	}

	form > a {
		font-size: 2vh;
		text-decoration: underline;
		color: var(--colour2);
		cursor: pointer;
		padding: 5px;
	}

	form > a:hover,
	form > a:focus {
		text-decoration: none;
	}

	#or {
		padding: 0.5em 0 0 0;
	}

	span {
		display: block;
		text-align: center;
		padding: 0 0 0.5em 0;
	}

	span:before,
	span:after {
		background-color: var(--colour3);
		position: absolute;
		content: '';
		overflow: hidden;
		height: 2px;
		width: 8%;
		margin-top: 0.85em;
	}

	span:before {
		margin-left: -9%;
		text-align: right;
	}

	span:after {
		margin-left: 1%;
		text-align: right;
	}

	.gglbtn {
		padding: 0.5rem 1rem;
		border-radius: 10px;
		transition: all ease-out 200ms;
	}

	.gglbtn:hover {
		box-shadow: inset black 0 0 6px;
		background-color: rgba(0, 0, 0, 0.05);
	}

	.google {
		display: inline;
		width: 2.5rem;
	}

	.googlelog {
		font-size: 3vh;
		background-color: white;
		border-radius: 10px;
		text-align: center;
		margin: 0 auto;
	}
</style>
