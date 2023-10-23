<template>
    <section class="cards">
        <div class="cards-img">
            <img src="../assets/samp.jpg" alt="">
        </div>
        <div class="cards-text">
            <h1 class="h1-1">Odil</h1>
            <h1 class="h1">Flowers in your area</h1>
            <p>People have been using natural objects, such as tree stumps, rocks and moss, as furniture since thebeginning
                of human civilisation. </p>
            <button>Read More</button>
        </div>
    </section>
    <section class="cards">
       
        <div class="cards-text">
            <h1 class="h1-1">Feruza opa</h1>
            <h1 class="h1">Flowers in your area</h1>
            <p>People have been using natural objects, such as tree stumps, rocks and moss, as furniture since thebeginning
                of human civilisation. </p>
            <button>Read More</button>
        </div>
        <div class="cards-img">
            <img src="../assets/samp.jpg" alt="">
        </div>
    </section>
    <section class="cards">
        <div class="cards-img">
            <img src="../assets/samp.jpg" alt="">
        </div>
        <div class="cards-text">
            <h1 class="h1-1">и я</h1>
            <h1 class="h1">Flowers in your area</h1>
            <p>People have been using natural objects, such as tree stumps, rocks and moss, as furniture since thebeginning
                of human civilisation. </p>
            <button>Read More</button>
        </div>
    </section> 
</template>
<style>
.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    margin: 150px;
}

.cards p {
    width: 619px;
}

.h1-1 {
    color: #000;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.cards .h1 {
    width: 604px;
    color: #145855;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration-line: underline;
}

.cards img {
    width: 444px;
    height: 677px;
    border-radius: 30px;
    object-fit: cover;
}

button{
    padding: 13.75px 42px;
    border-radius: 40px;
    border:  1px solid #145855;
    background: transparent;
}

</style>