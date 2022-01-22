import ImageGalleryItem from "../ImageGalleryItem";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <ul className={css.Gallery}>
      {images.map((image) => {
        const { id, largeImageURL, webformatURL } = image;
        return (
          <ImageGalleryItem
            key={id}
            largeImageURL={largeImageURL}
            webformatURL={webformatURL}
          />
        );
      })}
    </ul>
  );
}
