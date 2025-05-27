<!--
[ User (Browser) ]
        |
        v
+---------------------+
|  HTML (Game UI)     |
|  - Layout/Buttons   |
+---------------------+
        |
        v
+---------------------+
|  JavaScript Logic   |
|  - Game Mechanics   |
|  - State Handling   |
|  - Event Handling   |
+---------------------+
        |
        v
+---------------------+
|   CSS Styling       |
+---------------------+
        |
        v
+---------------------+
|   Assets/Images     |
+---------------------+
-->

```mermaid
flowchart TD
    User --> HTML
    HTML --> CSS
    HTML --> JavaScript
    HTML --> Assets
    JavaScript --> Stats
    JavaScript --> Locations
    JavaScript --> Monsters
    JavaScript --> Features
```
