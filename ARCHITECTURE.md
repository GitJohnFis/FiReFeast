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
---
config:
  layout: dagre
---
flowchart TD
 subgraph Frontend["Frontend (Client-side)"]
    direction LR
        htmlFile["HTML - Game UI"]
        cssFile["CSS - Styling"]
        jsFile["JavaScript - Game Logic"]
        assets["Assets - Images, etc."]
  end
 subgraph Mechanics["Game Mechanics"]
    direction TB
        stats["Stats - EXP, Health, Armor, Gold"]
        locations["Locations - Store, Cave, Town"]
        monsters["BeAst/Monsters"]
        features["Features - Revive, Multi-hit, etc."]
  end
 subgraph Legend["Legend"]
    direction LR
        L1["Yellow: User/Entry Point"]
        L2["Blue: Frontend Files"]
        L3["Gold: Game Mechanics"]
        L4["Red: Key Modules"]
  end
    user("User - Browser") --> htmlFile
    htmlFile --> cssFile & jsFile & assets
    jsFile --> assets & stats & locations & monsters & features
     htmlFile:::highlight
     cssFile:::highlight
     jsFile:::highlight
     assets:::highlight
     stats:::highlight
     locations:::highlight
     monsters:::highlight
     features:::highlight
    classDef highlight fill:#ffd0d0,stroke:#e57373,stroke-width:2px
    style user fill:#f0e68c,stroke:#b8860b,stroke-width:2px
    style Frontend fill:#e6f7ff,stroke:#0099cc,stroke-width:2px
    style Mechanics fill:#fffbe6,stroke:#ffd700,stroke-width:2px
    style Legend fill:#fff,stroke:#aaa,stroke-dasharray: 5 5

