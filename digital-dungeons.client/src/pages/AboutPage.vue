<template>
  <div class="row justify-content-around">
    <div class="card col-3 m-3 cards elevation-3">
      <img src="https://thiscatdoesnotexist.com" alt="">
      <h4 class="text-shadow2">Thomas Daily</h4>
      <div class="card-body rounded text-shadow ">
        <p>Description</p>
      </div>
      <div class="card-text">
        <a href="https://github.com/Thomas-Daily" target="_blank" class="mdi mdi-github fs-4"></a>
        <a class="mdi mdi-linkedin fs-4" target="_blank" href=""></a>
      </div>
    </div>
    <div class="card col-3 m-3 cards elevation-3">
      <img src="https://thiscatdoesnotexist.com" alt="">
      <h4 class="text-shadow2">Abraham Coombs</h4>
      <div class="card-body rounded text-shadow ">
        <p>Description</p>
      </div>
      <div class="card-text">
        <a href="https://github.com/coombsab" target="_blank" class="mdi mdi-github fs-4"></a>
        <a class="mdi mdi-linkedin fs-4" target="_blank" href="https://github.com/coombsab"></a>
      </div>
    </div>
    <div class="card col-3 m-3 cards elevation-3">
      <img src="https://thiscatdoesnotexist.com" alt="">
      <h4 class="text-shadow2">Jake Neitzell</h4>
      <div class="card-body rounded text-shadow ">
        <p>Description</p>
      </div>
      <div class="card-text">
        <a href="https://github.com/JacobNeitzell" target="_blank" class="mdi mdi-github fs-4 selectable"></a>
        <a class="mdi mdi-linkedin fs-4" target="_blank"
          href="https://www.linkedin.com/in/jacob-neitzell-610a64180/"></a>
      </div>
    </div>
    <div class="card col-3 m-3 cards elevation-3">
      <img src="https://thiscatdoesnotexist.com" alt="">
      <h4 class="text-shadow2">Talor Montandon</h4>
      <div class="card-body rounded text-shadow ">
        <p>Description</p>
      </div>
      <div class="card-text">
        <a href="https://github.com/Tmontandon" target="_blank" class="mdi mdi-github fs-4"></a>
        <a class="mdi mdi-linkedin fs-4" target="_blank" href="https://github.com/Tmontandon"></a>
      </div>
    </div>
    <div class="card col-3 m-3 cards elevation-3">
      <img src="https://thiscatdoesnotexist.com" alt="">
      <h4 class="text-shadow2">Jake Paulin</h4>
      <div class="card-body rounded text-shadow ">
        <p>Description</p>
      </div>
      <div class="card-text">
        <a href="https://github.com/Jakeepaulin" target="_blank" class="mdi mdi-github fs-4"></a>
        <a class="mdi mdi-linkedin fs-4" target="_blank" href="https://github.com/Jakeepaulin"></a>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  setup() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.cards {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dwtF7vOPZ-DCx4krVa9Yxnbsv_HUCfkTb5IychHAq4VYST67fFsvnTequ9LmrUU3ShI&usqp=CAU");
  background-position: center;
  background-size: cover;

}

.text-shadow2 {
  color: rgba(29, 34, 39, 0.622);
  text-shadow: 1px 1px rgba(4, 4, 4, 0.856), 0px 0px 5px rgb(16, 31, 86);
  font-weight: bold;
  letter-spacing: 0.08rem
}


.text-shadow {
  color: rgba(209, 215, 221, 0.988);
  text-shadow: 1px 1px black, 0px 0px 5px rgba(18, 190, 203, 0.921);
  font-weight: bold;
  letter-spacing: 0.08rem
}

a {
  color: black;

}

.card-body {
  background-color: rgba(33, 64, 108, 0.582);
}
</style>