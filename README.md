# Passable Camera Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/default)
[![version](https://img.shields.io/github/v/release/GBear09/passable-camera-card?include_prereleases&sort=date)](https://github.com/GBear09/passable-camera-card/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A feature-rich, high-performance Home Assistant Lovelace custom card designed for PTZ and floodlight cameras. Built with LitElement, it brings live video streaming (including WebRTC integration), PTZ pan/tilt/zoom directionals, preset lens selection, Frigate event history with clips, timeline VOD playback, and quick-action toggles (siren, lights, mic) into a sleek dashboard interface.

---

## ✨ Features

- 📹 **Live Video & WebRTC Support**: Fast live streaming with seamless WebRTC integration and unmuted audio support.
- 🕹️ **PTZ Directional Pad & Zoom**: Interactive D-pad for Pan/Tilt controls and dedicated Zoom slider for supported camera entities.
- 🎯 **Lens & Preset Selectors**: Quick switches for camera preset positions or wide/telephoto lens configurations.
- 🕒 **Frigate Event History**: View motion/person/car/pet event clips directly from your Frigate integration.
- 🎬 **Timeline VOD Playback**: Interactive timeline scrubber to inspect recorded video footage across specific dates and times.
- 💡 **Quick Controls**: Instant toggles for camera floodlights, sirens, and 2-way microphone controls.
- 📱 **Responsive & Fullscreen**: Touch-friendly interface with fullscreen and landscape auto-expansion modes.
- ⚙️ **GUI Visual Editor**: Full visual card configuration editor in Home Assistant with real-time preview.

---

## 📦 Installation via HACS

1. Open **HACS** in your Home Assistant sidebar.
2. Click the three dots in the top-right corner and select **Custom repositories**.
3. Add the repository URL:
   `https://github.com/GBear09/passable-camera-card`
4. Set **Category** to **Dashboard** (or Plugin).
5. Click **Add**, find **Passable Camera Card** in HACS, and click **Download**.
6. Reload your browser dashboard.

---

## 🚀 Usage & YAML Configuration

### GUI Editor
You can easily add and configure the card using the Home Assistant visual dashboard editor. Search for **Passable Camera Card** when adding a new card.

### Example YAML Configuration

```yaml
type: custom:passable-camera-card
title: Front Yard Camera
camera_entity: camera.front_yard_live
frigate_client_id: frigate
frigate_camera_entity: camera.front_yard_frigate
hide_ptz: false
hide_zoom: false
```

---

## ⚙️ Configuration Options

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `type` | string | **Required** | Must be `custom:passable-camera-card`. |
| `camera_entity` | string | **Required** | Entity ID of the primary camera (e.g. `camera.front_yard`). |
| `frigate_client_id` | string | `frigate` | Client ID for your Frigate integration backend. |
| `frigate_camera_entity` | string | optional | Secondary camera entity ID if using Frigate separately. |
| `title` | string | optional | Title override displayed in the header. |
| `hide_ptz` | boolean | `false` | Hide the PTZ directional D-pad control panel. |
| `hide_zoom` | boolean | `false` | Hide the vertical zoom control slider. |

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.
