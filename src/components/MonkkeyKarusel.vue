<template>
  <body>
    <div class="for_lowers_div">
        <h1 class="text_h1_flowers">More Value from <span class="span_text" ><a href="">this Flowers</a> </span></h1>
    </div>
    
    <section class="all">
        <div class="for_buttons">
            <button type="button" >Special Deals</button>
            <button type="button" >Populer</button>
            <button type="button" >Recommendation</button>
            <button type="button" >Best Price</button>
        </div>
        <div class="for_second_buttons">
          <button type="button" class="btn btn-outline-secondary">End</button>
          <button type="button" class="btn btn-outline-secondary">Next</button>

        </div>
    </section>
    <section>
      <div class="cards">
        <div class="card1">
          <img src="../assets/jasmine.png" alt="">
          <p>Jasmine Flowers</p>
          <p class="card_under_p">$258</p>
        </div>
        <div class="card1">
          <img src="../assets/lili.jpeg" alt="">
          <p>Lily Flowers</p>
          <p class="card_under_p">$310</p>
        </div>
        <div class="card1">
          <img src="../assets/rose.jpg" alt="">
          <p>Rose Flowers</p>
          <p class="card_under_p">$114</p>
        </div>
        <div class="card1">
          <img src="../assets/amily.jpeg" alt="">
          <p>Amaris Flowers</p>
          <p class="card_under_p">$410</p>
        </div>
        
        
        
      </div>
      <div class="flowers_name">
        
        
        
        
      </div>
      <div class="flowers_cost">
        
        
        
        
      </div>
    </section>

    

  </body>

</template>

<script>

</script>


<style>
body{
  background-color: #F4F7F8;
  margin-left: 55px;
  width: 1600px;
  height: 600px;
}


.for_buttons button:hover {
  color: rgb(0, 0, 0);
  cursor: pointer;
}
.span_text a:hover{
  color: #145855;
  text-decoration: underline;
}
.span_text a {
  color: black;
  text-decoration: none;
}


.all{
  padding-top: 40px;
  display: flex;
  align-items: center;
  
  
}
.for_buttons{
  text-align: left;
  margin-left: 200px;
  
  transition: all 20s;
}
.for_buttons button:hover{
  /* font-size: 20px; */
  color: rgb(0, 0, 0);
  scale: 1.2;
}
.for_buttons button {
  color: #a09e9e;
  border: none;
  background: scroll;
margin-left: 30px;
  
}
.for_second_buttons{
  
  margin-left: 580px;
}
.for_second_buttons button{
  margin-left: 20px;
  border: 2px solid #145855;
}
.for_lowers_div{
    margin-left: 200px;
    width: 450px;
}
.text_h1_flowers{
    text-align: left;
    font-size: 50px;
    color: #000;
}
.cards img  {
  margin-left: 60px;
  border-radius: 30px;
  width: 262.5px;
  height: 300px;
  transition: all 2s;
}
.cards{
  margin-top: 40px;
  display: flex;
  align-items: center;
margin-left: 150px;
}
.card1 p{
  font-size: 20px;
  padding-top: 20px;
  margin-left: 64px;
  text-align: left;
}
.flowers_name{
  padding-top: 35px;
  display: flex;
  align-items: center;
}
.flowers_name p {
  font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
padding-left: 190px;
  margin-left: 20px;
  color: #282A30;
}

.flowers_cost{
  display: flex;
  align-items: center;
 
}
.card_under_p{
  margin-left: 82px;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #145855;
}
</style>