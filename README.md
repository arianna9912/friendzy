# Friendzy

Chat privado en tiempo real entre dos usuarios. Disponible en: https://arianna9912.github.io/friendzy/

## Tecnología

- **Vue 3 + Vite + Vuetify 3** (SPA)
- **Firebase**:
  - **Authentication**: el acceso solo es posible iniciando sesión con tu cuenta de **Google** o creándote una cuenta propia con correo y contraseña
  - **Cloud Firestore**: chat en tiempo real (`onSnapshot`), mensajes, conversaciones, solicitudes de amistad, favoritos, presencia en línea/desconectado y reacciones
  - **Cloud Storage**: imágenes y fotos compartidas
- **i18n**: interfaz en **español e inglés**
- **Cambio de temática de colores**: naranja / azul
- **Hosting**: GitHub Pages

## Funcionalidades

- Envío de **mensajes de texto**
- Envío de **notas de voz** (audio) grabadas en el momento
- Fotos compartidas (individuales o varias a la vez)
- **Reacciones con emojis** a cualquier mensaje (haz clic en la burbuja del mensaje)
- Estado **En línea / Desconectado** en tiempo real por usuario
- Solicitudes de amistad, lista de amigos y conversaciones favoritas (estrella)
- Indicadores de hora y de mensaje visto (doble check)

## Requisito de Firebase

En **Firebase Console -> Authentication -> Sign-in method** deben estar habilitados:

- **Google**
- **Email/Password** (necesario para crear cuenta propia y el login con email)

Flujo de amistad:
1. Los usuarios registrados aparecen en el botón `+` o con el buscador.
2. Con el botón **Solicitar** se envía una solicitud de chat (doc en `requests/`).
3. El destinatario la ve en la sección **Solicitudes** y la **Acepta** o la **Rechaza**.
4. Al aceptar, la otra persona pasa a **Amigos** y se abre la conversación
   (el documento de la conversación se crea automáticamente al abrirla y aparece
   en la lista **Conversaciones**).

## Desarrollo

```bash
npm install
npm run dev      # entorno local
npm run build    # compilar a dist/
```