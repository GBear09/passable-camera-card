import {
  LitElement,
  html,
  css,
  svg,
} from "https://unpkg.com/lit@3.0.0/index.js?module";

const CARD_VERSION = "1.0.1";

console.info(
  `%c  PASSABLE-CAMERA-CARD  %c v${CARD_VERSION} `,
  "color: white; font-weight: bold; background: #3498db; padding: 2px 5px; border-radius: 3px 0 0 3px;",
  "color: #3498db; font-weight: bold; background: #ecf0f1; padding: 2px 5px; border-radius: 0 3px 3px 0;"
);


// --- INLINE ICONS (Lucide) ---
const Icons = {
  History: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  Calendar: html`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  Video: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`,
  Sliders: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`,
  Settings: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  Target: html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
  Activity: html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
  ChevronUp: html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`,
  ChevronDown: html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`,
  ChevronLeft: html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>`,
  ChevronRight: html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`,
  User: html`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
  Car: html`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H9.3a2 2 0 0 0-1.6.8L5 11l-5.16.86a1 1 0 0 0-.84.99V16h3m10 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m-6 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0"></path></svg>`,
  Dog: html`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.7.36 1.13.92 1.58A5 5 0 0 0 4 15c.67 0 1.25-.33 1.63-.8.2.22.42.42.67.6.64.45 1.48.69 2.45.69 2.92 0 5.25-2.24 5.25-5 0-1.42-.6-2.72-1.6-3.62C11.85 6.27 10.95 5.56 10 5.172z"></path><path d="M12.5 16.5A5.5 5.5 0 0 1 18 22h4a2 2 0 0 0 2-2v-4.5a3.5 3.5 0 0 0-3.5-3.5h-1v-2a2 2 0 0 0-2-2h-3"></path><path d="M10 11.5v-3"></path><path d="M14 11.5v-3"></path></svg>`,
  ZoomIn: html`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`,
  X_Lg: html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  Check: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  Lightbulb: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
  Siren: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z"/><path d="M12 2v3"/><path d="M5 4.5l1.5 2.5"/><path d="M19 4.5l-1.5 2.5"/><path d="M2 13h2"/><path d="M20 13h2"/></svg>`,
  Play: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
  Pause: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`,
  Mic: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,
  MicOff: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,
};

function formatSettingName(val) {
  if (typeof val !== "string") return val;
  return val
    .replace(/_/g, " ")
    .replace(/\bplus\b/gi, "+")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

class CameraDashboardCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    config: { state: true },
    _activeTab: { state: true },
    _activePopup: { state: true },
    _sliderVals: { state: true },
    _entities: { state: true },
    _sheetOpen: { state: true },
    _activeLens: { state: true },
    _toastMsg: { state: true },
    _events: { state: true },
    _selectedEvent: { state: true },
    _selectedDate: { state: true },
    _btnStates: { state: true },
    _micEnabled: { state: true },
    _fsControlsVisible: { state: true },
    _isFullscreen: { state: true },
    _pseudoFullscreen: { state: true },
    _ptzActive: { state: true },
    
    _historyMode: { state: true }, 
    _videoDuration: { state: true },
    _videoCurrentTime: { state: true },
    _isPlaying: { state: true },
    _timelineCursorTime: { state: true },
    _pendingSeek: { state: true },
    _loadedVodStart: { state: true },
    _loadedVodEnd: { state: true },
  };

  constructor() {
    super();
    this._activeTab = "live";
    this._activePopup = null;
    this._sliderVals = {};
    this._entities = null;
    this._sheetOpen = false;
    this._activeLens = "wide";
    this._startY = 0;
    this._dragging = false;
    this._toastMsg = null;
    this._events = null;
    this._selectedEvent = null;
    this._micEnabled = false;
    this._fsControlsVisible = true;
    this._isFullscreen = false;
    this._pseudoFullscreen = false;
    this._ptzActive = false;
    
    this._webrtcElement = null;
    this._webrtcConfig = null;
    
    const now = new Date();
    this._selectedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    
    this._btnStates = {};
    this._fetchingEvents = false;
    
    this._historyMode = "events";
    this._videoDuration = 0;
    this._videoCurrentTime = 0;
    this._isPlaying = false;
    this._timelineCursorTime = null;
    this._pendingSeek = null;
    this._hls = null;
    this._loadedVodStart = null;
    this._loadedVodEnd = null;
    this._fetchTimeout = null;
    this._fsTimer = null;

    this._programmaticScroll = false;
    this._isPointerDown = false;
    this._isUserScrolling = false;
    this._isSeeking = false; 
    this._scrollTimeout = null;
    this._seekClearTimeout = null;
    this._wheelTimeout = null;

    this._handleOrientationChange = this._handleOrientationChange.bind(this);
    this._handleFullscreenChange = this._handleFullscreenChange.bind(this);
    this._wakeFullscreenControls = this._wakeFullscreenControls.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this._mql = window.matchMedia("(orientation: landscape)");
    this._mql.addEventListener("change", this._handleOrientationChange);
    document.addEventListener("fullscreenchange", this._handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", this._handleFullscreenChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._hls) {
        this._hls.destroy();
        this._hls = null;
    }
    if (this._fetchTimeout) clearTimeout(this._fetchTimeout);
    if (this._seekClearTimeout) clearTimeout(this._seekClearTimeout);
    if (this._fsTimer) clearTimeout(this._fsTimer);
    if (this._mql) {
        this._mql.removeEventListener("change", this._handleOrientationChange);
    }
    document.removeEventListener("fullscreenchange", this._handleFullscreenChange);
    document.removeEventListener("webkitfullscreenchange", this._handleFullscreenChange);
  }

  _handleFullscreenChange() {
    this._isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement);
    if (this._isFullscreen) {
      this._wakeFullscreenControls();
    }
    this.requestUpdate();
  }

  _wakeFullscreenControls() {
    if (!this._fsControlsVisible) {
      this._fsControlsVisible = true;
    }
    
    if (this._fsTimer) clearTimeout(this._fsTimer);
    
    if (!this._ptzActive) {
      this._fsTimer = setTimeout(() => {
        this._fsControlsVisible = false;
      }, 3000); 
    }
  }

  _forceUnmute() {
    if (!this._webrtcElement) return;

    // Recursively drill through Shadow DOMs to find the hidden video element
    const findVideo = (root) => {
      if (!root) return null;
      if (root.tagName === 'VIDEO') return root;
      if (root.shadowRoot) {
        const res = findVideo(root.shadowRoot);
        if (res) return res;
      }
      if (root.children) {
        for (let i = 0; i < root.children.length; i++) {
          const res = findVideo(root.children[i]);
          if (res) return res;
        }
      }
      return null;
    };

    const video = findVideo(this._webrtcElement);
    if (video && video.muted) {
        video.muted = false;
        if (video.paused) {
            video.play().catch((e) => {
                console.warn("[Camera Card] Browser blocked unmuted autoplay, falling back to muted", e);
                video.muted = true;
                video.play();
            });
        }
    }
  }

  async _handleOrientationChange(e) {
    if (!this.config.is_popup) return;
    
    let target = this._activeTab === "live" 
      ? this.shadowRoot.querySelector(".camera-box")
      : this.shadowRoot.querySelector(".history-player");

    if (e.matches) {
      if (target && !this._isFullscreen) {
        try {
          if (target.requestFullscreen) await target.requestFullscreen();
          else if (target.webkitRequestFullscreen) await target.webkitRequestFullscreen();
          else if (target.webkitEnterFullscreen) target.webkitEnterFullscreen();
        } catch (err) { 
          console.warn("Native fullscreen blocked by browser rules, applying CSS fallback", err);
          this._pseudoFullscreen = true; 
        }
        this._wakeFullscreenControls();
      }
    } else {
      this._pseudoFullscreen = false;
      try {
        if (document.fullscreenElement || document.webkitFullscreenElement) {
          if (document.exitFullscreen) await document.exitFullscreen();
          else if (document.webkitExitFullscreen) await document.webkitExitFullscreen();
        } else if (target && target.webkitExitFullscreen) {
           target.webkitExitFullscreen();
        }
      } catch (err) { console.warn("Could not exit fullscreen:", err); }
    }
  }

  setConfig(config) {
    if (!config) throw new Error("Invalid configuration");
    this.config = config;
    if (this.hass && this.config.camera_entity) {
      this._discoverEntities();
    } else {
      this._entities = null;
    }
  }

  updated(changedProps) {
    super.updated(changedProps);
    if ((changedProps.has("hass") || changedProps.has("config")) && this.hass && this.config && this.config.camera_entity) {
      this._discoverEntities();
    }
    
    const camState = this._getActiveCameraState();
    const forceRemount = changedProps.has("_micEnabled");
    
    // Only initialize and mount WebRTC when the live tab is open in the modal
    if (camState && this.config.is_popup && this._activeTab === "live") {
        const wrapper = this.shadowRoot.getElementById("webrtc-wrapper-live");
        if (wrapper) {
            this._initWebrtc(camState, wrapper, forceRemount);
            setTimeout(() => this._forceUnmute(), 500); // Attempt to auto-unmute once mounted
        }
    }
    
    if ((changedProps.has("_activeTab") && this._activeTab === "history" && !this._events) ||
        (changedProps.has("_selectedDate") && this._activeTab === "history")) {
      this._fetchEvents();
    }

    if (changedProps.has("_historyMode") || (changedProps.has("_activeTab") && this._activeTab === "history")) {
        if (this._historyMode === "timeline") {
            const initialTime = this._selectedEvent ? this._selectedEvent.start_time : null;
            this._setupTimelineVideo(initialTime);
        } else if (this._hls) {
            this._hls.destroy();
            this._hls = null;
        }
    }
  }

  getCardSize() {
    return 4;
  }

  _discoverEntities() {
    if (!this.hass || !this.config) return;
    const cameraEntity = this.config.camera_entity;

    let baseName = cameraEntity.split(".")[1] || "";
    let isFluent = baseName.includes("_fluent");
    let streamSuffix = isFluent ? "_fluent" : "_clear";

    let cleanBase = baseName
      .replace("_fluent_2", "")
      .replace("_fluent", "")
      .replace("_clear_2", "")
      .replace("_clear", "");

    const getE = (domain, suffix) => {
      const id = `${domain}.${cleanBase}_${suffix}`;
      return this.hass.states[id] ? id : null;
    };
    const getButton = (suffix) => `button.${cleanBase}_${suffix}`;

    // Derive Frigate Base from standard entity if provided
    let frigateBase = "";
    if (this.config.frigate_camera_entity) {
      frigateBase = this.config.frigate_camera_entity.split(".")[1];
    }

    const getFrigate = (domain, suffix) => {
        if (!frigateBase) return null;
        const id = `${domain}.${frigateBase}_${suffix}`;
        return this.hass.states[id] ? id : null;
    };

    this._entities = {
      camera_wide: `camera.${cleanBase}${streamSuffix}`,
      camera_zoom: `camera.${cleanBase}${streamSuffix}_2`,
      title: this.config.title || this.hass.states[cameraEntity]?.attributes?.friendly_name?.split(" ")[0] || "Camera",
      
      // Frigate Entities
      frigate_detect: getFrigate("switch", "detect"),
      frigate_motion: getFrigate("switch", "motion"),
      frigate_recordings: getFrigate("switch", "recordings"),
      frigate_snapshots: getFrigate("switch", "snapshots"),
      frigate_review_alerts: getFrigate("switch", "review_alerts"),
      frigate_review_detections: getFrigate("switch", "review_detections"),

      motion: getE("binary_sensor", "motion"),
      person: getE("binary_sensor", "person"),
      vehicle: getE("binary_sensor", "vehicle"),
      animal: getE("binary_sensor", "animal"),
      sens_motion: getE("number", "motion_sensitivity"),
      sens_person: getE("number", "ai_person_sensitivity"),
      sens_vehicle: getE("number", "ai_vehicle_sensitivity"),
      sens_animal: getE("number", "ai_animal_sensitivity"),
      ptz_up: getButton("ptz_up"),
      ptz_down: getButton("ptz_down"),
      ptz_left: getButton("ptz_left"),
      ptz_right: getButton("ptz_right"),
      ptz_stop: getButton("ptz_stop"),
      ptz_calibrate: getButton("ptz_calibrate"),
      ptz_zoom: getE("number", "zoom"),
      ptz_pan_pos: getE("sensor", "ptz_pan_position"),
      ptz_tilt_pos: getE("sensor", "ptz_tilt_position"),
      guard_go_to: getButton("guard_go_to"),
      guard_set: getButton("guard_set_current_position"),
      guard_return: getE("switch", "guard_return"),
      guard_time: getE("number", "guard_return_time"),
      auto_track: getE("switch", "auto_tracking"),
      auto_track_method: getE("select", "auto_track_method"),
      floodlight: getE("light", "floodlight"),
      floodlight_mode: getE("select", "floodlight_mode"),
      floodlight_event_mode: getE("select", "floodlight_event_mode"),
      siren: getE("siren", "siren"),
      siren_event: getE("switch", "siren_on_event"),
      day_night_mode: getE("select", "day_night_mode"),
      day_night_state: getE("sensor", "day_night_state"),
      ir_lights: getE("switch", "infrared_lights_in_night_mode"),
      record: getE("switch", "record"),
      record_audio: getE("switch", "record_audio"),
      push_notif: getE("switch", "push_notifications"),
      email_event: getE("switch", "email_on_event"),
      ftp_upload: getE("switch", "ftp_upload"),
      volume: getE("number", "volume"),
      status_led: getE("light", "status_led"),
    };
  }

  _getActiveCameraState() {
    if (!this.hass || !this.hass.states || !this._entities) return null;
    const activeEntity =
      this._activeLens === "zoom" &&
      this._entities.camera_zoom &&
      this.hass.states[this._entities.camera_zoom]
        ? this._entities.camera_zoom
        : this._entities.camera_wide;
    return activeEntity && this.hass.states[activeEntity] ? this.hass.states[activeEntity] : null;
  }

  // --- PROGRAMMATIC WEBRTC CARD INITIALIZER ---
  _initWebrtc(camState, wrapper, forceRemount = false) {
    let baseName = camState.entity_id.split(".")[1] || "";
    let cleanBase = baseName
      .replace("_fluent_2", "")
      .replace("_fluent", "")
      .replace("_clear_2", "")
      .replace("_clear", "");

    // Bypass Home Assistant entity interception entirely and query Frigate's go2rtc server directly.
    const frigateCamEntity = this.config.frigate_camera_entity;
    const frigateBase = frigateCamEntity ? frigateCamEntity.split(".")[1] : cleanBase;
    const streamName = `${frigateBase}_sub${this._activeLens === 'zoom' ? '_2' : ''}`;

    const newConfig = {
        type: "custom:webrtc-camera",
        url: streamName,
        mode: "webrtc", // Forces WebRTC, disables MSE fallback lag
        media: this._micEnabled ? "video,audio,microphone" : "video,audio",
        ui: false, // Disables native UI (removes unclickable fullscreen/save/PiP icons)
        background: true, // Prevents sleeping stream during rotation/fullscreen shift
        muted: true
    };

    // Re-mount the DOM element entirely if the mic toggles to prompt for permissions
    if (forceRemount || !this._webrtcElement || JSON.stringify(this._webrtcConfig) !== JSON.stringify(newConfig)) {
        this._webrtcConfig = newConfig;
        
        this._webrtcElement = document.createElement("webrtc-camera");
        this._webrtcElement.className = "full-stream webrtc-stream compact-stream";
        this._webrtcElement.style.width = "100%";
        this._webrtcElement.style.height = "100%";

        if (this._webrtcElement.setConfig) {
            this._webrtcElement.setConfig(newConfig);
            this._webrtcElement.hass = this.hass;
            wrapper.innerHTML = '';
            wrapper.appendChild(this._webrtcElement);
        } else {
            customElements.whenDefined("webrtc-camera").then(() => {
                this._webrtcElement.setConfig(newConfig);
                this._webrtcElement.hass = this.hass;
                wrapper.innerHTML = '';
                wrapper.appendChild(this._webrtcElement);
            });
        }
    } else {
        if (!wrapper.contains(this._webrtcElement)) {
            wrapper.innerHTML = '';
            wrapper.appendChild(this._webrtcElement);
        }
        if (customElements.get("webrtc-camera")) {
            this._webrtcElement.hass = this.hass;
        }
    }
  }

  // --- ACTIONS ---
  _call(domain, service, data) {
    this.hass.callService(domain, service, data);
  }
  _toggleSwitch(entity_id, currentState) {
    if (!entity_id) return;
    const domain = entity_id.split(".")[0];
    this._call(domain, currentState === "on" ? "turn_off" : "turn_on", {
      entity_id,
    });
  }
  _trigger(entity_id) {
    if (entity_id) this._call("button", "press", { entity_id });
  }
  _setNum(entity_id, value) {
    if (entity_id)
      this._call("number", "set_value", { entity_id, value: Number(value) });
  }
  _setSelect(entity_id, option) {
    if (entity_id) this._call("select", "select_option", { entity_id, option });
  }
  _toggleSiren() {
    if (this._entities.siren) {
      const state = this.hass.states[this._entities.siren].state;
      this._call("siren", state === "on" ? "turn_off" : "turn_on", {
        entity_id: this._entities.siren,
      });
    }
  }

  _startPtz(e, entity_id) {
    if (e) e.preventDefault();
    this._ptzActive = true;
    this._wakeFullscreenControls();
    this._trigger(entity_id);
  }

  _stopPtz(e) {
    if (e) e.preventDefault();
    this._ptzActive = false;
    this._wakeFullscreenControls();
    if (this._entities.ptz_stop) {
      this._trigger(this._entities.ptz_stop);
    }
  }

  _showToast(msg) {
    this._toastMsg = msg;
    setTimeout(() => {
      this._toastMsg = null;
    }, 3000);
  }

  _handleSafeAction(btnId, entityId) {
    const currentState = this._btnStates[btnId] || 'idle';
    if (currentState === 'idle') {
      this._btnStates = { ...this._btnStates, [btnId]: 'confirm' };
      setTimeout(() => {
        if (this._btnStates[btnId] === 'confirm') {
          this._btnStates = { ...this._btnStates, [btnId]: 'idle' };
        }
      }, 3000);
    } else if (currentState === 'confirm') {
      this._trigger(entityId);
      this._btnStates = { ...this._btnStates, [btnId]: 'success' };
      setTimeout(() => {
        this._btnStates = { ...this._btnStates, [btnId]: 'idle' };
      }, 2500);
    }
  }

  // --- FRIGATE HISTORY FETCHING ---
  async _fetchEvents() {
    if (!this.hass) return;
    if (this._fetchingEvents) return;
    this._fetchingEvents = true;

    try {
      const frigateCamEntity = this.config.frigate_camera_entity;
      const camName = frigateCamEntity 
          ? frigateCamEntity.split(".")[1] 
          : this.config.camera_entity.split(".")[1].split("_")[0];
      const clientId = this.config.frigate_client_id || "frigate";
      
      const [year, month, day] = this._selectedDate.split("-").map(Number);
      const startOfDay = Math.floor(new Date(year, month - 1, day, 0, 0, 0).getTime() / 1000);
      const endOfDay = Math.floor(new Date(year, month - 1, day, 23, 59, 59).getTime() / 1000);

      const wsData = await this.hass.connection.sendMessagePromise({
        type: "frigate/events/get",
        instance_id: clientId, 
        limit: 2000, 
        after: startOfDay,
        before: endOfDay
      });

      let parsed = wsData;
      
      if (typeof wsData === "string") {
          try { parsed = JSON.parse(wsData); } catch(e) { console.error("JSON Parse failed", e); }
      }

      if (parsed && parsed.events) {
          parsed = parsed.events;
          if (typeof parsed === "string") {
              try { parsed = JSON.parse(parsed); } catch(e) {}
          }
      }

      if (Array.isArray(parsed)) {
          const filteredEvents = parsed.filter(ev => ev.camera === camName);
          filteredEvents.sort((a, b) => b.start_time - a.start_time);
          this._events = filteredEvents;
          this._selectedEvent = filteredEvents.length > 0 ? filteredEvents[0] : null;

          if (filteredEvents.length === 0) {
              this._historyMode = "timeline";
          }
      } else {
          throw new Error("Invalid payload format received from Frigate WS");
      }

    } catch (e) {
      console.error("[Camera Card Debug] WebSocket fetch failed:", e);
      this._events = [];
      this._selectedEvent = null;
      this._historyMode = "timeline";
      this._showToast("Failed to fetch events from Frigate.");
    } finally {
      this._fetchingEvents = false;
    }
  }

  // --- BOTTOM SHEET GESTURES & ANIMATION ---
  _closeSheet() {
    const sheet = this.shadowRoot?.querySelector(".sheet-content");
    const backdrop = this.shadowRoot?.querySelector(".sheet-backdrop");
    
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    }
    this._pseudoFullscreen = false;

    if (sheet && backdrop) {
      sheet.style.transform = "translateY(100%)";
      backdrop.style.opacity = "0";
      setTimeout(() => {
        this._sheetOpen = false;
        this._micEnabled = false;
        sheet.style.transform = "";
        backdrop.style.opacity = "";
      }, 300);
    } else {
      this._sheetOpen = false;
      this._micEnabled = false;
    }
  }

  _handleTouchStart(e) {
    if (e.target.closest("input") || e.target.closest(".timeline-scroll") || e.target.closest(".global-timeline-scroll-area")) {
      this._dragging = false;
      return;
    }
    const contentArea = this.shadowRoot.querySelector(".content-area");
    if (
      contentArea &&
      contentArea.contains(e.target) &&
      contentArea.scrollTop > 0
    ) {
      this._dragging = false;
      return;
    }
    this._startY = e.touches[0].clientY;
    this._dragging = true;
    const sheet = this.shadowRoot.querySelector(".sheet-content");
    if (sheet) sheet.style.transition = "none";
  }

  _handleTouchMove(e) {
    if (!this._dragging) return;
    const deltaY = e.touches[0].clientY - this._startY;
    if (deltaY > 0) {
      const sheet = this.shadowRoot.querySelector(".sheet-content");
      if (sheet) sheet.style.transform = `translateY(${deltaY}px)`;
    }
  }

  _handleTouchEnd(e) {
    if (!this._dragging) return;
    this._dragging = false;
    const sheet = this.shadowRoot.querySelector(".sheet-content");
    if (!sheet) return;

    const deltaY = e.changedTouches[0].clientY - this._startY;
    sheet.style.transition = "transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)";

    if (deltaY > 150) {
      this._closeSheet();
    } else {
      sheet.style.transform = "translateY(0)";
      setTimeout(() => {
        sheet.style.transform = "";
      }, 300);
    }
  }

  // --- RENDERING MAIN ---
  _openPopup() {
    // Attempt to unlock the browser's audio engine using the current synchronous user gesture
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
          const ctx = new AudioContext();
          ctx.resume();
      }
    } catch (e) {
      console.log("[Camera Card] AudioContext unlock failed", e);
    }

    const actionEvent = new Event("hass-action", { bubbles: true, composed: true });
    actionEvent.detail = {
      config: {
        tap_action: {
          action: "fire-dom-event",
          browser_mod: {
            service: "browser_mod.popup",
            data: {
              title: this._entities?.title || "Camera",
              size: "wide",
              adaptive: true,
              content: {
                ...this.config,
                type: "custom:camera-card",
                is_popup: true
              }
            }
          }
        }
      },
      action: "tap"
    };
    this.dispatchEvent(actionEvent);
  }

  render() {
    if (!this.config || !this.config.camera_entity) {
      return html`
        <ha-card style="padding: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px; box-sizing: border-box; text-align: center;">
          <ha-icon icon="mdi:cctv" style="color: var(--primary-color, #03a9f4); --mdc-icon-size: 48px; margin-bottom: 12px;"></ha-icon>
          <div style="font-size: 16px; font-weight: 600; color: var(--primary-text-color);">Passable Camera Card</div>
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-top: 6px;">Please select a primary camera entity to begin.</div>
        </ha-card>
      `;
    }

    if (!this.hass) {
      return html`
        <ha-card style="padding: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px; box-sizing: border-box; text-align: center;">
          <ha-icon icon="mdi:cctv" style="color: var(--primary-color, #03a9f4); --mdc-icon-size: 48px; margin-bottom: 12px;"></ha-icon>
          <div style="font-size: 16px; font-weight: 600; color: var(--primary-text-color);">Passable Camera Card</div>
        </ha-card>
      `;
    }

    if (!this._entities && this.config.camera_entity) {
      this._discoverEntities();
    }

    if (!this._entities) {
      return html`
        <ha-card style="padding: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px; box-sizing: border-box; text-align: center;">
          <div style="font-size: 14px; color: var(--secondary-text-color);">Loading camera configuration...</div>
        </ha-card>
      `;
    }

    const camState = this._getActiveCameraState();
    const hasTelephoto = !!this.hass.states[this._entities.camera_zoom];

    if (this.config.is_popup) {
      return this._renderBottomSheetContent();
    }

    return html`
      <ha-card class="compact-view" @click=${this._openPopup}>
        ${!camState || camState.state === "unavailable" 
          ? html`<div class="offline-placeholder">No Feed Available</div>` 
          : html`<ha-camera-stream class="compact-stream" .hass=${this.hass} .stateObj=${camState} muted></ha-camera-stream>`
        }

        <div class="compact-overlay">
          <div class="compact-header">
            <span class="compact-title">${this._entities.title}</span>
            <div class="compact-badges">
              ${this._renderDetectionBadge("person", Icons.User, "#3b82f6", true)}
              ${this._renderDetectionBadge("vehicle", Icons.Car, "#f59e0b", true)}
              ${this._renderDetectionBadge("animal", Icons.Dog, "#10b981", true)}
              ${this._renderDetectionBadge("motion", Icons.Activity, "#ef4444", true)}
            </div>
          </div>
          <div class="compact-footer">
            <div class="compact-status">
              <span class="status-dot ${!camState || camState.state === "unavailable" ? "offline" : ""}"></span>
              ${!camState || camState.state === "unavailable" ? "Offline" : "Live"}
            </div>
            ${hasTelephoto
              ? html`
                  <button class="lens-toggle" @click=${(e) => { e.stopPropagation(); this._activeLens = this._activeLens === "wide" ? "zoom" : "wide"; }}>
                    <ha-icon icon="${this._activeLens === "wide" ? "mdi:magnify-plus-outline" : "mdi:magnify-minus-outline"}" style="--mdc-icon-size: 16px; margin-right: 4px;"></ha-icon>
                    ${this._activeLens === "wide" ? "Wide" : "Zoom"}
                  </button>
                `
              : ""}
          </div>
        </div>
      </ha-card>
    `;
  }

  _renderBottomSheetContent() {
    const camState = this._getActiveCameraState();
    const isOffline = !camState || camState.state === "unavailable";

    return html`
      <div class="sheet-content ${this._pseudoFullscreen ? 'pseudo-fs-parent' : ''}">
        <div class="toast ${this._toastMsg ? "show" : ""}">
          <ha-icon icon="mdi:check-circle" style="--mdc-icon-size: 18px;"></ha-icon>
          ${this._toastMsg}
        </div>

        <div class="sheet-container">
            <div class="header">
              <div class="header-left">
                <h1 class="title">
                  <ha-icon icon="mdi:cctv" style="margin-right: 8px; color: var(--primary-color)"></ha-icon>
                  ${this._entities.title}
                </h1>
                <p class="subtitle">${isOffline ? "Offline" : "Connected & Streaming"}</p>
              </div>
              <div class="header-right" style="display: flex; gap: 6px;">
                ${this._renderDetectionBadge("person", Icons.User, "var(--primary-color)")}
                ${this._renderDetectionBadge("vehicle", Icons.Car, "var(--warning-color)")}
                ${this._renderDetectionBadge("animal", Icons.Dog, "var(--success-color)")}
                ${this._renderDetectionBadge("motion", Icons.Activity, "#ef4444")}
              </div>
            </div>

            <div class="nav">
              ${this._renderNavBtn("live", Icons.Video, "Live View")}
              ${this._renderNavBtn("history", Icons.History, "History")}
              ${this._renderNavBtn("detection", Icons.Target, "Detection")}
              ${this._renderNavBtn("settings", Icons.Settings, "Device")}
            </div>

            <div class="content-area">
              ${this._activeTab === "live" ? this._renderLiveTab() : ""}
              ${this._activeTab === "history" ? this._renderHistoryTab() : ""}
              ${this._activeTab === "detection" ? this._renderDetectionTab() : ""}
              ${this._activeTab === "settings" ? this._renderSettingsTab() : ""}
            </div>
          </div>
        </div>
    `;
  }

  _renderNavBtn(id, icon, label) {
    const active = this._activeTab === id;
    return html`
      <button class="nav-btn ${active ? "active" : ""}" @click=${() => (this._activeTab = id)}>
        ${icon}
        <span class="nav-btn-text ${active ? "active" : ""}">${label}</span>
      </button>
    `;
  }

  _renderDetectionBadge(type, icon, activeColor, isOverlay = false) {
    const entId = this._entities[type];
    if (!entId || !this.hass.states[entId]) return "";
    const isActive = this.hass.states[entId].state === "on";

    if (isOverlay) {
      if (!isActive) return "";
      return html`<div class="overlay-badge" style="color: ${activeColor};">${icon}</div>`;
    }

    return html`
      <div class="status-chip ${isActive ? "active" : ""}" style="${isActive ? `background: ${activeColor}20; color: ${activeColor}; border-color: ${activeColor};` : ""}">
        ${icon}
      </div>
    `;
  }

  // --- TAB: LIVE VIEW WITH TWO WAY AUDIO & FS OVERLAY ---
  _renderLiveTab() {
    const camState = this._getActiveCameraState();
    const hasTelephoto = !!this.hass.states[this._entities.camera_zoom];

    const trackState = this._entities.auto_track ? this.hass.states[this._entities.auto_track]?.state : "off";
    const lightState = this._entities.floodlight ? this.hass.states[this._entities.floodlight]?.state : "off";
    const sirenState = this._entities.siren ? this.hass.states[this._entities.siren]?.state : "off";

    const zoomEnt = this._entities.ptz_zoom ? this.hass.states[this._entities.ptz_zoom] : null;
    const showZoom = zoomEnt && !this.config.hide_zoom;
    const showPTZ = !this.config.hide_ptz;
    
    const showLeftPill = this._entities.floodlight || this._entities.siren;
    const showRightPill = this._entities.auto_track || this._entities.guard_return;
    const showPill = showLeftPill || showRightPill;
    const showRightColumn = showPTZ || showPill;

    return html`
      <div class="camera-box ${this._pseudoFullscreen ? 'pseudo-fullscreen' : ''}" 
           @mousemove=${(e) => { this._wakeFullscreenControls(e); this._forceUnmute(); }} 
           @touchstart=${(e) => { this._wakeFullscreenControls(e); this._forceUnmute(); }} 
           @click=${(e) => { this._wakeFullscreenControls(e); this._forceUnmute(); }}>
           
        ${camState ? html`<div id="webrtc-wrapper-live" style="width:100%;height:100%;"></div>` : html`<div style="color: var(--secondary-text-color)">No Feed Available</div>`}
        
        ${camState ? html`
            <button
                class="mic-toggle-btn fs-control-fade ${this._micEnabled ? 'mic-active' : ''} ${this._fsControlsVisible ? '' : 'fs-hidden'}"
                @click=${(e) => {
                  e.stopPropagation();
                  this._micEnabled = !this._micEnabled;
                  if (this._micEnabled) this._showToast("Two-Way Audio Started");
                }}
            >
              ${this._micEnabled ? Icons.Mic : Icons.MicOff}
            </button>
        ` : ''}

        ${hasTelephoto
          ? html`
              <button
                class="lens-toggle fs-control-fade ${this._fsControlsVisible ? '' : 'fs-hidden'}"
                @click=${(e) => {
                  e.stopPropagation();
                  this._activeLens = this._activeLens === "wide" ? "zoom" : "wide";
                }}
              >
                <ha-icon icon="${this._activeLens === "wide" ? "mdi:magnify-plus-outline" : "mdi:magnify-minus-outline"}" style="--mdc-icon-size: 16px; margin-right: 4px;"></ha-icon>
                ${this._activeLens === "wide" ? "Wide" : "Zoom"}
              </button>
            `
          : ""}
          
        ${(showZoom || showPTZ) ? html`
            <div class="landscape-ptz-overlay fs-control-fade ${this._fsControlsVisible ? '' : 'fs-hidden'}">
              ${showPTZ ? html`
                <div class="fs-dpad-container">
                  <button class="fs-dpad-btn fs-dpad-up" @pointerdown=${(e) => this._startPtz(e, this._entities.ptz_up)} @pointerup=${(e) => this._stopPtz(e)} @pointerleave=${(e) => this._stopPtz(e)} @pointercancel=${(e) => this._stopPtz(e)}>${Icons.ChevronUp}</button>
                  <button class="fs-dpad-btn fs-dpad-left" @pointerdown=${(e) => this._startPtz(e, this._entities.ptz_left)} @pointerup=${(e) => this._stopPtz(e)} @pointerleave=${(e) => this._stopPtz(e)} @pointercancel=${(e) => this._stopPtz(e)}>${Icons.ChevronLeft}</button>
                  <button class="fs-dpad-btn fs-dpad-right" @pointerdown=${(e) => this._startPtz(e, this._entities.ptz_right)} @pointerup=${(e) => this._stopPtz(e)} @pointerleave=${(e) => this._stopPtz(e)} @pointercancel=${(e) => this._stopPtz(e)}>${Icons.ChevronRight}</button>
                  <button class="fs-dpad-btn fs-dpad-down" @pointerdown=${(e) => this._startPtz(e, this._entities.ptz_down)} @pointerup=${(e) => this._stopPtz(e)} @pointerleave=${(e) => this._stopPtz(e)} @pointercancel=${(e) => this._stopPtz(e)}>${Icons.ChevronDown}</button>
                </div>
              ` : ''}
              
              ${showZoom ? html`
                <div class="fs-zoom-panel">
                  <span style="font-weight: bold;">+</span>
                  <input
                    type="range"
                    class="vertical-slider"
                    min="${zoomEnt.attributes.min || 0}"
                    max="${zoomEnt.attributes.max || 100}"
                    step="${zoomEnt.attributes.step || 1}"
                    .value=${this._sliderVals["zoom"] || zoomEnt.state}
                    @touchstart=${(e) => e.stopPropagation()}
                    @touchmove=${(e) => e.stopPropagation()}
                    @pointerdown=${() => { this._ptzActive = true; this._wakeFullscreenControls(); }}
                    @pointerup=${() => { this._ptzActive = false; this._wakeFullscreenControls(); }}
                    @pointercancel=${() => { this._ptzActive = false; this._wakeFullscreenControls(); }}
                    @input=${(e) => { this._sliderVals["zoom"] = e.target.value; this._wakeFullscreenControls(); this.requestUpdate(); }}
                    @change=${() => this._setNum(this._entities.ptz_zoom, this._sliderVals["zoom"])}
                  />
                  <span style="font-weight: bold;">-</span>
                </div>
              ` : ''}
            </div>
        ` : ''}
      </div>

      ${showZoom || showRightColumn
        ? html`
            <div class="ptz-layout">
              ${showZoom
                ? html`
                    <div class="zoom-panel">
                      <div style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; height: 100%;">
                        <span style="color: var(--md-sys-color-on-surface, var(--primary-text-color)); font-weight: bold;">+</span>
                        <input
                          type="range"
                          class="vertical-slider"
                          min="${zoomEnt.attributes.min || 0}"
                          max="${zoomEnt.attributes.max || 100}"
                          step="${zoomEnt.attributes.step || 1}"
                          .value=${this._sliderVals["zoom"] || zoomEnt.state}
                          @touchstart=${(e) => e.stopPropagation()}
                          @touchmove=${(e) => e.stopPropagation()}
                          @input=${(e) => { this._sliderVals["zoom"] = e.target.value; this.requestUpdate(); }}
                          @change=${() => this._setNum(this._entities.ptz_zoom, this._sliderVals["zoom"])}
                        />
                        <span style="color: var(--md-sys-color-on-surface, var(--primary-text-color)); font-weight: bold;">-</span>
                      </div>
                    </div>
                  `
                : ""}
              
              ${showPTZ
                ? html`
                    <div class="dpad-container">
                      <button class="dpad-btn dpad-up" @pointerdown=${(e) => this._startPtz(e, this._entities.ptz_up)} @pointerup=${(e) => this._stopPtz(e)} @pointerleave=${(e) => this._stopPtz(e)} @pointercancel=${(e) => this._stopPtz(e)}>${Icons.ChevronUp}</button>
                      <button class="dpad-btn dpad-left" @pointerdown=${(e) => this._startPtz(e, this._entities.ptz_left)} @pointerup=${(e) => this._stopPtz(e)} @pointerleave=${(e) => this._stopPtz(e)} @pointercancel=${(e) => this._stopPtz(e)}>${Icons.ChevronLeft}</button>
                      <button class="dpad-btn dpad-right" @pointerdown=${(e) => this._startPtz(e, this._entities.ptz_right)} @pointerup=${(e) => this._stopPtz(e)} @pointerleave=${(e) => this._stopPtz(e)} @pointercancel=${(e) => this._stopPtz(e)}>${Icons.ChevronRight}</button>
                      <button class="dpad-btn dpad-down" @pointerdown=${(e) => this._startPtz(e, this._entities.ptz_down)} @pointerup=${(e) => this._stopPtz(e)} @pointerleave=${(e) => this._stopPtz(e)} @pointercancel=${(e) => this._stopPtz(e)}>${Icons.ChevronDown}</button>
                    </div>
                  `
                : ""}

              ${showRightColumn
                ? html`
                    <div class="ptz-side">
                      ${showPill
                        ? html`
                            <div class="control-pill">
                              ${this._entities.floodlight
                                ? html`<button class="control-btn ${lightState === "on" ? "active-warning" : ""}" @click=${() => this._toggleSwitch(this._entities.floodlight, lightState)} title="Toggle Floodlight">${Icons.Lightbulb}</button>`
                                : ""}
                              ${this._entities.siren
                                ? html`<button class="control-btn ${sirenState === "on" ? "active-danger" : ""}" @click=${() => this._toggleSiren()} title="Toggle Siren">${Icons.Siren}</button>`
                                : ""}
                              ${showLeftPill && showRightPill ? html`<div class="pill-divider"></div>` : ""}
                              ${this._entities.auto_track
                                ? html`<button class="control-btn ${trackState === "on" ? "active" : ""}" @click=${() => this._toggleSwitch(this._entities.auto_track, trackState)} title="Auto Tracking">${Icons.Target}</button>`
                                : ""}
                              ${this._entities.guard_return
                                ? html`<button class="control-btn ${this.hass.states[this._entities.guard_return]?.state === "on" ? "active" : ""}" @click=${() => this._toggleSwitch(this._entities.guard_return, this.hass.states[this._entities.guard_return]?.state)} title="Guard Return"><ha-icon icon="mdi:shield-home-outline" style="--mdc-icon-size: 20px;"></ha-icon></button>`
                                : ""}
                            </div>
                          `
                        : ""}

                      ${showPTZ
                        ? html`
                            <button class="action-btn" @click=${() => this._trigger(this._entities.guard_go_to)}>
                              <ha-icon icon="mdi:target" style="margin-right: 6px;"></ha-icon> Go to Guard
                            </button>
                            <button class="action-btn secondary ${this._btnStates['guard_set'] === 'confirm' ? 'btn-confirm' : this._btnStates['guard_set'] === 'success' ? 'btn-success' : ''}" @click=${() => this._handleSafeAction('guard_set', this._entities.guard_set)}>
                              ${this._btnStates['guard_set'] === 'confirm' ? 'Tap to Confirm' : this._btnStates['guard_set'] === 'success' ? 'Guard Point Set!' : 'Set Guard Point'}
                            </button>
                          `
                        : ""}
                    </div>
                  `
                : ""}
            </div>
          `
        : ""}
    `;
  }

  // --- TAB: HISTORY ---
  _renderHistoryTab() {
    if (!this._events) {
      return html`<div style="text-align:center; padding: 20px; color: var(--secondary-text-color);">Loading event history...</div>`;
    }

    const getMediaUrl = (eventId, type) => {
        return `/api/frigate/notifications/${eventId}/${type}`;
    };

    const hasClip = this._selectedEvent && this._selectedEvent.has_clip;
    
    return html`
      <div class="history-player camera-box ${this._pseudoFullscreen ? 'pseudo-fullscreen' : ''}">
        ${this._historyMode === "timeline" ? html`
            <!-- IMPORTANT: REMOVED AUTOPLAY TO PREVENT CRASHES -->
            <video
              id="history-video-timeline"
              controls
              muted
              playsinline
              class="full-stream"
              @timeupdate=${(e) => {
                if (this._loadedVodStart) {
                  if (!this._isSeeking && !this._isPointerDown && !this._isUserScrolling) {
                      this._timelineCursorTime = this._loadedVodStart + e.target.currentTime;
                      this._syncTimelineScroll();
                  }
                }
              }}
            ></video>
        ` : (this._selectedEvent 
          ? hasClip 
            ? html`
                <video
                  id="history-video-event"
                  controls
                  autoplay
                  playsinline
                  src="${getMediaUrl(this._selectedEvent.id, "clip.mp4")}"
                  poster="${getMediaUrl(this._selectedEvent.id, "thumbnail.jpg")}"
                  class="full-stream"
                  @timeupdate=${(e) => {
                    this._videoCurrentTime = e.target.currentTime;
                    if (this._selectedEvent && !this._isScrubbingTimeline) {
                      this._timelineCursorTime = this._selectedEvent.start_time + this._videoCurrentTime;
                    }
                  }}
                  @loadedmetadata=${(e) => {
                    this._videoDuration = e.target.duration;
                    if (this._pendingSeek !== null && this._pendingSeek !== undefined) {
                      e.target.currentTime = this._pendingSeek;
                      this._pendingSeek = null;
                    }
                  }}
                  @play=${() => this._isPlaying = true}
                  @pause=${() => this._isPlaying = false}
                ></video>
              `
            : html`<img src="${getMediaUrl(this._selectedEvent.id, "snapshot.jpg")}" class="full-stream" style="object-fit: contain;" onerror="this.src='${getMediaUrl(this._selectedEvent.id, "thumbnail.jpg")}'" />`
          : html`<div class="offline-placeholder">No events found for this date</div>`)}
      </div>

      <div class="card-panel" style="padding: 16px 0; border: none; background: transparent; box-shadow: none;">
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0 16px; margin-bottom: 12px; gap: 8px;">
          
          <div class="history-toggle-wrap" style="flex: 1; max-width: 250px;">
            <button class="history-toggle-btn ${this._historyMode === 'events' ? 'active' : ''}" @click=${() => this._historyMode = 'events'}>Events</button>
            <button class="history-toggle-btn ${this._historyMode === 'timeline' ? 'active' : ''}" @click=${() => this._historyMode = 'timeline'}>Timeline</button>
          </div>
          
          <div class="date-picker-wrap" style="flex-shrink: 0;">
            ${Icons.Calendar}
            <input type="date" class="history-date-picker" .value=${this._selectedDate} @change=${(e) => { this._selectedDate = e.target.value; this._historyMode = 'events'; }}/>
          </div>
        </div>
        
        <div class="timeline-wrapper">
          ${this._historyMode === "events" ? this._renderEventsScroller(getMediaUrl) : this._renderTimelineScrubber()}
        </div>
        
        ${this._historyMode === "timeline" ? html`
        <div class="timeline-controls" style="display: flex; justify-content: center; gap: 16px; margin: 12px 16px;">
            <button class="action-btn" style="flex: 1; justify-content: center;" @click=${() => this._skipTimeline(-10)}>
                <ha-icon icon="mdi:rewind-10" style="margin-right: 4px;"></ha-icon> -10s
            </button>
            <button class="action-btn" style="flex: 1; justify-content: center;" @click=${() => this._skipTimeline(10)}>
                +10s <ha-icon icon="mdi:fast-forward-10" style="margin-left: 4px;"></ha-icon>
            </button>
        </div>
        <div class="timeline-legend">
          <div class="legend-item"><span class="legend-dot" style="background: #3b82f6;"></span>Person</div>
          <div class="legend-item"><span class="legend-dot" style="background: #f59e0b;"></span>Vehicle</div>
          <div class="legend-item"><span class="legend-dot" style="background: #10b981;"></span>Animal</div>
          <div class="legend-item"><span class="legend-dot" style="background: #ef4444;"></span>Motion</div>
        </div>
        ` : ''}
      </div>
    `;
  }

  // --- Scroller Views for History ---
  _skipTimeline(seconds) {
    if (!this._timelineCursorTime) return;
    this._timelineCursorTime += seconds;
    this._syncTimelineScroll();
    
    // Also seek the video natively if possible to avoid full HLS reload if within buffer
    const videoEl = this.shadowRoot?.querySelector('#history-video-timeline');
    if (videoEl && this._loadedVodStart) {
        const newTime = this._timelineCursorTime - this._loadedVodStart;
        if (newTime >= 0 && newTime <= videoEl.duration) {
             videoEl.currentTime = newTime;
             return;
        }
    }
    
    this._handleTimelineSeek(this._timelineCursorTime);
  }

  _onTimelineScroll(e) {
    if (this._programmaticScroll) return;
    this._isSeeking = true;
    if (this._seekClearTimeout) clearTimeout(this._seekClearTimeout);

    const scrollLeft = e.currentTarget.scrollLeft;
    const [year, month, day] = this._selectedDate.split("-").map(Number);
    const startOfDay = Math.floor(new Date(year, month - 1, day, 0, 0, 0).getTime() / 1000);
    
    const cursorTime = startOfDay + (scrollLeft * 60);
    this._timelineCursorTime = cursorTime;

    if (this._scrollTimeout) clearTimeout(this._scrollTimeout);
    this._scrollTimeout = setTimeout(() => {
        this._handleTimelineSeek(cursorTime);
    }, 300);
    
    this._seekClearTimeout = setTimeout(() => {
        this._isSeeking = false;
    }, 1500); 
  }

  _syncTimelineScroll() {
    const scrollArea = this.shadowRoot?.querySelector('#timeline-scroll-area');
    if (!scrollArea) return;
    if (this._isPointerDown || this._isUserScrolling || this._isSeeking) return;

    const [year, month, day] = this._selectedDate.split("-").map(Number);
    const startOfDay = Math.floor(new Date(year, month - 1, day, 0, 0, 0).getTime() / 1000);
    const targetScroll = (this._timelineCursorTime - startOfDay) / 60;

    this._programmaticScroll = true;
    scrollArea.scrollLeft = targetScroll;

    if (this._progScrollTimeout) clearTimeout(this._progScrollTimeout);
    this._progScrollTimeout = setTimeout(() => {
        this._programmaticScroll = false;
    }, 50);
  }

  _handleTimelineSeek(cursorTime) {
    const releaseSeekLock = () => {
        if (this._seekClearTimeout) clearTimeout(this._seekClearTimeout);
        this._seekClearTimeout = setTimeout(() => this._isSeeking = false, 500);
    };

    // Always fetch a new VOD playlist at the exact cursor time to prevent HLS gap drift
    this._setupTimelineVideo(cursorTime).finally(() => releaseSeekLock());
  }

  _renderEventsScroller(getMediaUrl) {
    return html`
      <div class="timeline-scroll" style="touch-action: pan-x;"
             @pointerdown=${(e) => { e.stopPropagation(); this._isEventsPointerDown = true; this._eventsDragStartX = e.clientX; this._eventsDragStartScroll = e.currentTarget.scrollLeft; if(e.pointerType === 'mouse') e.currentTarget.setPointerCapture(e.pointerId); }}
             @pointermove=${(e) => { e.stopPropagation(); if(this._isEventsPointerDown && e.pointerType === 'mouse') { e.currentTarget.scrollLeft = this._eventsDragStartScroll - (e.clientX - this._eventsDragStartX); } }}
             @pointerup=${(e) => { e.stopPropagation(); this._isEventsPointerDown = false; if(e.pointerType === 'mouse') e.currentTarget.releasePointerCapture(e.pointerId); }}
             @pointercancel=${(e) => { e.stopPropagation(); this._isEventsPointerDown = false; }}
             @wheel=${(e) => { e.stopPropagation(); }}
             @touchstart=${(e) => { e.stopPropagation(); }}
             @touchmove=${(e) => { e.stopPropagation(); }}
             @touchend=${(e) => { e.stopPropagation(); }}
      >
        ${this._events.length === 0 ? html`<div style="padding: 0 16px; color: var(--secondary-text-color); font-size: 13px;">No events recorded today.</div>` : ''}
        ${this._events.map(ev => {
          const d = new Date(ev.start_time * 1000);
          const timeStr = d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
          const icon = ev.label === 'person' ? Icons.User : ev.label === 'car' ? Icons.Car : ev.label === 'dog' ? Icons.Dog : Icons.Activity;
          const isActive = this._selectedEvent?.id === ev.id;

          return html`
            <div class="timeline-node ${isActive ? 'active' : ''}" @click=${() => { this._selectedEvent = ev; }}>
              <div class="timeline-time">${timeStr}</div>
              <div class="timeline-dot-wrapper"><div class="timeline-dot"></div></div>
              <div class="timeline-thumb">
                <img src="${getMediaUrl(ev.id, "thumbnail.jpg")}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'56\\'><rect width=\\'100\\' height=\\'56\\' fill=\\'%231e293b\\'/></svg>'"/>
                <div class="timeline-badge">${icon}</div>
              </div>
            </div>
          `;
        })}
      </div>
    `;
  }

  _renderTimelineScrubber() {
    if (!this._events) return html``;

    const [year, month, day] = this._selectedDate.split("-").map(Number);
    const startOfDay = Math.floor(new Date(year, month - 1, day, 0, 0, 0).getTime() / 1000);
    const now = Math.floor(Date.now() / 1000);

    let fallbackTime = startOfDay + 43200;
    if (fallbackTime > now) fallbackTime = now - 60;

    this.updateComplete.then(() => {
        if (!this._programmaticScroll && !this._isPointerDown && !this._isUserScrolling) {
            this._syncTimelineScroll();
        }
    });

    const displayCursorTime = this._timelineCursorTime || (this._selectedEvent ? this._selectedEvent.start_time : fallbackTime);

    return html`
      <div class="global-timeline-viewport">
        <div class="fixed-playhead">
          <div class="playhead-tooltip">${new Date(displayCursorTime * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}</div>
        </div>
        <div class="global-timeline-scroll-area" id="timeline-scroll-area" style="touch-action: pan-x;"
             @scroll=${this._onTimelineScroll}
             @pointerdown=${(e) => { e.stopPropagation(); this._isPointerDown = true; this._dragStartX = e.clientX; this._dragStartScroll = e.currentTarget.scrollLeft; if(e.pointerType === 'mouse') e.currentTarget.setPointerCapture(e.pointerId); }}
             @pointermove=${(e) => { e.stopPropagation(); if(this._isPointerDown && e.pointerType === 'mouse') { e.currentTarget.scrollLeft = this._dragStartScroll - (e.clientX - this._dragStartX); } }}
             @pointerup=${(e) => { e.stopPropagation(); this._isPointerDown = false; if(e.pointerType === 'mouse') e.currentTarget.releasePointerCapture(e.pointerId); }}
             @pointercancel=${(e) => { e.stopPropagation(); this._isPointerDown = false; }}
             @wheel=${(e) => { e.stopPropagation(); this._isUserScrolling = true; clearTimeout(this._wheelTimeout); this._wheelTimeout = setTimeout(() => this._isUserScrolling=false, 200); }}
             @touchstart=${(e) => { e.stopPropagation(); this._isUserScrolling = true; }}
             @touchmove=${(e) => { e.stopPropagation(); }}
             @touchend=${(e) => { e.stopPropagation(); setTimeout(() => this._isUserScrolling = false, 500); }}
        >
            <div class="global-timeline-padding">
                <div class="global-timeline-track">
                   ${Array.from({length: 25}).map((_, i) => html`
                      <div class="time-marker-tick" style="left: ${(i / 24) * 100}%"></div>
                      <div class="time-marker" style="left: ${(i / 24) * 100}%">
                        ${i === 0 || i === 24 ? '12am' : i === 12 ? '12pm' : i > 12 ? `${i-12}pm` : `${i}am`}
                      </div>
                   `)}
                   ${this._events.map(ev => {
                       const left = Math.max(0, ((ev.start_time - startOfDay) / 86400) * 100);
                       const width = Math.max(0.2, (((ev.end_time || ev.start_time + 10) - ev.start_time) / 86400) * 100);
                       const color = ev.label === 'person' ? '#3b82f6' : ev.label === 'car' ? '#f59e0b' : ev.label === 'dog' ? '#10b981' : '#ef4444';
                       return html`<div class="timeline-event-block" style="left: ${left}%; width: ${width}%; background: ${color};"></div>`;
                   })}
                </div>
            </div>
        </div>
      </div>
    `;
  }

  async _setupTimelineVideo(requestedTime = null) {
    await this.updateComplete;
    const videoEl = this.shadowRoot.querySelector('#history-video-timeline');
    if (!videoEl) return;

    const frigateCamEntity = this.config.frigate_camera_entity;
    const camName = frigateCamEntity 
        ? frigateCamEntity.split(".")[1] 
        : this.config.camera_entity.split(".")[1].split("_")[0];
    const clientId = this.config.frigate_client_id || "frigate";

    const [year, month, day] = this._selectedDate.split("-").map(Number);
    const startOfDay = Math.floor(new Date(year, month - 1, day, 0, 0, 0).getTime() / 1000);
    const now = Math.floor(Date.now() / 1000);

    if (startOfDay > now) {
        this._showToast("Cannot load future dates.");
        return;
    }
    
    let targetTime = requestedTime || this._timelineCursorTime || startOfDay + 43200;

    if (targetTime > now) {
        targetTime = now - 60; // Offset by 1 minute to ensure recording chunk exists
    }

    // Start window exactly 5 seconds before target time to prevent HLS gap collapse drift
    let startWindow = Math.floor(targetTime - 5);
    let endWindow = Math.floor(targetTime + 3600);

    if (endWindow > now) endWindow = now;
    if (startWindow > now) {
        this._showToast("Cannot load future recordings.");
        return;
    }

    this._loadedVodStart = startWindow;
    this._loadedVodEnd = endWindow;
    const rawVodUrl = `/api/frigate/${clientId}/vod/${camName}/start/${startWindow}/end/${endWindow}/index.m3u8`;

    let vodUrl = rawVodUrl;
    try {
        const signRes = await this.hass.connection.sendMessagePromise({
            type: "auth/sign_path", path: rawVodUrl, expires: 86400 // Extended to 24 hours
        });
        vodUrl = signRes.path;
    } catch (e) {
        try {
            const signRes2 = await this.hass.connection.sendMessagePromise({
                type: "frigate/sign_url", path: rawVodUrl, expires: 86400 // Extended to 24 hours
            });
            if (signRes2 && signRes2.path) vodUrl = signRes2.path;
        } catch (e2) {}
    }

    const offset = Math.max(0, targetTime - startWindow);

    if (this._hls) {
        this._hls.destroy();
        this._hls = null;
    }

    if (videoEl.canPlayType('application/vnd.apple.mpegurl')) {
        videoEl.src = vodUrl;
        videoEl.addEventListener('loadedmetadata', () => {
            videoEl.currentTime = offset;
            videoEl.play().catch(e => {
                if(e.name !== 'NotSupportedError') console.warn(e);
            });
        }, { once: true });
        videoEl.addEventListener('error', (e) => {
           this._showToast("Playback gap: Missing video segment.");
        });
    } else {
        try {
            const { default: Hls } = await import("https://cdn.jsdelivr.net/npm/hls.js@1.4.12/dist/hls.mjs");
            if (Hls.isSupported()) {
                this._hls = new Hls({ 
                    startPosition: offset,
                    xhrSetup: (xhr, url) => {
                        if (this.hass?.auth?.data?.access_token) {
                            xhr.setRequestHeader('Authorization', `Bearer ${this.hass.auth.data.access_token}`);
                        }
                    }
                });
                this._hls.loadSource(vodUrl); 
                this._hls.attachMedia(videoEl);
                this._hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    videoEl.play().catch(e => {
                        if(e.name !== 'NotSupportedError') console.warn(e);
                    });
                });
                
                // IMPORTANT: Automatically recover from 404 missing segments instead of crashing
                this._hls.on(Hls.Events.ERROR, (event, data) => {
                    if (data.fatal) {
                        switch (data.type) {
                            case Hls.ErrorTypes.NETWORK_ERROR:
                                console.warn("HLS Network Error (likely a gap). Recovering...");
                                this._hls.startLoad();
                                break;
                            case Hls.ErrorTypes.MEDIA_ERROR:
                                console.warn("HLS Media Error. Recovering...");
                                this._hls.recoverMediaError();
                                break;
                            default:
                                this._hls.destroy();
                                this._showToast("Timeline gap: Playback stopped.");
                                break;
                        }
                    }
                });
            }
        } catch (err) {
            this._showToast("Failed to load timeline player.");
        }
    }
  }

  // --- TAB: DETECTION ---
  _renderDetectionTab() {
    const hasFrigate = this._entities.frigate_detect || this._entities.frigate_recordings || this._entities.frigate_snapshots;

    return html`
      ${hasFrigate ? html`
        <div class="card-panel" style="margin-bottom: 16px;">
          <h4 class="panel-header">Frigate Configuration</h4>
          ${this._renderToggleRow(this._entities.frigate_detect, "Detect")}
          ${this._renderToggleRow(this._entities.frigate_motion, "Motion")}
          ${this._renderToggleRow(this._entities.frigate_recordings, "Recordings")}
          ${this._renderToggleRow(this._entities.frigate_snapshots, "Snapshots")}
          ${this._renderToggleRow(this._entities.frigate_review_alerts, "Review Alerts")}
          ${this._renderToggleRow(this._entities.frigate_review_detections, "Review Detections")}
        </div>
      ` : ""}

      <div class="card-panel">
        <h4 class="panel-header">AI Smart Detection</h4>
        ${this._renderSliderRow(this._entities.sens_person, "Person Sensitivity", Icons.User)}
        ${this._renderSliderRow(this._entities.sens_vehicle, "Vehicle Sensitivity", Icons.Car)}
        ${this._renderSliderRow(this._entities.sens_animal, "Animal Sensitivity", Icons.Dog)}
        ${this._renderSliderRow(this._entities.sens_motion, "Standard Motion Sensitivity", Icons.Activity)}

        <div class="spacer"></div>
        <h4 class="panel-header">Tracking & Reactions</h4>
        ${this._renderSelectRow(this._entities.auto_track_method, "Auto Track Method")}
        ${this._renderToggleRow(this._entities.siren_event, "Siren on Event")}
        ${this._renderToggleRow(this._entities.email_event, "Email on Event")}
        ${this._renderToggleRow(this._entities.push_notif, "Push Notifications")}
      </div>
      ${this._renderPopup(this._entities.auto_track_method, "Auto Track Method")}
    `;
  }

  // --- TAB: SETTINGS ---
  _renderSettingsTab() {
    return html`
      <div class="card-panel" style="margin-bottom: 16px;">
        <h4 class="panel-header">Illumination & Vision</h4>
        ${this._renderSelectRow(this._entities.day_night_mode, "Day / Night Mode")}
        ${this._renderSelectRow(this._entities.floodlight_mode, "Floodlight Mode")}
        ${this._renderSelectRow(this._entities.floodlight_event_mode, "Floodlight Event Mode")}
        ${this._renderToggleRow(this._entities.ir_lights, "Infrared Lights in Night Mode")}
      </div>

      <div class="card-panel">
        <h4 class="panel-header">System & Recording</h4>
        ${this._renderToggleRow(this._entities.record, "Continuous Recording")}
        ${this._renderToggleRow(this._entities.record_audio, "Record Audio")}
        ${this._renderToggleRow(this._entities.ftp_upload, "FTP Upload")}
        ${this._renderToggleRow(this._entities.status_led, "Status LED")}
        ${this._renderSliderRow(this._entities.volume, "Speaker Volume")}
        ${this._renderSliderRow(this._entities.guard_time, "Guard Return Time")}
        
        <div style="margin-top: 16px;">
          <button
            class="action-btn secondary ${this._btnStates['ptz_cal'] === 'confirm' ? 'btn-confirm' : this._btnStates['ptz_cal'] === 'success' ? 'btn-success' : ''}"
            style="width: 100%;"
            @click=${() => this._handleSafeAction('ptz_cal', this._entities.ptz_calibrate)}
          >
            ${this._btnStates['ptz_cal'] === 'confirm' ? 'Confirm Calibration?' : this._btnStates['ptz_cal'] === 'success' ? 'Calibration Started!' : 'Calibrate PTZ'}
          </button>
        </div>
      </div>

      ${this._renderPopup(this._entities.day_night_mode, "Day / Night Mode")}
      ${this._renderPopup(this._entities.floodlight_mode, "Floodlight Mode")}
      ${this._renderPopup(this._entities.floodlight_event_mode, "Floodlight Event Mode")}
    `;
  }

  // --- UI COMPONENT HELPERS ---
  _renderToggleRow(entity_id, label) {
    if (!entity_id) return "";
    const ent = this.hass.states[entity_id];
    if (!ent) return "";
    const isActive = ent.state === "on";

    return html`
      <div class="diag-row">
        <span style="font-size: 14px; font-weight: 500;">${label}</span>
        <button class="toggle-btn ${isActive ? "active" : ""}" @click=${() => this._toggleSwitch(entity_id, ent.state)}>
          <div class="toggle-thumb ${isActive ? "active" : ""}"></div>
        </button>
      </div>
    `;
  }

  _renderSliderRow(entity_id, label, iconHtml = null) {
    if (!entity_id) return "";
    const ent = this.hass.states[entity_id];
    if (!ent) return "";

    const min = ent.attributes?.min || 0;
    const max = ent.attributes?.max || 100;
    const step = ent.attributes?.step || 1;
    const currentVal = this._sliderVals[entity_id] !== undefined ? this._sliderVals[entity_id] : ent.state;

    return html`
      <div class="slider-row">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span style="font-size: 14px; font-weight: 500; display:flex; align-items:center; gap:8px;">${iconHtml || ""} ${label}</span>
          <span style="font-size: 14px; font-weight: 600; color: var(--primary-color)">${currentVal}</span>
        </div>
        <input
          type="range"
          min="${min}"
          max="${max}"
          step="${step}"
          .value=${currentVal}
          @input=${(e) => { this._sliderVals[entity_id] = e.target.value; this.requestUpdate(); }}
          @change=${() => this._setNum(entity_id, this._sliderVals[entity_id])}
          style="width: 100%; accent-color: var(--primary-color);"
        />
      </div>
    `;
  }

  _renderSelectRow(entity_id, label) {
    if (!entity_id) return "";
    const ent = this.hass.states[entity_id];
    if (!ent) return "";

    return html`
      <div class="diag-row" style="cursor: pointer;" @click=${() => (this._activePopup = entity_id)}>
        <span style="font-size: 14px; font-weight: 500;">${label}</span>
        <div style="display: flex; align-items: center; gap: 8px; color: var(--secondary-text-color);">
          <span style="font-size: 14px; font-weight: 600; text-transform: capitalize;">${formatSettingName(ent.state)}</span>
          ${Icons.ChevronRight}
        </div>
      </div>
    `;
  }

  _renderPopup(entity_id, title) {
    if (this._activePopup !== entity_id) return "";
    const ent = this.hass.states[entity_id];
    if (!ent || !ent.attributes.options) return "";

    return html`
      <div class="modal-overlay" @click=${() => (this._activePopup = null)}>
        <div class="modal-content" @click=${(e) => e.stopPropagation()}>
          <div class="modal-header">
            <h3>${title}</h3>
            <button @click=${() => (this._activePopup = null)}>${Icons.X_Lg}</button>
          </div>
          <div class="modal-body">
            ${ent.attributes.options.map((opt) => html`
                <button class="modal-opt-btn ${ent.state === opt ? "active" : ""}" @click=${() => { this._setSelect(entity_id, opt); this._activePopup = null; }}>
                  <span>${formatSettingName(opt)}</span>
                  ${ent.state === opt ? Icons.Check : ""}
                </button>
              `)}
          </div>
        </div>
      </div>
    `;
  }

  // --- CSS STYLES ---
  static get styles() {
    return css`
      :host {
        display: block;
        font-family: var(--paper-font-body1_-_font-family, Roboto, "Segoe UI", sans-serif);
      }

      /* WEBRTC CUSTOMIZATION & OVERLAYS */
      .webrtc-stream {
        width: 100%;
        height: 100%;
        --webrtc-camera-padding: 0px; 
        pointer-events: none; /* Prevents WebRTC from intercepting clicks so auto-unmute works */
      }
      webrtc-camera::part(video) {
        object-fit: cover;
      }
      
      .lens-toggle {
        position: absolute;
        bottom: 12px;
        right: 12px;
        pointer-events: auto; 
        background: rgba(0, 0, 0, 0.6);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        padding: 6px 12px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        backdrop-filter: blur(4px);
        transition: background 0.2s;
        z-index: 3;
      }
      .lens-toggle:active {
        background: rgba(0, 0, 0, 0.8);
      }
      
      .mic-toggle-btn {
        position: absolute;
        bottom: 52px;
        right: 12px;
        background: rgba(0, 0, 0, 0.6);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(4px);
        cursor: pointer;
        z-index: 5;
        transition: all 0.3s ease;
        pointer-events: auto; /* Ensures it works over the video */
      }
      .mic-toggle-btn:active {
        transform: scale(0.92);
      }
      .mic-toggle-btn.mic-active {
        background: rgba(239, 68, 68, 0.9);
        border-color: #ef4444;
        box-shadow: 0 0 12px rgba(239, 68, 68, 0.6);
        animation: pulse-mic 2s infinite;
      }

      @keyframes pulse-mic {
        0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.6); }
        70% { box-shadow: 0 0 0 8px rgba(239, 68, 68, 0); }
        100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
      }

      /* FULLSCREEN VIDEO SUPPORT & LANDSCAPE PTZ OVERLAY */
      .camera-box:fullscreen, .camera-box:-webkit-full-screen, .camera-box.pseudo-fullscreen,
      .history-player:fullscreen, .history-player:-webkit-full-screen, .history-player.pseudo-fullscreen,
      ha-camera-stream:fullscreen, ha-camera-stream:-webkit-full-screen,
      webrtc-camera:fullscreen, webrtc-camera:-webkit-full-screen,
      video:fullscreen, video:-webkit-full-screen {
        position: fixed !important;
        inset: 0 !important;
        z-index: 9999 !important;
        width: 100vw !important;
        height: 100vh !important;
        max-width: 100vw !important;
        max-height: 100vh !important;
        border-radius: 0 !important;
        aspect-ratio: unset !important;
        background: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 !important;
        padding: 0 !important;
      }

      .camera-box:fullscreen ha-camera-stream, .camera-box:-webkit-full-screen ha-camera-stream,
      .camera-box:fullscreen webrtc-camera, .camera-box:-webkit-full-screen webrtc-camera,
      .camera-box.pseudo-fullscreen ha-camera-stream, .camera-box.pseudo-fullscreen webrtc-camera {
        width: 100vw !important;
        height: 100vh !important;
        position: absolute !important;
        inset: 0 !important;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .camera-box:fullscreen .full-stream, .camera-box:-webkit-full-screen .full-stream,
      .camera-box.pseudo-fullscreen .full-stream,
      .history-player:fullscreen .full-stream, .history-player:-webkit-full-screen .full-stream,
      .history-player.pseudo-fullscreen .full-stream {
        object-fit: contain !important;
        width: 100% !important;
        height: 100% !important;
        max-width: 100%;
        max-height: 100%;
      }

      /* Fade Out Mechanics for FS Controls (PTZ, Lens, & Mic) */
      .fs-control-fade {
        transition: opacity 0.4s ease;
      }
      .camera-box:fullscreen .fs-control-fade, 
      .camera-box:-webkit-full-screen .fs-control-fade,
      .camera-box.pseudo-fullscreen .fs-control-fade {
        opacity: 0.45;
      }
      .camera-box:fullscreen .fs-control-fade.fs-hidden, 
      .camera-box:-webkit-full-screen .fs-control-fade.fs-hidden,
      .camera-box.pseudo-fullscreen .fs-control-fade.fs-hidden {
        opacity: 0;
        pointer-events: none;
      }
      .camera-box:fullscreen .fs-control-fade:hover,
      .camera-box:-webkit-full-screen .fs-control-fade:hover,
      .camera-box.pseudo-fullscreen .fs-control-fade:hover,
      .camera-box:fullscreen .fs-control-fade:active,
      .camera-box:-webkit-full-screen .fs-control-fade:active,
      .camera-box.pseudo-fullscreen .fs-control-fade:active {
        opacity: 0.95 !important;
      }

      /* Landscape Fullscreen PTZ Overlay */
      .landscape-ptz-overlay {
        display: none;
        position: absolute;
        right: 32px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 9999;
        gap: 20px;
        align-items: center;
        pointer-events: auto; /* Ensures it works over the video */
      }
      .camera-box:fullscreen .landscape-ptz-overlay,
      .camera-box:-webkit-full-screen .landscape-ptz-overlay,
      .camera-box.pseudo-fullscreen .landscape-ptz-overlay {
        display: flex;
      }

      .fs-dpad-container {
        display: grid;
        grid-template-columns: 54px 54px 54px;
        grid-template-rows: 54px 54px 54px;
        gap: 6px;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 50%;
        padding: 12px;
        backdrop-filter: blur(4px);
      }
      .fs-dpad-btn {
        width: 54px;
        height: 54px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.15);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        touch-action: none;
        user-select: none;
        transition: background 0.2s, transform 0.1s;
      }
      .fs-dpad-btn:active {
        background: rgba(255, 255, 255, 0.35);
        transform: scale(0.92);
      }
      .fs-dpad-up { grid-column: 2; grid-row: 1; }
      .fs-dpad-left { grid-column: 1; grid-row: 2; }
      .fs-dpad-right { grid-column: 3; grid-row: 2; }
      .fs-dpad-down { grid-column: 2; grid-row: 3; }

      .fs-zoom-panel {
        background: rgba(0, 0, 0, 0.4);
        border-radius: 24px;
        padding: 16px 12px;
        height: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        backdrop-filter: blur(4px);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      .fs-zoom-panel input[type="range"] {
        -webkit-appearance: slider-vertical;
        height: 120px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        outline: none;
        accent-color: var(--primary-color, #2563eb);
      }

      /* TOAST NOTIFICATION */
      .toast {
        position: absolute;
        top: 16px;
        left: 50%;
        transform: translateX(-50%) translateY(-20px);
        background: rgba(30, 30, 30, 0.9);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 0.85em;
        font-weight: 500;
        pointer-events: none;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 100;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .toast.show {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }

      /* --- NEW COMPACT VIEW (MAIN CARD) --- */
      .compact-view {
        position: relative;
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: var(--ha-card-border-radius, 12px);
        overflow: hidden;
        cursor: pointer;
        background: #000;
        box-shadow: var(
          --ha-card-box-shadow,
          0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12)
        );
      }
      .offline-placeholder {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(255, 255, 255, 0.6);
        font-size: 14px;
        z-index: 1;
      }
      .compact-stream {
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
      }
      
      /* Slightly scale ha-camera-stream specifically to crop 1px flexbox/grid browser rounding borders */
      ha-camera-stream.compact-stream {
        transform: scale(1.02);
      }

      .compact-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 12px 16px;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 30%, transparent 70%, rgba(0, 0, 0, 0.7) 100%);
        pointer-events: none;
      }
      .compact-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
      .compact-title {
        color: white;
        font-size: 16px;
        font-weight: 600;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
      }
      .compact-badges {
        display: flex;
        gap: 6px;
      }
      .overlay-badge {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(4px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      }
      .overlay-badge svg {
        width: 14px;
        height: 14px;
      }
      .compact-footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
      .compact-status {
        display: flex;
        align-items: center;
        color: rgba(255, 255, 255, 0.9);
        font-size: 12px;
        font-weight: 500;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
      }
      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--success-color, #10b981);
        margin-right: 6px;
        box-shadow: 0 0 6px var(--success-color, #10b981);
      }
      .status-dot.offline {
        background: var(--error-color, #ef4444);
        box-shadow: 0 0 6px var(--error-color, #ef4444);
      }

      /* --- BOTTOM SHEET ANIMATION & WRAPPER --- */
      .sheet-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        z-index: 9999;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        animation: fadeIn 0.3s ease-out;
        transition: opacity 0.3s ease;
        overscroll-behavior: none;
      }
      .sheet-content {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      
      /* --- PSEUDO FULLSCREEN PARENT OVERRIDES --- */
      .sheet-content.pseudo-fs-parent {
        transform: none !important;
        transition: none !important;
        max-width: 100vw !important;
        max-height: 100vh !important;
        width: 100vw !important;
        height: 100vh !important;
        border-radius: 0 !important;
        overflow: visible !important;
        background: #000 !important;
      }
      .sheet-content.pseudo-fs-parent .header,
      .sheet-content.pseudo-fs-parent .nav,
      .sheet-content.pseudo-fs-parent .sheet-drag-handle {
        display: none !important;
      }
      .sheet-content.pseudo-fs-parent .content-area {
        padding: 0 !important;
        overflow: hidden !important;
      }

      .sheet-drag-handle {
        width: 40px;
        height: 4px;
        background: var(--divider-color, #cbd5e1);
        border-radius: 2px;
        margin: 12px auto 4px auto;
        flex-shrink: 0;
      }
      .sheet-container {
        display: flex;
        flex-direction: column;
        overflow: hidden; 
      }

      /* --- ORIGINAL UI STYLES --- */
      .header {
        padding: 12px 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        padding-bottom: 16px;
        margin-bottom: 16px;
        flex-shrink: 0;
      }
      .header-left {
        display: flex;
        flex-direction: column;
      }
      .title {
        font-size: 20px;
        font-weight: 500;
        margin: 0;
        letter-spacing: -0.01em;
        display: flex;
        align-items: center;
      }
      .subtitle {
        color: var(--secondary-text-color, #757575);
        font-size: 13px;
        margin-top: 4px;
        margin-bottom: 0;
      }

      .status-chip {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: var(--secondary-background-color, #f1f5f9);
        color: var(--disabled-color, #94a3b8);
        border: 1px solid transparent;
        transition: all 0.3s ease;
      }
      .status-chip svg {
        width: 14px;
        height: 14px;
      }

      .nav {
        display: flex;
        justify-content: center;
        gap: 16px;
        padding: 0 16px 12px 16px;
        margin-bottom: 12px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        flex-shrink: 0;
      }
      .nav-btn {
        padding: 8px 16px;
        border-radius: 24px;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        color: var(--secondary-text-color);
        transition: all 0.3s ease;
      }
      .nav-btn.active {
        background: var(--primary-color, #2563eb);
        color: var(--text-primary-color, #fff);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      }
      .nav-btn:hover:not(.active) {
        background: rgba(var(--rgb-primary-color, 37, 99, 235), 0.05);
      }
      .nav-btn-text {
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        white-space: nowrap;
        transition: all 0.3s ease;
        font-weight: 600;
        font-size: 13px;
      }
      .nav-btn-text.active {
        max-width: 80px;
        opacity: 1;
        margin-left: 8px;
      }

      .content-area {
        flex: 1;
        padding: 0 16px 24px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .camera-box {
        background-color: #000;
        border-radius: 16px;
        position: relative;
        overflow: hidden;
        aspect-ratio: 16/9;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
        flex-shrink: 0;
      }
      .full-stream {
        width: 100%;
        height: 100%;
        display: block;
        z-index: 2;
      }
      
      .date-picker-wrap {
        display: flex;
        align-items: center;
        gap: 6px;
        background: var(--secondary-background-color, #f1f5f9);
        padding: 6px 12px;
        border-radius: 16px;
      }
      .date-picker-wrap svg {
        color: var(--secondary-text-color);
      }
      .history-date-picker {
        background: transparent;
        border: none;
        color: var(--primary-text-color);
        font-family: inherit;
        font-size: 13px;
        font-weight: 500;
        outline: none;
        cursor: pointer;
      }
      .history-date-picker::-webkit-calendar-picker-indicator {
        cursor: pointer;
      }
      
      .history-player {
        margin-bottom: 8px;
      }

      .history-toggle-wrap {
        display: flex;
        background: var(--secondary-background-color, #f1f5f9);
        border-radius: var(--control-circular-border-radius, 9999px);
        padding: 4px;
        gap: 4px;
      }
      .history-toggle-btn {
        flex: 1;
        border: none;
        background: transparent;
        padding: 6px 16px;
        border-radius: var(--control-circular-border-radius, 9999px);
        font-size: 13px;
        font-weight: 600;
        color: var(--secondary-text-color);
        cursor: pointer;
        transition: all 0.2s;
      }
      .history-toggle-btn.active {
        background: var(--ha-card-background, #fff);
        color: var(--primary-text-color);
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      }
      
      .global-timeline-viewport {
        position: relative;
        width: 100%;
        overflow: visible; 
        padding: 30px 0 10px 0; 
      }
      .global-timeline-scroll-area {
        overflow-x: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
        touch-action: pan-x;
        cursor: grab;
      }
      .global-timeline-scroll-area::-webkit-scrollbar {
        display: none;
      }
      .global-timeline-scroll-area:active {
        cursor: grabbing;
      }
      .global-timeline-padding {
        padding: 24px 50% 32px 50%; 
        width: max-content;
      }
      .global-timeline-track {
        position: relative;
        width: 1440px; 
        height: 12px;
        background: var(--secondary-background-color, #e2e8f0);
        border-radius: var(--control-circular-border-radius, 9999px);
        box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
      }
      .timeline-event-block {
        position: absolute;
        top: -8px;
        bottom: -8px;
        border-radius: var(--control-border-radius, 4px); 
        min-width: 4px; 
        opacity: 0.95;
        box-shadow: 0 1px 2px rgba(0,0,0,0.3);
        pointer-events: none;
      }
      .fixed-playhead {
        position: absolute;
        left: 50%;
        top: 40px;  
        height: 40px; 
        width: 2px;
        background: var(--primary-color, #2563eb);
        z-index: 10;
        pointer-events: none;
        transform: translateX(-50%);
      }
      .fixed-playhead::after {
        content: '';
        position: absolute;
        top: 50%; 
        left: 50%;
        transform: translate(-50%, -50%);
        width: 12px;
        height: 12px;
        background: var(--primary-color, #2563eb);
        border-radius: 50%;
        box-shadow: 0 0 0 4px rgba(var(--rgb-primary-color, 37, 99, 235), 0.2);
      }
      .playhead-tooltip {
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary-color, #2563eb);
        color: var(--text-primary-color, #fff);
        font-size: 12px;
        font-weight: 600;
        padding: 4px 10px;
        border-radius: var(--control-border-radius, 8px);
        white-space: nowrap;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      }
      .time-marker {
        position: absolute;
        top: 22px;
        font-size: 11px;
        font-weight: 500;
        color: var(--secondary-text-color);
        transform: translateX(-50%);
        white-space: nowrap;
        pointer-events: none;
      }
      .time-marker-tick {
        position: absolute;
        top: 12px;
        width: 1px;
        height: 6px;
        background: var(--divider-color, #cbd5e1);
        pointer-events: none;
      }

      .timeline-wrapper {
        position: relative;
        width: 100%;
      }
      .timeline-scroll {
        display: flex;
        overflow-x: auto;
        padding: 8px 0 16px 0;
        scrollbar-width: thin;
        cursor: grab;
      }
      .timeline-scroll:active {
        cursor: grabbing;
      }
      .timeline-scroll::-webkit-scrollbar {
        height: 6px;
      }
      .timeline-scroll::-webkit-scrollbar-thumb {
        background: var(--divider-color);
        border-radius: 3px;
      }
      .timeline-node {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        min-width: 110px;
        opacity: 0.6;
        transition: all 0.2s;
        flex: 0 0 auto;
      }
      .timeline-node.active, .timeline-node:hover {
        opacity: 1;
      }
      .timeline-time {
        font-size: 12px;
        font-weight: 600;
        color: var(--secondary-text-color);
      }

      .timeline-legend {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        padding: 12px 16px 4px;
        flex-wrap: wrap;
      }
      .legend-item {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
      }
      .legend-dot {
        width: 10px;
        height: 10px;
        border-radius: var(--control-border-radius, 3px);
      }
      
      .timeline-dot-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
      }
      .timeline-dot-wrapper::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -50%;
        right: -50%;
        height: 2px;
        background: var(--divider-color, #e2e8f0);
        z-index: 0;
      }
      .timeline-node:first-child .timeline-dot-wrapper::before { left: 50%; }
      .timeline-node:last-child .timeline-dot-wrapper::before { right: 50%; }
      
      .timeline-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--divider-color, #cbd5e1);
        border: 2px solid var(--ha-card-background, #fff);
        z-index: 1;
        transition: all 0.2s;
      }
      .timeline-node.active .timeline-dot {
        background: var(--primary-color, #2563eb);
        box-shadow: 0 0 0 3px rgba(var(--rgb-primary-color, 37, 99, 235), 0.2);
      }
      
      .timeline-thumb {
        position: relative;
        width: 90%;
        aspect-ratio: 16/9;
        border-radius: 8px;
        overflow: hidden;
        border: 2px solid transparent;
        transition: border-color 0.2s;
      }
      .timeline-node.active .timeline-thumb {
        border-color: var(--primary-color, #2563eb);
      }
      .timeline-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .timeline-badge {
        position: absolute;
        bottom: 4px;
        right: 4px;
        background: rgba(0,0,0,0.6);
        color: white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .timeline-badge svg {
        width: 12px;
        height: 12px;
      }

      .control-pill {
        display: flex;
        flex-direction: row;
        background: var(--card-background-color, #fff);
        border: 1px solid var(--divider-color, #e2e8f0);
        border-radius: 32px;
        padding: 4px;
        gap: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
      }
      .control-btn {
        background: transparent;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: var(--primary-text-color);
        transition: all 0.2s;
      }
      .control-btn.active {
        background: var(--primary-color, #2563eb);
        color: var(--text-primary-color, #fff);
      }
      .control-btn.active-warning {
        background: var(--warning-color, #f59e0b);
        color: #fff;
        box-shadow: 0 0 10px rgba(245, 158, 11, 0.4);
      }
      .control-btn.active-danger {
        background: var(--error-color, #ef4444);
        color: #fff;
        animation: pulse-danger 2s infinite;
      }
      .pill-divider {
        width: 1px;
        height: 28px;
        background: var(--divider-color, #e2e8f0);
        margin: 0 4px;
        align-self: center;
      }

      .ptz-layout {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        height: auto;
        margin-top: 12px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
      }
      .zoom-panel {
        background: var(--md-sys-color-surface-variant, var(--secondary-background-color, #f1f5f9));
        border-radius: 24px;
        padding: 12px 8px;
        width: 44px;
        height: 160px;
        display: flex;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      }
      .vertical-slider {
        -webkit-appearance: slider-vertical;
        width: 8px;
        height: 95px;
        margin: 8px 0;
        background: var(--md-sys-color-surface, var(--divider-color, #e2e8f0));
        border-radius: 4px;
        outline: none;
        accent-color: var(--md-sys-color-primary, var(--primary-color, #2563eb));
      }
      .dpad-container {
        display: grid;
        grid-template-columns: 42px 42px 42px;
        grid-template-rows: 42px 42px 42px;
        gap: 6px;
        align-items: center;
        justify-items: center;
        background: var(--md-sys-color-surface-variant, var(--secondary-background-color, #f1f5f9));
        border-radius: 50%;
        padding: 12px;
        box-sizing: border-box;
      }
      .dpad-btn {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        border: none;
        background: var(--md-sys-color-surface, var(--card-background-color, #fff));
        color: var(--md-sys-color-on-surface, var(--primary-text-color));
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.2s, transform 0.1s;
        touch-action: none; 
        user-select: none;  
      }
      .dpad-btn:active {
        background: var(--md-sys-color-secondary-container, var(--divider-color, #e2e8f0));
        transform: scale(0.92);
      }
      .dpad-up { grid-column: 2; grid-row: 1; }
      .dpad-left { grid-column: 1; grid-row: 2; }
      .dpad-right { grid-column: 3; grid-row: 2; }
      .dpad-down { grid-column: 2; grid-row: 3; }
      
      .ptz-side {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;
        flex: 1;
        min-width: 160px;
        max-width: 200px;
      }
      .action-btn {
        background: var(--primary-color, #2563eb);
        color: var(--text-primary-color, #fff);
        border: none;
        border-radius: var(--control-border-radius, 12px);
        padding: 0 20px;
        height: 48px; 
        width: 100%;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        transition: all 0.2s;
        white-space: nowrap; 
      }
      .action-btn:active { transform: scale(0.98); }
      .action-btn.secondary {
        background: var(--secondary-background-color, #f1f5f9);
        color: var(--primary-text-color);
        border: 1px solid var(--divider-color);
      }

      .card-panel {
        background: var(--ha-card-background, #fff);
        border: 1px solid var(--divider-color, #e2e8f0);
        border-radius: var(--ha-card-border-radius, 16px);
        padding: 16px;
        flex-shrink: 0;
      }
      .panel-header {
        margin: 0 0 16px 0;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--divider-color, #e2e8f0);
        font-size: 14px;
        color: var(--secondary-text-color);
      }
      .spacer { height: 24px; }
      .diag-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid var(--divider-color, #e2e8f0);
      }
      .diag-row:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }
      .slider-row {
        padding: 12px 0;
        border-bottom: 1px solid var(--divider-color, #e2e8f0);
      }
      .slider-row:last-child { border-bottom: none; }

      .toggle-btn {
        width: 44px;
        height: 24px;
        border-radius: 12px;
        background: var(--disabled-color, #cbd5e1);
        border: none;
        position: relative;
        padding: 0;
        transition: background 0.2s;
        cursor: pointer;
      }
      .toggle-btn.active { background: var(--primary-color, #2563eb); }
      .toggle-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #fff;
        position: absolute;
        top: 2px;
        left: 2px;
        transition: left 0.2s;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
      .toggle-thumb.active { left: 22px; }

      .modal-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(2px);
        z-index: 10;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        border-radius: 24px 24px 0 0;
        overflow: hidden;
      }
      .modal-content {
        background: var(--ha-card-background, #fff);
        width: 100%;
        padding: 24px;
        border-radius: 24px 24px 0 0;
        box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
      }
      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }
      .modal-header h3 { margin: 0; font-size: 18px; font-weight: 600; }
      .modal-header button {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--secondary-text-color);
        display: flex;
      }
      .modal-body {
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: 50vh;
        overflow-y: auto;
        overscroll-behavior: contain;
      }
      .modal-opt-btn {
        width: 100%;
        padding: 16px 20px;
        border-radius: 12px;
        border: none;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--secondary-background-color, #f1f5f9);
        color: var(--primary-text-color);
      }
      .modal-opt-btn.active {
        background: var(--primary-color, #2563eb);
        color: var(--text-primary-color, #fff);
      }
      
      .btn-confirm {
        background: var(--warning-color, #f59e0b) !important;
        color: #fff !important;
        border-color: var(--warning-color, #f59e0b) !important;
        animation: pulse-warning 1.5s infinite;
      }
      .btn-success {
        background: var(--success-color, #10b981) !important;
        color: #fff !important;
        border-color: var(--success-color, #10b981) !important;
      }

      @keyframes pulse-warning {
        0% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4); }
        70% { box-shadow: 0 0 0 8px rgba(245, 158, 11, 0); }
        100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0); }
      }

      @keyframes pulse-danger {
        0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.6); }
        70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
        100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
      }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }

      @media (max-width: 480px) {
        .ptz-layout {
          gap: 8px;
          flex-wrap: nowrap; 
          justify-content: space-between;
        }
        .zoom-panel { width: 36px; height: 140px; padding: 8px 4px; }
        .vertical-slider { height: 80px; }
        .dpad-container {
          grid-template-columns: 36px 36px 36px;
          grid-template-rows: 36px 36px 36px;
          gap: 4px;
          padding: 8px;
        }
        .dpad-btn { width: 36px; height: 36px; }
        .ptz-side { min-width: 0; width: auto; flex: 1; max-width: none; gap: 6px; }
        .control-btn { width: 36px; height: 36px; }
        .action-btn { font-size: 11px; padding: 8px 4px; }
      }
    `;
  }
}

class CameraDashboardEditor extends LitElement {
  static properties = { hass: { attribute: false }, _config: { state: true } };

  setConfig(config) {
    this._config = config;
  }

  _schema = [
    { name: "camera_entity", label: "Primary Camera Entity", selector: { entity: { domain: "camera" } } },
    { name: "frigate_client_id", label: "Frigate Integration ID", selector: { text: {} } },
    { name: "frigate_camera_entity", label: "Frigate Camera Entity", selector: { entity: { domain: "camera" } } },
    { name: "title", label: "Title Override", selector: { text: {} } },
    { name: "hide_ptz", label: "Hide PTZ Controls", selector: { boolean: {} } },
    { name: "hide_zoom", label: "Hide Zoom Slider", selector: { boolean: {} } },
  ];

  _valueChanged(ev) {
    if (!this._config || !this.hass) return;
    const value = ev.detail ? ev.detail.value : null;
    if (!value) return;
    this._config = { ...this._config, ...value };
    const event = new CustomEvent("config-changed", {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    if (!this.hass || !this._config) return html``;
    return html`
      <div style="padding: 16px;">
        <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${this._schema}
          .computeLabel=${(s) => s.label || s.name}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `;
  }
}

if (!customElements.get("passable-camera-card-editor")) {
  customElements.define("passable-camera-card-editor", CameraDashboardEditor);
}
if (!customElements.get("camera-card-editor")) {
  class LegacyCameraCardEditor extends CameraDashboardEditor {}
  customElements.define("camera-card-editor", LegacyCameraCardEditor);
}

CameraDashboardCard.getConfigElement = () => document.createElement("passable-camera-card-editor");

CameraDashboardCard.getStubConfig = (hass, entities, entitiesFallback) => {
  let cameraEntity = "";
  if (entities && entities.length > 0) {
    cameraEntity = entities.find((e) => e.startsWith("camera.")) || "";
  }
  if (!cameraEntity && hass && hass.states) {
    cameraEntity = Object.keys(hass.states).find((e) => e.startsWith("camera.")) || "";
  }
  return {
    type: "custom:passable-camera-card",
    camera_entity: cameraEntity,
    frigate_client_id: "frigate",
    frigate_camera_entity: "",
    hide_ptz: false,
    hide_zoom: false,
  };
};

if (!customElements.get("passable-camera-card")) {
  customElements.define("passable-camera-card", CameraDashboardCard);
}
if (!customElements.get("camera-card")) {
  class LegacyCameraCard extends CameraDashboardCard {}
  customElements.define("camera-card", LegacyCameraCard);
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "passable-camera-card",
  name: "Passable Camera Card",
  preview: true,
  description: "A comprehensive LitElement dashboard card for cameras featuring live stream, WebRTC, PTZ controls, Frigate event history, and timeline playback.",
});