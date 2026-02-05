import './EditorArea.css'
import Toolbar from './Toolbar'
import Canvas from './Canvas'
import TemplatePreview from './canvas/TemplatePreview'

export default function EditorArea({
  isPanelOpen,
  showTemplatePreview,
  template,
  selectedPageIndex,
  onPageSelect,
  mappings,
  onFieldMap,
  onFieldUnmap,
  isClickToMapMode,
  schema,
  isMarketerMode = false,
  highlightedElementId,
  isApplied = false
}) {
  return (
    <main className={`editor-area ${isPanelOpen ? '' : 'panel-closed'}`}>
      {!showTemplatePreview && <Toolbar />}
      <div className="canvas-container">
        {showTemplatePreview ? (
          <TemplatePreview
            template={template}
            selectedPageIndex={selectedPageIndex}
            onPageSelect={onPageSelect}
            mappings={mappings}
            onFieldMap={onFieldMap}
            onFieldUnmap={onFieldUnmap}
            isClickToMapMode={isClickToMapMode}
            schema={schema}
            isMarketerMode={isMarketerMode}
            highlightedElementId={highlightedElementId}
            isApplied={isApplied}
          />
        ) : (
          <Canvas />
        )}
      </div>
    </main>
  )
}
