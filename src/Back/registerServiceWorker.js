

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] est l'adresse de l'hôte local IPv6.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 est considéré comme localhost pour IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export default function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
 
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // Cela fonctionne sur localhost. Permet de vérifier si un service worker existe toujours ou non.
        checkValidServiceWorker(swUrl);

       // Ajoutez une journalisation supplémentaire à localhost, pointant les développeurs vers le
      // documentation du service worker/PWA.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            
          );
        });
      } else {
        // N'est pas un hôte local. Il suffit d'inscrire le travailleur de service 
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
               /*À ce stade, l'ancien contenu aura été purgé et
               le nouveau contenu aura été ajouté au cache.
               C'est le bon moment pour afficher un "Nouveau contenu est
               disponible; veuillez rafraîchir." message dans l'application Web.*/
              console.log('Un nouveau contenu est disponible ; Rafraichissez, s il vous plait.');
            } else {
              /* A ce stade, tout a été pré-caché.
              C'est le moment idéal pour afficher un
              "Le contenu est mis en cache pour une utilisation hors ligne." un message.*/
              console.log('Le contenu est mis en cache pour une utilisation hors ligne.');
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Erreur lors de l enregistrement du serviceWorker :', error);
    });
}

function checkValidServiceWorker(swUrl) {
  // Vérifie si le service worker peut être trouvé. S'il ne peut pas recharger la page.
  fetch(swUrl)
    .then(response => {
      // Assure que le service worker existe et que nous obtenons vraiment un fichier JS.
      if (
        response.status === 404 ||
        response.headers.get('content-type').indexOf('javascript') === -1
      ) {
        //Aucun service worker trouvé. Probablement une autre application. Recharge la page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker trouvé. Procédez normalement.
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
        'Aucune connexion Internet trouvée. L application fonctionne en mode hors ligne.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
