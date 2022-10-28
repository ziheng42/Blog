<template>
    <div class="dashboard">
        <header class="whitebox">
            <div class="photo">
                <img src="@/assets/img/app/猫咪.png" alt="">
            </div>
            <div class="goodMorning">早安,淋雨的猫，开始您一天的工作吧。</div>
            <div class="weather">今日阴转大雨，15℃ - 25℃，出门记得带伞哦。</div>
            <div class="message">未读消息：24</div>
        </header>
        <main class="whitebox pq10">
            <div class="zhanwei">
                <img src="@/assets/img/dashboard/tuxing.svg" alt="">
            </div>
            <div class="right">
                <div class="shortcut">
                    <h3>快捷操作</h3>
                    <div class="mean">
                        <li class="box">
                            <div class="top">
                                <img src="@/assets/img/dashboard/仪表盘.png" alt="">
                            </div>
                            <p>主控台</p>
                        </li>
                        <li class="box">
                            <div class="top">
                                <img src="@/assets/img/dashboard/仪表盘.png" alt="">
                            </div>
                            <p>主控台</p>
                        </li>
                        <li class="box">
                            <div class="top">
                                <img src="@/assets/img/dashboard/仪表盘.png" alt="">
                            </div>
                            <p>主控台</p>
                        </li>
                        <li class="box">
                            <div class="top">
                                <img src="@/assets/img/dashboard/仪表盘.png" alt="">
                            </div>
                            <p>主控台</p>
                        </li>
                        <li class="box">
                            <div class="top">
                                <img src="@/assets/img/dashboard/仪表盘.png" alt="">
                            </div>
                            <p>主控台</p>
                        </li>
                        <li class="box">
                            <div class="top">
                                <img src="@/assets/img/dashboard/仪表盘.png" alt="">
                            </div>
                            <p>主控台</p>
                        </li>
                        <li class="box">
                            <div class="top">
                                <img src="@/assets/img/dashboard/仪表盘.png" alt="">
                            </div>
                            <p>主控台</p>
                        </li>
                    </div>
                </div>
                <div class="newMessage mt20">
                    <h3>最新消息</h3>
                    <div class="content">
                        <li class="box">
                            <div class="userPhoto">
                                <img src="@/assets/img/app/猫咪.png" alt="">
                            </div>
                            <div class="mesright pl10">
                                <div class="userMessage">猫大，该更新blog了</div>
                                <div class="mesTime">2022-09-12</div>
                            </div>
                        </li>
                        <li class="box">

                        </li>
                        <li class="box">

                        </li>
                        <li class="box">

                        </li>
                        <li class="box">

                        </li>
                        <li class="box">

                        </li>
                        <li class="box">

                        </li>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<script lang='ts' setup>
import { ref, reactive } from 'vue'

</script>

<style scoped lang='less'>
.dashboard {
    overflow: scroll;
    padding: 20px;
    // height: 800px;
    display: flex;
    flex-direction: column;

    header {
        height: 120px;
        display: grid;
        grid-template-columns: 7% auto 10%;
        grid-template-rows: repeat(2, 60px);
        grid-auto-flow: column;
        // align-items: center;
        gap: 10px 0px;
        // box-shadow: 0px 0px 5px -1px rgb(183, 182, 182);

        .photo {
            grid-column: 1/2;
            grid-row: 1/3;
            line-height: 120px;
            text-align: center;
            border-radius: 50%;

            img {
                width: 80%;
                min-width: 80px;
                vertical-align: middle;
            }
        }

        .goodMorning {
            font-size: 20px;
            font-weight: bolder;
            padding-top: 40px;
            color: rgb(65, 62, 62);
        }

        .weather {
            // padding-bottom: 10px;
        }

        .message {
            grid-row: 2/3;
            color: red;
        }
    }

    main {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        .zhanwei {
            min-width: 841.6px;
            min-height: 521.6px;
            width: 55%;
            padding: 20px;
            text-align: center;
            // box-shadow: 0px 0px 5px -1px rgb(183, 182, 182);

            img {
                width: 95%;
            }
        }

        .right {
            margin-left: 20px;
            width: 43%;

            .shortcut {
                box-sizing: border-box;
                height: 300px;
                padding: 20px;
                width: 100%;
                // box-shadow: 0px 0px 5px -1px rgb(183, 182, 182);

                h3 {
                    border-bottom: 1px solid rgb(224, 219, 219);
                    height: 40px;
                    margin-bottom: 10px;
                }

                .mean {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, 100px);
                    gap: 10px 10px;
                    justify-content: space-between;

                    li {
                        height: 100px;
                        text-align: center;
                        padding: 10px;

                        .top {
                            width: 100%;

                            img {
                                width: 70%;
                            }
                        }
                    }
                }
            }

            .newMessage {
                box-sizing: border-box;
                height: 300px;
                padding: 20px;
                width: 100%;
                // box-shadow: 0px 0px 5px -1px rgb(183, 182, 182);

                h3 {
                    border-bottom: 1px solid rgb(224, 219, 219);
                    height: 40px;
                    margin-bottom: 10px;
                }

                .box {
                    display: flex;
                    align-items: center;
                    .userPhoto {
                        width: 50px;
                        img {
                            width: 100%;
                        }
                    }

                }
            }
        }
    }
}

::-webkit-scrollbar {
    width: 1px;
}
</style>