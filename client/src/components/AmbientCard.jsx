import { useState } from "react";

function AmbientCard() {
  const [selectedSVG, SetSelectedSVG] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [first, setFirst] = useState(true);
  const [active, SetActive] = useState("");

  const handleSVGClick = (audiofile) => {
    const audio = new Audio(audiofile);

    if (first == true) {
      SetSelectedSVG(audio);
      audio.play();
      setPlaying(playing == true ? false : true);
      setFirst(false);
      return;
    }
    if (selectedSVG.src == audio.src) {
      if (playing == true) {
        selectedSVG.pause();
        setPlaying(false);
      }
      if (playing == false) {
        audio.play();
        setPlaying(true);
        SetSelectedSVG(audio);
      }
      return;
    }

    if (selectedSVG.src !== audio.src) {
      selectedSVG.pause();
      audio.play();
      SetSelectedSVG(audio);
      setPlaying(true);
      return;
    }
  };

  return (
    <div className="flex flex-col   bg-[#d2ff02] p-10  rounded-lg  justify-around">
      <h1 className="pb-8 font-extrabold text-xl">AMBIENT MUSICS</h1>
      <div className="flex flex-col gap-16">
        <div className="flex gap-20">
          {active == "rain" && playing == true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
              style={{ animation: "blink 3s ease-in-out infinite" }}
              onClick={() => {
                handleSVGClick("src/assets/audios/rain.mp3");
                SetActive("rain");
              }}
            >
              <style>
                {`     @keyframes blink {
      0%, 50%, 100% {
        opacity: 1;
      }
      25%, 75% {
        opacity: 0.2;
      }
    }`}
              </style>
              <path d="M240,126.63A112.44,112.44,0,0,0,51.75,53.75a111.56,111.56,0,0,0-35.7,72.88A16,16,0,0,0,32,144h88v56a32,32,0,0,0,64,0,8,8,0,0,0-16,0,16,16,0,0,1-32,0V144h88a16,16,0,0,0,16-17.37ZM32,128l0,0a96.15,96.15,0,0,1,76.2-85.89C96.48,58,81.85,86.11,80.17,128Zm64.15,0c1.39-30.77,10.53-52.81,18.3-66.24A106.44,106.44,0,0,1,128,43.16a106.31,106.31,0,0,1,13.52,18.6C154.8,84.7,159,109.28,159.82,128Zm79.65,0c-1.68-41.89-16.31-70-28-85.94A96.07,96.07,0,0,1,224,128Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
              onClick={() => {
                handleSVGClick("src/assets/audios/rain.mp3");
                SetActive("rain");
              }}
            >
              <path d="M240,126.63A112.44,112.44,0,0,0,51.75,53.75a111.56,111.56,0,0,0-35.7,72.88A16,16,0,0,0,32,144h88v56a32,32,0,0,0,64,0,8,8,0,0,0-16,0,16,16,0,0,1-32,0V144h88a16,16,0,0,0,16-17.37ZM32,128l0,0a96.15,96.15,0,0,1,76.2-85.89C96.48,58,81.85,86.11,80.17,128Zm64.15,0c1.39-30.77,10.53-52.81,18.3-66.24A106.44,106.44,0,0,1,128,43.16a106.31,106.31,0,0,1,13.52,18.6C154.8,84.7,159,109.28,159.82,128Zm79.65,0c-1.68-41.89-16.31-70-28-85.94A96.07,96.07,0,0,1,224,128Z"></path>
            </svg>
          )}
          {active == "fire" && playing == true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
              style={{ animation: "blink 3s ease-in-out infinite" }}
              onClick={() => {
                handleSVGClick("src/assets/audios/fire.mp3");
                SetActive("fire");
              }}
            >
              <style>
                {`     @keyframes blink {
      0%, 50%, 100% {
        opacity: 1;
      }
      25%, 75% {
        opacity: 0.2;
      }
    }`}
              </style>
              <path d="M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
              onClick={() => {
                handleSVGClick("src/assets/audios/fire.mp3");
                SetActive("fire");
              }}
            >
              <path d="M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z"></path>
            </svg>
          )}
          {active == "ocean" && playing == true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
              style={{ animation: "blink 3s ease-in-out infinite" }}
              onClick={() => {
                handleSVGClick("src/assets/audios/ocean.mp3");
                SetActive("ocean");
              }}
            >
              <style>
                {`     @keyframes blink {
      0%, 50%, 100% {
        opacity: 1;
      }
      25%, 75% {
        opacity: 0.2;
      }
    }`}
              </style>
              <path d="M34.33,77.68a8,8,0,0,1,0-11.34C35.1,65.59,53.1,48,88,48c18.42,0,32.24,9.21,44.44,17.34C143.74,72.88,154.42,80,168,80a72.21,72.21,0,0,0,31.75-6.83,44.87,44.87,0,0,0,10.63-6.87,8,8,0,0,1,11.27,11.36C220.9,78.41,202.9,96,168,96c-18.42,0-32.24-9.21-44.44-17.34C112.26,71.12,101.58,64,88,64a72.21,72.21,0,0,0-31.75,6.83A44.87,44.87,0,0,0,45.62,77.7,8,8,0,0,1,34.33,77.68ZM210.38,122.3a44.87,44.87,0,0,1-10.63,6.87A72.21,72.21,0,0,1,168,136c-13.58,0-24.26-7.12-35.56-14.66C120.24,113.21,106.42,104,88,104c-34.9,0-52.9,17.59-53.65,18.34A8,8,0,0,0,45.62,133.7a44.87,44.87,0,0,1,10.63-6.87A72.21,72.21,0,0,1,88,120c13.58,0,24.26,7.12,35.56,14.66,12.2,8.13,26,17.34,44.44,17.34,34.9,0,52.9-17.59,53.65-18.34a8,8,0,0,0-11.27-11.36Zm0,56a44.87,44.87,0,0,1-10.63,6.87A72.21,72.21,0,0,1,168,192c-13.58,0-24.26-7.12-35.56-14.66C120.24,169.21,106.42,160,88,160c-34.9,0-52.9,17.59-53.65,18.34A8,8,0,0,0,45.62,189.7a44.87,44.87,0,0,1,10.63-6.87A72.21,72.21,0,0,1,88,176c13.58,0,24.26,7.12,35.56,14.66,12.2,8.13,26,17.34,44.44,17.34,34.9,0,52.9-17.59,53.65-18.34a8,8,0,0,0-11.27-11.36Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
              onClick={() => {
                handleSVGClick("src/assets/audios/ocean.mp3");
                SetActive("ocean");
              }}
            >
              <path d="M34.33,77.68a8,8,0,0,1,0-11.34C35.1,65.59,53.1,48,88,48c18.42,0,32.24,9.21,44.44,17.34C143.74,72.88,154.42,80,168,80a72.21,72.21,0,0,0,31.75-6.83,44.87,44.87,0,0,0,10.63-6.87,8,8,0,0,1,11.27,11.36C220.9,78.41,202.9,96,168,96c-18.42,0-32.24-9.21-44.44-17.34C112.26,71.12,101.58,64,88,64a72.21,72.21,0,0,0-31.75,6.83A44.87,44.87,0,0,0,45.62,77.7,8,8,0,0,1,34.33,77.68ZM210.38,122.3a44.87,44.87,0,0,1-10.63,6.87A72.21,72.21,0,0,1,168,136c-13.58,0-24.26-7.12-35.56-14.66C120.24,113.21,106.42,104,88,104c-34.9,0-52.9,17.59-53.65,18.34A8,8,0,0,0,45.62,133.7a44.87,44.87,0,0,1,10.63-6.87A72.21,72.21,0,0,1,88,120c13.58,0,24.26,7.12,35.56,14.66,12.2,8.13,26,17.34,44.44,17.34,34.9,0,52.9-17.59,53.65-18.34a8,8,0,0,0-11.27-11.36Zm0,56a44.87,44.87,0,0,1-10.63,6.87A72.21,72.21,0,0,1,168,192c-13.58,0-24.26-7.12-35.56-14.66C120.24,169.21,106.42,160,88,160c-34.9,0-52.9,17.59-53.65,18.34A8,8,0,0,0,45.62,189.7a44.87,44.87,0,0,1,10.63-6.87A72.21,72.21,0,0,1,88,176c13.58,0,24.26,7.12,35.56,14.66,12.2,8.13,26,17.34,44.44,17.34,34.9,0,52.9-17.59,53.65-18.34a8,8,0,0,0-11.27-11.36Z"></path>
            </svg>
          )}
        </div>
        <div className="flex gap-20">
          {" "}
          {active == "birds" && playing == true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
              style={{ animation: "blink 3s ease-in-out infinite" }}
              onClick={() => {
                handleSVGClick(
                  "https://zen-audios.s3.us-east-1.amazonaws.com/audios/birds.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiByLRHex1aBcRR0pvbVD2Z6B7J5yjA4Qe5MPXkUDwpLXwIgM%2FXT5Em326XY8kmvVcJ8JmMyXJuV6zacBk2afzRjOrkq7QIIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw4NDc2MTcyMDQxMzYiDBNeBWkgnwJ44BP4XSrBAt8raS65%2BtfVthe66Mo1ctw5qYiwvwfmSdZyYaSKsN4o9ocfxGuQFpcbCV8la2CCmyPz9yb%2BwNGOjcn%2Fh5K6DbBuB8Lj1cl8BspCKFwWzwBwq8Xkgpgtiha6Ids8jpYaZ8a3YVjvw6MimGc7yEHze3wSBiTOjGGu40v1hnjP%2FLZF4suBKqxRgHig0C0N5HPmjEO7wFOlx%2FVaQGS5de04qRXUtJSaM8%2B%2BRTxFpBWrlbrznB5jgJ6HAvmldJUGMVZOboO6Zw2W9WftkQiIWgUsLWi%2BPqoo7l3U9POy9kYXlJkCTJYTKhoCDFuoYzs%2Bp31HNn%2BUxviQYpVHATIdpb65jbx7sPugTou3oU2poZ9%2B0kKtuKeEF6JLA8XmkYbCDs6MY6xe%2FUWyWIgWZKFV%2FfeWKq1wK9pMRIe34oUrsVc7WHYxBzDxjoKuBjq0ApqEgj9P%2FAvN1GC32FcT1UbJ7e122pl0g%2B%2B3C07n0R1VzApZy3uJhm3wN4PqqFDFy8D0J5XwqZ945EyMmomhlSP%2FKwrVpTixp6ldEG18o7xpjgQ1qqZKjNDZh2%2B6Fa9hbflIIstCi3ra%2ByXsp5K1WwcYt%2BoGUi8Tev7NR4A%2FjJ2Ch5RpCNicgegb9c80zLoGw6nmlhELOGtaCFkIa6vtukkx4MGhDksNVlzOjiyi4agpIJKJUzO1GM6ylL7NW7yOzbNsz%2FgobRIt2LZJuN5xDzPYuS0B%2FHJVMia0NtuEqQBZEO%2FgwbaSc5EtUgkj0izYaUclyKpzKqWuSJq2HeAICB0cHJeP0XzHFWsrgpFcPme3motcLdRWQuj9sg%2FnnwOMTK3GOba30nkjYdPci9MSSVdQrmmG&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240205T072416Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIA4KWPMD6UPELU6HTA%2F20240205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=40ba47910660f88060f37ca235bedb983b1fbe3be922155bb4f07498f1595a7f"
                );
                SetActive("birds");
              }}
            >
              <style>
                {`     @keyframes blink {
      0%, 50%, 100% {
        opacity: 1;
      }
      25%, 75% {
        opacity: 0.2;
      }
    }`}
              </style>
              <path d="M176,68a12,12,0,1,1-12-12A12,12,0,0,1,176,68Zm-50.88,61.85a8,8,0,0,0-11.27,1l-40,48a8,8,0,0,0,12.3,10.24l40-48A8,8,0,0,0,125.12,129.85ZM240,80a8,8,0,0,1-3.56,6.66L216,100.28V120A104.11,104.11,0,0,1,112,224H8a8,8,0,0,1-6.25-13L96,93.19V76A60,60,0,0,1,213.21,57.86l23.23,15.48A8,8,0,0,1,240,80Zm-22.42,0L201.9,69.54a8,8,0,0,1-3.31-4.64A44,44,0,0,0,112,76V96a8,8,0,0,1-1.75,5L24.64,208H112a88.1,88.1,0,0,0,88-88V96a8,8,0,0,1,3.56-6.66Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
              onClick={() => {
                handleSVGClick("src/assets/audios/birds.mp3");
                SetActive("birds");
              }}
            >
              <path d="M176,68a12,12,0,1,1-12-12A12,12,0,0,1,176,68Zm-50.88,61.85a8,8,0,0,0-11.27,1l-40,48a8,8,0,0,0,12.3,10.24l40-48A8,8,0,0,0,125.12,129.85ZM240,80a8,8,0,0,1-3.56,6.66L216,100.28V120A104.11,104.11,0,0,1,112,224H8a8,8,0,0,1-6.25-13L96,93.19V76A60,60,0,0,1,213.21,57.86l23.23,15.48A8,8,0,0,1,240,80Zm-22.42,0L201.9,69.54a8,8,0,0,1-3.31-4.64A44,44,0,0,0,112,76V96a8,8,0,0,1-1.75,5L24.64,208H112a88.1,88.1,0,0,0,88-88V96a8,8,0,0,1,3.56-6.66Z"></path>
            </svg>
          )}
          {active == "bells" && playing == true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
              style={{ animation: "blink 3s ease-in-out infinite" }}
              onClick={() => {
                handleSVGClick("https://shorturl.at/fhMN4");
                SetActive("bells");
              }}
            >
              <style>
                {`     @keyframes blink {
      0%, 50%, 100% {
        opacity: 1;
      }
      25%, 75% {
        opacity: 0.2;
      }
    }`}
              </style>
              <path d="M184,184a32,32,0,0,1-32,32c-13.7,0-26.95-8.93-31.5-21.22a8,8,0,0,1,15-5.56C137.74,195.27,145,200,152,200a16,16,0,0,0,0-32H40a8,8,0,0,1,0-16H152A32,32,0,0,1,184,184Zm-64-80a32,32,0,0,0,0-64c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C105.74,60.73,113,56,120,56a16,16,0,0,1,0,32H24a8,8,0,0,0,0,16Zm88-32c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C193.74,92.73,201,88,208,88a16,16,0,0,1,0,32H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
              onClick={() => {
                handleSVGClick("src/assets/audios/bells.mp3");
                SetActive("bells");
              }}
            >
              <path d="M184,184a32,32,0,0,1-32,32c-13.7,0-26.95-8.93-31.5-21.22a8,8,0,0,1,15-5.56C137.74,195.27,145,200,152,200a16,16,0,0,0,0-32H40a8,8,0,0,1,0-16H152A32,32,0,0,1,184,184Zm-64-80a32,32,0,0,0,0-64c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C105.74,60.73,113,56,120,56a16,16,0,0,1,0,32H24a8,8,0,0,0,0,16Zm88-32c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C193.74,92.73,201,88,208,88a16,16,0,0,1,0,32H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z"></path>
            </svg>
          )}
          {active == "leaf" && playing == true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
              style={{ animation: "blink 3s ease-in-out infinite" }}
              onClick={() => {
                handleSVGClick("src/assets/audios/leaf.mp3");
                SetActive("leaf");
              }}
            >
              <style>
                {`     @keyframes blink {
      0%, 50%, 100% {
        opacity: 1;
      }
      25%, 75% {
        opacity: 0.2;
      }
    }`}
              </style>
              <path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
              onClick={() => {
                handleSVGClick("src/assets/audios/leaf.mp3");
                SetActive("leaf");
              }}
            >
              <path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z"></path>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default AmbientCard;
