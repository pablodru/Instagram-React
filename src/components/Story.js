export default function Story() {
  const objProfiles = [
    { name: "9gag", img: "./assets/img/9gag.svg" },
    { name: "meowed", img: "./assets/img/meowed.svg" },
    { name: "barked", img: "./assets/img/barked.svg" },
    { name: "nathanwpylestrangeplanet", img: "./assets/img/nathanwpylestrangeplanet.svg" },
    { name: "wawawicomics", img: "./assets/img/wawawicomics.svg" },
    { name: "respondeai", img: "./assets/img/respondeai.svg" },
    { name: "filomoderna", img: "./assets/img/filomoderna.svg" },
    { name: "memeriagourmet", img: "./assets/img/memeriagourmet.svg" },
  ];

  return (
    objProfiles.map((profile) => {
        return (
          <div class="story">
            <div class="imagem">
              <img src={profile.img} alt={profile.name} />
            </div>
            <div class="usuario">{profile.name}</div>
          </div>
        );
      })
  );
}
