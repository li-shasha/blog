<template>
    <div id="app">
        <el-container>
            <el-header height="auto">
                <div>
                    <img src="./assets/img/header1.png">
                </div>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">WORK</el-menu-item>
                    <el-menu-item index="2">BLOG</el-menu-item>
                    <el-menu-item index="3">LIFE</el-menu-item>
                </el-menu>

                <el-row class="row-hr-line">
                    <hr>
                </el-row>
            </el-header>
            <el-main>
                <el-row class="intro">
                    <p>
                        The Carpenters were an American vocal and instrumental duo of Karen (1950–1983) and Richard Carpenter (b. 1946).<br>
                        They produced a distinct soft musical style, combining Karen's contralto vocals with Richard's arranging and composition skills.
                    </p>
                </el-row>

                <el-row :justify="center" class="row-header">
                    <div><strong>WORK</strong></div>
                </el-row>

                <el-row :gutter="40" :justify="center">
                    <el-col :xs="24" :sm="{span:7,offset:1}" :lg="{span:5,offset:4}">
                        <img src="./assets/img/artboard-1.png" alt="dashboard1">
                        <div>
                            <p><strong>Work</strong></p>
                            <p>Such a feelin's comin' over me There is wonder in 'most ev'ry thing I see</p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="7" :lg="5">
                        <img src="./assets/img/artboard-2.png" alt="dashboard2">
                        <div>
                            <p><strong>Life</strong></p>
                            <p>Not a cloud in the sky, got the sun in my eyes
                                And I won't be surprised if it's a dream</p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="7" :lg="5">
                        <img src="./assets/img/artboard-3.png" alt="dashboard3">
                        <div>
                            <p><strong>Test</strong></p>
                            <p>Everything I want the world to be
                                Is now comin' true especially for me</p>
                        </div>
                    </el-col>
                </el-row>

                <el-row class="row-hr-line">
                    <hr>
                </el-row>
                <el-row :justify="center" class="row-header">
                    <div><strong>LIFE</strong></div>
                </el-row>

                <el-row :gutter="40" :jusity="middle">
                    <el-col :xs="24" :sm="{span:7, offset:1}" :lg="{span:5,offset:4}">
                        <img src="./assets/img/artboard-4.png" alt="dashboard4">
                        <div>
                            <p><strong>Test</strong></p>
                            <p>And the reason is clear, it's because you are here
                                You're the nearest thing to heaven that I've seen</p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="7" :lg="5">
                        <img src="./assets/img/artboard-5.png" alt="dashboard5">
                        <div>
                            <p><strong>Test</strong></p>
                            <p>I'm on the top of the world lookin' down on creation
                                And the only explanation I can find</p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="7" :lg="5">
                        <img src="./assets/img/artboard-6.png" alt="dashboard6">
                        <div>
                            <p><strong>Test</strong></p>
                            <p>Is the love that I've found ever since you've been around
                                Your love's put me at the top of the world</p>
                        </div>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :xs="24">
                        <img src="./assets/img/artboard-7.png" alt="dashboard7">
                    </el-col>
                </el-row>

                <el-row class="intro">
                    <p><strong>Vue Project</strong></p>
                    <p>The easiest way to try out Vue.js is using the JSFiddle Hello World example. <br>
                        Feel free to open it in another tab and follow along as we go through some basic examples. </p>
                </el-row>

                <el-row class="row-hr-line">
                    <hr>
                </el-row>
            </el-main>

            <el-footer>
                <el-row :gutter="50">
                    <el-col :span="2" :offset="8">
                        <a href="#" target="_blank">Weibo</a>
                    </el-col>
                    <el-col :span="2">
                        <a href="https://github.com/li-shasha" target="_blank">Github</a>
                    </el-col>
                    <el-col :span="2">
                        <a href="#" target="_blank">Twiter</a>
                    </el-col>
                    <el-col :span="2">
                        <a href="#" target="_blank">Facebook</a>
                    </el-col>
                </el-row>
                <el-row>
                    <p>@2018</p>
                </el-row>
            </el-footer>
        </el-container>

        <!--<router-view/>-->

    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>


<style>
    #app {
        font-family: "Roboto", 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .el-container {
        margin: 0 120px;
    }

    .el-menu-demo {
        border:none;
        display: inline-block;
        text-align: center;
    }
    @media only screen and (max-width: 768px) {
        .el-container {
            margin: 0 15px;
            min-width: 200px;
        }
    }

    .el-main .intro {
        margin: 30px 60px;
    }

    .el-main .row-header {
        margin: 30px;
        color: rgb(65, 85, 91);
    }

    .el-row {
        margin: 30px 0;
    }
    .el-header .row-hr-line{
        color: rgb(240, 240, 240);
        margin: -12px 0 0;
    }
    .el-main .row-hr-line {
        color: rgb(240, 240, 240);
        margin: 30px 0;
    }

    .el-main .el-row .el-col div {
        max-width: 400px;
        max-height: 300px;
        margin: auto;
    }

    .el-main img {
        width: 100%;
        height: 80%;
    }

    .el-main p strong {
        color: rgb(148, 175, 185);
    }

    .el-row p {
        color: #626262;
    }

    .el-footer a{
        text-decoration: none;
        font-size: 20px;
        color: rgb(148, 175, 185) ;
    }

</style>
