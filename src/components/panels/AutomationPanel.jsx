import { useState } from 'react'
import './panels.css'

export default function AutomationPanel({ onBack, onClose }) {
  const [settings, setSettings] = useState({
    autoRefresh: true,
    refreshInterval: '1hour',
    eventTriggers: false,
    reviewCheckpoints: true,
    autoPublish: false,
    publishChannel: 'none'
  })

  const updateSetting = (key, value) => {
    setSettings({ ...settings, [key]: value })
  }

  return (
    <div className="automation-panel">
      {/* Header */}
      <div className="panel-nav-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <h2 className="panel-nav-title">Automation</h2>
        <button className="autofill-close" onClick={onClose}>×</button>
      </div>

      <div className="automation-settings">
        {/* Data Refresh Section */}
        <div className="settings-section">
          <div className="settings-section-header">
            <div className="settings-icon">🔄</div>
            <div className="settings-section-info">
              <h3 className="settings-section-title">Data refresh</h3>
              <p className="settings-section-desc">Automatically update designs when data changes</p>
            </div>
          </div>

          <div className="settings-options">
            <div className="setting-row">
              <span className="setting-label">Auto-refresh</span>
              <button
                className={`toggle ${settings.autoRefresh ? 'on' : ''}`}
                onClick={() => updateSetting('autoRefresh', !settings.autoRefresh)}
              >
                <span className="toggle-knob" />
              </button>
            </div>

            {settings.autoRefresh && (
              <div className="setting-row-pills">
                <span className="setting-label">Check for updates</span>
                <div className="pill-options">
                  {[
                    { value: '15min', label: '15 min' },
                    { value: '1hour', label: '1 hour' },
                    { value: 'daily', label: 'Daily' }
                  ].map(opt => (
                    <button
                      key={opt.value}
                      className={`pill-option ${settings.refreshInterval === opt.value ? 'active' : ''}`}
                      onClick={() => updateSetting('refreshInterval', opt.value)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Event Triggers Section */}
        <div className="settings-section">
          <div className="settings-section-header">
            <div className="settings-icon">⚡</div>
            <div className="settings-section-info">
              <h3 className="settings-section-title">Event triggers</h3>
              <p className="settings-section-desc">Generate designs when external events occur</p>
            </div>
          </div>

          <div className="settings-options">
            <div className="setting-row">
              <span className="setting-label">Enable event triggers</span>
              <button
                className={`toggle ${settings.eventTriggers ? 'on' : ''}`}
                onClick={() => updateSetting('eventTriggers', !settings.eventTriggers)}
              >
                <span className="toggle-knob" />
              </button>
            </div>

            {settings.eventTriggers && (
              <div className="setting-row">
                <button className="setting-button">Configure webhooks</button>
              </div>
            )}
          </div>
        </div>

        {/* Review Checkpoints Section */}
        <div className="settings-section">
          <div className="settings-section-header">
            <div className="settings-icon">👁️</div>
            <div className="settings-section-info">
              <h3 className="settings-section-title">Review checkpoints</h3>
              <p className="settings-section-desc">Pause workflow for human review before publishing</p>
            </div>
          </div>

          <div className="settings-options">
            <div className="setting-row">
              <span className="setting-label">Require approval</span>
              <button
                className={`toggle ${settings.reviewCheckpoints ? 'on' : ''}`}
                onClick={() => updateSetting('reviewCheckpoints', !settings.reviewCheckpoints)}
              >
                <span className="toggle-knob" />
              </button>
            </div>
          </div>
        </div>

        {/* Auto-publish Section */}
        <div className="settings-section">
          <div className="settings-section-header">
            <div className="settings-icon">📤</div>
            <div className="settings-section-info">
              <h3 className="settings-section-title">Auto-publish</h3>
              <p className="settings-section-desc">Automatically publish approved designs</p>
            </div>
          </div>

          <div className="settings-options">
            <div className="setting-row">
              <span className="setting-label">Enable auto-publish</span>
              <button
                className={`toggle ${settings.autoPublish ? 'on' : ''}`}
                onClick={() => updateSetting('autoPublish', !settings.autoPublish)}
              >
                <span className="toggle-knob" />
              </button>
            </div>

            {settings.autoPublish && (
              <div className="setting-row-pills">
                <span className="setting-label">Publish to</span>
                <div className="pill-options">
                  {[
                    { value: 'drive', label: 'Drive' },
                    { value: 'dropbox', label: 'Dropbox' },
                    { value: 'slack', label: 'Slack' }
                  ].map(opt => (
                    <button
                      key={opt.value}
                      className={`pill-option ${settings.publishChannel === opt.value ? 'active' : ''}`}
                      onClick={() => updateSetting('publishChannel', opt.value)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
