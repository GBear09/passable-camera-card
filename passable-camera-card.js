const CARD_VERSION = "1.1.1";

const LitElement = Object.getPrototypeOf(
  customElements.get("hui-entities-card")
);
const html = LitElement.prototype.html;
const css = LitElement.prototype.css;
const svg = LitElement.prototype.svg || ((strings, ...values) => {
  const result = html(strings, ...values);
  if (result && typeof result === "object") {
    return Object.assign({}, result, { _$litType$: 2, type: "svg" });
  }
  return result;
});

console.info(
  `%c PASSABLE-CAMERA-CARD %c v${CARD_VERSION} IS LOADED `,
  "color: white; background: #0284c7; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;",
  "color: #0284c7; background: #e0f2fe; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;"
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
  Volume2: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`,
  VolumeX: html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`,
  Maximize: html`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>`,
  Minimize: html`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3"></path><path d="M21 8h-3a2 2 0 0 1-2-2V3"></path><path d="M3 16h3a2 2 0 0 1 2 2v3"></path><path d="M16 21v-3a2 2 0 0 1 2-2h3"></path></svg>`,
  RefreshCw: html`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`,
  Download: html`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
  ExternalLink: html`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
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
    _activeLens: { state: true },
    _switchingLens: { state: true },
    _streamQuality: { state: true },
    _toastMsg: { state: true },
    _events: { state: true },
    _selectedEvent: { state: true },
    _selectedDate: { state: true },
    _btnStates: { state: true },
    _micEnabled: { state: true },
    _isMuted: { state: true },
    _fsControlsVisible: { state: true },
    _isFullscreen: { state: true },
    _pseudoFullscreen: { state: true },
    _ptzActive: { state: true },

    _historyMode: { state: true },
    _eventFilter: { state: true },
    _zoneOnlyFilter: { state: true },
    _loadingVod: { state: true },
    _eventDownloadUrl: { state: true },
    _videoDuration: { state: true },
    _videoCurrentTime: { state: true },
    _isPlaying: { state: true },
    _timelineCursorTime: { state: true },
    _pendingSeek: { state: true },
    _loadedVodStart: { state: true },
    _loadedVodEnd: { state: true },
  };

  static getConfigElement() {
    return document.createElement("passable-camera-card-editor");
  }

  constructor() {
    super();
    this._activeTab = "live";
    this._activePopup = null;
    this._sliderVals = {};
    this._entities = null;
    this._activeLens = "wide";
    this._switchingLens = false;
    this._streamQuality = "sub";
    this._toastMsg = null;
    this._events = null;
    this._selectedEvent = null;
    this._micEnabled = false;
    this._isMuted = false;
    this._fsControlsVisible = true;
    this._isFullscreen = false;
    this._pseudoFullscreen = false;
    this._ptzActive = false;

    this._webrtcElement = null;
    this._webrtcConfig = null;
    this._cachedVideo = null;
    this._capturedPointerId = undefined;
    this._capturedTarget = null;

    const now = new Date();
    this._selectedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    this._btnStates = {};
    this._fetchingEvents = false;
    this._lastEventsFetch = 0;

    this._historyMode = "events";
    this._eventFilter = "all";
    this._zoneOnlyFilter = false;
    this._loadingVod = false;
    this._eventDownloadUrl = null;
    this._videoDuration = 0;
    this._videoCurrentTime = 0;
    this._isPlaying = false;
    this._timelineCursorTime = null;
    this._pendingSeek = null;

    this._hls = null;
    this._eventHls = null;
    this._hlsPromise = null;
    this._vodAbortController = null;
    this._eventAbortController = null;
    this._currentEventVideoId = null;
    this._eventVideoAbort = 0;
    this._timelineVideoAbort = 0;
    this._loadedVodStart = null;
    this._loadedVodEnd = null;

    this._toastTimer = null;
    this._safeActionTimers = {};
    this._attachVideoTimers = [];
    this._sliderClearTimers = {};
    this._fetchTimeout = null;
    this._seekClearTimeout = null;
    this._fsTimer = null;
    this._switchLensTimer = null;
    this._scrollTimeout = null;
    this._progScrollTimeout = null;
    this._wheelTimeout = null;
    this._unmuteTimer = null;

    this._programmaticScroll = false;
    this._isPointerDown = false;
    this._isUserScrolling = false;
    this._isSeeking = false;

    this._mql = window.matchMedia("(orientation: landscape)");
    this._handleOrientationChange = this._handleOrientationChange.bind(this);
    this._handleFullscreenChange = this._handleFullscreenChange.bind(this);
    this._wakeFullscreenControls = this._wakeFullscreenControls.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    if (this._mql) {
      this._mql.addEventListener("change", this._handleOrientationChange);
    }
    document.addEventListener("fullscreenchange", this._handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", this._handleFullscreenChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._disconnectWebrtc();
    this._destroyTimelineHls();
    this._destroyEventHls();

    if (this._toastTimer) clearTimeout(this._toastTimer);
    Object.values(this._safeActionTimers).forEach((t) => clearTimeout(t));
    this._safeActionTimers = {};
    this._clearAttachVideoTimers();
    Object.values(this._sliderClearTimers).forEach((t) => clearTimeout(t));
    this._sliderClearTimers = {};

    if (this._fetchTimeout) clearTimeout(this._fetchTimeout);
    if (this._seekClearTimeout) clearTimeout(this._seekClearTimeout);
    if (this._fsTimer) clearTimeout(this._fsTimer);
    if (this._switchLensTimer) clearTimeout(this._switchLensTimer);
    if (this._scrollTimeout) clearTimeout(this._scrollTimeout);
    if (this._progScrollTimeout) clearTimeout(this._progScrollTimeout);
    if (this._wheelTimeout) clearTimeout(this._wheelTimeout);
    if (this._unmuteTimer) clearTimeout(this._unmuteTimer);

    if (this._mql) {
      this._mql.removeEventListener("change", this._handleOrientationChange);
    }
    document.removeEventListener("fullscreenchange", this._handleFullscreenChange);
    document.removeEventListener("webkitfullscreenchange", this._handleFullscreenChange);
  }

  _clearAttachVideoTimers() {
    if (this._attachVideoTimers.length) {
      this._attachVideoTimers.forEach((t) => clearTimeout(t));
      this._attachVideoTimers = [];
    }
  }

  _disconnectWebrtc() {
    this._clearAttachVideoTimers();
    if (this._unmuteTimer) {
      clearTimeout(this._unmuteTimer);
      this._unmuteTimer = null;
    }
    if (this._webrtcElement) {
      try {
        if (typeof this._webrtcElement.ondisconnect === "function") {
          this._webrtcElement.ondisconnect();
        }
      } catch (e) {
        console.warn("[Camera Card] Error disconnecting WebRTC stream:", e);
      }
      this._webrtcElement = null;
      this._webrtcConfig = null;
      this._cachedVideo = null;
    }
  }

  _destroyTimelineHls() {
    if (this._vodAbortController) {
      this._vodAbortController.abort();
      this._vodAbortController = null;
    }
    if (this._hls) {
      this._hls.destroy();
      this._hls = null;
    }
  }

  _destroyEventHls() {
    if (this._eventAbortController) {
      this._eventAbortController.abort();
      this._eventAbortController = null;
    }
    if (this._eventHls) {
      this._eventHls.destroy();
      this._eventHls = null;
    }
    this._currentEventVideoId = null;
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

  _findVideoElement() {
    if (!this._webrtcElement) return null;
    if (!this._cachedVideo || !this._cachedVideo.isConnected) {
      const findVideo = (root) => {
        if (!root) return null;
        if (root.tagName === "VIDEO") return root;
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
      this._cachedVideo = findVideo(this._webrtcElement);
    }
    return this._cachedVideo;
  }

  _forceUnmute() {
    const video = this._findVideoElement();
    if (!video) return;
    if (this._micEnabled || this._isMuted) {
      video.muted = true;
      return;
    }
    if (video.muted) {
      video.muted = false;
      if (video.paused) {
        video.play().catch((e) => {
          console.warn("[Camera Card] Browser blocked unmuted autoplay, falling back to muted", e);
          this._isMuted = true;
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    }
  }

  _toggleMute(e) {
    if (e) e.stopPropagation();
    if (this._micEnabled) {
      this._showToast("Speaker stays muted while microphone is active");
      return;
    }
    this._isMuted = !this._isMuted;
    const video = this._findVideoElement();
    if (video) {
      video.muted = this._isMuted;
      if (!this._isMuted && video.paused) {
        video.play().catch(() => {
          this._isMuted = true;
          video.muted = true;
        });
      }
    }
  }

  _toggleMic(e) {
    if (e) e.stopPropagation();
    if (!this._micEnabled) {
      if (!window.isSecureContext || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        this._showToast("Two-way audio requires HTTPS (use Nabu Casa or HTTPS URL)");
        return;
      }
      let switchedStream = false;
      if (this._activeLens === "zoom" || this._streamQuality === "main") {
        this._activeLens = "wide";
        this._streamQuality = "sub";
        switchedStream = true;
      }
      this._micEnabled = true;
      this._showToast(
        switchedStream
          ? "Switched to Wide stream for Two-Way Audio"
          : "Two-Way Audio Active (Speaker Muted)"
      );
    } else {
      this._micEnabled = false;
      this._showToast("Two-Way Audio Stopped");
    }
  }

  async _toggleFullscreen(e) {
    if (e) e.stopPropagation();
    const target =
      this._activeTab === "live"
        ? this.shadowRoot?.querySelector(".camera-box")
        : this.shadowRoot?.querySelector(".history-player");
    if (!target) return;

    const fsEl = document.fullscreenElement || document.webkitFullscreenElement;
    if (fsEl || this._pseudoFullscreen) {
      this._pseudoFullscreen = false;
      try {
        if (document.exitFullscreen) await document.exitFullscreen();
        else if (document.webkitExitFullscreen) await document.webkitExitFullscreen();
      } catch (err) {
        console.warn("Could not exit fullscreen:", err);
      }
    } else {
      try {
        if (target.requestFullscreen) await target.requestFullscreen();
        else if (target.webkitRequestFullscreen) await target.webkitRequestFullscreen();
        else if (target.webkitEnterFullscreen) target.webkitEnterFullscreen();
        else this._pseudoFullscreen = true;
      } catch (err) {
        this._pseudoFullscreen = true;
      }
      this._wakeFullscreenControls();
    }
  }

  async _handleOrientationChange(e) {
    if (!this.config.is_popup) return;

    const target =
      this._activeTab === "live"
        ? this.shadowRoot?.querySelector(".camera-box")
        : this.shadowRoot?.querySelector(".history-player");

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
      } catch (err) {
        console.warn("Could not exit fullscreen:", err);
      }
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
    if ((changedProps.has("config") || (!this._entities && changedProps.has("hass"))) && this.hass && this.config && this.config.camera_entity) {
      this._discoverEntities();
    }

    const camState = this._getActiveCameraState();
    const enteringLive = changedProps.has("_activeTab") && this._activeTab === "live";

    if (camState && this.config.is_popup && this._activeTab === "live") {
      const needsWebrtcInit =
        !this._webrtcElement ||
        enteringLive ||
        changedProps.has("_activeLens") ||
        changedProps.has("_streamQuality") ||
        changedProps.has("_micEnabled") ||
        changedProps.has("config");

      const wrapper = this.shadowRoot?.getElementById("webrtc-wrapper-live");
      if (needsWebrtcInit && wrapper) {
        this._initWebrtc(camState, wrapper, changedProps.has("_micEnabled"));
        if (this._unmuteTimer) clearTimeout(this._unmuteTimer);
        this._unmuteTimer = setTimeout(() => this._forceUnmute(), 500);
      } else if (this._webrtcElement) {
        if (wrapper && !wrapper.contains(this._webrtcElement)) {
          wrapper.replaceChildren(this._webrtcElement);
        }
        if (customElements.get("webrtc-camera")) {
          this._webrtcElement.hass = this.hass;
        }
      }
    } else if (this.config.is_popup && this._activeTab !== "live") {
      if (this._micEnabled) this._micEnabled = false;
      if (this._webrtcElement) this._disconnectWebrtc();
    }

    const enteringHistory = changedProps.has("_activeTab") && this._activeTab === "history";
    const leavingHistory = changedProps.has("_activeTab") && this._activeTab !== "history";

    if (leavingHistory) {
      this._destroyTimelineHls();
      this._destroyEventHls();
      this._loadingVod = false;
    }

    if (this.config.is_popup && this._activeTab === "history") {
      const stale = Date.now() - this._lastEventsFetch > 30000;
      if ((enteringHistory && (!this._events || stale)) || changedProps.has("_selectedDate")) {
        this._fetchEvents();
      }

      if (this._historyMode === "timeline") {
        this._destroyEventHls();
        if (this._events && (changedProps.has("_historyMode") || enteringHistory)) {
          const pre = Math.max(0, Number(this.config.clip_pre_capture ?? 5));
          const initialTime =
            this._timelineCursorTime ||
            (this._selectedEvent ? Math.max(0, this._selectedEvent.start_time - pre) : null);
          this._setupTimelineVideo(initialTime);
        }
        if (!this._programmaticScroll && !this._isPointerDown && !this._isUserScrolling && !this._isSeeking) {
          this._syncTimelineScroll();
        }
      } else {
        this._destroyTimelineHls();
        if (this._selectedEvent && this._selectedEvent.has_clip) {
          if (
            changedProps.has("_selectedEvent") ||
            changedProps.has("_historyMode") ||
            enteringHistory ||
            this._currentEventVideoId !== this._selectedEvent.id
          ) {
            this._setupEventVideo(this._selectedEvent);
          }
        } else {
          this._destroyEventHls();
          this._loadingVod = false;
        }
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

    const findEntity = (domain, suffixes) => {
      if (!Array.isArray(suffixes)) suffixes = [suffixes];
      for (const s of suffixes) {
        const id1 = s ? `${domain}.${cleanBase}_${s}` : `${domain}.${cleanBase}`;
        if (this.hass.states[id1]) return id1;

        const shortPrefix = cleanBase.split("_")[0];
        const id2 = s ? `${domain}.${shortPrefix}_${s}` : `${domain}.${shortPrefix}`;
        if (this.hass.states[id2]) return id2;
      }
      return null;
    };

    const getE = (domain, suffix) => findEntity(domain, suffix);
    const getButton = (suffix) => findEntity("button", suffix);

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
      frigate_person: getFrigate("binary_sensor", "person_occupancy"),
      frigate_vehicle: getFrigate("binary_sensor", "car_occupancy"),
      frigate_animal: getFrigate("binary_sensor", "dog_occupancy") || getFrigate("binary_sensor", "cat_occupancy"),
      frigate_motion_sensor: getFrigate("binary_sensor", "motion"),
      frigate_last_face: getFrigate("sensor", "last_recognized_face"),

      motion: getE("binary_sensor", ["motion", "cell_motion"]),
      person: getE("binary_sensor", ["person", "person_detection"]),
      vehicle: getE("binary_sensor", ["vehicle", "vehicle_detection"]),
      animal: getE("binary_sensor", ["animal", "pet", "dog", "cat"]),
      sens_motion: getE("number", ["motion_sensitivity", "sensitivity"]),
      sens_person: getE("number", ["ai_person_sensitivity", "person_sensitivity"]),
      sens_vehicle: getE("number", ["ai_vehicle_sensitivity", "vehicle_sensitivity"]),
      sens_animal: getE("number", ["ai_animal_sensitivity", "animal_sensitivity", "pet_sensitivity"]),
      ptz_up: getButton(["ptz_up", "up"]),
      ptz_down: getButton(["ptz_down", "down"]),
      ptz_left: getButton(["ptz_left", "left"]),
      ptz_right: getButton(["ptz_right", "right"]),
      ptz_stop: getButton(["ptz_stop", "stop"]),
      ptz_calibrate: getButton(["ptz_calibrate", "calibrate_ptz", "calibrate"]),
      restart: getButton(["restart", "reboot"]),
      ptz_zoom: getE("number", ["zoom", "ptz_zoom"]),
      ptz_pan_pos: getE("sensor", "ptz_pan_position"),
      ptz_tilt_pos: getE("sensor", "ptz_tilt_position"),
      guard_go_to: getButton(["guard_go_to", "ptz_guard_go_to"]),
      guard_set: getButton(["guard_set_current_position", "ptz_guard_set"]),
      guard_return: getE("switch", ["guard_return", "ptz_guard_return"]),
      guard_time: getE("number", ["guard_return_time", "ptz_guard_return_time"]),
      auto_track: getE("switch", ["auto_tracking", "auto_track"]),
      auto_track_method: getE("select", ["auto_track_method", "auto_tracking_method"]),
      floodlight: findEntity("light", ["floodlight"]) || findEntity("switch", ["floodlight"]),
      floodlight_mode: getE("select", "floodlight_mode"),
      floodlight_event_mode: getE("select", "floodlight_event_mode"),
      siren: getE("siren", "siren"),
      siren_event: getE("switch", ["siren_on_event", "siren_mode"]),
      day_night_mode: getE("select", "day_night_mode"),
      day_night_state: getE("sensor", "day_night_state"),
      ir_lights: getE("switch", ["infrared_lights_in_night_mode", "ir_lights"]),
      record: getE("switch", ["record", "continuous_recording"]),
      record_audio: getE("switch", "record_audio"),
      push_notif: getE("switch", ["push_notifications", "push_notification"]),
      email_event: getE("switch", "email_on_event"),
      ftp_upload: getE("switch", ["ftp_upload", "ftp"]),
      volume: getE("number", "volume"),
      status_led: findEntity("light", "status_led") || findEntity("switch", "status_led"),
      firmware: findEntity("update", ["firmware", "firmware_update"]),
    };
  }

  _getFrigateCameraInfo(camState = null) {
    const frigateCamEntity = this.config?.frigate_camera_entity;
    let camName = "";
    if (frigateCamEntity) {
      camName = frigateCamEntity.split(".")[1] || "";
    } else if (camState?.entity_id) {
      camName = (camState.entity_id.split(".")[1] || "")
        .replace("_fluent_2", "")
        .replace("_fluent", "")
        .replace("_clear_2", "")
        .replace("_clear", "");
    } else if (this.config?.camera_entity) {
      camName = (this.config.camera_entity.split(".")[1] || "").split("_")[0];
    }
    return {
      camName,
      clientId: this.config?.frigate_client_id || "frigate",
    };
  }

  _getDateRange(dateStr = this._selectedDate) {
    const [year, month, day] = dateStr.split("-").map(Number);
    const startOfDay = Math.floor(new Date(year, month - 1, day, 0, 0, 0).getTime() / 1000);
    const endOfDay = Math.floor(new Date(year, month - 1, day, 23, 59, 59).getTime() / 1000);
    return { startOfDay, endOfDay };
  }

  _getDefaultTimelineTime(startOfDay) {
    const now = Math.floor(Date.now() / 1000);
    const d = new Date();
    const todayStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    if (this._selectedDate === todayStr) {
      return Math.max(startOfDay, now - 60);
    }
    return startOfDay + 43200;
  }

  _formatDuration(seconds) {
    const s = Math.max(0, Math.round(seconds || 0));
    if (s < 60) return `${s}s`;
    const mins = Math.floor(s / 60);
    const rem = s % 60;
    return rem > 0 ? `${mins}m ${rem}s` : `${mins}m`;
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

  _startStreamSwitchTimer() {
    if (this._switchLensTimer) clearTimeout(this._switchLensTimer);
    const timeout = this.config?.is_popup ? 6000 : 1500;
    this._switchLensTimer = setTimeout(() => {
      this._switchingLens = false;
    }, timeout);
  }

  _toggleLens() {
    if (this._switchingLens) return;
    this._switchingLens = true;
    this._activeLens = this._activeLens === "wide" ? "zoom" : "wide";
    if (this._activeLens === "zoom") {
      this._streamQuality = "sub";
    }
    this._startStreamSwitchTimer();
  }

  _toggleStreamQuality(e) {
    if (e) e.stopPropagation();
    if (this._switchingLens || this._micEnabled) return;
    this._switchingLens = true;
    this._streamQuality = this._streamQuality === "main" ? "sub" : "main";
    if (this._streamQuality === "main") {
      this._activeLens = "wide";
    }
    this._startStreamSwitchTimer();
  }

  // --- PROGRAMMATIC WEBRTC CARD INITIALIZER ---
  _initWebrtc(camState, wrapper, forceRemount = false) {
    const { camName: frigateBase } = this._getFrigateCameraInfo(camState);
    let streamName;
    if (this._micEnabled) {
      const talkSuffix = this.config.talk_stream_suffix ?? "_sub";
      streamName = `${frigateBase}${talkSuffix}`;
    } else if (this._streamQuality === "main") {
      streamName = `${frigateBase}_main`;
    } else {
      streamName = `${frigateBase}_sub${this._activeLens === "zoom" ? "_2" : ""}`;
    }

    const streamMode = this._streamQuality === "main" && !this._micEnabled ? "webrtc,mse" : "webrtc";

    const newConfig = {
      type: "custom:webrtc-camera",
      url: streamName,
      mode: streamMode,
      media: this._micEnabled ? "video,audio,microphone" : "video,audio",
      ui: false,
      background: true,
      muted: true,
    };

    if (forceRemount || !this._webrtcElement || JSON.stringify(this._webrtcConfig) !== JSON.stringify(newConfig)) {
      this._clearAttachVideoTimers();
      const oldElem = this._webrtcElement;
      if (oldElem) {
        try {
          if (typeof oldElem.ondisconnect === "function") {
            oldElem.ondisconnect();
          }
        } catch (e) {
          console.warn("[Camera Card] Error disconnecting previous WebRTC stream:", e);
        }
      }

      this._webrtcConfig = newConfig;
      this._cachedVideo = null;

      const newElem = document.createElement("webrtc-camera");
      newElem.className = "full-stream webrtc-stream compact-stream";
      newElem.style.width = "100%";
      newElem.style.height = "100%";
      this._webrtcElement = newElem;

      const mount = () => {
        if (this._webrtcElement !== newElem) return;
        newElem.setConfig(newConfig);
        newElem.hass = this.hass;
        wrapper.replaceChildren(newElem);

        const attachVideoListener = () => {
          if (this._webrtcElement !== newElem) return;
          const video = newElem.video || (newElem.shadowRoot ? newElem.shadowRoot.querySelector("video") : null);
          if (video) {
            this._cachedVideo = video;
            const onPlaying = () => {
              if (this._switchLensTimer) {
                clearTimeout(this._switchLensTimer);
                this._switchLensTimer = null;
              }
              this._switchingLens = false;
              this._forceUnmute();
              video.removeEventListener("playing", onPlaying);
            };
            if (video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2) {
              onPlaying();
            } else {
              video.addEventListener("playing", onPlaying, { once: true });
            }
          }
        };

        attachVideoListener();
        this._attachVideoTimers = [
          setTimeout(attachVideoListener, 100),
          setTimeout(attachVideoListener, 400),
          setTimeout(attachVideoListener, 1000),
        ];
      };

      if (customElements.get("webrtc-camera")) {
        mount();
      } else {
        customElements.whenDefined("webrtc-camera").then(mount);
      }
    } else {
      if (!wrapper.contains(this._webrtcElement)) {
        wrapper.replaceChildren(this._webrtcElement);
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
  _commitSlider(key, entity_id) {
    const val = this._sliderVals[key];
    if (val === undefined) return;
    this._setNum(entity_id, val);
    if (this._sliderClearTimers[key]) clearTimeout(this._sliderClearTimers[key]);
    this._sliderClearTimers[key] = setTimeout(() => {
      const next = { ...this._sliderVals };
      delete next[key];
      this._sliderVals = next;
      delete this._sliderClearTimers[key];
    }, 500);
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
    if (e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.currentTarget && e.currentTarget.setPointerCapture && e.pointerId !== undefined) {
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
          this._capturedPointerId = e.pointerId;
          this._capturedTarget = e.currentTarget;
        } catch (err) {}
      }
    }
    this._ptzActive = true;
    this._wakeFullscreenControls();
    this._trigger(entity_id);
  }

  _stopPtz(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.currentTarget && e.currentTarget.releasePointerCapture && e.pointerId !== undefined) {
        try {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
          }
        } catch (err) {}
      }
    }
    if (this._capturedTarget && this._capturedPointerId !== undefined) {
      try {
        if (this._capturedTarget.hasPointerCapture(this._capturedPointerId)) {
          this._capturedTarget.releasePointerCapture(this._capturedPointerId);
        }
      } catch (err) {}
      this._capturedPointerId = undefined;
      this._capturedTarget = null;
    }
    if (!this._ptzActive) return;
    this._ptzActive = false;
    this._wakeFullscreenControls();
    if (this._entities && this._entities.ptz_stop) {
      this._trigger(this._entities.ptz_stop);
    }
  }

  _showToast(msg) {
    if (this._toastTimer) clearTimeout(this._toastTimer);
    this._toastMsg = msg;
    this._toastTimer = setTimeout(() => {
      this._toastMsg = null;
      this._toastTimer = null;
    }, 3200);
  }

  _handleSafeAction(btnId, entityId) {
    const currentState = this._btnStates[btnId] || 'idle';
    if (this._safeActionTimers[btnId]) {
      clearTimeout(this._safeActionTimers[btnId]);
    }
    if (currentState === 'idle') {
      this._btnStates = { ...this._btnStates, [btnId]: 'confirm' };
      this._safeActionTimers[btnId] = setTimeout(() => {
        if (this._btnStates[btnId] === 'confirm') {
          this._btnStates = { ...this._btnStates, [btnId]: 'idle' };
        }
      }, 3000);
    } else if (currentState === 'confirm') {
      this._trigger(entityId);
      this._btnStates = { ...this._btnStates, [btnId]: 'success' };
      this._safeActionTimers[btnId] = setTimeout(() => {
        this._btnStates = { ...this._btnStates, [btnId]: 'idle' };
      }, 2500);
    }
  }

  // --- FRIGATE HISTORY & VOD HELPERS ---
  _getFilteredEvents(eventsList = this._events) {
    if (!Array.isArray(eventsList)) return [];
    return eventsList.filter((ev) => {
      if (this._eventFilter !== "all" && ev.label !== this._eventFilter) return false;
      if (this._zoneOnlyFilter && (!Array.isArray(ev.zones) || ev.zones.length === 0)) return false;
      return true;
    });
  }

  _setEventFilter(label) {
    this._eventFilter = label;
    const filtered = this._getFilteredEvents();
    if (!filtered.some((ev) => ev.id === this._selectedEvent?.id)) {
      this._selectedEvent = filtered[0] || null;
      this._timelineCursorTime = null;
    }
  }

  _toggleZoneFilter() {
    this._zoneOnlyFilter = !this._zoneOnlyFilter;
    const filtered = this._getFilteredEvents();
    if (!filtered.some((ev) => ev.id === this._selectedEvent?.id)) {
      this._selectedEvent = filtered[0] || null;
      this._timelineCursorTime = null;
    }
  }

  async _signFrigateUrl(rawUrl) {
    try {
      const signRes = await this.hass.connection.sendMessagePromise({
        type: "auth/sign_path",
        path: rawUrl,
        expires: 86400,
      });
      if (signRes && signRes.path) return signRes.path;
    } catch (e) {
      try {
        const signRes2 = await this.hass.connection.sendMessagePromise({
          type: "frigate/sign_url",
          path: rawUrl,
          expires: 86400,
        });
        if (signRes2 && signRes2.path) return signRes2.path;
      } catch (e2) {}
    }
    return rawUrl;
  }

  async _loadHls() {
    if (!this._hlsPromise) {
      this._hlsPromise = import("https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.mjs")
        .then((mod) => mod.default || mod)
        .catch((err) => {
          this._hlsPromise = null;
          throw err;
        });
    }
    return this._hlsPromise;
  }

  async _fetchEvents(manualRefresh = false) {
    if (!this.hass) return;
    if (this._fetchingEvents) return;
    this._fetchingEvents = true;

    try {
      const { camName, clientId } = this._getFrigateCameraInfo();
      const { startOfDay, endOfDay } = this._getDateRange();

      const wsData = await this.hass.connection.sendMessagePromise({
        type: "frigate/events/get",
        instance_id: clientId,
        cameras: camName ? [camName] : undefined,
        limit: 2000,
        after: startOfDay,
        before: endOfDay,
      });

      let parsed = wsData;
      if (typeof wsData === "string") {
        try { parsed = JSON.parse(wsData); } catch (e) { console.error("JSON Parse failed", e); }
      }
      if (parsed && parsed.events) {
        parsed = parsed.events;
        if (typeof parsed === "string") {
          try { parsed = JSON.parse(parsed); } catch (e) {}
        }
      }

      if (Array.isArray(parsed)) {
        const filteredEvents = camName ? parsed.filter((ev) => ev.camera === camName) : parsed;
        filteredEvents.sort((a, b) => b.start_time - a.start_time);
        this._events = filteredEvents;
        this._lastEventsFetch = Date.now();

        const visible = this._getFilteredEvents(filteredEvents);
        const keepSelected = visible.find((ev) => ev.id === this._selectedEvent?.id);
        this._selectedEvent = keepSelected || visible[0] || filteredEvents[0] || null;

        if (filteredEvents.length === 0 && this._historyMode === "events") {
          this._historyMode = "timeline";
        } else if (this._historyMode === "timeline" && !this._loadedVodStart) {
          this._setupTimelineVideo(this._timelineCursorTime);
        }
        if (manualRefresh) {
          this._showToast(`Loaded ${filteredEvents.length} event${filteredEvents.length === 1 ? "" : "s"}`);
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

  // --- RENDERING MAIN ---
  _openPopup() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        const ctx = CameraDashboardCard._sharedAudioCtx || (CameraDashboardCard._sharedAudioCtx = new AudioContext());
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
                type: "custom:passable-camera-card",
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
                  <button class="lens-toggle ${this._switchingLens ? 'disabled' : ''}" ?disabled=${this._switchingLens} @click=${(e) => { e.stopPropagation(); this._toggleLens(); }}>
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
    const lastFaceEnt = this._entities.frigate_last_face ? this.hass.states[this._entities.frigate_last_face] : null;
    const lastFace =
      lastFaceEnt &&
      lastFaceEnt.state &&
      !["none", "unknown", "unavailable"].includes(String(lastFaceEnt.state).toLowerCase())
        ? lastFaceEnt.state
        : null;

    return html`
      <div class="sheet-content ${this._pseudoFullscreen ? 'pseudo-fs-parent' : ''}">
        <div class="toast ${this._toastMsg ? "show" : ""}">
          <ha-icon icon="mdi:check-circle" style="--mdc-icon-size: 18px;"></ha-icon>
          ${this._toastMsg}
        </div>

        <div class="sheet-container">
          <div class="header">
            <div class="header-left">
              <div class="popup-status-row">
                <span class="status-dot ${isOffline ? "offline" : ""}"></span>
                <span class="popup-status-text">${isOffline ? "Offline" : "Connected & Streaming"}</span>
                ${lastFace ? html`<span class="face-pill">${Icons.User}<span>${lastFace}</span></span>` : ""}
              </div>
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
      <button
        class="nav-btn ${active ? "active" : ""}"
        @click=${() => {
          if (id !== "live" && this._micEnabled) this._micEnabled = false;
          this._activeTab = id;
        }}
      >
        ${icon}
        <span class="nav-btn-text ${active ? "active" : ""}">${label}</span>
      </button>
    `;
  }

  _renderDetectionBadge(type, icon, activeColor, isOverlay = false) {
    const frigateMap = {
      person: this._entities.frigate_person,
      vehicle: this._entities.frigate_vehicle,
      animal: this._entities.frigate_animal,
      motion: this._entities.frigate_motion_sensor,
    };
    let entId = this._entities[type];
    if (this.config?.use_frigate_badges && frigateMap[type]) {
      const fState = this.hass.states[frigateMap[type]];
      if (fState && fState.state !== "unavailable") {
        entId = frigateMap[type];
      }
    }
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

  _renderDpad(prefix = "dpad") {
    return html`
      <div class="${prefix}-container">
        <button class="${prefix}-btn ${prefix}-up" @pointerdown=${(e) => this._startPtz(e, this._entities.ptz_up)} @pointerup=${(e) => this._stopPtz(e)} @pointercancel=${(e) => this._stopPtz(e)}>${Icons.ChevronUp}</button>
        <button class="${prefix}-btn ${prefix}-left" @pointerdown=${(e) => this._startPtz(e, this._entities.ptz_left)} @pointerup=${(e) => this._stopPtz(e)} @pointercancel=${(e) => this._stopPtz(e)}>${Icons.ChevronLeft}</button>
        <button class="${prefix}-btn ${prefix}-right" @pointerdown=${(e) => this._startPtz(e, this._entities.ptz_right)} @pointerup=${(e) => this._stopPtz(e)} @pointercancel=${(e) => this._stopPtz(e)}>${Icons.ChevronRight}</button>
        <button class="${prefix}-btn ${prefix}-down" @pointerdown=${(e) => this._startPtz(e, this._entities.ptz_down)} @pointerup=${(e) => this._stopPtz(e)} @pointercancel=${(e) => this._stopPtz(e)}>${Icons.ChevronDown}</button>
      </div>
    `;
  }

  _renderZoomSlider(zoomEnt, isFullscreen = false) {
    const val = this._sliderVals["zoom"] !== undefined ? this._sliderVals["zoom"] : zoomEnt.state;
    return html`
      <input
        type="range"
        class="vertical-slider"
        min="${zoomEnt.attributes.min || 0}"
        max="${zoomEnt.attributes.max || 100}"
        step="${zoomEnt.attributes.step || 1}"
        .value=${val}
        @touchstart=${(e) => e.stopPropagation()}
        @touchmove=${(e) => e.stopPropagation()}
        @pointerdown=${isFullscreen ? () => { this._ptzActive = true; this._wakeFullscreenControls(); } : null}
        @pointerup=${isFullscreen ? () => { this._ptzActive = false; this._wakeFullscreenControls(); } : null}
        @pointercancel=${isFullscreen ? () => { this._ptzActive = false; this._wakeFullscreenControls(); } : null}
        @input=${(e) => {
          this._sliderVals["zoom"] = e.target.value;
          if (isFullscreen) this._wakeFullscreenControls();
          this.requestUpdate();
        }}
        @change=${() => this._commitSlider("zoom", this._entities.ptz_zoom)}
      />
    `;
  }

  // --- TAB: LIVE VIEW WITH TWO WAY AUDIO & FS OVERLAY ---
  _renderLiveTab() {
    const camState = this._getActiveCameraState();
    const hasTelephoto = !!this.hass.states[this._entities.camera_zoom];
    const showQualityToggle = !!this.config.frigate_camera_entity && this._activeLens === "wide" && !this._micEnabled;
    const showMic = camState && !this.config.hide_mic;
    const isFullscreenActive = this._isFullscreen || this._pseudoFullscreen;

    const trackState = this._entities.auto_track ? this.hass.states[this._entities.auto_track]?.state : "off";
    const lightState = this._entities.floodlight ? this.hass.states[this._entities.floodlight]?.state : "off";
    const sirenState = this._entities.siren ? this.hass.states[this._entities.siren]?.state : "off";

    const zoomEnt = this._entities.ptz_zoom ? this.hass.states[this._entities.ptz_zoom] : null;
    const showZoom = zoomEnt && !this.config.hide_zoom;
    const hasPTZ = !!(this._entities.ptz_up || this._entities.ptz_down || this._entities.ptz_left || this._entities.ptz_right);
    const showPTZ = hasPTZ && !this.config.hide_ptz;

    const showLeftPill = !!(this._entities.floodlight || this._entities.siren);
    const showRightPill = !!(this._entities.auto_track || this._entities.guard_return);
    const showPill = showLeftPill || showRightPill;
    const showGuardGoTo = !!this._entities.guard_go_to;
    const showGuardSet = !!this._entities.guard_set;
    const showRightColumn = showPill || (showPTZ && (showGuardGoTo || showGuardSet));

    return html`
      <div class="camera-box ${this._pseudoFullscreen ? 'pseudo-fullscreen' : ''}"
           @mousemove=${(e) => { this._wakeFullscreenControls(e); }}
           @touchstart=${(e) => { this._wakeFullscreenControls(e); }}
           @click=${(e) => {
             this._wakeFullscreenControls(e);
             if (!this._isMuted && !this._micEnabled) this._forceUnmute();
           }}>

        ${camState ? html`<div id="webrtc-wrapper-live" style="width:100%;height:100%;"></div>` : html`<div style="color: var(--secondary-text-color)">No Feed Available</div>`}

        ${this._switchingLens ? html`
          <div class="stream-switching-overlay">
            <ha-circular-progress active size="small"></ha-circular-progress>
            <span>${this._streamQuality === "main" ? "Connecting 4K Stream..." : `Connecting ${this._activeLens === "zoom" ? "Zoom" : "Wide"} Lens...`}</span>
          </div>
        ` : ''}

        ${this._micEnabled ? html`
          <div class="mic-live-banner">
            <span class="mic-live-dot"></span>
            MIC LIVE · Speaker Muted
          </div>
        ` : ''}

        ${camState ? html`
          <button
            class="overlay-icon-btn live-fs-btn fs-control-fade ${this._fsControlsVisible ? '' : 'fs-hidden'}"
            title="${isFullscreenActive ? 'Exit Fullscreen' : 'Fullscreen'}"
            @click=${(e) => this._toggleFullscreen(e)}
          >
            ${isFullscreenActive ? Icons.Minimize : Icons.Maximize}
          </button>

          <button
            class="overlay-icon-btn live-mute-btn fs-control-fade ${this._fsControlsVisible ? '' : 'fs-hidden'}"
            title="${this._isMuted || this._micEnabled ? 'Unmute Audio' : 'Mute Audio'}"
            @click=${(e) => this._toggleMute(e)}
          >
            ${this._isMuted || this._micEnabled ? Icons.VolumeX : Icons.Volume2}
          </button>
        ` : ''}

        <div class="live-br-controls fs-control-fade ${this._fsControlsVisible ? '' : 'fs-hidden'}">
          ${showMic ? html`
            <button
              class="mic-toggle-btn ${this._micEnabled ? 'mic-active' : ''}"
              title="${this._micEnabled ? 'Stop Two-Way Audio' : 'Start Two-Way Audio'}"
              @click=${(e) => this._toggleMic(e)}
            >
              ${this._micEnabled ? Icons.Mic : Icons.MicOff}
            </button>
          ` : ''}

          ${(showQualityToggle || hasTelephoto) ? html`
            <div class="live-br-row">
              ${showQualityToggle ? html`
                <button
                  class="lens-toggle ${this._streamQuality === 'main' ? 'quality-4k' : ''} ${this._switchingLens ? 'disabled' : ''}"
                  ?disabled=${this._switchingLens}
                  title="Toggle SD / 4K Stream"
                  @click=${(e) => this._toggleStreamQuality(e)}
                >
                  ${this._streamQuality === "main" ? "4K" : "SD"}
                </button>
              ` : ''}

              ${hasTelephoto ? html`
                <button
                  class="lens-toggle ${this._switchingLens ? 'disabled' : ''}"
                  ?disabled=${this._switchingLens}
                  @click=${(e) => {
                    e.stopPropagation();
                    this._toggleLens();
                  }}
                >
                  <ha-icon icon="${this._activeLens === "wide" ? "mdi:magnify-plus-outline" : "mdi:magnify-minus-outline"}" style="--mdc-icon-size: 16px; margin-right: 4px;"></ha-icon>
                  ${this._activeLens === "wide" ? "Wide" : "Zoom"}
                </button>
              ` : ''}
            </div>
          ` : ''}
        </div>

        ${(showZoom || showPTZ) ? html`
          <div class="landscape-ptz-overlay fs-control-fade ${this._fsControlsVisible ? '' : 'fs-hidden'}">
            ${showPTZ ? this._renderDpad("fs-dpad") : ''}

            ${showZoom ? html`
              <div class="fs-zoom-panel">
                <span style="font-weight: bold;">+</span>
                ${this._renderZoomSlider(zoomEnt, true)}
                <span style="font-weight: bold;">-</span>
              </div>
            ` : ''}
          </div>
        ` : ''}
      </div>

      ${showZoom || showPTZ || showRightColumn
        ? html`
            <div class="ptz-layout">
              ${showZoom
                ? html`
                    <div class="zoom-panel">
                      <div style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; height: 100%;">
                        <span style="color: var(--md-sys-color-on-surface, var(--primary-text-color)); font-weight: bold;">+</span>
                        ${this._renderZoomSlider(zoomEnt, false)}
                        <span style="color: var(--md-sys-color-on-surface, var(--primary-text-color)); font-weight: bold;">-</span>
                      </div>
                    </div>
                  `
                : ""}

              ${showPTZ ? this._renderDpad("dpad") : ""}

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

                      ${showPTZ && showGuardGoTo
                        ? html`
                            <button class="action-btn" @click=${() => this._trigger(this._entities.guard_go_to)}>
                              <ha-icon icon="mdi:target" style="margin-right: 6px;"></ha-icon> Go to Guard
                            </button>
                          `
                        : ""}

                      ${showPTZ && showGuardSet
                        ? html`
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

    const { camName, clientId } = this._getFrigateCameraInfo();
    const getMediaUrl = (eventId, type) => `/api/frigate/${clientId}/notifications/${eventId}/${type}`;
    const filteredEvents = this._getFilteredEvents();
    const activeEvent =
      this._selectedEvent && filteredEvents.some((ev) => ev.id === this._selectedEvent.id)
        ? this._selectedEvent
        : filteredEvents[0] || null;
    const hasClip = activeEvent && activeEvent.has_clip;
    const isFullscreenActive = this._isFullscreen || this._pseudoFullscreen;

    const pre = Math.max(0, Number(this.config.clip_pre_capture ?? 5));
    const post = Math.max(0, Number(this.config.clip_post_capture ?? 30));

    // Distinct labels and zone counts for filter chips
    const labelCounts = new Map();
    let hasZonedEvents = false;
    for (const ev of this._events) {
      if (ev.label) {
        labelCounts.set(ev.label, (labelCounts.get(ev.label) || 0) + 1);
      }
      if (Array.isArray(ev.zones) && ev.zones.length > 0) {
        hasZonedEvents = true;
      }
    }
    const labelList = Array.from(labelCounts.entries()).sort((a, b) => b[1] - a[1]);

    return html`
      <div class="history-player camera-box ${this._pseudoFullscreen ? 'pseudo-fullscreen' : ''}">
        ${this._historyMode === "timeline" ? html`
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
        ` : (activeEvent
          ? hasClip
            ? html`
                <video
                  id="history-video-event"
                  controls
                  playsinline
                  poster="${getMediaUrl(activeEvent.id, "thumbnail.jpg")}"
                  class="full-stream"
                  @timeupdate=${(e) => {
                    this._videoCurrentTime = e.target.currentTime;
                  }}
                  @loadedmetadata=${(e) => {
                    this._videoDuration = e.target.duration;
                    this._loadingVod = false;
                    if (this._pendingSeek !== null && this._pendingSeek !== undefined) {
                      e.target.currentTime = this._pendingSeek;
                      this._pendingSeek = null;
                    }
                  }}
                  @play=${() => (this._isPlaying = true)}
                  @pause=${() => (this._isPlaying = false)}
                ></video>
              `
            : html`<img src="${getMediaUrl(activeEvent.id, "snapshot.jpg")}" class="full-stream" style="object-fit: contain;" onerror="this.src='${getMediaUrl(activeEvent.id, "thumbnail.jpg")}'" />`
          : html`<div class="offline-placeholder">${this._events.length === 0 ? "No events found for this date" : "No events match current filter"}</div>`)}

        ${this._loadingVod ? html`
          <div class="stream-switching-overlay">
            <ha-circular-progress active size="small"></ha-circular-progress>
            <span>${this._historyMode === "timeline" ? "Loading timeline..." : "Loading clip..."}</span>
          </div>
        ` : ''}

        ${(this._historyMode === "timeline" || activeEvent) ? html`
          <button
            class="overlay-icon-btn live-fs-btn"
            title="${isFullscreenActive ? 'Exit Fullscreen' : 'Fullscreen'}"
            @click=${(e) => this._toggleFullscreen(e)}
          >
            ${isFullscreenActive ? Icons.Minimize : Icons.Maximize}
          </button>
        ` : ''}
      </div>

      ${this._historyMode === "events" && activeEvent ? this._renderSelectedEventMeta(activeEvent, camName, pre, post, getMediaUrl) : ''}

      <div class="history-controls-panel">
        <div class="history-toolbar">
          <div class="history-toggle-wrap">
            <button class="history-toggle-btn ${this._historyMode === 'events' ? 'active' : ''}" @click=${() => (this._historyMode = 'events')}>Events</button>
            <button class="history-toggle-btn ${this._historyMode === 'timeline' ? 'active' : ''}" @click=${() => (this._historyMode = 'timeline')}>Timeline</button>
          </div>

          <div class="history-date-actions">
            <div class="date-picker-wrap">
              ${Icons.Calendar}
              <input
                type="date"
                class="history-date-picker"
                .value=${this._selectedDate}
                @change=${(e) => {
                  this._eventFilter = "all";
                  this._zoneOnlyFilter = false;
                  this._timelineCursorTime = null;
                  this._loadedVodStart = null;
                  this._loadedVodEnd = null;
                  this._selectedDate = e.target.value;
                }}
              />
            </div>
            <button
              class="icon-pill-btn ${this._fetchingEvents ? 'spinning' : ''}"
              title="Refresh events"
              aria-label="Refresh events"
              @click=${() => this._fetchEvents(true)}
            >
              ${Icons.RefreshCw}
            </button>
          </div>
        </div>

        ${this._historyMode === "events" && this._events.length > 0 ? html`
          <div class="filter-chips-row">
            <button class="filter-chip ${this._eventFilter === 'all' ? 'active' : ''}" @click=${() => this._setEventFilter("all")}>
              All (${this._events.length})
            </button>
            ${labelList.map(([label, count]) => html`
              <button class="filter-chip ${this._eventFilter === label ? 'active' : ''}" @click=${() => this._setEventFilter(label)}>
                ${formatSettingName(label)} (${count})
              </button>
            `)}
            ${hasZonedEvents ? html`
              <button class="filter-chip ${this._zoneOnlyFilter ? 'active' : ''}" @click=${() => this._toggleZoneFilter()}>
                In Zone
              </button>
            ` : ''}
          </div>
        ` : ''}

        <div class="timeline-wrapper">
          ${this._historyMode === "events" ? this._renderEventsScroller(getMediaUrl, filteredEvents) : this._renderTimelineScrubber()}
        </div>

        ${this._historyMode === "timeline" ? html`
          <div class="timeline-controls" style="display: flex; justify-content: center; gap: 12px; margin: 12px 0;">
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

  _renderSelectedEventMeta(ev, camName, pre, post, getMediaUrl) {
    const startStr = new Date(ev.start_time * 1000).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    });
    const rawSub = Array.isArray(ev.sub_label) ? ev.sub_label[0] : ev.sub_label;
    const subLabel = rawSub ? String(rawSub) : "";
    const zones = Array.isArray(ev.zones) && ev.zones.length > 0 ? ev.zones.map(formatSettingName).join(", ") : "";
    const trackedSec = (ev.end_time || Math.floor(Date.now() / 1000)) - ev.start_time;
    const trackedLabel = ev.end_time ? `Tracked ${this._formatDuration(trackedSec)}` : "In Progress";

    return html`
      <div class="event-meta-bar">
        <div class="event-meta-info">
          <div class="event-meta-title">
            <span>${formatSettingName(ev.label)}${subLabel ? ` · ${subLabel}` : ""}</span>
            ${ev.has_clip && (pre > 0 || post > 0) ? html`
              <span class="event-pad-pill">+${pre}s / +${post}s</span>
            ` : ''}
          </div>
          <div class="event-meta-sub">
            ${startStr} · ${trackedLabel}${zones ? ` · ${zones}` : ""}
          </div>
        </div>
        <div class="event-meta-actions">
          <button
            class="meta-action-btn"
            title="Jump to Timeline"
            @click=${() => {
              this._timelineCursorTime = Math.max(0, ev.start_time - pre);
              this._historyMode = "timeline";
            }}
          >
            ${Icons.History}
            <span>Timeline</span>
          </button>
          ${ev.has_clip ? html`
            <a
              class="meta-action-btn"
              href="${this._eventDownloadUrl || getMediaUrl(ev.id, "clip.mp4")}"
              download="frigate-${camName}-${ev.id}.mp4"
              target="_blank"
              rel="noopener"
              title="Download Clip"
            >
              ${Icons.Download}
              <span>Clip</span>
            </a>
          ` : ''}
        </div>
      </div>
    `;
  }

  // --- Shared VOD Stream Attacher ---
  async _attachVodStream(videoEl, { vodUrl, startPosition = 0, isTimeline = false, onFallback = null, isStale = () => false }) {
    const abortCtrl = new AbortController();
    if (isTimeline) {
      this._vodAbortController = abortCtrl;
    } else {
      this._eventAbortController = abortCtrl;
    }
    const { signal } = abortCtrl;

    if (videoEl.canPlayType("application/vnd.apple.mpegurl")) {
      videoEl.src = vodUrl;
      videoEl.addEventListener(
        "loadedmetadata",
        () => {
          if (isStale()) return;
          this._loadingVod = false;
          if (startPosition > 0) videoEl.currentTime = startPosition;
          videoEl.play().catch((e) => {
            if (e.name !== "NotSupportedError") console.warn(e);
          });
        },
        { once: true, signal }
      );
      videoEl.addEventListener(
        "error",
        () => {
          if (isStale()) return;
          this._loadingVod = false;
          if (onFallback) onFallback();
          else this._showToast("Playback gap: Missing video segment.");
        },
        { once: true, signal }
      );
      return;
    }

    try {
      const Hls = await this._loadHls();
      if (isStale() || !videoEl.isConnected) return;

      if (Hls.isSupported()) {
        let networkRetries = 0;
        let mediaRecovered = false;
        const hls = new Hls({
          startPosition,
          xhrSetup: (xhr) => {
            if (this.hass?.auth?.data?.access_token) {
              xhr.setRequestHeader("Authorization", `Bearer ${this.hass.auth.data.access_token}`);
            }
          },
        });
        if (isTimeline) this._hls = hls;
        else this._eventHls = hls;

        hls.loadSource(vodUrl);
        hls.attachMedia(videoEl);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (isStale()) return;
          this._loadingVod = false;
          videoEl.play().catch((e) => {
            if (e.name !== "NotSupportedError") console.warn(e);
          });
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
          if (isStale() || !data.fatal) return;
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              if (networkRetries < 1) {
                networkRetries++;
                console.warn("HLS Network Error (likely a gap). Recovering...");
                hls.startLoad();
              } else {
                hls.destroy();
                if (isTimeline) this._hls = null;
                else this._eventHls = null;
                this._loadingVod = false;
                if (onFallback) onFallback();
                else this._showToast("Timeline gap: Playback stopped.");
              }
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              if (!mediaRecovered) {
                mediaRecovered = true;
                console.warn("HLS Media Error. Recovering...");
                hls.recoverMediaError();
              } else {
                hls.destroy();
                if (isTimeline) this._hls = null;
                else this._eventHls = null;
                this._loadingVod = false;
                if (onFallback) onFallback();
                else this._showToast("Timeline playback error.");
              }
              break;
            default:
              hls.destroy();
              if (isTimeline) this._hls = null;
              else this._eventHls = null;
              this._loadingVod = false;
              if (onFallback) onFallback();
              else this._showToast("Timeline gap: Playback stopped.");
              break;
          }
        });
      } else {
        this._loadingVod = false;
        if (onFallback) onFallback();
      }
    } catch (err) {
      if (isStale()) return;
      this._loadingVod = false;
      if (onFallback) onFallback();
      else this._showToast("Failed to load video player.");
    }
  }

  async _setupEventVideo(ev) {
    const reqId = ++this._eventVideoAbort;
    this._destroyEventHls();
    this._currentEventVideoId = ev.id;
    this._eventDownloadUrl = null;
    this._loadingVod = true;

    await this.updateComplete;
    if (reqId !== this._eventVideoAbort || this._activeTab !== "history" || this._historyMode !== "events") {
      return;
    }

    const videoEl = this.shadowRoot?.querySelector("#history-video-event");
    if (!videoEl) {
      this._loadingVod = false;
      return;
    }

    videoEl.pause();
    videoEl.removeAttribute("src");
    videoEl.load();

    const { camName, clientId } = this._getFrigateCameraInfo();
    const pre = Math.max(0, Number(this.config.clip_pre_capture ?? 5));
    const post = Math.max(0, Number(this.config.clip_post_capture ?? 30));
    const now = Math.floor(Date.now() / 1000);
    const startTs = Math.max(0, Math.floor(ev.start_time - pre));
    const rawEnd = ev.end_time ? Math.ceil(ev.end_time + post) : now;
    const endTs = Math.min(now, Math.max(startTs + 1, rawEnd));

    const rawVodUrl = `/api/frigate/${clientId}/vod/${camName}/start/${startTs}/end/${endTs}/index.m3u8`;
    const rawRecordingUrl = `/api/frigate/${clientId}/recording/${camName}/start/${startTs}/end/${endTs}`;
    const fallbackMp4Url = `/api/frigate/${clientId}/notifications/${ev.id}/clip.mp4`;

    const [vodUrl, signedRecUrl] = await Promise.all([
      this._signFrigateUrl(rawVodUrl),
      this._signFrigateUrl(rawRecordingUrl),
    ]);

    if (reqId !== this._eventVideoAbort || !videoEl.isConnected || this._activeTab !== "history" || this._historyMode !== "events") {
      return;
    }

    this._eventDownloadUrl = signedRecUrl !== rawRecordingUrl ? signedRecUrl : fallbackMp4Url;

    let didFallback = false;
    const fallbackToMp4 = () => {
      if (didFallback || reqId !== this._eventVideoAbort || !videoEl.isConnected) return;
      didFallback = true;
      this._destroyEventHls();
      this._currentEventVideoId = ev.id;
      this._loadingVod = false;
      videoEl.src = fallbackMp4Url;
      videoEl.play().catch(() => {});
    };

    await this._attachVodStream(videoEl, {
      vodUrl,
      startPosition: 0,
      isTimeline: false,
      onFallback: fallbackToMp4,
      isStale: () => reqId !== this._eventVideoAbort || !videoEl.isConnected,
    });
  }

  // --- Scroller Views for History ---
  _skipTimeline(seconds) {
    const { startOfDay } = this._getDateRange();
    if (!this._timelineCursorTime) {
      this._timelineCursorTime = this._getDefaultTimelineTime(startOfDay);
    }
    this._timelineCursorTime += seconds;
    this._syncTimelineScroll();
    this._handleTimelineSeek(this._timelineCursorTime);
  }

  _onTimelineScroll(e) {
    if (this._programmaticScroll) return;
    this._isSeeking = true;
    if (this._seekClearTimeout) clearTimeout(this._seekClearTimeout);

    const scrollLeft = e.currentTarget.scrollLeft;
    const { startOfDay } = this._getDateRange();
    const cursorTime = startOfDay + scrollLeft * 60;
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
    const scrollArea = this.shadowRoot?.querySelector("#timeline-scroll-area");
    if (!scrollArea) return;
    if (this._isPointerDown || this._isUserScrolling || this._isSeeking) return;

    const { startOfDay } = this._getDateRange();
    const cursorTime = this._timelineCursorTime || this._getDefaultTimelineTime(startOfDay);
    const targetScroll = (cursorTime - startOfDay) / 60;

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
      this._seekClearTimeout = setTimeout(() => (this._isSeeking = false), 500);
    };

    const videoEl = this.shadowRoot?.querySelector("#history-video-timeline");
    if (
      videoEl &&
      this._loadedVodStart &&
      this._loadedVodEnd &&
      cursorTime >= this._loadedVodStart &&
      cursorTime <= this._loadedVodEnd &&
      Number.isFinite(videoEl.duration) &&
      videoEl.duration > 0
    ) {
      const newTime = cursorTime - this._loadedVodStart;
      if (newTime >= 0 && newTime <= videoEl.duration) {
        videoEl.currentTime = newTime;
        releaseSeekLock();
        return;
      }
    }

    this._setupTimelineVideo(cursorTime).finally(() => releaseSeekLock());
  }

  _renderEventsScroller(getMediaUrl, eventsToRender = this._events) {
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
        ${eventsToRender.length === 0
          ? html`<div style="padding: 0 16px; color: var(--secondary-text-color); font-size: 13px;">${this._events.length === 0 ? "No events recorded for this date." : "No events match current filter."}</div>`
          : ""}
        ${eventsToRender.map((ev) => {
          const d = new Date(ev.start_time * 1000);
          const timeStr = d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
          const icon = ev.label === 'person' ? Icons.User : ev.label === 'car' ? Icons.Car : ev.label === 'dog' ? Icons.Dog : Icons.Activity;
          const isActive = this._selectedEvent?.id === ev.id;
          const durationBadge = ev.end_time ? this._formatDuration(ev.end_time - ev.start_time) : "Live";
          const rawSub = Array.isArray(ev.sub_label) ? ev.sub_label[0] : ev.sub_label;
          const zoneBadge = Array.isArray(ev.zones) && ev.zones.length > 0 ? formatSettingName(ev.zones[0]) : "";
          const caption = rawSub ? String(rawSub) : (zoneBadge || formatSettingName(ev.label));

          return html`
            <div class="timeline-node ${isActive ? 'active' : ''}" @click=${() => {
              this._selectedEvent = ev;
              this._timelineCursorTime = null;
            }}>
              <div class="timeline-time">${timeStr}</div>
              <div class="timeline-dot-wrapper"><div class="timeline-dot"></div></div>
              <div class="timeline-thumb">
                <img src="${getMediaUrl(ev.id, "thumbnail.jpg")}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'56\\'><rect width=\\'100\\' height=\\'56\\' fill=\\'%231e293b\\'/></svg>'"/>
                <div class="timeline-duration-badge">${durationBadge}</div>
                <div class="timeline-badge">${icon}</div>
              </div>
              <div class="timeline-caption" title="${caption}">${caption}</div>
            </div>
          `;
        })}
      </div>
    `;
  }

  _renderTimelineScrubber() {
    if (!this._events) return html``;

    const { startOfDay } = this._getDateRange();
    const fallbackTime = this._getDefaultTimelineTime(startOfDay);
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
    const reqId = ++this._timelineVideoAbort;
    await this.updateComplete;
    if (reqId !== this._timelineVideoAbort || this._activeTab !== "history" || this._historyMode !== "timeline") {
      return;
    }
    const videoEl = this.shadowRoot?.querySelector("#history-video-timeline");
    if (!videoEl) return;

    const { camName, clientId } = this._getFrigateCameraInfo();
    const { startOfDay } = this._getDateRange();
    const now = Math.floor(Date.now() / 1000);

    if (startOfDay > now) {
      this._loadingVod = false;
      this._showToast("Cannot load future dates.");
      return;
    }

    let targetTime = requestedTime || this._timelineCursorTime || this._getDefaultTimelineTime(startOfDay);
    if (targetTime > now) {
      targetTime = Math.max(startOfDay, now - 60);
    }

    const startWindow = Math.floor(targetTime - 5);
    let endWindow = Math.floor(targetTime + 3600);
    if (endWindow > now) endWindow = now;
    if (startWindow > now) {
      this._loadingVod = false;
      this._showToast("Cannot load future recordings.");
      return;
    }

    this._loadedVodStart = startWindow;
    this._loadedVodEnd = endWindow;
    this._loadingVod = true;

    const rawVodUrl = `/api/frigate/${clientId}/vod/${camName}/start/${startWindow}/end/${endWindow}/index.m3u8`;
    const vodUrl = await this._signFrigateUrl(rawVodUrl);
    if (reqId !== this._timelineVideoAbort || !videoEl.isConnected || this._activeTab !== "history" || this._historyMode !== "timeline") {
      return;
    }

    const offset = Math.max(0, targetTime - startWindow);
    this._destroyTimelineHls();

    await this._attachVodStream(videoEl, {
      vodUrl,
      startPosition: offset,
      isTimeline: true,
      isStale: () => reqId !== this._timelineVideoAbort || !videoEl.isConnected,
    });
  }

  // --- TAB: DETECTION ---
  _renderDetectionTab() {
    const hasFrigate = this._entities.frigate_detect || this._entities.frigate_recordings || this._entities.frigate_snapshots || this._entities.frigate_last_face;
    const hasReolinkAI =
      this._entities.sens_person ||
      this._entities.sens_vehicle ||
      this._entities.sens_animal ||
      this._entities.sens_motion ||
      this._entities.auto_track_method ||
      this._entities.siren_event ||
      this._entities.email_event ||
      this._entities.push_notif;
    const lastFaceState = this._entities.frigate_last_face ? this.hass.states[this._entities.frigate_last_face]?.state : null;

    return html`
      ${hasFrigate ? html`
        <div class="card-panel" style="margin-bottom: 16px;">
          <h4 class="panel-header">Frigate NVR Controls</h4>
          ${this._renderToggleRow(this._entities.frigate_detect, "Detect")}
          ${this._renderToggleRow(this._entities.frigate_motion, "Motion")}
          ${this._renderToggleRow(this._entities.frigate_recordings, "Recordings")}
          ${this._renderToggleRow(this._entities.frigate_snapshots, "Snapshots")}
          ${this._renderToggleRow(this._entities.frigate_review_alerts, "Review Alerts")}
          ${this._renderToggleRow(this._entities.frigate_review_detections, "Review Detections")}
          ${this._entities.frigate_last_face ? html`
            <div class="diag-row">
              <span style="font-size: 14px; font-weight: 500;">Last Recognized Face</span>
              <span style="font-size: 14px; font-weight: 600; color: var(--secondary-text-color);">${lastFaceState || "None"}</span>
            </div>
          ` : ''}
        </div>
      ` : ""}

      ${hasReolinkAI ? html`
        <div class="card-panel">
          <h4 class="panel-header">Camera On-Device AI (Reolink)</h4>
          ${this._renderSliderRow(this._entities.sens_person, "Person Sensitivity", Icons.User)}
          ${this._renderSliderRow(this._entities.sens_vehicle, "Vehicle Sensitivity", Icons.Car)}
          ${this._renderSliderRow(this._entities.sens_animal, "Animal Sensitivity", Icons.Dog)}
          ${this._renderSliderRow(this._entities.sens_motion, "Standard Motion Sensitivity", Icons.Activity)}

          ${(this._entities.auto_track_method || this._entities.siren_event || this._entities.email_event || this._entities.push_notif) ? html`
            <div class="spacer"></div>
            <h4 class="panel-header">Camera Tracking & Reactions</h4>
            ${this._renderSelectRow(this._entities.auto_track_method, "Auto Track Method")}
            ${this._renderToggleRow(this._entities.siren_event, "Siren on Event")}
            ${this._renderToggleRow(this._entities.email_event, "Email on Event")}
            ${this._renderToggleRow(this._entities.push_notif, "Push Notifications")}
          ` : ''}
        </div>
      ` : ""}
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
        ${this._renderUpdateRow(this._entities.firmware, "Firmware Status")}
        
        <div style="margin-top: 16px; display: flex; flex-direction: column; gap: 10px;">
          ${this._entities.ptz_calibrate ? html`
            <button
              class="action-btn secondary ${this._btnStates['ptz_cal'] === 'confirm' ? 'btn-confirm' : this._btnStates['ptz_cal'] === 'success' ? 'btn-success' : ''}"
              style="width: 100%;"
              @click=${() => this._handleSafeAction('ptz_cal', this._entities.ptz_calibrate)}
            >
              ${this._btnStates['ptz_cal'] === 'confirm' ? 'Confirm Calibration?' : this._btnStates['ptz_cal'] === 'success' ? 'Calibration Started!' : 'Calibrate PTZ'}
            </button>
          ` : ''}

          ${this._entities.restart ? html`
            <button
              class="action-btn secondary ${this._btnStates['restart'] === 'confirm' ? 'btn-confirm' : this._btnStates['restart'] === 'success' ? 'btn-success' : ''}"
              style="width: 100%; color: var(--error-color, #ef4444); border-color: rgba(239, 68, 68, 0.3);"
              @click=${() => this._handleSafeAction('restart', this._entities.restart)}
            >
              <ha-icon icon="mdi:restart" style="margin-right: 6px; --mdc-icon-size: 18px;"></ha-icon>
              ${this._btnStates['restart'] === 'confirm' ? 'Confirm Restart Camera?' : this._btnStates['restart'] === 'success' ? 'Restarting Camera...' : 'Restart Camera'}
            </button>
          ` : ''}
        </div>
      </div>

      ${this._renderPopup(this._entities.day_night_mode, "Day / Night Mode")}
      ${this._renderPopup(this._entities.floodlight_mode, "Floodlight Mode")}
      ${this._renderPopup(this._entities.floodlight_event_mode, "Floodlight Event Mode")}
    `;
  }

  _renderUpdateRow(entity_id, label) {
    if (!entity_id) return "";
    const ent = this.hass.states[entity_id];
    if (!ent) return "";
    const hasUpdate = ent.state === "on";
    const installed = ent.attributes?.installed_version || "";
    const latest = ent.attributes?.latest_version || "";

    return html`
      <div class="diag-row">
        <div style="display: flex; flex-direction: column;">
          <span style="font-size: 14px; font-weight: 500;">${label}</span>
          ${installed ? html`<span style="font-size: 11px; color: var(--secondary-text-color);">Installed: v${installed}</span>` : ""}
        </div>
        <div>
          ${hasUpdate
            ? html`<span style="font-size: 12px; font-weight: 600; color: var(--warning-color, #f59e0b); background: rgba(245, 158, 11, 0.15); padding: 4px 8px; border-radius: 12px;">Update Available (${latest})</span>`
            : html`<span style="font-size: 12px; font-weight: 500; color: var(--success-color, #10b981);">Up to date</span>`
          }
        </div>
      </div>
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
          @change=${() => this._commitSlider(entity_id, entity_id)}
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
        transition: background 0.2s, border-color 0.2s;
        z-index: 3;
      }
      .lens-toggle:active {
        background: rgba(0, 0, 0, 0.8);
      }
      .lens-toggle.quality-4k {
        background: rgba(2, 132, 199, 0.78);
        border-color: rgba(125, 211, 252, 0.55);
      }

      .live-br-controls {
        position: absolute;
        bottom: 12px;
        right: 12px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 8px;
        z-index: 6;
        pointer-events: none;
      }
      .live-br-row {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .live-br-controls .lens-toggle,
      .live-br-controls .mic-toggle-btn {
        position: static;
      }

      .overlay-icon-btn {
        position: absolute;
        pointer-events: auto;
        background: rgba(0, 0, 0, 0.6);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(4px);
        cursor: pointer;
        z-index: 6;
        transition: background 0.2s, transform 0.1s;
      }
      .overlay-icon-btn:active {
        transform: scale(0.92);
        background: rgba(0, 0, 0, 0.82);
      }
      .live-fs-btn {
        top: 12px;
        right: 12px;
      }
      .live-mute-btn {
        bottom: 12px;
        left: 12px;
      }

      .mic-live-banner {
        position: absolute;
        top: 12px;
        left: 12px;
        z-index: 6;
        pointer-events: none;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 5px 10px;
        border-radius: 999px;
        background: rgba(220, 38, 38, 0.88);
        color: #fff;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.03em;
        backdrop-filter: blur(4px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
      }
      .mic-live-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #fff;
        animation: pulse-mic 1.5s infinite;
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
        pointer-events: auto;
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
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
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
      .camera-box.pseudo-fullscreen .fs-control-fade.fs-hidden,
      .camera-box:fullscreen .fs-control-fade.fs-hidden *, 
      .camera-box:-webkit-full-screen .fs-control-fade.fs-hidden *,
      .camera-box.pseudo-fullscreen .fs-control-fade.fs-hidden * {
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
        touch-action: none;
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
        background: rgba(18, 18, 18, 0.85);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 50%;
        padding: 12px;
        touch-action: none;
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
        background: rgba(18, 18, 18, 0.85);
        border-radius: 24px;
        padding: 16px 12px;
        height: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.15);
        touch-action: none;
      }
      .fs-zoom-panel input[type="range"] {
        -webkit-appearance: slider-vertical;
        height: 120px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        outline: none;
        accent-color: var(--primary-color, #2563eb);
      }

      /* STREAM SWITCHING OVERLAY */
      .stream-switching-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
        color: #ffffff;
        font-size: 14px;
        font-weight: 500;
        z-index: 4;
        pointer-events: none;
        animation: fadeIn 0.15s ease;
      }
      .lens-toggle.disabled, .lens-toggle[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
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

      /* --- POPUP CONTAINER & STATUS BAR --- */
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
      .sheet-content.pseudo-fs-parent .nav {
        display: none !important;
      }
      .sheet-content.pseudo-fs-parent .content-area {
        padding: 0 !important;
        overflow: hidden !important;
      }

      .sheet-container {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .header {
        padding: 12px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        margin-bottom: 12px;
        flex-shrink: 0;
        gap: 12px;
      }
      .header-left {
        display: flex;
        flex-direction: column;
        min-width: 0;
      }
      .header-right {
        flex-shrink: 0;
      }
      .popup-status-row {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px;
      }
      .popup-status-row .status-dot {
        margin-right: 0;
      }
      .popup-status-text {
        color: var(--secondary-text-color, #757575);
        font-size: 13px;
        font-weight: 500;
      }
      .face-pill {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 600;
        background: rgba(var(--rgb-primary-color, 37, 99, 235), 0.14);
        color: var(--primary-color, #2563eb);
      }
      .face-pill svg {
        width: 12px;
        height: 12px;
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
        min-width: 0;
        box-sizing: border-box;
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
      
      .history-controls-panel {
        padding: 2px 0 0;
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        container-type: inline-size;
      }
      .history-toolbar {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        margin-bottom: 10px;
        width: 100%;
        box-sizing: border-box;
      }
      .history-date-actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
        flex: 0 1 auto;
        min-width: 0;
        max-width: 100%;
      }
      .date-picker-wrap {
        display: flex;
        align-items: center;
        gap: 6px;
        background: var(--secondary-background-color, #f1f5f9);
        padding: 6px 12px;
        border-radius: 18px;
        min-width: 0;
        max-width: 100%;
        height: 36px;
        box-sizing: border-box;
      }
      .date-picker-wrap svg {
        color: var(--secondary-text-color);
        flex-shrink: 0;
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
        min-width: 0;
        max-width: 100%;
      }
      .history-date-picker::-webkit-calendar-picker-indicator {
        cursor: pointer;
      }
      
      .history-player {
        margin-bottom: 0;
      }

      .history-toggle-wrap {
        display: flex;
        flex: 1 1 170px;
        max-width: 220px;
        min-width: 0;
        background: var(--secondary-background-color, #f1f5f9);
        border-radius: var(--control-circular-border-radius, 9999px);
        padding: 4px;
        gap: 4px;
        box-sizing: border-box;
      }
      .history-toggle-btn {
        flex: 1;
        min-width: 0;
        border: none;
        background: transparent;
        padding: 6px 12px;
        border-radius: var(--control-circular-border-radius, 9999px);
        font-size: 13px;
        font-weight: 600;
        color: var(--secondary-text-color);
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
      }
      .history-toggle-btn.active {
        background: var(--ha-card-background, #fff);
        color: var(--primary-text-color);
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      }

      .icon-pill-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        flex-shrink: 0;
        border-radius: 50%;
        border: none;
        background: var(--secondary-background-color, #f1f5f9);
        color: var(--secondary-text-color);
        cursor: pointer;
        transition: background 0.2s, color 0.2s;
      }
      .icon-pill-btn:hover {
        color: var(--primary-text-color);
      }
      .icon-pill-btn.spinning svg {
        animation: spin 0.9s linear infinite;
      }

      .filter-chips-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding: 0 0 10px;
      }
      .filter-chip {
        border: 1px solid var(--divider-color, #e2e8f0);
        background: var(--secondary-background-color, #f1f5f9);
        color: var(--secondary-text-color);
        border-radius: 999px;
        padding: 4px 10px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }
      .filter-chip.active {
        background: var(--primary-color, #2563eb);
        color: var(--text-primary-color, #fff);
        border-color: var(--primary-color, #2563eb);
      }

      .event-meta-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        padding: 10px 14px;
        background: var(--ha-card-background, #fff);
        border: 1px solid var(--divider-color, #e2e8f0);
        border-radius: var(--ha-card-border-radius, 12px);
        flex-wrap: wrap;
        width: 100%;
        box-sizing: border-box;
      }
      .event-meta-info {
        display: flex;
        flex-direction: column;
        gap: 3px;
        min-width: 0;
      }
      .event-meta-title {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
        font-size: 14px;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      .event-pad-pill {
        font-size: 11px;
        font-weight: 600;
        padding: 2px 7px;
        border-radius: 999px;
        background: rgba(var(--rgb-primary-color, 37, 99, 235), 0.14);
        color: var(--primary-color, #2563eb);
      }
      .event-meta-sub {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .event-meta-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
        flex-wrap: wrap;
      }
      .meta-action-btn {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 6px 11px;
        border-radius: 10px;
        border: 1px solid var(--divider-color, #e2e8f0);
        background: var(--secondary-background-color, #f1f5f9);
        color: var(--primary-text-color);
        font-size: 12px;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
        transition: background 0.2s;
      }
      .meta-action-btn svg {
        width: 14px;
        height: 14px;
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
        gap: 10px 16px;
        padding: 8px 0 4px;
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
      .timeline-duration-badge {
        position: absolute;
        top: 4px;
        left: 4px;
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
        font-size: 10px;
        font-weight: 600;
        padding: 2px 5px;
        border-radius: 4px;
        line-height: 1.2;
      }
      .timeline-caption {
        font-size: 11px;
        font-weight: 500;
        color: var(--secondary-text-color);
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
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
        border-radius: var(--ha-card-border-radius, 12px);
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

      @container (max-width: 430px) {
        .history-toolbar {
          flex-direction: column;
          align-items: stretch;
          gap: 8px;
        }
        .history-toggle-wrap {
          flex: none;
          width: 100%;
          max-width: none;
        }
        .history-date-actions {
          width: 100%;
          justify-content: space-between;
        }
        .date-picker-wrap {
          flex: 1 1 auto;
        }
        .history-date-picker {
          flex: 1 1 auto;
          width: 100%;
        }
      }

      @media (max-width: 480px) {
        .history-toolbar {
          flex-direction: column;
          align-items: stretch;
          gap: 8px;
        }
        .history-toggle-wrap {
          flex: none;
          width: 100%;
          max-width: none;
        }
        .history-date-actions {
          width: 100%;
          justify-content: space-between;
        }
        .date-picker-wrap {
          flex: 1 1 auto;
        }
        .history-date-picker {
          flex: 1 1 auto;
          width: 100%;
        }
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

      @media (max-width: 380px) {
        .nav { gap: 8px; }
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
    { name: "clip_pre_capture", label: "Clip Pre-Capture (seconds)", selector: { number: { min: 0, max: 60, step: 1, mode: "box" } } },
    { name: "clip_post_capture", label: "Clip Post-Capture (seconds)", selector: { number: { min: 0, max: 120, step: 1, mode: "box" } } },
    { name: "talk_stream_suffix", label: "Two-Way Talk Stream Suffix", selector: { text: {} } },
    { name: "use_frigate_badges", label: "Use Frigate Sensors for Badges", selector: { boolean: {} } },
    { name: "hide_ptz", label: "Hide PTZ Controls", selector: { boolean: {} } },
    { name: "hide_zoom", label: "Hide Zoom Slider", selector: { boolean: {} } },
    { name: "hide_mic", label: "Hide Microphone Button", selector: { boolean: {} } },
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
    clip_pre_capture: 5,
    clip_post_capture: 30,
    talk_stream_suffix: "_talk",
    use_frigate_badges: true,
    hide_ptz: false,
    hide_zoom: false,
    hide_mic: false,
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
  documentationURL: "https://github.com/GBear09/passable-camera-card",
  description: "A comprehensive LitElement dashboard card for cameras featuring live stream, WebRTC, PTZ controls, Frigate event history, and timeline playback.",
});
