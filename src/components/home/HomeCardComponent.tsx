import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import img1 from "@/assets/images/excursionCard.webp";
import img2 from "@/assets/images/restaurantCard.webp";
import img3 from "@/assets/images/destinationCard.webp";
import img4 from "@/assets/images/destinationCard.webp";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

interface HijoProps {
  nombreImagen?: string;
  imageUrl?: string;
  text: string;
  link: string;
  showHeart?: boolean;
}

const HomeCardComponent: React.FC<HijoProps> = ({
  nombreImagen,
  imageUrl,
  text,
  link,
  showHeart = true,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const imagenes: Record<string, string> = {
    img1,
    img2,
    img3,
    img4,
  };

  const imageSrc = imageUrl || (nombreImagen && imagenes[nombreImagen]) || img1;

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div className="relative w-full py-4 lg:w-1/3 md:w-1/2 md:p-4 lg:p-1">
      <Link to={link} className="relative flex flex-wrap w-full px-1 pb-1">
        <img
          className="object-cover w-full h-72 rounded-3xl"
          src={imageSrc}
          alt={text}
        />
      </Link>
      {showHeart && (
        <button
          className="absolute flex items-center justify-center w-10 h-10 transition-transform duration-200 bg-white border-2 rounded-full shadow-sm bottom-[3.3em] right-3 border-primary-blue shadow-primary-blue hover:scale-110 md:bottom-14 md:right-7 lg:bottom-12 lg:right-5"
          onClick={handleHeartClick}
        >
          {isLiked ? (
            <FaHeart className="text-2xl text-primary-pink" />
          ) : (
            <CiHeart className="text-2xl text-primary-blue" />
          )}
        </button>
      )}
      <p className="px-4 text-base font-bold md:text-lg lg:text-xl text-secondary-celeste font-secondaryLato line-clamp-1">
        {text}
      </p>
    </div>
  );
};

export default HomeCardComponent;
