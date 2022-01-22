import css from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

export default function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  return (
    <li key={id} className={css.GalleryItem}>
      <a href={largeImageURL}>
        <img src={webformatURL} alt="" className={css.GalleryImage} />
      </a>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
};
