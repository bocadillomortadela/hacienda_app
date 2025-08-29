# Hacienda App 💼

Aplicación fullstack para gestión de ingresos y gastos personales, pensada como apoyo para autónomos.  
Incluye backend con **Express + MongoDB** y frontend con **React + Chakra UI**.

---

## 🚀 Tecnologías

### Backend

- Node.js + Express
- MongoDB + Mongoose
- JWT para autenticación
- Bcrypt para hashing de contraseñas

### Frontend

- React con Vite
- React Router DOM
- Chakra UI para diseño
- Context API para tema claro/oscuro

---

## ✨ Funcionalidades

- **Autenticación de usuarios**

  - Registro de nuevos usuarios
  - Login con JWT
  - Logout
  - Protección de rutas privadas
  - Perfil de usuario con datos (`name`, `email`, `dni`, `role`)

- **Dashboard**

  - Muestra el total de ingresos y gastos del usuario logueado
  - Botones de acceso rápido a secciones de ingresos y gastos

- **Gestión de Ingresos**

  - Listado de ingresos del usuario
  - Crear nuevo ingreso (concepto, cantidad, fecha, cliente, categoría, URL de factura)
  - Eliminar ingresos existentes

- **Gestión de Gastos**

  - Listado de gastos del usuario
  - Crear nuevo gasto (concepto, cantidad, fecha, proveedor, categoría, URL del recibo)
  - Eliminar gastos existentes

- **Perfil de usuario**

  - Ver información personal
  - Ajustes de cuenta:
    - Cambiar nombre y DNI
    - Cambiar contraseña
    - Preferencias: tema claro/oscuro
    - Eliminar cuenta

- **Tema claro/oscuro** 🌙☀️
  - Controlado por Context API
  - Persistente en `localStorage`

---

## ⚙️ Instalación

### Requisitos

- Node.js >= 18
- MongoDB Atlas o local

### Backend

```bash
cd backend
npm install
npm run dev
```
