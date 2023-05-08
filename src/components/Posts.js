import Post from "./Post.js";

export default function Posts() {
  return (
    <div class="posts">
      <Post
        img="./assets/img/meowed.svg"
        name="mewoed"
        post="./assets/img/gato-telefone.svg"
        altPost="gato-telefone"
        likeImg="./assets/img/respondeai.svg"
        likeName="respondeai"
        number={101530}
      />
      <Post
        img="./assets/img/barked.svg"
        name="barked"
        post="./assets/img/dog.svg"
        altPost="cachorro"
        likeImg="./assets/img/adorable_animals.svg"
        likeName="adorable_animals"
        number={99159}
      />
      <Post
        img="./assets/img/9gag.svg"
        name="9gag"
        post="./assets/img/gato-telefone.svg"
        altPost="gato-telefone"
        likeImg="./assets/img/filomoderna.svg"
        likeName="filomoderna"
        number={83572}
      />
    </div>
  );
}