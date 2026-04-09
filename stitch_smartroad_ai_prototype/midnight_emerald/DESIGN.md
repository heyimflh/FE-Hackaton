# Design System Strategy: The Kinetic Intelligence Framework

## 1. Overview & Creative North Star: "The Digital Architect"
The "Digital Architect" is our North Star. This design system moves away from the static, boxy constraints of traditional dashboard design toward a fluid, high-velocity editorial experience. It is designed to feel like a command center for the future—where data is not just displayed but orchestrated.

We break the "template" look by utilizing **intentional asymmetry** and **atmospheric depth**. Large-scale typography is treated as a structural element, overlapping with high-tech glass containers to create a sense of three-dimensional space. The interface should feel like a living map of a city: breathing, glowing, and interconnected.

---

## 2. Colors & Tonal Depth
Our palette is rooted in the depth of the night and the electric pulse of city infrastructure.

### The Palette (Material Scale)
*   **Background:** `#0e1322` (Deep Midnight Navy)
*   **Primary (Action):** `#00ff87` (Electric Emerald) | Container: `#00ff87`
*   **Secondary (Accent):** `#bdf4ff` (Bright Cyan) | Container: `#00e3fd`
*   **Surface Tiers:**
    *   `surface-container-lowest`: `#090e1c`
    *   `surface-container-low`: `#161b2b`
    *   `surface-container-high`: `#25293a`
    *   `surface-container-highest`: `#2f3445`

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. Boundaries must be defined through **Tonal Transitions**. Use `surface-container-low` for a main section and `surface-container-lowest` for an inset card. This creates a "molded" look rather than a "sketched" look.

### The "Glass & Gradient" Rule
To achieve a premium, high-tech finish, all primary floating elements must utilize **Glassmorphism**. 
*   **Recipe:** `surface-container-high` at 60% opacity + `backdrop-filter: blur(24px)`.
*   **Signature Gradients:** For CTAs and primary visual drivers, use a linear gradient from `primary` (#f1ffef) to `primary-container` (#00ff87) at a 135-degree angle. This provides a "neon-tube" luminosity that flat colors cannot replicate.

---

## 3. Typography: Authoritative Editorial
We utilize **Plus Jakarta Sans** for its geometric precision and modern authority. **Manrope** serves as the functional workhorse for data density.

*   **Display (L/M/S):** Plus Jakarta Sans (Bold). Use for high-impact data points or section headers. 
    *   *Direction:* Use negative letter-spacing (-0.04em) to create a dense, powerful silhouette.
*   **Headline (L/M/S):** Plus Jakarta Sans (Semi-Bold). 
    *   *Direction:* These are your anchors. Don't be afraid to let a headline overlap a background element or a glass card.
*   **Title/Body/Label:** Manrope.
    *   *Direction:* Use `body-lg` (1rem) for most descriptive text. Keep labels (`label-sm`) in uppercase with slight tracking (+0.05em) to maintain a "tech-schematic" feel.

---

## 4. Elevation & Depth: The Layering Principle
Depth is not achieved through shadows alone, but through **Tonal Layering**.

*   **Atmospheric Stacking:** Place `surface-container-highest` cards on top of a `surface` background. The "lift" is perceived through the shift in navy value, not a drop shadow.
*   **Ambient Shadows:** If a card must "float" (e.g., a modal or critical alert), use a shadow tinted with the background hue: `rgba(0, 0, 0, 0.4)` with a 40px blur and 0px offset. This mimics the way light behaves in a dark, high-tech environment.
*   **The "Ghost Border":** For essential accessibility on interactive fields, use the `outline-variant` (#3b4b3d) at **15% opacity**. This creates a whisper of a boundary that guides the eye without breaking the fluid aesthetic.
*   **Neon Glow:** For active states or critical AI alerts, apply a `box-shadow: 0 0 15px rgba(0, 255, 135, 0.3)`. This gives the component a functional "energy source."

---

## 5. Component Logic

### Buttons: High-Velocity CTAs
*   **Primary:** Gradient fill (Electric Emerald to Cyan), `9999px` (Full) rounded corners. Text is `on-primary` (#003919), Bold.
*   **Secondary:** Glassmorphic background (30% opacity `surface-variant`) with a "Ghost Border" of 20% `primary`.
*   **States:** On hover, increase the `backdrop-filter` blur and scale the component by 1.02x for a tactile, responsive feel.

### Cards & Data Containers
*   **Radius:** Always use `xl` (3rem) for parent containers and `md` (1.5rem) for nested items.
*   **Hierarchy:** Forbid divider lines. Separate data modules using `1.5rem` to `2rem` of vertical whitespace or by nesting a `surface-container-high` card inside a `surface-container-low` section.

### Input Fields & Controls
*   **Text Inputs:** Use `surface-container-lowest` as the field background. No border. Use a 2px `primary-fixed` bottom-bar glow only when the field is focused.
*   **Checkboxes/Radios:** Circular (`full` radius) and filled with a subtle gradient on check. Icons should be `thin-line` (1px stroke).

### Custom App Components: "The Pulse"
*   **Data Streamer:** A thin, horizontal component for real-time traffic data, using a `surface-container-highest` glass background with a slow-moving `primary` gradient pulse on the left edge.
*   **The AI Lens:** A large, `xl` rounded container with a high-blur backdrop filter used for highlighting automated city insights.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts where text might bleed off the edge of a glass container.
*   **Do** use `primary` (Electric Emerald) sparingly as a functional highlight, not a filler color.
*   **Do** embrace negative space. Luxurious design is defined by what you leave out.

### Don't
*   **Don't** use solid black (#000000). Use the `surface` palette to maintain depth.
*   **Don't** use 1px solid borders to define "boxes." It makes the system look like a generic dashboard.
*   **Don't** use standard "Drop Shadows." Use tonal shifts and soft, tinted ambient glows.
*   **Don't** use heavy-weight icons. Stick to `thin-line` minimalist iconography to maintain the "high-tech" sophistication.