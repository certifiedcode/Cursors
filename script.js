fetch("https://certifiedcode.editorx.io/cursor/_functions/config/" + _cursorsConfig)
      .then((res) => res.text())
      .then((data) => {
        document.body.style.cursor = data;
      })
      .catch((err) => {
        console.log(err);
      });
