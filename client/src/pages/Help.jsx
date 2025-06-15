import React from "react";

import "../styles/help.css";

function Help() {
  return (
    <div className="help">
      <h1>Tutoriel</h1>
      <div className="help-container">
        <h2>Comment jouer ?</h2>
        <p>
          Le but du jeu est de deviner la ville française en écrivant son nom dans le champ de saisie.
          La liste des villes suggérées s'affiche au fur et à mesure que vous tapez.
          <br></br><br></br>
          Vous pouvez choisir parmi les suggestions ou continuer à taper pour affiner votre recherche.
          Chaque suggestion indique le nom de la ville ainsi que son "code commune", un identifiant unique pour chaque ville en France permettant de la distinguer des autres villes portant le même nom.
          Vous pouvez utiliser ces indices pour vous aider.
        </p>
        <h2>Comment utiliser les indices ?</h2>
        <p>
          Les indices sont de différents types :
          <ul>
            <li><strong>- Première lettre :</strong> Indique la première lettre du nom de la ville.</li>
            <li><strong>- Habitants :</strong> Indique le nombre d'habitants de la ville.</li>
            <li><strong>- Code postal :</strong> Indique le code postal de la ville.</li>
            <li><strong>- Département :</strong> Indique le département de la ville.</li>
            <li><strong>- Région :</strong> Indique la région de la ville.</li>
          </ul>
          <br></br>
          Les indices sont de deux couleurs :
          <ul>
            <li><strong>- <span className="greenText">Vert</span> :</strong> Indique que l'indice est correct.</li>
            <li><strong>- <span className="blueText">Bleu</span> :</strong> Indique que l'indice est incorrect.</li>
          </ul>
          <br></br>
          Les indices incorects "Première lettre", "Habitants" et "Code postal" sont affichés avec un plus ou un moins pour indiquer si la valeur est supérieure ou inférieure à la valeur correcte.
        </p>
        <h2>Défi du jour :</h2>
        <p>
          Chaque jour, un défi unique vous attend. Vous devez deviner la ville du jour en utilisant le moins d'indices possible.
          Vous pouvez accéder au défi du jour depuis la page "Défi du jour" dans le menu principal.
          <br></br><br></br>
          Votre progression et vos statistiques sont enregistrées pour vous permettre de suivre vos performances au fil du temps.
        </p>
        <h2>Partie personnalisée :</h2>
        <p>
          Vous pouvez créer une partie personnalisée en choisissant, via les champs correspondants, les critères de région, département et parmi le nombre de villes les plus peuplées que vous souhaitez.
          Cela vous permet de jouer avec des villes qui vous intéressent particulièrement.
          <br></br><br></br>
          Vous pouvez accéder à la partie personnalisée depuis la page "Partie personnalisée" dans le menu principal.
        </p>
      </div>
    </div>
  );
}

export default Help;
