import { useState } from 'react'
import PageThumbnailStrip from '../autofill/PageThumbnailStrip'
import { CLIENTS } from '../../data/sampleData'
import './panels.css'

export default function MarketerPreview({
  template,
  client,
  selectedPageIndex,
  onPageSelect,
  onBack,
  onClose
}) {
  const [isGenerating, setIsGenerating] = useState(false)

  if (!template) return null

  const clientData = CLIENTS.find(c => c.id === client)

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate generation delay
    setTimeout(() => {
      setIsGenerating(false)
      // In real app, this would generate the filled document
    }, 1500)
  }

  return (
    <div className="marketer-preview">
      {/* Header */}
      <div className="panel-nav-header">
        <button className="back-btn" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="panel-nav-title">Preview</h2>
        <button className="autofill-close" onClick={onClose}>×</button>
      </div>

      {/* Template Info */}
      <div className="preview-info">
        <div className="preview-template-name">{template.title}</div>
        <div className="preview-template-type">{template.type}</div>
      </div>

      {/* Page Thumbnails */}
      <PageThumbnailStrip
        pages={template.pages}
        selectedIndex={selectedPageIndex}
        onPageSelect={onPageSelect}
      />

      {/* Client Data Preview */}
      <div className="preview-data-section">
        <h4 className="section-label">Data Source</h4>
        <div className="preview-data-card">
          <span className="data-icon">🏢</span>
          <span className="data-label">{clientData?.label || client}</span>
          <span className="data-check">✓</span>
        </div>
      </div>

      {/* Fields that will be filled */}
      <div className="preview-fields-section">
        <h4 className="section-label">Fields to autofill</h4>
        <div className="preview-fields-list">
          <div className="preview-field-item">
            <span className="field-icon">T</span>
            <span className="field-name">Company name</span>
            <span className="field-arrow">→</span>
            <span className="field-value">{clientData?.label || 'Company'}</span>
          </div>
          <div className="preview-field-item">
            <span className="field-icon">T</span>
            <span className="field-name">Employee type</span>
            <span className="field-arrow">→</span>
            <span className="field-value">Full-time</span>
          </div>
          <div className="preview-field-item">
            <span className="field-icon">⊞</span>
            <span className="field-name">Contact info</span>
            <span className="field-arrow">→</span>
            <span className="field-value">3 rows</span>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <button 
        className={`generate-btn ${isGenerating ? 'generating' : ''}`}
        onClick={handleGenerate}
        disabled={isGenerating}
      >
        {isGenerating ? (
          <>
            <span className="spinner">⟳</span>
            Generating...
          </>
        ) : (
          <>
            <span className="generate-icon">✨</span>
            Generate Document
          </>
        )}
      </button>
    </div>
  )
}
