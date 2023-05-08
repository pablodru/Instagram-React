import { useState } from "react";

export default function User() {

    let [user,setUser] = useState('catanacomics');
    let [icon, setIcon] = useState("assets/img/catanacomics.svg")

    return (
        <div class="usuario">
          <img src={icon} alt="imagem de perfil" onClick={() => setIcon(prompt('Digite o link da sua nova imagem de perfil.'))} data-test="profile-image" />
          <div class="texto">
            <span>
              <strong data-test='name'>{user}</strong>
              <ion-icon name="pencil" onClick={() => setUser(prompt('Digite seu novo nome de usuário.'))} data-test="edit-name"></ion-icon>
            </span>
          </div>
        </div>
    )
}