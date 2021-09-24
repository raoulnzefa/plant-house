<template>
  <!-- <h2>There are a lot of different flowers on the planet</h2> -->
  <div class="collage">
    <img
      v-for="(img, index) of images"
      :key="index"
      :src="img"
      :alt="'flower ' + index"
    />
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'PhotoCollage',
  setup() {
    onMounted(() => {
      const collage = document.querySelector('.collage'),
        parent = document.querySelector('.parent');
      const parentCoords = parent.getBoundingClientRect();

      collage.style.top = parentCoords.top + scrollY + 'px';
      parent.style.minHeight = collage.clientHeight + 'px';
    });

    const images = [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gardenia-royalty-free-image-1580854928.jpg?crop=1.00xw:0.796xh;0,0.0851xh&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-image-of-the-beautiful-vibrant-orange-royalty-free-image-1580855109.jpg?crop=0.668xw:1.00xh;0.0306xw,0&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-blossoming-rose-flower-royalty-free-image-1580853844.jpg?crop=0.668xw:1.00xh;0.248xw,0&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/petunias-royalty-free-image-1580855855.jpg?crop=1xw:1xh;center,top&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-orange-marigold-flower-royalty-free-image-1580855457.jpg?crop=0.668xw:1.00xh;0.122xw,0&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/waterlily-1508785045.jpg?crop=1.00xw:0.669xh;0,0.193xh&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tulips-1508785044.jpg?crop=1.00xw:0.669xh;0,0.310xh&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pink-phlox-2-royalty-free-image-1584634474.jpg?crop=0.668xw:1.00xh;0.291xw,0&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rhododendron-1508785044.jpg?crop=1.00xw:0.667xh;0,0.0386xh&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunflower-1508785046.jpg?crop=1.00xw:0.669xh;0,0.116xh&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/anem-anemone-coronaria-news-photo-1578193956.jpg?crop=1xw:0.94549xh;center,top&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/purple-alpine-garden-plant-hylotelephium-triphyllum-royalty-free-image-1584635427.jpg?crop=0.66667xw:1xh;center,top&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/corydalis-1508785047.jpg?crop=0.872xw:0.582xh;0,0&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/true-myrtle-in-flower-royalty-free-image-1578194240.jpg?crop=0.66682xw:1xh;center,top&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/poppy-1508785046.jpg?crop=1xw:0.6666666666666666xh;center,top&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/common-yarrow-flowering-on-a-green-pasture-at-alpe-royalty-free-image-1584636355.jpg?crop=0.74988xw:1xh;center,top&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/meadow-clary-or-meadow-sage-1508785044.jpg?crop=1.00xw:0.666xh;0,0.115xh&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vase-with-flowers-royalty-free-image-1578194335.jpg?crop=1xw:0.66667xh;center,top&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/orchid-1508785044.jpg?crop=1.00xw:0.669xh;0,0.162xh&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/indian-paintbrush-1508785047.jpg?crop=1.00xw:0.669xh;0,0.0988xh&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-christmas-rose-single-white-flower-royalty-free-image-1578194497.jpg?crop=0.668xw:1.00xh;0,0&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dahlia-1508785047.jpg?crop=1.00xw:0.669xh;0,0.0136xh&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/azalea-1508785048.jpg?crop=1.00xw:0.669xh;0,0.174xh&resize=768:*',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-pink-roses-blooming-outdoors-royalty-free-image-1578194641.jpg?crop=1.00xw:0.751xh;0,0.0765xh&resize=768:*',
    ];

    return {
      images,
    };
  },
};
</script>

<style lang="scss" scoped>
.collage {
  position: absolute;
  left: 0;

  display: flex;
  flex-grow: 1;
  justify-content: center;
  flex-wrap: wrap;

  width: 100vw;
  z-index: 1;

  img {
    flex: 1 1 150px;
    min-width: 150px;
    display: block;
  }
}
</style>
