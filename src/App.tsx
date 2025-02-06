"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };
    const phrases = [
      "Nahi",
      "Kyu nahi? 🥺",
      "Chijji dunga toh? 🤭",
      "Flowers dunga toh? 🌷🌺🌸🌹",
      "Ice cream khilaunga toh? 🍨",
      "Chocolate khilaunga toh? 🍫",
      "Movie dikhaunga toh? 🍿",
      "Dinner date pr le jaunga toh? 🥘",
      "Bowling khelne chalunga toh? 🎳",
      "Shopping karne chalunga toh? 🛍️",
      "Long drive pr le jaunga toh? 🚗",
      "Please 🥺",
      "I love you so much 🥺❤️",
      "Please please please 🥺🥺🥺",
      "Haan bol do na 🥺",
      "Last chance hai maan jao ☹️"
    ];
  const getNoButtonText = () => {
    

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
    
    const getNextGIF = () => {
      const pathOfGIFS = [
          "https://media.tenor.com/0XYG8fpqZkQAAAAi/tkthao219-bubududu.gif",
          "https://media1.tenor.com/m/eA5m05PUcbcAAAAC/cute-sad.gif",
          "https://media1.tenor.com/m/-axaiRlaCkAAAAAC/happy-christmas.gif",
          "https://media.tenor.com/mrRRhRdxtXAAAAAi/dudu-giving-flowers-cute.gif",
          "https://media1.tenor.com/m/TkUcZAfuLT0AAAAd/chocolate-ice-cream-cone-vanilla.gif",
          "https://media1.tenor.com/m/vfgS2rKXrF4AAAAd/sweets-sugar.gif",
          "https://media.tenor.com/Ur4cFFIi_Z0AAAAi/130718-movie.gif",
          "https://media.tenor.com/3H_UBS6pvsIAAAAj/mimibubu.gif",
          "https://media1.tenor.com/m/e-igwy6M_WwAAAAd/hanna-barbera-huckleberry-hound.gif",
          "https://media1.tenor.com/m/GW4blLVqsc8AAAAC/fatcatzcouple-yellow-cat.gif",
          "https://media.tenor.com/rII2plaXSGgAAAAi/milk-and-mocha.gif",
          "https://media.tenor.com/H2HOJCKLedAAAAAj/cute-kawaii.gif",
          "https://media1.tenor.com/m/mKyu7jT1-2IAAAAd/please-sad.gif",
          "https://media1.tenor.com/m/YjYZYinZG-4AAAAd/spongebob-squarepants-begging.gif",
          "https://media1.tenor.com/m/pCzzLl4KbY0AAAAd/fingers-crossed-luck.gif",
          "https://media1.tenor.com/m/PwI-Jh8Ch0MAAAAd/i-need-you-to-say-yes-victor-leconte.gif",
          "https://media.tenor.com/dYfvvNdwM2cAAAAi/wth-smile.gif"
      ];

      return pathOfGIFS[Math.min(noCount, pathOfGIFS.length - 1)];
    };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
                     <img src={ phrases.length === noCount ? "https://media1.tenor.com/m/YpnoxRrDToAAAAAC/swing-dance-swing-your-hips.gif" : "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"} />
          <div className="my-4 text-4xl font-bold">YES! I Love You My Happiness! 😘😘❤️❤️ </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
           src={getNextGIF()}
          />
          <h1 className="my-4 text-4xl">Mere saath Ghum-Ghumi chalogi Valentine&apos;s Day pr?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Haan!
            </button>
           { phrases.length === noCount ? <div></div> : <button
               onClick={handleNoClick}
               className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
               >
               {getNoButtonText()}
               </button>
           }
          </div>
        </>
      )}
    </div>
  );
}
