<template>
  <section class="container-fluid about-page">
    <div class="row justify-content-around ">


      <div class="col-md-3 p-md-3 p-2">
        <div class="card cards elevation-3">
          <img src="https://thiscatdoesnotexist.com" alt="">
          <h4 class="text-shadow2">Thomas Daily</h4>
          <div class="card-body rounded text-shadow ">
            <p>Description</p>
          </div>
          <div class="card-text">
            <a href="https://github.com/Thomas-Daily" target="_blank" class="mdi mdi-github fs-4 p-1"></a>
            <a class="mdi mdi-linkedin fs-4 p-1" target="_blank" href=""></a>
          </div>
        </div>
      </div>


      <div class="col-md-3 p-md-3 p-2">
        <div class="card cards elevation-3">
          <img src="https://thiscatdoesnotexist.com" alt="">
          <h4 class="text-shadow2">Abraham Coombs</h4>
          <div class="card-body rounded text-shadow ">
            <p>Description</p>
          </div>
          <div class="card-text">
            <a href="https://github.com/coombsab" target="_blank" class="mdi mdi-github fs-4 p-1"></a>
            <a class="mdi mdi-linkedin fs-4 p-1" target="_blank"
              href="https://www.linkedin.com/in/abraham-coombs-33408ab8/"></a>
          </div>
        </div>
      </div>


      <div class="col-md-3 p-md-3 p-2">
        <div class="card cards elevation-3">
          <img src="../assets/img/me.jpg" alt="">
          <h4 class="text-shadow2">Jake Neitzell</h4>
          <div class="card-body rounded text-shadow ">
            <p>Description</p>
          </div>
          <div class="card-text">
            <a href="https://github.com/JacobNeitzell" target="_blank" class="mdi mdi-github fs-4 p-1"></a>
            <a class="mdi mdi-linkedin fs-4 p-1" target="_blank"
              href="https://www.linkedin.com/in/jacob-neitzell-610a64180/"></a>
          </div>
        </div>
      </div>


      <div class="col-md-3 p-md-3 p-2">
        <div class="card cards elevation-3">
          <img src="https://thiscatdoesnotexist.com" alt="">
          <h4 class="text-shadow2">Talor Montandon</h4>
          <div class="card-body rounded text-shadow ">
            <p>Description</p>
          </div>
          <div class="card-text">
            <a href="https://github.com/Tmontandon" target="_blank" class="mdi mdi-github fs-4 p-1"></a>
            <a class="mdi mdi-linkedin fs-4 p-1" target="_blank" href="https://github.com/Tmontandon"></a>
          </div>
        </div>
      </div>


      <div class="col-md-3 p-md-3 p-2">
        <div class="card cards elevation-3">
          <img src="https://thiscatdoesnotexist.com" alt="">
          <h4 class="text-shadow2">Jake Paulin</h4>
          <div class="card-body rounded text-shadow ">
            <p>Description</p>
          </div>
          <div class="card-text">
            <a href="https://github.com/Jakeepaulin" target="_blank" class="mdi mdi-github fs-4 p-1"></a>
            <a class="mdi mdi-linkedin fs-4 p-1" target="_blank" href="https://github.com/Jakeepaulin"></a>
          </div>
        </div>
      </div>


      <div class="col-md-3 p-md-3 p-2">
        <div class="card cards elevation-3">
          <img src="https://thiscatdoesnotexist.com" alt="">
          <h4 class="text-shadow2">Kylee Want</h4>
          <div class="card-body rounded text-shadow ">
            <p>Description</p>
          </div>
          <div class="card-text">
            <a href="https://github.com/Lumine3449" target="_blank" class="mdi mdi-github fs-4 p-1"></a>
            <a class="mdi mdi-linkedin fs-4 p-1" target="_blank"
              href="https://www.linkedin.com/in/kylee-want-559853249/"></a>
          </div>
        </div>
      </div>
    </div>
  </section>
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
.about-page {
  height: 100vh;
  overflow-y: auto;
  padding: 1rem 3.5rem 1rem 3.5rem;
}

.cards {
  background-color: rgba(36, 1, 43, 0.892);
}



.text-shadow2 {
  color: rgba(206, 157, 219, 0.888);
  text-shadow: 1px 1px rgba(51, 48, 48, 0.856), 0px 0px 5px rgb(12, 28, 85);
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
  color: rgb(250, 12, 198);

}

.card-body {
  background-color: rgba(138, 75, 149, 0.464);
}

@media (min-width: 768px) {
  .about-page {
    height: 100vh;
    overflow-y: auto;
    padding: 1rem 5rem 1rem 5rem;
  }
}
</style>