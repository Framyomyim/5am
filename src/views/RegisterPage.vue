<template>
    <div class="container">
        <Logo />

        <div class="card">
            <h3>Create to your account</h3>
            <input type="text" v-model="user_hash" class="input-login" placeholder="Your User Hash">
            <input type="submit" v-on:click="login" class="input-btn" value="Continue">
            <hr>
            <span>
                Already have account? - <router-link class="link" to="/">Login?</router-link>
            </span>
        </div>
    </div>
</template>

<script>
    import Logo from '@/components/Logo'
    export default {
        name: 'LoginPage'   ,
        created: () => document.title = '5AM - Login',
        components: { Logo },
        data() {
            return {
                user_hash: ''
            };
        },
        methods: {
            login() {
                this.Auth('register', this.user_hash);
            }
        }
    }
</script>

<style>
    body {
        background: #0062FF;
        color: #fff;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        display: flex;
        width: 400px;
        justify-content: center;
        flex-direction: column;
    }

    .card {
        display: block;
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 0 6px 0.5px rgba(0, 0, 0, 0.025);
        color: #444;
        padding: 30px 20px;
        text-align: center;
        margin-bottom: 90px;
    }

    .card h3 {
        display: block;
        margin: 0 0 15px 0;
    }

    .input-login,
    .input-btn {
        display: block;
        position: relative;
        width: 100%;
        outline: 0;
        border: 1px solid #ccc;
        border-radius: 8px;
        background: #fcfcfc;
        padding: 8px 10px;
    }

    .input-login:focus {
        border-color: #0062FF;
        background: #fff;
    }

    .input-btn {
        border: none;
        background: #0062FF;
        color: #fff;
        margin-top: 8px;
        cursor: pointer;
    }

    .input-btn:hover {
        opacity: 0.95;
    }

    .input-btn:active {
        opacity: 0.8;
    }

    hr {
        border: none;
        background: transparent;
        border-top: 1px solid #eee;
        margin: 15px 0;
    }

    .card span {
        color: #0062FF;
        font-size: 0.875rem;
        font-weight: 500;
    }

    .link {
        text-decoration: underline;
        color: #0062FF;
    }

    .link:hover {
        opacity: .6;
    }
</style>