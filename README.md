# Compañia

Sitio de la agencia de desarrollo de software, construido en Next.js a partir del diseño de Stitch.

## Stack

- Next.js (App Router)
- Tailwind CSS
- React Hook Form + Zod
- Resend (envío de emails del formulario)

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Formulario de contacto

El formulario de Home y de `/contacto` envía los datos a `POST /api/contact`.

- Valida nombre, email, asunto y mensaje.
- Guarda cada consulta en `data/contacts.json`.
- Si configurás `RESEND_API_KEY`, también manda el email a `CONTACT_TO_EMAIL`.

Copiá `.env.example` a `.env.local` y completá las variables para activar el correo.
