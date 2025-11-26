import OBR from "https://cdn.owlbear.rodeo/sdk/latest/obrsdk.esm.js";

OBR.onReady(() => {
  OBR.tool.create({
    id: "plugin-bloco-notas.tool",
    title: "Bloco de Notas",
    icons: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
        label: "Notas"
      }
    ],
    onClick() {
      OBR.popover.open({
        id: "plugin-bloco-notas.popover",
        url: "https://SEU_USUARIO.github.io/SEU_REPO/index.html",
        width: 500,
        height: 600
      });
    }
  });
});
