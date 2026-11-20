# Changelog

All notable changes to **Passable Camera Card** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.1] - 2026-11-19

### Fixed
- **Responsive History Toolbar & Mobile Alignment**: Replaced the non-wrapping History toolbar row with a container-aware responsive layout that stacks cleanly on narrow/phone viewports (`@container (max-width: 430px)` and `@media (max-width: 480px)`) so the Refresh button and date picker never overflow off-screen.
- **History Layout Polish**: Removed redundant horizontal padding inside `.content-area` (`filter-chips-row`, `history-controls-panel`, `timeline-controls`, and `timeline-legend`) so controls align flush with the video player and event metadata card, matched `.date-picker-wrap` and `.icon-pill-btn` height (`36px`), protected `.header-right` from shrinking, and trimmed extra `.history-player` bottom spacing.

## [1.1.0] - 2026-11-19

### Added
- **Pre/Post-Capture Event Clip Playback**: History events now play via Frigate's signed VOD HLS stream with configurable `clip_pre_capture` (default `5s`) and `clip_post_capture` (default `30s`), with automatic fallback to `clip.mp4`.
- **Event Filters & Metadata Bar**: Added object label filter chips, `In Zone` filter toggle, event duration badges, sub-label/zone captions, manual Refresh button, "Jump to Timeline", and full padded MP4 clip download link.
- **Live View Controls**: Added explicit Speaker Mute/Unmute button, Manual Fullscreen toggle, live `MIC LIVE · Speaker Muted` status banner, and optional `SD` / `4K` stream quality switcher.
- **Frigate Badge & Talk Stream Options**: Added `talk_stream_suffix` (for dedicated on-demand backchannel streams), `use_frigate_badges` (drives status badges from Frigate occupancy sensors + displays last recognized face), and `hide_mic` configuration options in YAML and the visual editor.

### Fixed
- **Two-Way Audio Stability & Guardrails**: Added `isSecureContext` / `getUserMedia` check with actionable HTTPS guidance, auto-switch from Zoom/4K to Wide talk stream when enabling the mic, and eliminated `updated()` unmute debounce starvation on background `hass` state updates.
- **Timeline Scrubbing & State Hygiene**: Seek natively within already-buffered VOD windows instead of reloading HLS on every scrub, default today's Timeline cursor to latest recordings instead of noon, preserve Timeline mode on date change, auto-hide PTZ/Guard buttons when absent, deduplicate the popup title header, fix zoom `0` falsy handling and stale slider values, and clean up all timers and dead sheet handlers.

## [1.0.7] - 2026-10-25

### Fixed
- Shared `AudioContext` across popup opens, cleared timers in `disconnectedCallback`, and guarded entity discovery.

## [1.0.6] - 2026-10-23

### Fixed
- **Two-Way Audio Acoustic Feedback Gating**: Automatically mute local video playback while the two-way talkback microphone (`_micEnabled`) is active to prevent acoustic feedback loops, and restore audio playback when the microphone is toggled off.
- **Popup Element Alignment**: Updated `browser_mod.popup` modal content type from legacy `custom:camera-card` to `custom:passable-camera-card`.

## [1.0.5] - 2026-10-02

### Changed
- **Local LitElement Extraction**: Replaced external unpkg CDN imports with local Home Assistant prototype extraction (`hui-entities-card`), enabling 100% offline and air-gapped operation.
- **Design System Alignment**: Standardized card header padding to 16px and title font size to 24px (`var(--ha-card-header-font-size, 24px)`).
- **Visual UI Editor**: Added static `getConfigElement()` wiring for the visual card editor in the Lovelace card picker.
- **Registry Metadata**: Added `documentationURL` linking to the repository in `window.customCards`.

## [1.0.4] - 2026-09-20

### Fixed
- Stream sizing and Frigate timeline playback improvements.
