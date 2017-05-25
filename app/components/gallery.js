Vue.component("Lightbox",VueLightbox.VueLightbox);

Vue.component('gallery', {
  template: `
    <section id="gallery">
      <lightbox src="../assets/bandj2.jpg" caption="this is pic caption" album="albumA">
        <img src="../assets/bandj2.jpg">
      </lightbox>
      <lightbox src="../assets/bandj1.jpg" caption="this is pic caption" album="albumA"></lightbox>
      <lightbox src="../assets/bandj3.jpg" caption="this is pic caption" album="albumB"></lightbox>

    </section>
  `
});
