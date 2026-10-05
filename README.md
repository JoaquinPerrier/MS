# Jampe

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

El formulario de inicio y de `/contacto` envía los datos a `POST /api/contact`.

- Valida nombre, correo, asunto y mensaje.
- Envía el correo con Resend a `CONTACT_TO_EMAIL`.

Copiá `.env.example` a `.env.local` y completá `RESEND_API_KEY` para que el formulario pueda enviar.
