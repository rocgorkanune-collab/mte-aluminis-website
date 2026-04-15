# MTE ALUMINIS - Documento de Requisitos del Producto (PRD)

## Información del Proyecto
**Fecha de inicio**: 15 de Diciembre de 2025
**Cliente**: MTE ALUMINIS
**Tipo de proyecto**: Sitio web corporativo para empresa de carpintería metálica

## Problema Statement Original
Crear una página web moderna, responsive y optimizada para SEO para MTE ALUMINIS, empresa especializada en carpintería de aluminio y PVC en Terrassa, Barcelona.

## Información de la Empresa
- **Nombre**: MTE ALUMINIS
- **Ubicación**: Carrer del Nord, 89, 08221 Terrassa, Barcelona
- **Teléfono**: +34 673 19 62 31
- **Valoración**: 4.0/5 (4 opiniones)
- **Especialidad**: Carpintería metálica, aluminio y PVC

## Arquitectura Técnica
**Stack**:
- Frontend: React 19 con Vite
- Components: Shadcn UI, TailwindCSS
- Icons: Lucide React
- Routing: React Router DOM

## Diseño y Colores
- **Color Primario**: Sky Blue (#0ea5e9) - moderno y profesional
- **Color Secundario**: Green (#4ade80) - del logo de la empresa
- **Color de Texto**: Slate (#1e293b)
- **Backgrounds**: White, Slate 50, Slate 900

## Funcionalidades Implementadas (15/12/2025)

### ✅ Sección Hero
- Banner con imagen de fondo profesional
- CTA principales: "Solicitar Presupuesto" y "WhatsApp"
- Rating prominente (4.0/5 estrellas)
- Información de contacto telefónico
- Responsive design

### ✅ Sección de Servicios
- Grid de 6 servicios principales:
  1. Ventanas de Aluminio
  2. Ventanas de PVC
  3. Puertas Correderas
  4. Cerramientos de Cristal
  5. Aislamiento Térmico y Acústico
  6. Carpintería Metálica a Medida
- Iconos de Lucide React
- Hover effects
- CTA para consultas personalizadas

### ✅ Sección Sobre Nosotros
- Historia y experiencia de la empresa
- Valores destacados con checkmarks
- Estadísticas: 20+ proyectos, 100% satisfacción, 4.0 rating
- Imágenes del trabajo profesional
- Feature cards

### ✅ Sección de Proyectos
- Gallery de trabajos realizados
- Proyecto destacado: Urbanización Cerdanya (20 viviendas)
- Categorías: Residencial y Comercial
- Imágenes reales del trabajo

### ✅ Sección de Opiniones
- Display de valoración general 4.0/5
- 4 testimonios de clientes
- Design de tarjetas con avatares
- Ratings individuales por reseña

### ✅ Sección de Contacto
- Formulario de contacto (Frontend con mock)
- Botón de WhatsApp con mensaje pre-rellenado
- Información de contacto:
  - Teléfono clickeable
  - Email
  - Dirección física
  - Horario de atención
- Mapa de Google Maps embebido

### ✅ Header
- Logo de MTE ALUMINIS
- Navegación responsive
- Menú móvil (hamburger menu)
- Scroll transparente a blanco con efecto glassmorphism
- CTA "Llamar Ahora"

### ✅ Footer
- Logo y descripción
- Enlaces rápidos
- Servicios listados
- Información de contacto
- Social media placeholders
- Copyright y políticas legales

## Características Técnicas
- ✅ Smooth scroll navigation
- ✅ Responsive design (mobile-first)
- ✅ Animaciones y transiciones
- ✅ WhatsApp integration
- ✅ Google Maps integration
- ✅ Click-to-call functionality
- ✅ Toast notifications (Sonner)

## Estado Actual: MVP Frontend Completado

### Datos Mock
Todos los datos están almacenados en `/app/frontend/src/mock/data.js`:
- Información de la empresa
- Servicios
- Proyectos
- Reseñas
- Horarios

## Próximas Fases

### P0 - Alta Prioridad
1. **Backend Development**
   - API para formulario de contacto
   - Envío de emails con nodemailer/SendGrid
   - Base de datos para almacenar consultas
   - Admin panel básico

2. **SEO Optimization**
   - Meta tags dinámicos
   - Schema.org structured data
   - Sitemap generation
   - robots.txt

### P1 - Media Prioridad
1. **Funcionalidad Multiidioma**
   - Implementar switcher Español/Catalán
   - i18n integration

2. **Analytics**
   - Google Analytics integration
   - Conversion tracking

### P2 - Baja Prioridad
1. **Mejoras adicionales**
   - Más proyectos en gallery
   - Blog section
   - WhatsApp chat widget
   - Social media integration real

## Notas Técnicas
- Las imágenes del cliente están hosteadas en customer-assets.emergentagent.com
- Logo en formato PNG con fondo negro
- Foto de instalación muestra trabajo en urbanización con grúa

## Próximos Action Items
1. Recopilar feedback del cliente sobre diseño
2. Decidir si proceder con backend
3. Obtener más imágenes de proyectos si disponibles
4. Definir estrategia de contenido SEO
