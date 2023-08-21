import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const Like = () => {
  // State untuk melacak status Like dan Dislike
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  // Fungsi ketika tombol like diklik
  const handleLikeClick = () => {
    // Jika tombol Like belum diklik dan tombol Dislike belum diklik
    if (!liked && !disliked) {
      setLiked(true); // Set tombol Like menjadi aktif
    }
    // Jika tombol Dislike sudah aktif
    else if (disliked) {
      setLiked(true); // Set tombol Like menjadi aktif
      setDisliked(false); // Set tombol Dislike menjadi tidak aktif
    }
    // Jika tombol Like sudah aktif, mengembalikan ke status awal
    else {
      setLiked(false); // Set tombol Like menjadi tidak aktif
    }
  };

  // Fungsi ketika tombol Dislike diklik
  const handleDislikeClick = () => {
    // Jika tombol Dislike belum diklik dan tombol Like belum diklik
    if (!disliked && !liked) {
      setDisliked(true); // Set tombol Dislike menjadi aktif
    }
    // Jika tombol Like sudah aktif
    else if (liked) {
      setDisliked(true); // Set tombol Dislike menjadi aktif
      setLiked(false); // Set tombol Like menjadi tidak aktif
    }
    // Jika tombol Dislike sudah aktif, mengembalikan ke status awal
    else {
      setDisliked(false); // Set tombol Dislike menjadi tidak aktif
    }
  };

  // Return JSX yang menampilkan tombol-tombol Like dan Dislike
  return (
    <div className="flex flex-row gap-2">
      <FontAwesomeIcon
        icon={faThumbsUp}
        className={`rounded-full p-2 text-xl cursor-pointer ${
          liked ? "bg-green-500 text-white" : "bg-fuchsia-950 text-white"
        }`}
        onClick={handleLikeClick}
      />
      <FontAwesomeIcon
        icon={faThumbsUp}
        className={`rounded-full p-2 text-xl cursor-pointer ${
          disliked ? "bg-red-500 text-white" : "bg-fuchsia-950 text-white"
        }`}
        rotation="180"
        onClick={handleDislikeClick}
      />
    </div>
  );
};

export default Like;
