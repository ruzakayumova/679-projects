<template>
<div class="banner">
    <header class="h1">
        <div class="all">
            <div class="img">
                <img src="../assets/img1.png" alt="">
            </div>
            <div class="infa">
                <ul>
                    <li>About</li>
                    <li>Home</li>
                    <li>Collection</li>
                    <li>Shop</li>
                    <li>Product</li>
                </ul>
            </div>
            <div class="icoms">
                <img src="../assets/img2.png" alt="">
                <img src="../assets/img3.png" alt="">
            </div>
        </div>
    </header>
    <section class="s1">
        <div class="both">
            <div class="left">
                <p id="ppp">
                    DECORATE YOUR HOME
                </p>
                <h1 id="hhh">
                    Feel your home 
                </h1>
                <h2 id="hhp">
                    with a modern design 
                    space
                </h2>
                <div class="d1">
                    <button>Discover</button>
                    <img src="../assets/img4.png" alt="">
                </div>
            </div>
            <div class="right">
                <img src="../assets/img888.png" alt="">
            </div>
        </div>
    </section>
    <footer>
        <div class="container">
            <div class="levo">
                <img src="../assets/img1.png" alt="">
                <p>Start your day with the spirit of exercising and you will get many very important benefits</p>
                <img src="../assets/Social.png" alt="">
            </div>
            <div class="pravo">
                <div class="nachalo">
                    <h1>Product</h1>
                    <p>About</p>
                    <p>How is iy work</p>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Mobile</p>
                </div>
                <div class="seredina">
                    <h1>Support</h1>
                    <p>Help</p>
                    <p>Documental</p>
                    <p>On</p>
                    <p>Guide</p>
                    <p>Tutorial</p>
                </div>
                <div class="kones">
                    <h1>Services</h1>
                    <p>About</p>
                    <p>Submit on</p>
                    <p>Issue</p>
                    <p>support</p>
                    <p>company us</p>
                </div>
            </div>
        </div>
    </footer>
</div>
</template>
<style>
.s1{
    background-color: #F4F7F8;
}
header{
    padding-top: 60px;
    background-color: #F4F7F8;
}
footer{
    
    background-color: #F4F7F8;
}
    .both{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .d1{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5%;
        margin-bottom: 7%;
    }
    .levo{
    font-weight: 200px;
    }
    .levo p{
    font-size: 16px;
    text-align: left;
    }
    .nachalo h1{
        font-size: 18px
    }
    .seredina h1{
        font-size: 18px
    }
    .kones h1{
        font-size: 18px
    }
    .nachalo p{
        font-size: 18px
    }
    .seredina p{
        font-size: 18px
    }
    .kones p{
        font-size: 18px
    }
    .pravo{
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 160px;
    }
    .container{
        display: flex;
        align-items: center;
        justify-content: space-around
    }
    .all{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    li{
        list-style: none;
    }
    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 40px;
        margin-right: 30px;
    }
    .icoms{
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 40px;
    }
    #ppp{
        color: #145855;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 0%; /* 0px */
        letter-spacing: 7px;
        text-align: left;
        margin-left: 10%;
    }
    #hhh{
        color: #145855;
        font-family: Poppins;
        font-size: 50px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration-line: underline;
        margin-bottom: 0%;
        text-align: left;
        margin-left: 10%;
    }
    #hhp{
        color: #145855;
        font-family: Poppins;
        font-size: 50px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-align: left;
        margin-left: 10%;
        }
        .d1 button{
            padding: 7px 30px;
            border-radius: 20px;
            border: 1px solid black;
            background-color: white;
        }
</style>
