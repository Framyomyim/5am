<template>
    <div class="wrapper">
        <div class="box-ask">
            <textarea class="ask-input" placeholder="What's your feeling now?"></textarea>
            <input type="submit" class="ask-submit" value="Lineup">
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        display: block;
        width: 50%;
        margin: 0 auto;
        margin-top: 20px;
    }

    .box-ask {
        display: block;
        position: relative;
        background: #eee;
        padding: 15px;
        border: 1px solid #ccc;
    }

    .ask-input {
        display: block;
        position: relative;
        width: 100%;
        height: 100px;
        outline: 0;
        background: #eee;
        padding: 10px 15px;
        border: none;
    }

    .ask-submit {
        display: inline-block;
        position: absolute;
        bottom: 0;
        right: 10px;
        outline: 0;
        border: none;
        padding: 10px 18px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 8px 8px 0 0;
        z-index: 1111;
    }

    .ask-submit:hover {
        background: rgba(255, 255, 255, 0.5);
        cursor: pointer;
    }

    .ask-submit:active {
        opacity: 0.3;
    }
</style>