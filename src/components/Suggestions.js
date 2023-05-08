import Suggestion from "./Suggestion.js";

export default function Suggestions() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      <Suggestion
        img="./assets/img/bad.vibes.memes.svg"
        name="bad.vibes.memes"
      />
      <Suggestion img="./assets/img/chibirdart.svg" name="chirbirdart" />
      <Suggestion
        img="./assets/img/razoesparaacreditar.svg"
        name="razoesparaacreditar"
      />
      <Suggestion
        img="./assets/img/adorable_animals.svg"
        name="adorable_animals"
      />
      <Suggestion img="./assets/img/smallcutecats.svg" name="smallcutecats" />
    </div>
  );
}
