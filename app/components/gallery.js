Vue.component("Lightbox",VueLightbox.VueLightbox);

Vue.component('gallery', {
  template: `
    <section id="gallery">
      <h2>Gallery</h2>
      <div class="lightboxes">
        <lightbox src="../assets/bandj2.jpg" caption="Photo by Jennsine Erickson" album="bandj">
          <img src="../assets/bandj2.jpg">
        </lightbox>
        <lightbox src="../assets/bandj1.jpg" caption="Photo by Jennsine Erickson" album="bandj">
          <img src="../assets/bandj1.jpg">
        </lightbox>
        <lightbox src="../assets/bandj3.jpg" caption="Photo by Jennsine Erickson" album="bandj">
          <img src="../assets/bandj3.jpg">
        </lightbox>
        <lightbox src="../assets/bandj4.jpg" caption="Photo by Jennsine Erickson" album="bandj">
          <img src="../assets/bandj4.jpg">
        </lightbox>
        <lightbox src="../assets/bandj5.jpg" caption="Photo by Jennsine Erickson" album="bandj">
          <img src="../assets/bandj5.jpg">
        </lightbox>
        <lightbox src="../assets/bandj6.jpg" caption="Photo by Jennsine Erickson" album="bandj">
          <img src="../assets/bandj6.jpg">
        </lightbox>
        <lightbox src="../assets/bandj7.jpg" caption="Photo by Jennsine Erickson" album="bandj">
          <img src="../assets/bandj7.jpg">
        </lightbox>
        <lightbox src="../assets/bandj8.jpg" caption="Photo by Jennsine Erickson" album="bandj">
          <img src="../assets/bandj8.jpg">
        </lightbox>
      </div>
      <h3>Photos by <em><a href=" https://www.facebook.com/jennsinesphotos/" target="_blank">Jennsine Erickson</a></em></h3>
    </section>
  `
});
