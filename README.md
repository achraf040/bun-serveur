# Serveur Bun

Un petit serveur web avec [Bun](https://bun.sh), avec une page qui contient un bouton pour vérifier que le serveur fonctionne. L'app est conteneurisée avec Docker.

## Structure

```
├── src/server.ts        # serveur HTTP (routes / et /api/health)
├── public/index.html    # page avec le bouton « Tester le serveur »
├── package.json
├── Dockerfile
└── docker-compose.yml
```

## Lancer en local (Bun)

```bash
bun run dev
```

Puis ouvrir http://localhost:3000.

## Lancer avec Docker

```bash
docker compose up -d --build
```

Puis ouvrir http://localhost:3000. Pour arrêter : `docker compose down`.

## API

| Route | Réponse |
|---|---|
| `GET /` | Page HTML avec le bouton de test |
| `GET /api/health` | `{ "status": "ok", "heure": "..." }` |
