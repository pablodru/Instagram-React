import { useState } from "react";

export default function User() {

    let [user,setUser] = useState('catanacomics');
    let [icon, setIcon] = useState("assets/img/catanacomics.svg");

    function newUserIcon(){
      const newIcon = prompt('Digite a url da sua nova foto de perfil.');

      if(newIcon !== ''){
        setIcon(newIcon);
      }
    }

    function newUser(){
      const newUsername = prompt('Digite o seu novo nome de perfil.');

      if(newUsername !== ''){
        setUser(newUsername);
      }
    }

    return (
        <div class="usuario">
          <img src={icon} alt="imagem de perfil" onClick={newUserIcon} data-test="profile-image" />
          <div class="texto">
            <span>
              <strong data-test='name'>{user}</strong>
              <ion-icon name="pencil" onClick={newUser} data-test="edit-name"></ion-icon>
            </span>
          </div>
        </div>
    )
}