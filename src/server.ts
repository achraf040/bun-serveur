const PORT = Number(process.env.PORT) || 3000;
const page = Bun.file(new URL("../public/index.html", import.meta.url));

const server = Bun.serve({
  port: PORT,
  hostname: "0.0.0.0",
  routes: {
    "/": () => new Response(page, { headers: { "Content-Type": "text/html; charset=utf-8" } }),
    "/api/health": () =>
      Response.json({ status: "ok", heure: new Date().toLocaleString("fr-FR") }),
  },
  fetch() {
    return new Response("Page introuvable", { status: 404 });
  },
});

console.log(`Serveur démarré sur ${server.url}`);
