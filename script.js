const siteTitle = document.getElementById('site-title');
siteTitle.innerHTML = '';
let siteTitleIndex = 0;
const siteTitleText = 'prophetofxenu.net';
let timerInterval = setInterval(() => {
  if (siteTitleIndex > siteTitleText.length) {
    clearInterval(timerInterval);
    return;
  }
  siteTitle.innerHTML = siteTitleText.slice(0, siteTitleIndex++);
}, 50);


const imgDb = {
  'monsterfy2024': {
    url: 'images/xenu-sergal/Com_Monsterfy_XenuFNLv2sm.png',
    description: 'sipped the akira juice',
    year: 2024,
    artist: {
      name: 'AlfaFilly',
      link: 'https://linktr.ee/alfafilly'
    },
    alternates: [
      {
        name: 'glitch',
        url: 'images/xenu-sergal/Com_Monsterfy_XenuFNLv2sm.png'
      },
      {
        name: 'no glitch',
        url: 'images/xenu-sergal/Com_Monsterfy_XenuFNLsm.png'
      }
    ],
  },
  'lingrimm-profile-pic': {
    url: 'images/xenu-sergal/XENU-lingrimm.png',
    year: 2024,
    artist: {
      name: 'Lingrimm',
      link: 'https://www.furaffinity.net/user/lingrimm/'
    }
  },
  'saffysweets-stickers': {
    url: 'images/xenu-sergal/saffysweets-stickers/Xenu4.png',
    year: 2025,
    artist: {
      name: 'SaffySweets',
      link: 'https://vgen.co/SaffySweets'
    },
    alternates: [
      {
        name: 'content',
        url: 'images/xenu-sergal/saffysweets-stickers/Xenu4.png'
      },
      {
        name: 'thumbs up',
        url: 'images/xenu-sergal/saffysweets-stickers/Xenu1.png'
      },
      {
        name: 'worried',
        url: 'images/xenu-sergal/saffysweets-stickers/Xenu2.png'
      },
      {
        name: 'hold still',
        url: 'images/xenu-sergal/saffysweets-stickers/Xenu3.png'
      },
      {
        name: 'pim',
        url: 'images/xenu-sergal/saffysweets-stickers/Xenu5.png'
      }
    ]
  },
  'alfafilly-toned-sketch': {
    url: 'images/xenu-sergal/Com_Xenu_TonedSketchFNL.png',
    year: 2025,
    artist: {
      name: 'AlfaFilly',
      link: 'https://linktr.ee/alfafilly'
    },
  },
  'herobula-sketches': {
    url: 'images/xenu-sergal/herobula-sketches.png',
    year: 2025,
    artist: {
      name: 'Herobula',
      link: 'https://bsky.app/profile/herobula.bsky.social'
    }
  },
  'gata-profile-pic': {
    url: 'images/xenu-sergal/gata-purple-gradient.png',
    year: 2024,
    artist: {
      name: 'gata',
      link: 'https://vgen.co/pawlaxy'
    }
  },
  'sharpibees-blep': {
    url: 'images/xenu-sergal/sharpibees-blep.jpg',
    description: 'This has literally been my Discord profile pic since 2018',
    year: 2018,
    artist: {
      name: 'Sharpibees',
      link: 'https://bsky.app/profile/sharpibees.bsky.social'
    }
  },
  'val-halloween-2023': {
    url: 'images/xenu-sergal/val-halloween-2023.png',
    year: 2023,
    artist: {
      name: 'Foxhopped',
      link: 'https://bsky.app/profile/foxhop.bsky.social'
    }
  },
  'w0wls-chibi': {
    url: 'images/xenu-sergal/w0wls-chibi.png',
    year: 2024,
    artist: {
      name: 'w0wls',
      link: 'https://www.tumblr.com/w0wls'
    }
  },
  'white-boy-summer': {
    url: 'images/xenu-sergal/white-boy-summer.png',
    year: 2021,
    description: 'Awwww yeah, it\'s a white boy summer!',
    artist: {
      name: 'Rainissance',
      link: 'https://rainissance.carrd.co'
    }
  },
  'xenu-ate-a-cheese': {
    url: 'images/xenu-sergal/xenu_ate_a_cheese.png',
    year: 2020,
    description: 'i know i ate a cheese',
    artist: {
      name: 'cabl',
      link: 'https://cabl.rodeo'
    }
  },
  'xenu-borderlands-trio': {
    url: 'images/xenu-sergal/xenu_trio_comm.png',
    year: 2019,
    description: 'Something I got for some friends and I after a Borderlands 2 playthrough',
    artist: {
      name: 'Foxhopped',
      link: 'https://bsky.app/profile/foxhop.bsky.social'
    }
  },
  'xenu-halloween-moth': {
    url: 'images/xenu-moth/xenu_halloween_moth.png',
    year: 2019,
    description: 'mothman angy',
    artist: {
      name: 'Foxhopped',
      link: 'https://bsky.app/profile/foxhop.bsky.social'
    }
  },
  'xenu-moth-sketch': {
    url: 'images/xenu-moth/xenu_moth_sketch.png',
    year: 2019,
    description: 'One day I thought "what if I was a moth" and this is the result',
    artist: {
      name: 'Foxhopped',
      link: 'https://bsky.app/profile/foxhop.bsky.social'
    }
  },
  'xenu-rainissance-pfp': {
    url: 'images/xenu-sergal/xenu_rainissance.png',
    year: 2020,
    artist: {
      name: 'Rainissance',
      link: 'https://rainissance.carrd.co'
    }
  },
  'xenu-thinkpad-sketch': {
    url: 'images/xenu-sergal/xenu_thinkpad_sketch.png',
    year: 2019,
    description: 'Me writing this website (yes on a ThinkPad (yes running Arch))',
    artist: {
      name: 'Foxhopped',
      link: 'https://bsky.app/profile/foxhop.bsky.social'
    }
  },
  'baymaws-pixel': {
    url: 'images/xenu-sergal/baymaws_pixel.jpg',
    year: 2021,
    artist: {
      name: 'Baymaws'
    }
  },
  'w0wls-genderfluid-pride': {
    url: 'images/xenu-sergal/w0wls-genderfluid-pride-v2.png',
    year: 2019,
    artist: {
      name: 'w0wls',
      link: 'https://www.tumblr.com/w0wls'
    }
  },
  'baymaws-moth-chibi': {
    url: 'images/xenu-moth/xenu_chibi.png',
    year: 2020,
    artist: {
      name: 'Baymaws'
    }
  },
  'moth-sip': {
    url: 'images/xenu-moth/moth-sip.jpg',
    year: 2019,
    artist: {
      name: 'w0wls',
      link: 'https://www.tumblr.com/w0wls'
    }
  }
};
const imgViewDialog = document.getElementById('img-view-dialog');
const imgViewDialogImg = document.getElementById('img-view-dialog-img');
const imgViewDialogDesc = document.getElementById('img-view-dialog-desc');
const imgViewDialogArtist = document.getElementById('img-view-dialog-artist');
const imgViewDialogYear = document.getElementById('img-view-dialog-year');
const imgViewDialogAltContainer = document.getElementById('img-view-dialog-alt-container');
function openImgViewDialog(imgkey) {
  const imgMeta = imgDb[imgkey];
  if (!imgMeta) {
    console.error('Unknown image: ' + imgkey);
    return;
  }
  imgViewDialogImg.setAttribute('src', imgMeta.url);
  imgViewDialogDesc.innerHTML = imgMeta.description ? imgMeta.description : '';
  imgViewDialogArtist.innerHTML = imgMeta.artist.name;
  if (imgMeta.artist.link) {
    imgViewDialogArtist.setAttribute('href', imgMeta.artist.link);
  } else {
    imgViewDialogArtist.removeAttribute('href');
  }
  imgViewDialogYear.innerHTML = imgMeta.year;

  imgViewDialogAltContainer.innerHTML = null;
  if (imgMeta.alternates && imgMeta.alternates.length > 0) {
    imgMeta.alternates.forEach(element => {
      const altLink = document.createElement('button');
      altLink.innerHTML = element.name;
      altLink.addEventListener('click', () => {
        imgViewDialogImg.classList.toggle('img-view-dialog-hidden');
        imgViewDialogImg.setAttribute('src', element.url);
      });
      imgViewDialogAltContainer.appendChild(altLink);
    });
  }

  imgViewDialog.showModal();
}
function openImgViewDialogKey(event, imgkey) {
  if (event.keyCode === 13) {
    openImgViewDialog(imgkey);
  }
}

function closeDialog() {
  imgViewDialogImg.classList.toggle('img-view-dialog-hidden');
  imgViewDialog.close();
}

function imgViewOnLoad() {
  imgViewDialogImg.classList.toggle('img-view-dialog-hidden');
}

function clearContentWarning(id) {
  const contentWarnDiv = document.getElementById(id);
  if (!contentWarnDiv) {
    console.error('Could not find div with id: ' + id);
    return;
  }
  contentWarnDiv.remove();
}
