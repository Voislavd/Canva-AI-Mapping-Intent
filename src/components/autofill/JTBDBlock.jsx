import './autofill.css'

export default function JTBDBlock({ 
  mode, 
  jobs, 
  onJobSelect
}) {
  const isMarketer = mode === 'marketer'
  
  return (
    <div className="jtbd-block">
      {/* Header */}
      <div className="jtbd-header">
        <h3 className="jtbd-title">
          {isMarketer ? 'Quick start' : 'What do you want to configure?'}
        </h3>
      </div>

      {/* Job Options */}
      <div className="jtbd-options">
        {jobs.map(job => (
          <button
            key={job.id}
            className="jtbd-option"
            onClick={() => onJobSelect(job)}
          >
            <span className="jtbd-option-icon">{job.icon}</span>
            <span className="jtbd-option-content">
              <span className="jtbd-option-title">
                {job.title}
                {job.recommended && (
                  <span className="jtbd-recommended">Recommended</span>
                )}
              </span>
              <span className="jtbd-option-desc">{job.description}</span>
            </span>
            <span className="jtbd-option-chevron">›</span>
          </button>
        ))}
      </div>

    </div>
  )
}
