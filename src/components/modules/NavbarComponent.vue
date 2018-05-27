<template>
    <b-navbar toggleable="md" type="dark" variant="black">
        <b-container>

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand class="um-logo" href="#">Umbrella <span>Corp</span></b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">DOTA</b-nav-item>
                    <b-nav-item href="#">CS:GO</b-nav-item>
                    <b-nav-item href="#">PUBG</b-nav-item>
                </b-navbar-nav>

            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
export default {
    name: 'navbar-component'
}
</script>

<style>
    @font-face {
        font-family: "Resident Evil";
        src: url("../../../static/fonts/resident_evil/Resident_Evil_Large.eot?") format("eot"),
             url("../../../static/fonts/resident_evil/Resident_Evil_Large.woff") format("woff"),
             url("../../../static/fonts/resident_evil/Resident_Evil_Large.ttf") format("truetype"),
             url("../../../static/fonts/resident_evil/Resident_Evil_Large.svg#") format("svg");
        font-weight:normal;
        font-style:normal;
    }
    @font-face {
        font-family: "Resident Evil Rus";
        src: url("../../../static/fonts/resident_evil_rus/resident_evil_rus.otf") format("opentype");
        font-weight:normal;
        font-style:normal;
    }
</style>


<style lang="sass" scoped>
    .bg-black
        background: #000
        height: 80px
    .um-logo
        color: #d71707
        font-family: Resident Evil
        font-size: 56px
        margin-bottom: -16px
        &:hover
            color: #d71707

        span
            color: #ffffff
    .navbar-collapse
        height: 80px
        .navbar-nav
            height: 80px
            .nav-item
                width: 140px
                transform: skew(-25deg)
                &:nth-child(odd)
                    background-image: linear-gradient(0deg, rgb(255,255,255) 0%, rgb(251,251,251) 19%, rgb(246,246,246) 50%, rgb(203,203,203) 99%)
                &:nth-child(even)
                    background-image: linear-gradient( 0deg, rgb(209,24,10) 0%, #ff3633 50%, rgb(208,24,10) 100%)
                a
                    color: #000
                    transform: skew(25deg)
                    font-family: Resident Evil Rus
                    font-size: 56px
                    line-height: 1.23
                    text-align: center
</style>
