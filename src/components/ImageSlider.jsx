import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { nanoid } from "nanoid";
import styles from "../styles/ImageSlider.module.scss";

function ImageSlider(props) {
  const windowWidth = useWindowSize().width;
  const smallScreenThreshold = 576;
  const largeScreenThreshold = 992;

  const carouselItems = props.images.map((image) => (
    <Carousel.Item key={nanoid()}>
      <Image
        className={styles.carouselItem}
        src={image.src}
        alt="Image"
        layout="responsive"
        width={
          windowWidth <= smallScreenThreshold
            ? 1.5
            : windowWidth >= largeScreenThreshold
            ? 3.5
            : 2.5
        }
        height={1}
      />
    </Carousel.Item>
  ));

  return <Carousel className="mb-4 border-top border-bottom border-secondary">{carouselItems}</Carousel>;
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default ImageSlider;
