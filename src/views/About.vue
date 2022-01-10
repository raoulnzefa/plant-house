<template>
  <div class="about-page container">
    <h1>About</h1>
    <section class="prolog">
      <h2>Bringing Life To People And People To Life</h2>
      <p>Rest your eye on something beautiful.</p>
      <p>Touch something alive.</p>
      <p>Find a moment of stillness, of quiet contemplation.</p>
      <p>Let nature bring out the best in you.</p>
    </section>
    <section class="main-text">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dolorem
        voluptatem suscipit asperiores accusamus rerum exercitationem harum
        molestiae! Cumque officia vel ex nam minima accusamus corporis
        accusantium, eaque corrupti nostrum dolorem ab quia recusandae sit! At
        excepturi facilis error nemo necessitatibus laborum eveniet, vero sit
        alias rem aut recusandae veniam commodi sequi illo consectetur
        architecto voluptates atque autem consequuntur reiciendis esse
        consequatur. Ab porro perferendis saepe culpa unde, dolore aut iure
        laboriosam quibusdam veritatis ad nobis commodi velit debitis fugiat,
        libero dicta tempora magnam accusantium reiciendis. Quas voluptates
        ullam voluptas similique explicabo atque modi quia, animi consequatur
        nemo dicta quam! Delectus, optio nulla aperiam quod nobis id doloribus,
        illo ratione ex culpa, voluptatem in natus!
      </p>
      <img src="../assets/img/about/main.jpg" alt="main" />
    </section>
    <section class="origin">
      <h2>Origin Story</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis
        repellendus reiciendis facilis, molestiae debitis cum aliquam. Quia
        voluptatum voluptatibus sunt similique nihil magni, temporibus soluta
        consequatur officia aut ipsam maxime tempora obcaecati, ea perspiciatis
        nesciunt quas harum deleniti quisquam necessitatibus illo eveniet!
        Provident odit necessitatibus consequuntur molestiae ex voluptatum
        repellendus iure! Quos temporibus natus, incidunt asperiores cum eos
        obcaecati modi numquam odio culpa reiciendis perferendis eaque in
        corrupti voluptatibus maxime non qui quidem esse quae accusamus error?
        Atque facere consectetur nam, tenetur placeat distinctio repellendus
        blanditiis modi accusamus deserunt, alias dolores. Rerum dolorem
        officiis accusantium aut, porro nostrum omnis at quis aliquid itaque
        molestias. Eligendi, qui quam, praesentium sequi consequatur saepe
        ducimus laudantium tenetur id minus, itaque sint ex.
      </p>
      <div class="image-text">
        <img src="../assets/img/about/about--end.jpg" alt="best in you" />
        <p class="text">Let nature bring out the best in you</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

h1 {
  margin-top: 95px;
  margin-bottom: 25px;
  @include media('<=phone') {
    margin-top: 75px;
  }
}

h2 {
  color: $orange-color;
}

.prolog {
  margin-bottom: 25px;

  p {
    font-style: italic;
  }
}

.main-text {
  margin-bottom: 45px;

  p {
    margin-bottom: 45px;
  }

  img {
    width: 100%;
  }
}

.origin p {
  margin-bottom: 45px;
}

.image-text {
  position: relative;
  margin-top: 25px;
  margin-bottom: 75px;

  img {
    width: 100%;
  }

  .text {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);

    color: $background-color;
    font-size: 32px;
    line-height: 1.5;
    text-align: center;

    @include media('<=630px', '>320px') {
      font-size: 24px;
    }

    @include media('<=320px') {
      font-size: 18px;
    }
  }
}
</style>
