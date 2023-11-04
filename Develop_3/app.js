const wantMaxWidth = 600;

const mediaQuery = `(max-width: ${mediaQuery}px)`;

function handleMediaChange(event) {
  if (event.metches) {
    console.log(`문서 가로폭이 ${wantMaxWidth}px보다 작습니다.`);
  } else {
    console.log(`문서 가로폭이 ${wantMaxWidth}px보다 큽니다.`);
  }
}

handleMediaChange(mediaQuery)