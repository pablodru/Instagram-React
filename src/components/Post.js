import { useState } from 'react';

export default function Post(props) {

    let [nameSave, setNameSave] = useState('bookmark-outline');
    let [likeIcon, setLikeIcon] = useState('heart-outline');
    let [colorLike, setColorLike] = useState('black');
    let [numberLikes, setNumberLikes] = useState(props.number);
    let [likeImage, setLikeImage] = useState('hidden');

    function savePost(){
      if (nameSave === 'bookmark-outline'){
        setNameSave('bookmark-sharp');
      } else if (nameSave === 'bookmark-sharp'){
        setNameSave('bookmark-outline');
      }
    }

    function likeAnimation(){
      setLikeImage('like-img animate');
      setTimeout(hide=> {
        setLikeImage('hidden');
      },500)
    }

    function likePost() {
      if (likeIcon === 'heart-outline'){
        setLikeIcon('heart-sharp');
        setColorLike('red');
        setNumberLikes(numberLikes+=1);

        likeAnimation();

      } else if(likeIcon === 'heart-sharp'){
        setLikeIcon('heart-outline');
        setColorLike('black');
        setNumberLikes(numberLikes-=1);
      }
    }

    function likePost2Clicks(){
      if (likeIcon === 'heart-outline'){
        setLikeIcon('heart-sharp');
        setColorLike('red');
        setNumberLikes(numberLikes+=1);

        likeAnimation();
      }
    }

    const numberFormated = numberLikes.toLocaleString('pt-BR', {maximumFractionDigits: 0});
    const numberToPost = numberFormated.replace(/,/g, '.');

    return (
        <div class="post" data-test='post'>
            <div class="topo">
              <div class="usuario">
                <img src={props.img} alt={props.name}/>
                {props.name}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={props.post} alt={props.altPost} onDoubleClick={likePost2Clicks} data-test='post-image' class='post-img'/>
              <img src='./assets/img/heart.png' class={likeImage} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name={likeIcon} onClick={likePost} class={colorLike} data-test='like-post'></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name={nameSave} onClick={savePost} data-test='save-post'></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.likeImg} alt={props.likeName}/>
                <div class="texto">
                  Curtido por <strong>{props.likeName}</strong> e <strong data-test='likes-number'>outras {numberToPost} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}