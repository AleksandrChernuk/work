import style from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ items, setLargeImg, modal }) => {
  return (
    <>
      {items.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li key={id} className={style.ImageGalleryItem} onClick={modal}>
          <img
            src={webformatURL}
            alt={tags}
            className={style["ImageGalleryItem-image"]}
            onClick={() => setLargeImg({ largeImageURL, tags })}
          />
        </li>
      ))}
    </>
  );
};
export default ImageGalleryItem;
