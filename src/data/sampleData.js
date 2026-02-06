// Sample data for the Autofill prototype

export const PERSONAS = [
  { id: 'marketer', label: 'Marketer' },
  { id: 'admin', label: 'Admin' }
]

export const BRANDS = [
  { id: 'one-digital', label: 'One Digital' },
  { id: 'acme', label: 'Acme Corp' },
  { id: 'globex', label: 'Globex Inc' }
]

export const CATEGORIES = [
  { id: 'benefits', label: 'Benefits' },
  { id: 'onboarding', label: 'Onboarding' },
  { id: 'training', label: 'Training' }
]

export const CLIENTS = [
  { id: 'hyperscape', label: 'Hyperscape' },
  { id: 'techcorp', label: 'TechCorp' },
  { id: 'globalinc', label: 'GlobalInc' }
]

export const DATA_SOURCES = [
  { id: 'benefits-hris', name: 'Benefits HRIS One Digital', connected: true },
  { id: 'rates-db', name: 'Rates Database', connected: true },
  { id: 'payroll-system', name: 'Payroll System', connected: false }
]

export const SCHEMA = {
  id: 'benefits-hris',
  name: 'Benefits HRIS One Digital',
  fields: [
    { id: 'company-name', label: 'Company name', type: 'text', sampleValue: 'Acme Corporation' },
    { id: 'employee-type', label: 'Employee type', type: 'text', sampleValue: 'Full-time' },
    { id: 'employee-id', label: 'Employee id', type: 'text', sampleValue: 'EMP-4821' },
    { id: 'job-type', label: 'Job type', type: 'text', sampleValue: 'Salaried' },
    { id: 'job-title', label: 'Job title', type: 'text', sampleValue: 'Senior Engineer' },
    { id: 'department', label: 'Department', type: 'text', sampleValue: 'Engineering' },
    { id: 'start-date', label: 'Start date', type: 'text', sampleValue: 'Jan 15, 2024' },
    { id: 'manager-name', label: 'Manager name', type: 'text', sampleValue: 'Sarah Chen' },
    { id: 'office-location', label: 'Office location', type: 'text', sampleValue: 'New York, NY' },
    { id: 'employee-count', label: 'Employee count', type: 'text', sampleValue: '2,450' },
  ],
  media: [
    { id: 'hero-photo', label: 'Hero photo', type: 'image', sampleValue: 'hero-001.jpg' },
    { id: 'company-logo', label: 'Company logo', type: 'image', sampleValue: 'logo.png' },
    { id: 'team-photo', label: 'Team photo', type: 'image', sampleValue: 'team-2024.jpg' },
  ],
  tables: [
    { 
      id: 'contact-info', 
      label: 'Contact information',
      columns: ['Benefit Type', 'Provider', 'Contact'],
      rows: [
        ['Medical Insurance', 'BlueCross BlueShield', '1-800-262-2583'],
        ['Health Savings Account (HSA)', 'HealthEquity', '1-866-346-5800'],
        ['Health Reimbursement Arrangement (HRA)', 'WageWorks', '1-877-924-3967'],
        ['Flexible Spending Accounts (FSAs)', 'WageWorks', '1-877-924-3967'],
        ['Employee Assistance Program (EAP)', 'ComPsych', '1-800-497-9133'],
        ['Dental Insurance', 'Delta Dental', '1-800-765-6003'],
        ['Vision Insurance', 'VSP Vision Care', '1-800-877-7195'],
        ['Life and AD&D Insurance', 'MetLife Group', '1-800-638-5433'],
        ['Disability Insurance', 'MetLife Group', '1-800-638-5433'],
        ['401(k) Retirement Savings', 'Fidelity', '1-800-343-3548'],
        ['Family Support', 'Bright Horizons', '1-877-242-2737'],
      ]
    },
    { 
      id: 'benefits-summary', 
      label: 'Benefits summary',
      columns: ['Benefit', 'Provider', 'Details'],
      rows: [
        ['Medical', 'BlueCross', 'PPO Plan'],
        ['Dental', 'Delta', 'Basic Coverage'],
      ]
    },
  ]
}

export const TEMPLATES = [
  {
    id: 'template-1',
    title: 'Employee Benefits Guide',
    type: 'Multi-page PDF',
    category: 'benefits',
    isMapped: true,
    thumbnail: '/images/templates/benefits-guide1.png',
    bgColor: '#F6F7F8', // Light gray
    pages: [
      {
        id: 'page-1',
        title: 'Cover',
        elements: [
          { id: 'el-1', type: 'text', label: 'ABC Company', x: 740, y: 178, width: 200, mappedField: 'company-name' },
          { id: 'el-2', type: 'text', label: 'For xx employees', x: 740, y: 663, width: 200, mappedField: 'employee-count' },
          { id: 'el-12', type: 'image', label: 'Hero Image', x: 740, y: 400, width: 300, height: 200, mappedField: 'hero-photo' },
          { id: 'el-13', type: 'image', label: 'Company Logo', x: 740, y: 100, width: 150, height: 80, mappedField: 'company-logo' },
        ]
      },
      {
        id: 'page-2',
        title: 'Overview',
        elements: [
          { id: 'el-10', type: 'text', label: 'Department Name', x: 100, y: 200, width: 200, mappedField: 'department' },
          { id: 'el-11', type: 'text', label: 'Start Date', x: 100, y: 300, width: 150, mappedField: 'start-date' },
          { id: 'el-14', type: 'text', label: 'Job Type', x: 100, y: 400, width: 150, mappedField: 'job-type' },
          { id: 'el-15', type: 'text', label: 'Job Title', x: 100, y: 450, width: 200, mappedField: 'job-title' },
          { id: 'el-16', type: 'text', label: 'Manager Name', x: 100, y: 500, width: 200, mappedField: 'manager-name' },
          { id: 'el-17', type: 'text', label: 'Office Location', x: 100, y: 550, width: 200, mappedField: 'office-location' },
          { id: 'el-18', type: 'text', label: 'Employee Type', x: 300, y: 200, width: 150, mappedField: 'employee-type' },
          { id: 'el-19', type: 'text', label: 'Employee ID', x: 300, y: 250, width: 150, mappedField: 'employee-id' },
          { id: 'el-20', type: 'image', label: 'Team Photo', x: 400, y: 400, width: 250, height: 180, mappedField: 'team-photo' },
        ]
      },
      {
        id: 'page-3',
        title: 'Contact',
        elements: [
          { id: 'el-4', type: 'table', label: 'Contact Information', x: 740, y: 300, width: 400, mappedField: 'contact-info' },
        ]
      }
    ]
  },
  {
    id: 'template-2',
    title: 'Employee Benefits Guide',
    type: 'Multi-page PDF',
    category: 'benefits',
    isMapped: true,
    thumbnail: '/images/templates/benefits-guide2.png',
    bgColor: '#F6F7F8',
    pages: [
      {
        id: 't2-page-1',
        title: 'Cover',
        elements: [
          { id: 't2-el-1', type: 'text', label: 'ABC Company', mappedField: 'company-name' },
          { id: 't2-el-2', type: 'text', label: 'For xx employees', mappedField: 'employee-count' },
          { id: 't2-el-3', type: 'image', label: 'Hero Image', mappedField: 'hero-photo' },
        ]
      },
      {
        id: 't2-page-2',
        title: 'Overview',
        elements: [
          { id: 't2-el-4', type: 'text', label: 'Department Name', mappedField: 'department' },
          { id: 't2-el-5', type: 'text', label: 'Start Date', mappedField: 'start-date' },
        ]
      },
      {
        id: 't2-page-3',
        title: 'Contact',
        elements: [
          { id: 't2-el-6', type: 'table', label: 'Contact Information', mappedField: 'contact-info' },
        ]
      }
    ]
  },
  {
    id: 'template-3',
    title: 'Employee Benefits Guide',
    type: 'Multi-page PDF',
    category: 'benefits',
    isMapped: true,
    thumbnail: '/images/templates/benefits-guide3.png',
    bgColor: '#F6F7F8',
    pages: [
      {
        id: 't3-page-1',
        title: 'Cover',
        elements: [
          { id: 't3-el-1', type: 'text', label: 'ABC Company', mappedField: 'company-name' },
          { id: 't3-el-2', type: 'text', label: 'For xx employees', mappedField: 'employee-count' },
          { id: 't3-el-3', type: 'image', label: 'Hero Image', mappedField: 'hero-photo' },
        ]
      },
      {
        id: 't3-page-2',
        title: 'Overview',
        elements: [
          { id: 't3-el-4', type: 'text', label: 'Department Name', mappedField: 'department' },
          { id: 't3-el-5', type: 'text', label: 'Start Date', mappedField: 'start-date' },
        ]
      },
      {
        id: 't3-page-3',
        title: 'Contact',
        elements: [
          { id: 't3-el-6', type: 'table', label: 'Contact Information', mappedField: 'contact-info' },
        ]
      }
    ]
  },
  {
    id: 'template-4',
    title: 'Employee Benefits Guide',
    type: 'Multi-page PDF',
    category: 'benefits',
    isMapped: true,
    thumbnail: '/images/templates/benefits-guide4.png',
    bgColor: '#F6F7F8',
    pages: [
      {
        id: 't4-page-1',
        title: 'Cover',
        elements: [
          { id: 't4-el-1', type: 'text', label: 'ABC Company', mappedField: 'company-name' },
          { id: 't4-el-2', type: 'text', label: 'For xx employees', mappedField: 'employee-count' },
          { id: 't4-el-3', type: 'image', label: 'Hero Image', mappedField: 'hero-photo' },
        ]
      },
      {
        id: 't4-page-2',
        title: 'Overview',
        elements: [
          { id: 't4-el-4', type: 'text', label: 'Department Name', mappedField: 'department' },
          { id: 't4-el-5', type: 'text', label: 'Start Date', mappedField: 'start-date' },
        ]
      },
      {
        id: 't4-page-3',
        title: 'Contact',
        elements: [
          { id: 't4-el-6', type: 'table', label: 'Contact Information', mappedField: 'contact-info' },
        ]
      }
    ]
  },
  {
    id: 'template-5',
    title: 'Employee Benefits Guide',
    type: 'Multi-page PDF',
    category: 'benefits',
    isMapped: true,
    thumbnail: '/images/templates/benefits-guide5.png',
    bgColor: '#F6F7F8',
    pages: [
      {
        id: 't5-page-1',
        title: 'Cover',
        elements: [
          { id: 't5-el-1', type: 'text', label: 'ABC Company', mappedField: 'company-name' },
          { id: 't5-el-2', type: 'text', label: 'For xx employees', mappedField: 'employee-count' },
          { id: 't5-el-3', type: 'image', label: 'Hero Image', mappedField: 'hero-photo' },
        ]
      },
      {
        id: 't5-page-2',
        title: 'Overview',
        elements: [
          { id: 't5-el-4', type: 'text', label: 'Department Name', mappedField: 'department' },
          { id: 't5-el-5', type: 'text', label: 'Start Date', mappedField: 'start-date' },
        ]
      },
      {
        id: 't5-page-3',
        title: 'Contact',
        elements: [
          { id: 't5-el-6', type: 'table', label: 'Contact Information', mappedField: 'contact-info' },
        ]
      }
    ]
  },
  {
    id: 'template-6',
    title: 'Employee Benefits Guide',
    type: 'Multi-page PDF',
    category: 'benefits',
    isMapped: true,
    thumbnail: '/images/templates/benefits-guide6.png',
    bgColor: '#F6F7F8',
    pages: [
      {
        id: 't6-page-1',
        title: 'Cover',
        elements: [
          { id: 't6-el-1', type: 'text', label: 'ABC Company', mappedField: 'company-name' },
          { id: 't6-el-2', type: 'text', label: 'For xx employees', mappedField: 'employee-count' },
          { id: 't6-el-3', type: 'image', label: 'Hero Image', mappedField: 'hero-photo' },
        ]
      },
      {
        id: 't6-page-2',
        title: 'Overview',
        elements: [
          { id: 't6-el-4', type: 'text', label: 'Department Name', mappedField: 'department' },
          { id: 't6-el-5', type: 'text', label: 'Start Date', mappedField: 'start-date' },
        ]
      },
      {
        id: 't6-page-3',
        title: 'Contact',
        elements: [
          { id: 't6-el-6', type: 'table', label: 'Contact Information', mappedField: 'contact-info' },
        ]
      }
    ]
  },
  {
    id: 'template-7',
    title: 'Onboarding Checklist',
    type: 'Multi-page PDF',
    category: 'onboarding',
    isMapped: false,
    thumbnail: '/images/templates/benefits-guide5.png',
    bgColor: '#F6F7F8',
    pages: [
      {
        id: 't7-page-1',
        title: 'Cover',
        elements: [
          { id: 't7-el-1', type: 'text', label: 'ABC Company', mappedField: null },
          { id: 't7-el-2', type: 'text', label: 'For xx employees', mappedField: null },
          { id: 't7-el-3', type: 'image', label: 'Hero Image', mappedField: null },
        ]
      },
      {
        id: 't7-page-2',
        title: 'Overview',
        elements: [
          { id: 't7-el-4', type: 'text', label: 'Department Name', mappedField: null },
          { id: 't7-el-5', type: 'text', label: 'Start Date', mappedField: null },
        ]
      },
      {
        id: 't7-page-3',
        title: 'Contact',
        elements: [
          { id: 't7-el-6', type: 'table', label: 'Contact Information', mappedField: null },
        ]
      }
    ]
  },
  {
    id: 'template-8',
    title: 'Training Manual',
    type: 'Multi-page PDF',
    category: 'training',
    isMapped: false,
    thumbnail: '/images/templates/benefits-guide6.png',
    bgColor: '#F6F7F8',
    pages: [
      {
        id: 't8-page-1',
        title: 'Cover',
        elements: [
          { id: 't8-el-1', type: 'text', label: 'ABC Company', mappedField: null },
          { id: 't8-el-2', type: 'text', label: 'For xx employees', mappedField: null },
          { id: 't8-el-3', type: 'image', label: 'Hero Image', mappedField: null },
        ]
      },
      {
        id: 't8-page-2',
        title: 'Overview',
        elements: [
          { id: 't8-el-4', type: 'text', label: 'Department Name', mappedField: null },
          { id: 't8-el-5', type: 'text', label: 'Start Date', mappedField: null },
        ]
      },
      {
        id: 't8-page-3',
        title: 'Contact',
        elements: [
          { id: 't8-el-6', type: 'table', label: 'Contact Information', mappedField: null },
        ]
      }
    ]
  }
]

// Helper to get unmapped counts
export function getUnmappedCounts(templateId) {
  const template = TEMPLATES.find(t => t.id === templateId)
  if (!template) return { fields: 0, media: 0, tables: 0 }
  
  const mappedFieldIds = new Set()
  template.pages.forEach(page => {
    page.elements.forEach(el => {
      if (el.mappedField) mappedFieldIds.add(el.mappedField)
    })
  })
  
  return {
    fields: SCHEMA.fields.length - [...mappedFieldIds].filter(id => 
      SCHEMA.fields.some(f => f.id === id)
    ).length,
    media: SCHEMA.media.length - [...mappedFieldIds].filter(id => 
      SCHEMA.media.some(m => m.id === id)
    ).length,
    tables: SCHEMA.tables.length - [...mappedFieldIds].filter(id => 
      SCHEMA.tables.some(t => t.id === id)
    ).length,
  }
}

