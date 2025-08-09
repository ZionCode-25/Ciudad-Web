# 🏙️ Ciudad Web - Juego Educativo HTML & CSS

Un juego interactivo para aprender HTML y CSS construyendo una ciudad web paso a paso.

## ✨ Nuevas Funcionalidades

### 🎯 Footer Completo

- **Branding**: Logo y nombre de "Zion Code"
- **Redes Sociales**: Enlace directo a TikTok @zioncode\_
- **Compartir Logros**: Al completar el juego, aparece una sección para compartir el logro
- **Sistema de Donaciones**: Información para apoyar el proyecto

### 📱 Compartir en Redes Sociales

Al completar todos los niveles, los usuarios pueden compartir su logro en:

- **WhatsApp**: Mensaje personalizado invitando a otros a jugar
- **Facebook**: Post con descripción del logro
- **Twitter**: Tweet con hashtags relevantes y mención a Zion Code
- **LinkedIn**: Publicación profesional sobre el aprendizaje
- **Copiar Enlace**: Para compartir en cualquier plataforma

### 💝 Sistema de Donaciones

- **Método**: Mercado Pago con alias "ZionCode"
- **Beneficiario**: Cristian José Bordón Flores
- **Recompensa**: 2 eBooks (CSS Intermedio + JavaScript Básico)
- **Proceso**: Donar → Enviar comprobante por email → Recibir eBooks

### 🎉 Efectos Visuales

- **Confetti**: Animación de celebración al completar el juego
- **Notificaciones**: Feedback visual para acciones como copiar enlaces
- **Animaciones**: Transiciones suaves en el footer y botones

## 🛠️ Configuración

### Personalizar Email de Donaciones

En `script.js`, línea ~1480, el email está configurado como:

```javascript
const email = "zioncode25@gmail.com";
```

### Personalizar Enlaces Sociales

En `index.html`, el enlace de TikTok está configurado como:

```html
<a href="https://www.tiktok.com/@zioncode_" target="_blank"></a>
```

## 🎨 Estilos del Footer

El footer incluye:

- **Diseño Responsive**: Se adapta a móviles, tablets y desktop
- **Tema Oscuro**: Consistente con el diseño del juego
- **Efectos Hover**: Interacciones visuales en botones y enlaces
- **Gradientes**: Colores atractivos para botones de acción

## 📱 Responsive Design

- **Desktop**: 3 columnas (Branding | Compartir | Donaciones)
- **Tablet**: 2 columnas con donaciones en fila completa
- **Móvil**: 1 columna con elementos centrados

## 🚀 Funcionalidades Técnicas

### Detección de Juego Completado

- Verifica automáticamente si todos los niveles están completados
- Muestra la sección de compartir solo cuando corresponde
- Persiste el estado en localStorage

### Compartir Multiplataforma

- URLs optimizadas para cada red social
- Mensajes personalizados por plataforma
- Fallback para navegadores sin soporte de clipboard

### Notificaciones

- Sistema de notificaciones temporales
- Animaciones CSS para entrada y salida
- Limpieza automática de elementos DOM

## 🎯 Próximas Mejoras

- [ ] Integración con API de redes sociales
- [ ] Sistema de estadísticas de progreso
- [ ] Certificado digital de completación
- [ ] Más niveles avanzados
- [ ] Modo multijugador

---

**Desarrollado por Zion Code** 🚀
_Aprende programación jugando_
