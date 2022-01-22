import css from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  return (
    <li key={id} className={css.GalleryItem}>
      <a href={largeImageURL}>
        <img src={webformatURL} alt="" className={css.GalleryImage} />
      </a>
    </li>
  );
}
