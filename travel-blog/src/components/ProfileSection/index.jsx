import React from "react";

/* Styling */
import "./index.scss";

/* Assets */
import profileImage from "../../images/headshot.jpg";

const ProfileSection = () => {
  return (
    <section className="profile-section u-container">
      <div className="profile-section__image">
        <img src={profileImage} alt="Profile Avatar" />
      </div>
      <div className="profile-section__content">
        <h2>A little about me</h2>

        <p className="u-body-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aut
          atque laudantium, libero expedita ratione ducimus vel corrupti
          voluptas soluta nihil, provident culpa at inventore? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Maiores aut atque laudantium,
          libero expedita ratione ducimus vel corrupti voluptas soluta nihil,
          provident culpa at inventore?
        </p>

        <p className="u-body-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aut
          atque laudantium, libero expedita ratione ducimus vel corrupti
          voluptas soluta nihil, provident culpa at inventore? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Maiores aut atque laudantium,
          libero expedita ratione ducimus vel corrupti voluptas soluta nihil,
          provident culpa at inventore?
        </p>

        <p className="u-body-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aut
          atque laudantium, libero expedita ratione ducimus vel corrupti
          voluptas soluta nihil, provident culpa at inventore? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Maiores aut atque laudantium,
          libero expedita ratione ducimus vel corrupti voluptas soluta nihil,
          provident culpa at inventore?
        </p>

        <p className="u-body-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aut
          atque laudantium, libero expedita ratione ducimus vel corrupti
          voluptas soluta nihil, provident culpa at inventore? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Maiores aut atque laudantium,
          libero expedita ratione ducimus vel corrupti voluptas soluta nihil,
          provident culpa at inventore?
        </p>

        <p className="u-body-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aut
          atque laudantium, libero expedita ratione ducimus vel corrupti
          voluptas soluta nihil, provident culpa at inventore? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Maiores aut atque laudantium,
          libero expedita ratione ducimus vel corrupti voluptas soluta nihil,
          provident culpa at inventore?
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
