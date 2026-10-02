# Changelog

All notable changes to **Passable Camera Card** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.5] - 2026-10-02

### Changed
- **Local LitElement Extraction**: Replaced external unpkg CDN imports with local Home Assistant prototype extraction (`hui-entities-card`), enabling 100% offline and air-gapped operation.
- **Design System Alignment**: Standardized card header padding to 16px and title font size to 24px (`var(--ha-card-header-font-size, 24px)`).
- **Visual UI Editor**: Added static `getConfigElement()` wiring for the visual card editor in the Lovelace card picker.
- **Registry Metadata**: Added `documentationURL` linking to the repository in `window.customCards`.

## [1.0.4] - 2026-09-20

### Fixed
- Stream sizing and Frigate timeline playback improvements.
